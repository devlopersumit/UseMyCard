import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export default function InviteView() {
  const { invite_code } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [card, setCard] = useState(null);

  useEffect(() => {
    async function fetchCard() {
      setLoading(true);
      setError('');
      setCard(null);
      // 1. Fetch invite link
      const { data: invite, error: inviteError } = await supabase
        .from('invite_links')
        .select('*')
        .eq('invite_code', invite_code)
        .single();
      if (inviteError || !invite) {
        setError('Invalid or expired invite link.');
        setLoading(false);
        return;
      }
      // 2. Fetch card details
      const { data: cardData, error: cardError } = await supabase
        .from('Card-Details')
        .select('*')
        .eq('id', invite.card_id)
        .single();
      if (cardError || !cardData) {
        setError('Card not found.');
        setLoading(false);
        return;
      }
      setCard({
        name: cardData.Card_Name,
        bank: cardData.Bank_Name,
        type: cardData.Card_Type,
        offer: cardData.Offer,
      });
      setLoading(false);
    }
    fetchCard();
  }, [invite_code]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F0FF] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 mt-16">
        <h2 className="text-2xl font-bold text-[#907CE2] mb-6 text-center">Shared Card Details</h2>
        {loading ? (
          <div className="text-center text-[#907CE2] font-semibold">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500 font-semibold">{error}</div>
        ) : card ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold text-[#907CE2]">{card.name}</span>
              <span className="text-xs bg-[#F0F0FF] text-[#373743] px-2 py-1 rounded">{card.type}</span>
            </div>
            <div className="text-gray-700 mb-1">Bank: <span className="font-medium">{card.bank}</span></div>
            {card.offer && (
              <div className="text-green-600 font-medium mb-2">Offer: {card.offer}</div>
            )}
            <div className="mt-6 text-center text-gray-400 text-xs">This card was shared with you via UseMyCard.</div>
          </div>
        ) : null}
      </div>
    </div>
  );
} 