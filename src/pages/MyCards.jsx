import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CardContext } from '../providers/CardContext';

function MyCards() {
  const { cards } = useContext(CardContext);
  // Only show user-added cards (isUserCard: true)
  const userCards = cards.filter(card => card.isUserCard);

  return (
    <div className="pt-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10 mt-10">
          <h1 className="text-3xl font-bold text-[#373743]">My Cards</h1>
         <Link to = "/add-card">
          <button className="px-6 py-2 bg-[#907CE2] text-white rounded-full hover:bg-[#7B68EE] transition-colors">
            <i className="fas fa-plus mr-2"></i>
            Add New Card
          </button>
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userCards.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">No cards added yet.</div>
          ) : userCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#373743]">{card.name}</h3>
                  <p className="text-gray-600">{card.type}</p>
                  <p className="text-gray-500 text-sm mt-1">{card.bank}</p>
                  {card.offer && <p className="text-[#907CE2] text-sm mt-1">Offer: {card.offer}</p>}
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  card.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {card.status}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shared With</span>
                  <span className="font-medium">{card.sharedWith} people</span>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="flex-1 px-4 py-2 border border-[#907CE2] text-[#907CE2] rounded-lg hover:bg-[#907CE2]/10 transition-colors">
                  <i className="fas fa-users mr-2"></i>
                  Manage Users
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyCards;