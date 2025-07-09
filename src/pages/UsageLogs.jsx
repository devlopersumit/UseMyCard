import React, { useContext } from 'react';
import { CardContext } from '../providers/CardContext';

function UsageLogs() {
  const { cards } = useContext(CardContext);

  return (
    <div className="pt-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#373743] mb-8">Usage Logs</h1>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Card Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bank</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Offer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cards.length === 0 ? (
                  <tr><td colSpan={4} className="text-center py-6 text-gray-500">No card usage logs found.</td></tr>
                ) : (
                  cards.map(card => (
                    <tr key={card.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">{card.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{card.bank}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{card.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{card.offer || '-'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsageLogs;