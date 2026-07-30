import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Truck, 
  MessageSquare, 
  Shield, 
  Box
} from 'lucide-react';

export default function Sidebar({ activeNav, setActiveNav }) {
  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard },
    { label: 'Products', icon: Package },
    { label: 'Orders', icon: ShoppingCart, badge: 3 },
    { label: 'Shipping', icon: Truck },
    { label: 'Messages', icon: MessageSquare, badge: 5 },
    { label: 'Admin', icon: Shield },
  ];

  return (
    <aside 
      className="w-[255.2px] bg-white border-r-[0.8px] border-black/10 min-h-screen select-none font-sans flex-shrink-0"
    >
      <div className="p-5 border-b border-gray-100 flex items-center space-x-3">
        <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center text-white shadow-sm flex-shrink-0">
          <Box size={20} />
        </div>
        <span className="font-bold text-gray-900 text-base tracking-tight truncate">
          B2B Platform
        </span>
      </div>
      <nav className="p-4 space-y-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.label;
          return (
            <button
              key={item.label}
              onClick={() => setActiveNav && setActiveNav(item.label)}
              className={`w-full flex items-center justify-start px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive 
                  ? 'text-gray-900 font-semibold bg-gray-50' 
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50/60'
              }`}
            >
              <Icon size={18} className={isActive ? 'text-gray-900' : 'text-gray-400'} />
              
              <span className="ml-4">{item.label}</span>
              
              {item.badge && (
                <span className="ml-3 bg-[#E11D48] text-white text-[11px] font-medium px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
      <div className="p-5 mt-52 border-t border-gray-100 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-[#EAEAEA] flex items-center justify-center text-sm font-medium text-gray-800 flex-shrink-0">
          A
        </div>
        <div className="text-left overflow-hidden">
          <p className="text-sm font-semibold text-gray-900 truncate leading-snug">
            Company Name
          </p>
          <p className="text-xs text-gray-400 truncate">
            abc@abc.in
          </p>
        </div>
      </div>
    </aside>
  );
}