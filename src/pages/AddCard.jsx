import React, { useState, useContext } from 'react';
import { CardContext } from '../providers/CardContext';

function AddCard() {
  const [cardName, setCardName] = useState('');
  const [bankName, setBankName] = useState('');
  const [offer, setOffer] = useState('');
  const [success, setSuccess] = useState(false);
  const [type, setType] = useState('Credit Card');
  const { addCard } = useContext(CardContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting card:", { cardName, bankName, offer, type });
    const result = await addCard({
      name: cardName,
      bank: bankName,
      offer: offer,
      type: type
    });
    console.log("addCard result:", result);
    if (result !== false) {
      setSuccess(true);
      setCardName('');
      setBankName('');
      setOffer('');
      setType('Credit Card');
      setTimeout(() => setSuccess(false), 2000);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-[#F0F0FF] flex items-center justify-center px-2">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-[#373743] mb-6 text-center">Add New Card</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Card Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#907CE2]"
              placeholder="Enter card name"
              value={cardName}
              onChange={e => setCardName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Bank Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#907CE2]"
              placeholder="Enter bank name"
              value={bankName}
              onChange={e => setBankName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Offer <span className="text-gray-400 text-sm">(optional)</span></label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#907CE2]"
              placeholder="Enter offer details (if any)"
              value={offer}
              onChange={e => setOffer(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Card Type</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#907CE2]"
              value={type}
              onChange={e => setType(e.target.value)}
              required
            >
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-full font-semibold text-white bg-[#907CE2] hover:bg-[#7B68EE] transition-all duration-300 shadow-lg mt-2"
          >
            Add Card
          </button>
          {success && (
            <div className="transition-all duration-500 opacity-100 text-green-600 text-center font-medium mt-4 animate-fade-in">
              Card added successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default AddCard;