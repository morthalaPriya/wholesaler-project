import { useState } from "react";
import LoginFlow from "./Components/LoginFlow";
import Registration from "./Registration/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarThird from "./Components/SidebarThird";
import Dashboard from "./Components/Dashboard";
import ProductCatalog from "./Components/ProductCatalog";
import Orders from "./Components/Orders";
import ShippingLogistics from "./components/ShippingLogistics";
import ShippingProviders from "./Components/ShippingProviders";
import Messages from "./Components-1/Messages";
import MessagesTemplates from "./Components-1/MessagesTemplates";
import MessagesNotifications from "./Components-1/MessagesNotifications";
import AdminApprovals from "./Components-2/AdminApprovals";
import AdminAnalytics from "./Components-2/AdminAnalytics";
import AdminAuditLogs from "./Components-2/AdminAuditLogs";
import ProfileManagement from "./Components-3/ProfileManagement";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        sessionStorage.getItem("isLoggedIn") === "true"
    );
    const [showRegistration, setShowRegistration] = useState(false);
    return (
        <BrowserRouter>
            {showRegistration ? (
                <Registration
                    onComplete={() => {
                        setShowRegistration(false);
                        setIsLoggedIn(true);
                        sessionStorage.setItem("isLoggedIn", "true");
                    }}
                />
            ) : !isLoggedIn ? (
                <LoginFlow
                    onLogin={() => {
                        setIsLoggedIn(true);
                        sessionStorage.setItem("isLoggedIn", "true");
                    }}
                    onRegister={() => {
                        setShowRegistration(true);
                    }}
                />
            ) : (
                <Routes>
                    <Route path="/profile" element={<ProfileManagement />} />
                    <Route
                        path="*"
                        element={
                            <div className="flex">
                                <SidebarThird />
                                <div className="flex-1">
                                    <Routes>
                                        <Route path="/" element={<Dashboard />} />
                                        <Route path="/products" element={<ProductCatalog />} />
                                        <Route path="/orders" element={<Orders />} />
                                        <Route path="/shipping" element={<ShippingLogistics />} />
                                        <Route path="/shipping/providers" element={<ShippingProviders />} />
                                        <Route path="/messages" element={<Messages />} />
                                        <Route path="/messages/templates" element={<MessagesTemplates />} />
                                        <Route path="/messages/notifications" element={<MessagesNotifications />} />
                                        <Route path="/admin" element={<AdminApprovals />} />
                                        <Route path="/admin/analytics" element={<AdminAnalytics />} />
                                        <Route path="/admin/audit-logs" element={<AdminAuditLogs />} />
                                    </Routes>
                                </div>
                            </div>
                        }
                    />
                </Routes>
            )}
        </BrowserRouter>
    );
}


export default App;