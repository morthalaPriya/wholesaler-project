import React from 'react';

export default function WarehousesTab() {
  const warehouses = [
    {
      id: 1,
      name: 'Main Warehouse',
      address: '123 Industrial Ave, New York, NY 10001',
      capacity: '50,000 sq ft',
      manager: 'John Smith',
    },
    {
      id: 2,
      name: 'West Coast Facility',
      address: '456 Commerce Blvd, Los Angeles, CA 90001',
      capacity: '35,000 sq ft',
      manager: 'Sarah Johnson',
    },
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Warehouse Locations
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Manage your warehouse facilities
          </p>
        </div>

        <button
          type="button"
          className="h-[36px] px-4 bg-black text-white text-xs font-medium rounded-xl hover:bg-gray-800 transition-colors flex items-center gap-1.5 shadow-sm"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          <span>Add Warehouse</span>
        </button>
      </div>
      <div className="space-y-4">
        {warehouses.map((warehouse) => (
          <div
            key={warehouse.id}
            className="border border-gray-100 rounded-2xl p-5 space-y-4 bg-white"
          >

            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {warehouse.name}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  {warehouse.address}
                </p>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z" />
                </svg>
                <span>Edit</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-gray-400 block mb-0.5">Capacity</span>
                <span className="font-semibold text-gray-900">
                  {warehouse.capacity}
                </span>
              </div>
              <div>
                <span className="text-gray-400 block mb-0.5">Manager</span>
                <span className="font-semibold text-gray-900">
                  {warehouse.manager}
                </span>
              </div>
            </div>
            <div className="h-32 bg-[#F3F3F5]/60 rounded-xl flex flex-col items-center justify-center gap-1.5 text-gray-400 hover:bg-[#F3F3F5] transition-colors cursor-pointer border border-dashed border-gray-200/60">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-xs font-medium text-gray-500">
                Map View
              </span>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}