import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ProfileHeader from './components/ProfileHeader';
import TabNavigation from './components/TabNavigation';
import CompanyForm from './components/CompanyForm';
import LicenseTab from './components/LicenseTab';
import SecurityTab from './components/SecurityTab';
import WarehousesTab from './components/WarehousesTab';
import RatingsTab from './components/RatingsTab';


export default function App() {
  const [activeNav, setActiveNav] = useState('Admin');
  const [activeTab, setActiveTab] = useState('Info');

  return (
    <div className="flex bg-gray-50/30 min-h-screen">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      <main className="flex-1 p-8 max-w-5xl mx-auto space-y-6 text-left">
        {activeNav === 'Dynamic Pricing' ? (
          <DynamicPricing />
        ) : (
          <>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
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
      </main>
    </div>
  );
}