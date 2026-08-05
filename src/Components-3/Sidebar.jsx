import React from 'react';
import containerLogo from '../assets/Container (4).png';
import dashboardIcon from '../assets/Icon (19).png';
import productsIcon from '../assets/Icon (23).png';
import ordersIcon from '../assets/Icon (20).png';
import shippingIcon from '../assets/Icon (24).png';
import pricingIcon from '../assets/Icon (6).png';
import messagesIcon from '../assets/Icon (21).png';
import adminIcon from '../assets/Icon (22).png';

const NAV_ITEMS = [
    { label: 'Dashboard', icon: dashboardIcon },
    { label: 'Products', icon: productsIcon },
    { label: 'Orders', icon: ordersIcon, badge: 3 },
    { label: 'Shipping', icon: shippingIcon },
    { label: 'Dynamic Pricing', icon: pricingIcon },
    { label: 'Messages', icon: messagesIcon, badge: 5 },
    { label: 'Admin', icon: adminIcon },
];

function NavItem({ label, icon, badge, isActive, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`w-full flex items-center px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${isActive
                    ? 'bg-[#030213] text-white font-semibold shadow-xs'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
        >
            <img
                src={icon}
                alt={label}
                className={`w-4 h-4 object-contain shrink-0 transition-opacity ${isActive
                        ? 'brightness-0 invert opacity-100'
                        : 'opacity-50 hover:opacity-80'
                    }`}
            />

            <div className="ml-3 flex items-center gap-2">
                <span className="text-xs font-heading tracking-wide">{label}</span>

                {badge !== undefined && (
                    <span className="bg-rose-500 text-white text-[10px] font-bold h-4 min-w-[16px] px-1 rounded-full flex items-center justify-center leading-none shrink-0 font-sans">
                        {badge}
                    </span>
                )}
            </div>
        </button>
    );
}

export default function Sidebar({
    activeNav = 'Admin',
    setActiveNav = () => { },
}) {
    const user = {
        company: 'Company Name',
        email: 'abc@abc.in',
        initial: 'A',
    };

    return (
        <aside className="w-[255px] min-w-[255px] bg-white border-r border-gray-100 h-full min-h-[729.6px] select-none flex flex-col justify-between shrink-0">
            <div>
                <div className="p-4 flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#030213] rounded-xl flex items-center justify-center shrink-0 shadow-xs">
                        <img
                            src={containerLogo}
                            alt="B2B Platform Logo"
                            className="w-5 h-5 object-contain"
                        />
                    </div>
                    <span className="font-bold text-gray-900 text-sm tracking-tight truncate font-sans">
                        B2B Platform
                    </span>
                </div>
                <nav className="px-3 py-2 space-y-1">
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
            <div className="p-4 border-t border-gray-100 flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-700 shrink-0 font-heading">
                    {user.initial}
                </div>
                <div className="text-left overflow-hidden">
                    <p className="text-xs font-semibold text-gray-900 truncate leading-tight font-heading">
                        {user.company}
                    </p>
                    <p className="text-[11px] text-gray-400 truncate mt-0.5 font-sans">
                        {user.email}
                    </p>
                </div>
            </div>
        </aside>
    );
}