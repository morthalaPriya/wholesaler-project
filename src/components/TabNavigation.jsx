import React from 'react';

const TABS = ['Info', 'License', 'Security', 'Warehouses', 'Ratings'];

export default function TabNavigation({ activeTab = 'Info', setActiveTab }) {
  return (
    <div className="flex items-center gap-1 p-1 bg-gray-100/80 rounded-2xl w-fit">
      {TABS.map((tab) => {
        const isActive = activeTab === tab;

        return (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab?.(tab)}
            className={`w-[133px] h-[29px] text-xs font-medium rounded-[14px] border border-solid transition-colors duration-150 flex items-center justify-center cursor-pointer select-none ${
              isActive
                ? 'bg-white border-gray-300 text-gray-900 shadow-xs font-semibold'
                : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-white/40'
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}