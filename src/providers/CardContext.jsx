import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export const CardContext = createContext();

export function CardContextProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [shouldRefetch, setShouldRefetch] = useState(false);

  async function getCurrentUserId() {
    const { data: { user } } = await supabase.auth.getUser();
    return user ? user.id : null;
  }

  async function refetchCards() {
    const userId = await getCurrentUserId();
    if (!userId) {
      setCards([]);
      return;
    }
    const { data, error } = await supabase
      .from('Card-Details')
      .select('*')
      .eq('user_id', userId)
      .order('id', { ascending: false });
    if (!error) setCards(data || []);
    else console.error('Supabase fetch error:', error);
  }

  useEffect(() => {
    refetchCards();
    const { subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setShouldRefetch(true);
    });
    return () => {
      if (subscription) subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (shouldRefetch) {
      refetchCards();
      setShouldRefetch(false);
    }
  }, [shouldRefetch]);

  const addCard = async (card) => {
    const { data: { user } } = await supabase.auth.getUser();
    console.log("Current user:", user);
    if (!user) {
      alert('You must be logged in to add a card.');
      return false;
    }
    const userId = user.id;
    const { data, error } = await supabase
      .from('Card-Details')
      .insert([
        {
          Card_Name: card.name,
          Bank_Name: card.bank,
          Card_Type: card.type,
          Offer: card.offer,
          user_id: userId
        }
      ]);
    console.log('Supabase insert result:', { data, error });
    if (error) {
      alert('Supabase add error: ' + error.message); // <-- This will show the error in a popup
      console.error('Supabase add error:', error);
      return false;
    }
    await refetchCards();
    return true;
  };

  const deleteCard = async (id) => {
    const { error } = await supabase
      .from('Card-Details')
      .delete()
      .eq('id', id);
    if (!error) await refetchCards();
    else console.error('Supabase delete error:', error);
  };

  const editCard = async (id, updatedCard) => {
    const { error } = await supabase
      .from('Card-Details')
      .update({
        Card_Name: updatedCard.name,
        Bank_Name: updatedCard.bank,
        Card_Type: updatedCard.type,
        Offer: updatedCard.offer
      })
      .eq('id', id)
      .select();
    if (!error) await refetchCards();
    else console.error('Supabase edit error:', error);
  };

  // Map Supabase fields to frontend fields for display
  const mappedCards = cards.map(card => ({
    ...card,
    name: card.Card_Name,
    bank: card.Bank_Name,
    type: card.Card_Type,
    offer: card.Offer
  }));

  return (
    <CardContext.Provider value={{ cards: mappedCards, addCard, deleteCard, editCard }}>
      {children}
    </CardContext.Provider>
  );
} 