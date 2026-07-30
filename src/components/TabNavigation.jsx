import React from 'react';

export default function TabNavigation({ activeTab, setActiveTab }) {
  const tabs = ['Info', 'License', 'Warehouses', 'Ratings'];

  return (
    <div className="w-full bg-[#EAEAEA] p-[3px] rounded-[14px] flex items-center">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 h-[29px] flex items-center justify-center text-xs font-medium rounded-[12px] transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-white text-gray-900 shadow-xs border border-black/5'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}