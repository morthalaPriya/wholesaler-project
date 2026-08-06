import React, { useState } from 'react';
import {
  Search,
  Eye,
  Download,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Truck,
  MessageSquare,
  ShieldCheck,
  ChevronDown,
  AlertTriangle
} from 'lucide-react';

const Orders = ({ activeView, setActiveView }) => {
  const [activeTab, setActiveTab] = useState('orders');
  const [searchTerm, setSearchTerm] = useState('');
  const [currency, setCurrency] = useState('INR ₹');


  const [orders] = useState([
    {
      id: 'ORD-2025-001',
      customer: 'ABC Retail Store',
      date: '2025-10-10',
      items: 3,
      amount: '₹183750.00',
      status: 'delivered',
    },
    {
      id: 'ORD-2025-002',
      customer: 'XYZ Market',
      date: '2025-10-09',
      items: 2,
      amount: '₹138750.00',
      status: 'shipped',
    },
    {
      id: 'ORD-2025-003',
      customer: 'Quick Shop',
      date: '2025-10-09',
      items: 5,
      amount: '₹240000.00',
      status: 'processing',
    },
    {
      id: 'ORD-2025-004',
      customer: 'Global Traders',
      date: '2025-10-08',
      items: 4,
      amount: '₹307500.00',
      status: 'pending',
    },
  ]);


  const lowStockItems = [
    {
      id: 1,
      title: 'Premium Wireless Headphones',
      sku: 'WH-001',
      currentStock: 150,
      reorderLevel: 200,
    },
    {
      id: 2,
      title: 'Organic Coffee Beans (5kg)',
      sku: 'CF-005',
      currentStock: 45,
      reorderLevel: 100,
    },
    {
      id: 3,
      title: 'LED Desk Lamp',
      sku: 'DL-001',
      currentStock: 15,
      reorderLevel: 50,
    },
  ];


  const inventoryOverviewData = [
    {
      id: 1,
      product: 'Premium Wireless Headphones',
      sku: 'WH-001',
      category: 'Electronics',
      stock: 150,
      reorderPoint: 200,
      status: 'Low Stock',
      lastRestocked: '2025-10-01',
    },
    {
      id: 2,
      product: 'Cotton T-Shirt (Pack of 10)',
      sku: 'TS-010',
      category: 'Clothing',
      stock: 2000,
      reorderPoint: 500,
      status: 'In Stock',
      lastRestocked: '2025-09-28',
    },
    {
      id: 3,
      product: 'Organic Coffee Beans (5kg)',
      sku: 'CF-005',
      category: 'Food',
      stock: 45,
      reorderPoint: 100,
      status: 'Low Stock',
      lastRestocked: '2025-10-05',
    },
    {
      id: 4,
      product: 'LED Desk Lamp',
      sku: 'DL-001',
      category: 'Electronics',
      stock: 15,
      reorderPoint: 50,
      status: 'Low Stock',
      lastRestocked: '2025-09-25',
    },
  ];


  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const getStatusBadge = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-emerald-100 text-emerald-600';
      case 'shipped':
        return 'bg-blue-100 text-blue-600';
      case 'processing':
        return 'bg-amber-100 text-amber-600';
      case 'pending':
        return 'bg-orange-100 text-orange-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <main className="flex-1 overflow-y-auto p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
            <p className="text-sm text-gray-500 mt-1">
              Track and manage your orders and inventory
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-gray-500">Currency:</span>
            <div className="relative">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="appearance-none bg-gray-100 border border-gray-200 text-gray-800 text-xs font-semibold py-2 pl-3 pr-8 rounded-lg focus:outline-none cursor-pointer"
              >
                <option value="INR ₹">INR ₹</option>
                <option value="USD $">USD $</option>
                <option value="EUR €">EUR €</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              />
            </div>
          </div>
        </div>
        <div className="inline-flex bg-gray-200/80 p-1 rounded-xl mb-8 w-80">
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${activeTab === 'orders'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Orders
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${activeTab === 'inventory'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Inventory
          </button>
        </div>
        {activeTab === 'orders' && (
          <div>
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-5 rounded-2xl border border-gray-200">
                <p className="text-xs font-semibold text-gray-600 mb-4">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">4</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-200">
                <p className="text-xs font-semibold text-gray-600 mb-4">Pending</p>
                <p className="text-2xl font-bold text-orange-500">1</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-200">
                <p className="text-xs font-semibold text-gray-600 mb-4">In Progress</p>
                <p className="text-2xl font-bold text-blue-600">2</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-200">
                <p className="text-xs font-semibold text-gray-600 mb-4">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">₹870000.00</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-gray-200 mb-8">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search by order ID or customer..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-100 border-none text-xs text-gray-800 placeholder-gray-400 py-3 pl-10 pr-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5"
                />
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="mb-6">
                <h2 className="text-base font-bold text-gray-900">Recent Orders</h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Manage and track all your orders
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 text-xs font-semibold text-gray-600">
                      <th className="pb-3">Order ID</th>
                      <th className="pb-3">Customer</th>
                      <th className="pb-3">Date</th>
                      <th className="pb-3">Items</th>
                      <th className="pb-3">Amount</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs">
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50/60 transition-colors">
                        <td className="py-4 font-medium text-gray-900">{order.id}</td>
                        <td className="py-4 font-medium text-gray-900">{order.customer}</td>
                        <td className="py-4 text-gray-500">{order.date}</td>
                        <td className="py-4 text-gray-900 font-medium">{order.items}</td>
                        <td className="py-4 font-medium text-gray-900">{order.amount}</td>
                        <td className="py-4">
                          <span
                            className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold capitalize ${getStatusBadge(
                              order.status
                            )}`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors">
                              <Eye size={14} />
                              View
                            </button>
                            <button className="p-1.5 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                              <Download size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}


        {activeTab === 'inventory' && (
          <div>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <p className="text-sm font-medium text-gray-600 mb-6">Total Products</p>
                <p className="text-3xl font-bold text-gray-900">4</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <p className="text-sm font-medium text-gray-600 mb-6">Low Stock Items</p>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="text-orange-500 stroke-[2.5]" size={24} />
                  <span className="text-3xl font-bold text-orange-500">3</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <p className="text-sm font-medium text-gray-600 mb-6">Total Stock Value</p>
                <p className="text-3xl font-bold text-gray-900">₹9375000.00</p>
              </div>
            </div>


            <div className="bg-white rounded-2xl border border-orange-200 p-6 shadow-sm mb-8">
              <div className="flex items-center gap-2 mb-1">
                <AlertTriangle className="text-orange-500" size={20} />
                <h2 className="text-base font-bold text-gray-900">Low Stock Alerts</h2>
              </div>
              <p className="text-xs text-gray-500 mb-6 ml-7">
                These items need to be restocked soon
              </p>

              <div className="space-y-3">
                {lowStockItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-amber-50/50 border border-amber-100/80 rounded-xl p-4 flex items-center justify-between"
                  >
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5">
                        SKU: <br />
                        {item.sku}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-bold text-orange-600">
                        {item.currentStock} / {item.reorderLevel}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        Current / Reorder
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="mb-6">
                <h2 className="text-base font-bold text-gray-900">Inventory Overview</h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Monitor your stock levels and reorder points
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 text-xs font-semibold text-gray-600">
                      <th className="pb-3 font-medium text-gray-700">Product</th>
                      <th className="pb-3 font-medium text-gray-700">SKU</th>
                      <th className="pb-3 font-medium text-gray-700">Category</th>
                      <th className="pb-3 font-medium text-gray-700">Stock</th>
                      <th className="pb-3 font-medium text-gray-700">Reorder Point</th>
                      <th className="pb-3 font-medium text-gray-700">Status</th>
                      <th className="pb-3 font-medium text-gray-700">Last Restocked</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs">
                    {inventoryOverviewData.map((item) => {
                      const isLowStock = item.status === 'Low Stock';

                      return (
                        <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="py-4 font-medium text-gray-900">
                            {item.product}
                          </td>
                          <td className="py-4 text-gray-600">{item.sku}</td>
                          <td className="py-4 text-gray-600">{item.category}</td>
                          <td
                            className={`py-4 font-bold ${isLowStock ? 'text-orange-500' : 'text-gray-900'
                              }`}
                          >
                            {item.stock}
                          </td>
                          <td className="py-4 text-gray-600">{item.reorderPoint}</td>
                          <td className="py-4">
                            <span
                              className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold ${isLowStock
                                  ? 'bg-amber-100/70 text-amber-700'
                                  : 'bg-emerald-100/70 text-emerald-700'
                                }`}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td className="py-4 text-gray-600">{item.lastRestocked}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Orders;