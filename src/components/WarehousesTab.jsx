import React, { useState } from 'react';
import editIcon from '../assets/Icon (2).png';
import pinIcon from '../assets/Icon (2).png';
import plusIcon from '../assets/Primitive.span.png';

const initialWarehouses = [
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

function WarehouseCard({ name, address, capacity, manager, onEdit }) {
  return (
    <div className="border border-gray-100 rounded-2xl p-5 space-y-4 bg-white">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">{name}</h3>
          <p className="text-xs text-gray-400 mt-0.5">{address}</p>
        </div>

        <button
          type="button"
          onClick={onEdit}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <img src={editIcon} alt="Edit" className="w-3.5 h-3.5 object-contain" />
          <span>Edit</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 text-xs">
        <div>
          <span className="text-gray-400 block mb-0.5">Capacity</span>
          <span className="font-semibold text-gray-900">{capacity}</span>
        </div>
        <div>
          <span className="text-gray-400 block mb-0.5">Manager</span>
          <span className="font-semibold text-gray-900">{manager}</span>
        </div>
      </div>
      <div className="h-[192px] w-full bg-[#ECEEF2]/50 rounded-[10px] flex flex-col items-center justify-center gap-1.5 text-gray-400 cursor-pointer hover:bg-[#ECEEF2]/70 transition-colors">
        <img src={pinIcon} alt="Location" className="w-5 h-5 object-contain" />
        <span className="text-xs font-medium text-gray-500">Map View</span>
      </div>
    </div>
  );
}

export default function WarehousesTab() {
  const [warehouses, setWarehouses] = useState(initialWarehouses);

  const handleAddWarehouse = () => {
    alert('Opening Add Warehouse Modal...');
  };

  const handleEditWarehouse = (name) => {
    alert(`Editing ${name}...`);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xs space-y-6 w-full text-left font-sans">
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
          onClick={handleAddWarehouse}
          className="h-9 px-4 bg-black text-white text-xs font-medium rounded-xl hover:bg-gray-800 transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
        >
          <span>Add Warehouse</span>
        </button>
      </div>

      <div className="space-y-4">
        {warehouses.map((warehouse) => (
          <WarehouseCard
            key={warehouse.id}
            name={warehouse.name}
            address={warehouse.address}
            capacity={warehouse.capacity}
            manager={warehouse.manager}
            onEdit={() => handleEditWarehouse(warehouse.name)}
          />
        ))}
      </div>
    </div>
  );
}