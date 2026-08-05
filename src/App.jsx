import { useState } from "react";
import LoginFlow from "./Components/LoginFlow";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarThird from "./Components/SidebarThird";
import ShippingLogistics from "./components/ShippingLogistics";
import ShippingProviders from "./Components/ShippingProviders";
import Messages from "./Components-1/Messages";
import MessagesTemplates from "./Components-1/MessagesTemplates";
import MessagesNotifications from "./Components-1/MessagesNotifications";
import AdminApprovals from "./Components-2/AdminApprovals";
import AdminAnalytics from "./Components-2/AdminAnalytics";
import AdminAuditLogs from "./Components-2/AdminAuditLogs";

function Dashboard() {
    return <h1>Dashboard</h1>;
}

function Orders() {
    return <h1>Orders</h1>;
}
function Products() {
    return <h1>Products</h1>
}

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    if (!isLoggedIn) {
        return (
            <LoginFlow
                onLogin={() => setIsLoggedIn(true)}
            />
        );
    }
    return (
        <BrowserRouter>
            <div className="flex">
                <SidebarThird />

                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/orders" element={<Orders />} />


                        <Route path="/shipping" element={<ShippingLogistics />} />
                        <Route path="/shipping/providers" element={<ShippingProviders />} />


                        <Route path="/messages" element={<Messages />} />
                        <Route path="messages/templates" element={<MessagesTemplates />} />
                        <Route path="/messages/notifications" element={<MessagesNotifications />} />


                        <Route path="/admin" element={<AdminApprovals />} />
                        <Route path="/admin/analytics" element={<AdminAnalytics />} />
                        <Route path="/admin/audit-logs" element={<AdminAuditLogs />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

