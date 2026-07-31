import React from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Truck,
  Zap,
  MessageSquare,
  Shield,
  Box,
} from 'lucide-react';
const NAV_ITEMS = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Products', icon: Package },
  { label: 'Orders', icon: ShoppingCart, badge: 3 },
  { label: 'Shipping', icon: Truck },
  { label: 'Dynamic Pricing', icon: Zap },
  { label: 'Messages', icon: MessageSquare, badge: 5 },
  { label: 'Admin', icon: Shield },
];
function NavItem({ label, icon: Icon, badge, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex items-center px-3 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
        isActive
          ? 'bg-gray-900 text-white shadow-xs'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/60'
      }`}
    >
      <Icon
        size={18}
        className={`shrink-0 ${isActive ? 'text-white' : 'text-gray-500'}`}
      />
      <div className="ml-3 flex items-center space-x-2">
        <span className="text-xs">{label}</span>
        {badge !== undefined && (
          <span className="bg-rose-600 text-white text-[10px] font-bold h-4 min-w-[18px] px-1 rounded-full flex items-center justify-center leading-none shrink-0">
            {badge}
          </span>
        )}
      </div>
    </button>
  );
}

export default function Sidebar({
  activeNav = 'Dynamic Pricing',
  setActiveNav = () => {},
}) {
  const user = {
    company: 'Company Name',
    email: 'abc@abc.in',
    initial: 'A',
  };

  return (
    <aside className="w-[255.2px] min-w-[255.2px] bg-white border-r border-gray-100 h-[729.6px] min-h-[729.6px] select-none font-sans flex flex-col justify-between shrink-0">
      <div>
        <div className="p-5 border-b border-gray-100 flex items-center space-x-3">
          <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center text-white shadow-xs shrink-0">
            <Box size={20} />
          </div>
          <span className="font-bold text-gray-900 text-base tracking-tight truncate">
            B2B Platform
          </span>
        </div>
        <nav className="p-4 space-y-1.3">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              badge={item.badge}
              isActive={activeNav === item.label}
              onClick={() => setActiveNav(item.label)}
            />
          ))}
        </nav>
      </div>
      <div className="p-5 border-t border-gray-100 flex items-center space-x-3">
        <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-100 flex items-center justify-center text-xs font-bold text-gray-700 shrink-0">
          {user.initial}
        </div>
        <div className="text-left overflow-hidden">
          <p className="text-xs font-semibold text-gray-900 truncate leading-tight">
            {user.company}
          </p>
          <p className="text-[11px] text-gray-400 truncate mt-0.5">
            {user.email}
          </p>
        </div>
      </div>
    </aside>
  );
}