import React, { useContext, useState } from 'react';
import { CardContext } from '../providers/CardContext';
import { supabase } from '../supabaseClient';

function generateInviteCode() {
  // Simple random string generator
  return Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
}

function MyCards() {
  const { cards, editCard, deleteCard } = useContext(CardContext);
  const [editIdx, setEditIdx] = useState(null);
  const [editData, setEditData] = useState({ name: '', bank: '', offer: '', type: 'Credit Card' });
  const [showModal, setShowModal] = useState(false);
  const [inviteLinks, setInviteLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const startEdit = (card) => {
    setEditIdx(card.id);
    setEditData({
      name: card.name,
      bank: card.bank,
      offer: card.offer || '',
      type: card.type || 'Credit Card',
    });
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const saveEdit = async (id) => {
    await editCard(id, editData);
    setEditIdx(null);
  };

  const cancelEdit = () => setEditIdx(null);

  const handleInviteAll = async () => {
    setShowModal(true);
    setLoading(true);
    setError('');
    setInviteLinks([]);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setError('You must be logged in.');
        setLoading(false);
        return;
      }
      const userId = user.id;
      const links = [];
      for (const card of cards) {
        const invite_code = generateInviteCode();
        const { data, error } = await supabase
          .from('invite_links')
          .insert([
            {
              card_id: card.id,
              created_by: userId,
              invite_code,
            },
          ])
          .select();
        if (error) {
          setError('Error creating invite link: ' + error.message);
          setLoading(false);
          return;
        }
        // Always use the production domain for invite links
        const link = `https://usemycard.vercel.app/invite/${invite_code}`;
        links.push({ cardName: card.name, link });
      }
      setInviteLinks(links);
    } catch (err) {
      setError('Unexpected error: ' + err.message);
    }
    setLoading(false);
  };

  const handleCopy = (link, idx) => {
    navigator.clipboard.writeText(link);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div className="pt-24 min-h-screen bg-[#F0F0FF] px-4">
      <h2 className="text-3xl font-bold text-[#373743] mb-8 text-center">My Cards</h2>
      <div className="flex justify-center mb-6">
        <button
          className="px-6 py-2 bg-[#907CE2] text-white rounded-full font-semibold shadow hover:bg-[#7B68EE] transition-all"
          onClick={handleInviteAll}
        >
          Invite a Friend
        </button>
      </div>
      {cards.length === 0 ? (
        <div className="text-center text-gray-500">No cards added yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map(card => (
            <div
              key={card.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start transition-transform hover:scale-105"
            >
              {editIdx === card.id ? (
                <>
                  <input
                    className="w-full mb-2 px-3 py-2 border rounded"
                    name="name"
                    value={editData.name}
                    onChange={handleEditChange}
                  />
                  <input
                    className="w-full mb-2 px-3 py-2 border rounded"
                    name="bank"
                    value={editData.bank}
                    onChange={handleEditChange}
                  />
                  <input
                    className="w-full mb-2 px-3 py-2 border rounded"
                    name="offer"
                    value={editData.offer}
                    onChange={handleEditChange}
                  />
                  <select
                    className="w-full mb-2 px-3 py-2 border rounded"
                    name="type"
                    value={editData.type}
                    onChange={handleEditChange}
                  >
                    <option value="Credit Card">Credit Card</option>
                    <option value="Debit Card">Debit Card</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="flex gap-2 mt-2">
                    <button className="px-4 py-1 bg-[#907CE2] text-white rounded" onClick={() => saveEdit(card.id)}>Save</button>
                    <button className="px-4 py-1 bg-gray-300 rounded" onClick={cancelEdit}>Cancel</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold text-[#907CE2]">{card.name}</span>
                    <span className="text-xs bg-[#F0F0FF] text-[#373743] px-2 py-1 rounded">{card.type}</span>
                  </div>
                  <div className="text-gray-700 mb-1">Bank: <span className="font-medium">{card.bank}</span></div>
                  {card.offer && (
                    <div className="text-green-600 font-medium mb-2">Offer: {card.offer}</div>
                  )}
                  <div className="flex gap-2 mt-4">
                    <button className="px-4 py-1 bg-yellow-400 text-white rounded" onClick={() => startEdit(card)}>Edit</button>
                    <button className="px-4 py-1 bg-red-500 text-white rounded" onClick={() => { if(window.confirm('Delete this card?')) deleteCard(card.id); }}>Delete</button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
      {/* Modal for Invite Links */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full relative">
            <button
              className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-700 font-bold"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center text-[#373743]">Invite Links</h3>
            {loading ? (
              <div className="text-center py-8 text-[#907CE2] font-semibold">Generating links...</div>
            ) : error ? (
              <div className="text-center text-red-500">{error}</div>
            ) : inviteLinks.length === 0 ? (
              <div className="text-center text-gray-500">No links generated.</div>
            ) : (
              <ul className="space-y-4">
                {inviteLinks.map((item, idx) => (
                  <li key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 border-b pb-2">
                    <span className="font-medium text-[#907CE2]">{item.cardName}:</span>
                    <span className="break-all text-sm flex-1">{item.link}</span>
                    <button
                      className="px-3 py-1 bg-[#907CE2] text-white rounded text-xs font-semibold hover:bg-[#7B68EE] transition-all"
                      onClick={() => handleCopy(item.link, idx)}
                    >
                      {copiedIndex === idx ? 'Copied!' : 'Copy'}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MyCards;