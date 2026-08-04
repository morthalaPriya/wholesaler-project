import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ProfileHeader from './components/ProfileHeader';
import TabNavigation from './components/TabNavigation';
import CompanyForm from './components/CompanyForm';
import LicenseTab from './components/LicenseTab';
import SecurityTab from './components/SecurityTab';
import WarehousesTab from './components/WarehousesTab';
import RatingsTab from './components/RatingsTab';
import DynamicPricing from './components/DynamicPricing';

export default function App() {
  const [activeNav, setActiveNav] = useState('Admin');
  const [activeTab, setActiveTab] = useState('Info');

  return (
    <div className="flex bg-gray-50/30 min-h-screen">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      <main className="flex-1 p-8 max-w-5xl mx-auto space-y-6 text-left">
        {activeNav === 'Admin' && (
          <>
            <div>
              <h1 className="text-xl font-bold text-gray-900 font-heading">
                Profile Management
              </h1>
              <p className="text-xs text-gray-400 mt-1">
                Manage your company profile, licenses, and warehouses
              </p>
            </div>

            <ProfileHeader />
            <TabNavigation
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <div className="pt-2">
              {activeTab === 'Info' && <CompanyForm />}
              {activeTab === 'License' && <LicenseTab />}
              {activeTab === 'Security' && <SecurityTab />}
              {activeTab === 'Warehouses' && <WarehousesTab />}
              {activeTab === 'Ratings' && <RatingsTab />}
            </div>
          </>
        )}
        {activeNav === 'Dynamic Pricing' && <DynamicPricing />}
        {activeNav === 'Messages' && (
          <div>
            <h1 className="text-xl font-bold text-gray-900 font-heading">Messages</h1>
            <p className="text-xs text-gray-400 mt-1">Your inbox and chat history</p>
          </div>
        )}
        {activeNav === 'Dashboard' && (
          <div>
            <h1 className="text-xl font-bold text-gray-900 font-heading">Dashboard</h1>
            <p className="text-xs text-gray-400 mt-1">Overview and key analytics</p>
          </div>
        )}
        {activeNav === 'Products' && (
          <div>
            <h1 className="text-xl font-bold text-gray-900 font-heading">Products</h1>
            <p className="text-xs text-gray-400 mt-1">Manage product catalog</p>
          </div>
        )}
        {activeNav === 'Orders' && (
          <div>
            <h1 className="text-xl font-bold text-gray-900 font-heading">Orders</h1>
            <p className="text-xs text-gray-400 mt-1">Track and fulfill customer orders</p>
          </div>
        )}
        {activeNav === 'Shipping' && (
          <div>
            <h1 className="text-xl font-bold text-gray-900 font-heading">Shipping</h1>
            <p className="text-xs text-gray-400 mt-1">Logistics and shipment tracking</p>
          </div>
        )}
      </main>
    </div>
  );
}