import React, { createContext, useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

export const CardContext = createContext();

const supabase = createClient(
  "https://fbeychgiyiovoierqviw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZiZXljaGdpeWlvdm9pZXJxdml3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMDU2NjIsImV4cCI6MjA2Mjc4MTY2Mn0.uPO5HSen1cx8bAjSxaxjv_7cjI7l_SP_OJLHc7-UmvI"
);

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
    const userId = await getCurrentUserId();
    if (!userId) {
      alert('User not authenticated');
      return false;
    }
    console.log('addCard called with:', card);
    const { data, error } = await supabase
      .from('Card-Details')
      .insert([
        {
          Card_Name: card.name,
          Bank_Name: card.bank,
          Card_Type: card.type,
          Offer: card.offer,
          user_id: userId // Store the current user's ID
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