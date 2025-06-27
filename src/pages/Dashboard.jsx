import React from 'react';

function Dashboard() {
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
                <h3 className="text-2xl font-bold text-[#373743]">3</h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#907CE2]/10 rounded-lg">
                <i className="fas fa-users text-[#907CE2] text-xl"></i>
              </div>
              <div>
                <p className="text-gray-600">Shared With</p>
                <h3 className="text-2xl font-bold text-[#373743]">5</h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#907CE2]/10 rounded-lg">
                <i className="fas fa-clock text-[#907CE2] text-xl"></i>
              </div>
              <div>
                <p className="text-gray-600">Active Sessions</p>
                <h3 className="text-2xl font-bold text-[#373743]">2</h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#907CE2]/10 rounded-lg">
                <i className="fas fa-bell text-[#907CE2] text-xl"></i>
              </div>
              <div>
                <p className="text-gray-600">Notifications</p>
                <h3 className="text-2xl font-bold text-[#373743]">3</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-[#373743] mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-[#907CE2]/10 rounded-lg">
                  <i className="fas fa-user-plus text-[#907CE2]"></i>
                </div>
                <div>
                  <p className="font-medium text-[#373743]">New user added to card</p>
                  <p className="text-sm text-gray-600">Sumit Jha was added to your HDFC Card</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-[#907CE2]/10 rounded-lg">
                  <i className="fas fa-credit-card text-[#907CE2]"></i>
                </div>
                <div>
                  <p className="font-medium text-[#373743]">New card added</p>
                  <p className="text-sm text-gray-600">ICICI Bank Credit Card was added</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">1 day ago</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-[#907CE2]/10 rounded-lg">
                  <i className="fas fa-user-minus text-[#907CE2]"></i>
                </div>
                <div>
                  <p className="font-medium text-[#373743]">User removed from card</p>
                  <p className="text-sm text-gray-600">Sumit Jha was removed from your SBI Card</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">2 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;