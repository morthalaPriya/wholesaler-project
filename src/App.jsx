import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ShippingLogistics from "./components/ShippingLogistics";
import ShippingProviders from "./Components-2/ShippingProviders";
import Messages from "./Components-3/Messages";
import MessagesTemplates from "./Components-3/MessagesTemplates";
import MessagesNotifications from "./Components-3/MessagesNotifications";
import AdminApprovals from "./Components-4/AdminApprovals";

function Dashboard() {
  return <h1>Dashboard</h1>;
}

function Orders() {
  return <h1>Orders</h1>;
}
function Products(){
  return <h1>Products</h1>
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar/>

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/products" element={<Products/>} />
            <Route path="/orders" element={<Orders/>} />


            <Route path="/shipping" element={<ShippingLogistics/>} />
            <Route path="/shipping/providers" element={<ShippingProviders/>} />


            <Route path="/messages" element={<Messages/>}/>
            <Route path="messages/templates" element={<MessagesTemplates/>}/>
            <Route path="/messages/notifications" element={<MessagesNotifications/>}/>


            <Route path="/admin" element={<AdminApprovals/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;