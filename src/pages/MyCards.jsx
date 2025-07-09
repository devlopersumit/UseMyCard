import React, { useContext, useState } from 'react';
import { CardContext } from '../providers/CardContext';

function MyCards() {
  const { cards, editCard, deleteCard } = useContext(CardContext);
  const [editIdx, setEditIdx] = useState(null);
  const [editData, setEditData] = useState({ name: '', bank: '', offer: '', type: 'Credit Card' });

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

  return (
    <div className="pt-24 min-h-screen bg-[#F0F0FF] px-4">
      <h2 className="text-3xl font-bold text-[#373743] mb-8 text-center">My Cards</h2>
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
    </div>
  );
}

export default MyCards;