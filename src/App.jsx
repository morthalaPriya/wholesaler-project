import React, { useState } from 'react';
import TabNavigation from './components/TabNavigation';
import LicenseTab from './components/LicenseTab';
import WarehousesTab from './components/WarehousesTab';
import RatingTab from './components/RatingsTab';
import Sidebar from './components/Sidebar';
import CompanyForm from './components/CompanyForm';
import ProfileHeader from './components/ProfileHeader';

export default function App() {
  const [activeTab, setActiveTab] = useState('Info');

  return (
    <div className="flex min-h-screen bg-[#FFFFFF] font-sans antialiased text-gray-800">
      <Sidebar />
      <main className="flex-1 p-8 max-w-5xl space-y-6 overflow-y-auto">
        <div>
          <h1 className="text-xl font-Regular text-gray-900 tracking-tight">
            Profile Management
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Manage your company profile, licenses, and warehouses
          </p>
        </div>
        <ProfileHeader />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'Info' && <CompanyForm />}
        {activeTab === 'License' && <LicenseTab />}
        {activeTab === 'Warehouses' && <WarehousesTab />}
        {(activeTab === 'Ratings' || activeTab === 'Rating') && <RatingTab />}
      </main>
    </div>
  );
}