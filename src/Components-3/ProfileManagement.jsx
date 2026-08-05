import React, { useState } from "react";

import Sidebar from "./Sidebar";
import ProfileHeader from "./ProfileHeader";
import TabNavigation from "./TabNavigation";
import CompanyForm from "./CompanyForm";
import LicenseTab from "./LicenseTab";
import SecurityTab from "./SecurityTab";
import WarehousesTab from "./WarehousesTab";
import RatingsTab from "./RatingsTab";
import DynamicPricing from "./DynamicPricing";


function ProfileManagement() {
    const [activeNav, setActiveNav] = useState("Admin");
    const [activeTab, setActiveTab] = useState("Info");
    return (
        <div className="flex bg-gray-50/30 min-h-screen">
            <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
            <main className="flex-1 p-8">
                {activeNav === "Admin" && (
                    <>
                        <h1 className="text-xl font-bold"> Profile Management </h1>
                        <ProfileHeader />
                        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
                        {activeTab === "Info" && <CompanyForm />}
                        {activeTab === "License" && <LicenseTab />}
                        {activeTab === "Security" && <SecurityTab />}
                        {activeTab === "Warehouses" && <WarehousesTab />}
                        {activeTab === "Ratings" && <RatingsTab />}
                    </>
                )}
                {activeNav === "Dynamic Pricing" && (
                    <DynamicPricing />
                )}
            </main>
        </div>
    );
}
export default ProfileManagement;