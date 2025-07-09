import React, { useContext } from 'react';
import { CardContext } from '../providers/CardContext';

function Dashboard() {
  const { cards } = useContext(CardContext);
  const recentCards = cards.slice(0, 3);

  return (
    <div className="pt-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#373743] mb-8 text-center mt-10">Welcome Buddy👋</h1>
        <h1 className="text-3xl font-bold text-[#373743] mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#907CE2]/10 rounded-lg">
                <i className="fas fa-credit-card text-[#907CE2] text-xl"></i>
              </div>
              <div>
                <p className="text-gray-600">Total Cards</p>
                <h3 className="text-2xl font-bold text-[#373743]">{cards.length}</h3>
              </div>
            </div>
          </div>
          {/* You can add more dynamic stats here if you want */}
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-[#373743] mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentCards.length === 0 ? (
              <div className="text-gray-500">No recent activity.</div>
            ) : (
              recentCards.map(card => (
                <div key={card.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-[#907CE2]/10 rounded-lg">
                      <i className="fas fa-credit-card text-[#907CE2]"></i>
                    </div>
                    <div>
                      <p className="font-medium text-[#373743]">New card added</p>
                      <p className="text-sm text-gray-600">{card.name} ({card.bank})</p>
                    </div>
                  </div>
                  {/* You can add a timestamp if you store one */}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;