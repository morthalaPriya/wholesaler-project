import React, { useState } from 'react';
import lightningIcon from '../assets/Icon (6).png';
import dollarIcon from '../assets/Icon (7).png';
import rulesIcon from '../assets/Icon (9).png';
import targetIcon from '../assets/Icon (8).png';
import shoppingCartIcon from '../assets/Icon (10).png';
import greenTrendIcon from '../assets/Vector (5).png';
import redTrendIcon from '../assets/Icon (14).png';
import infoIcon from '../assets/Icon (11).png';
import settingsIcon from '../assets/Icon (9).png';
import clockIcon from '../assets/Icon (12).png';
import earBudsImg from '../assets/ImageWithFallback.png';
import ledBulbsImg from '../assets/ImageWithFallback (1).png';
import kitchenUtensilsImg from '../assets/ImageWithFallback (2).png';
import basePriceIcon from '../assets/Icon (16).png';
import dynamicPriceIcon from '../assets/Icon (15).png';
import unitsSoldIcon from '../assets/Icon (17).png';

export default function DynamicPricing() {
  const [activeTab, setActiveTab] = useState('Competitor Analysis');
  const [dynamicPricing, setDynamicPricing] = useState(true);
  const [competitorTracking, setCompetitorTracking] = useState(true);
  const [priceFloor, setPriceFloor] = useState(20);
  const [priceCeiling, setPriceCeiling] = useState(80);

  
  const handleCreateFlashSale = () => {
    alert('Create Flash Sale clicked! Modal or form goes here.');
  };

  const handleSaveSettings = () => {
    alert(
      `Settings Saved Successfully!\n\n- Dynamic Pricing: ${
        dynamicPricing ? 'Enabled' : 'Disabled'
      }\n- Competitor Tracking: ${
        competitorTracking ? 'Enabled' : 'Disabled'
      }\n- Price Floor: ${priceFloor}%\n- Price Ceiling: ${priceCeiling}%`
    );
  };

  const handleFlashSaleAction = (action, title) => {
    alert(`${action} triggered for "${title}"`);
  };

  const flashSalesData = [
    {
      id: 1,
      title: 'Wireless Earbuds Pro',
      status: 'Active',
      originalPrice: '$89.99',
      discountPrice: '$59.99',
      discountTag: '33% OFF',
      startTime: '2025-11-03 10:00',
      endTime: '2025-11-03 18:00',
      unitsSold: '342 / 500',
      revenue: '$20,518',
      soldPercent: 68,
      imgSrc: earBudsImg,
    },
    {
      id: 2,
      title: 'Smart LED Bulbs Pack',
      status: 'Active',
      originalPrice: '$45',
      discountPrice: '$29.99',
      discountTag: '33% OFF',
      startTime: '2025-11-03 14:00',
      endTime: '2025-11-03 20:00',
      unitsSold: '187 / 300',
      revenue: '$5,608',
      soldPercent: 62,
      imgSrc: ledBulbsImg,
    },
    {
      id: 3,
      title: 'Bamboo Kitchen Utensils',
      status: 'Upcoming',
      originalPrice: '$34.99',
      discountPrice: '$24.99',
      discountTag: '29% OFF',
      startTime: '2025-11-04 09:00',
      endTime: '2025-11-04 17:00',
      unitsSold: '0 / 400',
      revenue: '$0',
      soldPercent: 0,
      imgSrc: kitchenUtensilsImg,
    },
  ];

  return (
    <div className="w-full bg-white text-left font-sans space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
            <img src={lightningIcon} alt="Lightning" className="w-4 h-4 object-contain" />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-[#0A0A0A] leading-tight">
              Dynamic Pricing Engine
            </h1>
            <p className="text-[11px] text-gray-400 mt-0.5">
              Intelligent pricing optimization with flash sales and volume discounts
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCreateFlashSale}
          className="h-8 px-3.5 bg-[#0A0A0A] text-white text-xs font-medium rounded-xl hover:bg-gray-800 transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
        >
          <span className="text-sm font-light leading-none">+</span>
          <span>Create Flash Sale</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs flex flex-col justify-between h-28">
          <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
            <span>Active Flash Sales</span>
            <img src={lightningIcon} alt="Icon" className="w-3.5 h-3.5 object-contain opacity-50" />
          </div>
          <div>
            <p className="text-xl font-bold text-[#0A0A0A] leading-none">2</p>
            <p className="text-[11px] text-gray-400 mt-1">Running now</p>
          </div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs flex flex-col justify-between h-28">
          <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
            <span>Flash Sale Revenue</span>
            <img src={dollarIcon} alt="Icon" className="w-3.5 h-3.5 object-contain opacity-50" />
          </div>
          <div>
            <p className="text-xl font-bold text-[#0A0A0A] leading-none">$26,126</p>
            <p className="text-[11px] text-gray-400 mt-1">Today's earnings</p>
          </div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs flex flex-col justify-between h-28">
          <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
            <span>Active Rules</span>
            <img src={rulesIcon} alt="Icon" className="w-3.5 h-3.5 object-contain opacity-50" />
          </div>
          <div>
            <p className="text-xl font-bold text-[#0A0A0A] leading-none">4</p>
            <p className="text-[11px] text-gray-400 mt-1">Pricing rules enabled</p>
          </div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs flex flex-col justify-between h-28">
          <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
            <span>Price Optimization</span>
            <img src={targetIcon} alt="Icon" className="w-3.5 h-3.5 object-contain opacity-50" />
          </div>
          <div>
            <p className="text-xl font-bold text-[#0A0A0A] leading-none">+23%</p>
            <p className="text-[11px] text-gray-400 mt-1">Sales increase vs static pricing</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-2xl p-5 shadow-xs space-y-3">
          <div>
            <h2 className="text-xs font-semibold text-[#0A0A0A]">Price Performance</h2>
            <p className="text-[11px] text-gray-400 mt-0.5">Dynamic pricing impact on sales</p>
          </div>

          <div className="w-full h-56 relative pt-2">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 440 180"
              preserveAspectRatio="none"
            >
              <line x1="45" y1="12" x2="45" y2="142" stroke="#E5E7EB" strokeDasharray="3 3" />
              <line x1="102" y1="12" x2="102" y2="142" stroke="#E5E7EB" strokeDasharray="3 3" />
              <line x1="159" y1="12" x2="159" y2="142" stroke="#E5E7EB" strokeDasharray="3 3" />
              <line x1="216" y1="12" x2="216" y2="142" stroke="#E5E7EB" strokeDasharray="3 3" />
              <line x1="273" y1="12" x2="273" y2="142" stroke="#E5E7EB" strokeDasharray="3 3" />
              <line x1="330" y1="12" x2="330" y2="142" stroke="#E5E7EB" strokeDasharray="3 3" />
              <line x1="387" y1="12" x2="387" y2="142" stroke="#E5E7EB" strokeDasharray="3 3" />
              <line x1="45" y1="22.4" x2="387" y2="22.4" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="4 4" />

              <line x1="45" y1="142" x2="387" y2="142" stroke="#6B7280" strokeWidth="1" />
              <line x1="45" y1="12" x2="45" y2="142" stroke="#6B7280" strokeWidth="1" />
              <line x1="387" y1="12" x2="387" y2="142" stroke="#6B7280" strokeWidth="1" />

             
              <line x1="41" y1="142" x2="45" y2="142" stroke="#6B7280" strokeWidth="1" />
              <line x1="41" y1="109.5" x2="45" y2="109.5" stroke="#6B7280" strokeWidth="1" />
              <line x1="41" y1="77" x2="45" y2="77" stroke="#6B7280" strokeWidth="1" />
              <line x1="41" y1="44.5" x2="45" y2="44.5" stroke="#6B7280" strokeWidth="1" />
              <line x1="41" y1="12" x2="45" y2="12" stroke="#6B7280" strokeWidth="1" />

              <line x1="387" y1="142" x2="391" y2="142" stroke="#6B7280" strokeWidth="1" />
              <line x1="387" y1="109.5" x2="391" y2="109.5" stroke="#6B7280" strokeWidth="1" />
              <line x1="387" y1="77" x2="391" y2="77" stroke="#6B7280" strokeWidth="1" />
              <line x1="387" y1="44.5" x2="391" y2="44.5" stroke="#6B7280" strokeWidth="1" />
              <line x1="387" y1="12" x2="391" y2="12" stroke="#6B7280" strokeWidth="1" />

            
              <text x="37" y="145" fontSize="10" fill="#6B7280" textAnchor="end">0</text>
              <text x="37" y="112.5" fontSize="10" fill="#6B7280" textAnchor="end">25</text>
              <text x="37" y="80" fontSize="10" fill="#6B7280" textAnchor="end">50</text>
              <text x="37" y="47.5" fontSize="10" fill="#6B7280" textAnchor="end">75</text>
              <text x="37" y="15" fontSize="10" fill="#6B7280" textAnchor="end">100</text>

           
              <text x="395" y="145" fontSize="10" fill="#6B7280" textAnchor="start">0</text>
              <text x="395" y="112.5" fontSize="10" fill="#6B7280" textAnchor="start">30</text>
              <text x="395" y="80" fontSize="10" fill="#6B7280" textAnchor="start">60</text>
              <text x="395" y="47.5" fontSize="10" fill="#6B7280" textAnchor="start">90</text>
              <text x="395" y="15" fontSize="10" fill="#6B7280" textAnchor="start">120</text>

            
              <text x="45" y="158" fontSize="10" fill="#6B7280" textAnchor="middle">Oct 27</text>
              <text x="102" y="158" fontSize="10" fill="#6B7280" textAnchor="middle">Oct 28</text>
              <text x="159" y="158" fontSize="10" fill="#6B7280" textAnchor="middle">Oct 29</text>
              <text x="216" y="158" fontSize="10" fill="#6B7280" textAnchor="middle">Oct 30</text>
              <text x="273" y="158" fontSize="10" fill="#6B7280" textAnchor="middle">Oct 31</text>
              <text x="330" y="158" fontSize="10" fill="#6B7280" textAnchor="middle">Nov 1</text>
              <text x="387" y="158" fontSize="10" fill="#6B7280" textAnchor="middle">Nov 2</text>

           
              <path
                d="M 45 22.4 C 70 20, 85 28, 102 30.2 C 122 33, 140 38, 159 38 C 182 38, 195 22.4, 216 22.4 L 273 28 L 387 47.5"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="1.25"
              />

        
              <path
                d="M 45 92.6 C 70 78, 85 72, 102 67.9 C 125 62, 142 43, 159 41.9 C 175 41.9, 195 86.1, 216 86.1 L 273 69 L 387 12"
                fill="none"
                stroke="#10B981"
                strokeWidth="1.25"
              />

              
              <circle cx="45" cy="22.4" r="2.5" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.2" />
              <circle cx="102" cy="30.2" r="2.5" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.2" />
              <circle cx="159" cy="38" r="2.5" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.2" />
              <circle cx="216" cy="22.4" r="2.5" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.2" />
              <circle cx="273" cy="28" r="2.5" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.2" />
              <circle cx="387" cy="47.5" r="2.5" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.2" />

              <circle cx="330" cy="37.7" r="2.5" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.2" />

              
              <circle cx="45" cy="92.6" r="2.5" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.2" />
              <circle cx="102" cy="67.9" r="2.5" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.2" />
              <circle cx="159" cy="41.9" r="2.5" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.2" />
              <circle cx="216" cy="86.1" r="2.5" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.2" />
              <circle cx="273" cy="69" r="2.5" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.2" />
              <circle cx="387" cy="12" r="2.5" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.2" />
            </svg>
          </div>

          <div className="flex items-center justify-center gap-5 pt-1 text-[11px]">
            <div className="flex items-center gap-1 text-gray-400 font-medium">
              <img src={basePriceIcon} alt="Base Price" className="w-4 h-3 object-contain" />
              <span>Base Price</span>
            </div>
            <div className="flex items-center gap-1 text-[#3B82F6] font-medium">
              <img src={dynamicPriceIcon} alt="Dynamic Price" className="w-4 h-3 object-contain" />
              <span>Dynamic Price</span>
            </div>
            <div className="flex items-center gap-1 text-[#10B981] font-medium">
              <img src={unitsSoldIcon} alt="Units Sold" className="w-4 h-3 object-contain" />
              <span>Units Sold</span>
            </div>
          </div>
        </div>

      
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <h2 className="text-xs font-semibold text-[#0A0A0A]">Pricing Settings</h2>
              <p className="text-[11px] text-gray-400 mt-0.5">Configure dynamic pricing</p>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Dynamic Pricing</span>
                <button
                  type="button"
                  onClick={() => setDynamicPricing(!dynamicPricing)}
                  className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors cursor-pointer ${
                    dynamicPricing ? 'bg-[#0A0A0A]' : 'bg-gray-200'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      dynamicPricing ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Competitor Tracking</span>
                <button
                  type="button"
                  onClick={() => setCompetitorTracking(!competitorTracking)}
                  className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors cursor-pointer ${
                    competitorTracking ? 'bg-[#030213]' : 'bg-gray-200'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      competitorTracking ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-[#0A0A0A] font-normal">
                  Price Floor: <span className="font-medium">{priceFloor}% of base</span>
                </p>

                <div className="w-[195.48px] max-w-full h-[16px] bg-[#E5E7EB] rounded-full relative flex items-center p-[2px]">
                  <div
                    className="h-full bg-[#0A0A0A] rounded-full transition-all"
                    style={{ width: `${priceFloor}%` }}
                  />
                  <div
                    className="w-3.5 h-3.5 bg-white border border-gray-300 rounded-full shadow-md absolute pointer-events-none transition-all"
                    style={{ left: `calc(${priceFloor}% - 7px)` }}
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceFloor}
                    onChange={(e) => setPriceFloor(e.target.value)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-[#0A0A0A] font-normal">
                  Price Ceiling: <span className="font-medium">{priceCeiling}% of base</span>
                </p>

                <div className="w-[195.48px] max-w-full h-[16px] bg-[#E5E7EB] rounded-full relative flex items-center p-[2px]">
                  <div
                    className="h-full bg-[#0A0A0A] rounded-full transition-all"
                    style={{ width: `${priceCeiling}%` }}
                  />
                  <div
                    className="w-3.5 h-3.5 bg-white border border-gray-300 rounded-full shadow-md absolute pointer-events-none transition-all"
                    style={{ left: `calc(${priceCeiling}% - 7px)` }}
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceCeiling}
                    onChange={(e) => setPriceCeiling(e.target.value)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSaveSettings}
            className="w-full h-9 bg-[#0A0A0A] text-white text-xs font-medium rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 cursor-pointer mt-4"
          >
            <img src={settingsIcon} alt="Save" className="w-3.5 h-3.5 object-contain invert" />
            <span>Save Settings</span>
          </button>
        </div>
      </div>
      <div className="bg-[#F3F4F6] p-1 rounded-2xl inline-flex items-center gap-1 text-xs">
        {[
          { name: 'Flash Sales', icon: lightningIcon },
          { name: 'Pricing Rules', icon: rulesIcon },
          { name: 'Volume Discounts', icon: shoppingCartIcon },
          { name: 'Competitor Analysis', icon: targetIcon },
        ].map((tab) => {
          const isActive = activeTab === tab.name;
          return (
            <button
              key={tab.name}
              type="button"
              onClick={() => setActiveTab(tab.name)}
              className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer text-[#0A0A0A] ${
                isActive
                  ? 'bg-white shadow-xs font-semibold'
                  : 'hover:bg-gray-200/60 font-medium'
              }`}
            >
              <img
                src={tab.icon}
                alt={tab.name}
                className="w-3.5 h-3.5 object-contain"
              />
              <span className="whitespace-nowrap">{tab.name}</span>
            </button>
          );
        })}
      </div>
      {activeTab === 'Flash Sales' && (
        <div className="space-y-4 w-full">
          {flashSalesData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-xs relative"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-24 h-24 rounded-xl object-cover border border-gray-100 shrink-0 bg-gray-50"
                  />

                  <div className="space-y-1">
                    <h3 className="text-xs font-semibold text-[#0A0A0A]">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-2 pt-0.5">
                      <span className="text-xs text-gray-400 line-through font-normal">
                        {item.originalPrice}
                      </span>
                      <span className="text-base font-bold text-[#0A0A0A] leading-none">
                        {item.discountPrice}
                      </span>
                      <span className="bg-[#E11D48] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                        {item.discountTag}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2 text-left">
                      <div>
                        <div className="flex items-center gap-1 text-[11px] text-gray-400">
                          <img src={clockIcon} alt="" className="w-3 h-3 opacity-40 object-contain" />
                          <span>Start Time</span>
                        </div>
                        <div className="text-[11px] font-semibold text-[#0A0A0A] mt-0.5">
                          {item.startTime}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-[11px] text-gray-400">
                          <img src={clockIcon} alt="" className="w-3 h-3 opacity-40 object-contain" />
                          <span>End Time</span>
                        </div>
                        <div className="text-[11px] font-semibold text-[#0A0A0A] mt-0.5">
                          {item.endTime}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-[11px] text-gray-400">
                          <img src={shoppingCartIcon} alt="" className="w-3 h-3 opacity-40 object-contain" />
                          <span>Units Sold</span>
                        </div>
                        <div className="text-[11px] font-semibold text-[#0A0A0A] mt-0.5">
                          {item.unitsSold}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-[11px] text-gray-400">
                          <img src={dollarIcon} alt="" className="w-3 h-3 opacity-40 object-contain" />
                          <span>Revenue</span>
                        </div>
                        <div className="text-[11px] font-semibold text-[#0A0A0A] mt-0.5">
                          {item.revenue}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span
                  className={`text-[10px] font-medium px-2.5 py-0.5 rounded-md ${
                    item.status === 'Active'
                      ? 'bg-[#10B981] text-white'
                      : 'bg-[#E5E7EB] text-[#4B5563]'
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <div className="mt-4 space-y-1">
                <div className="flex justify-between items-center text-[10px] text-gray-400 font-medium">
                  <span>Stock Remaining</span>
                  <span>{item.soldPercent}% sold</span>
                </div>
                <div className="w-full bg-[#E5E7EB] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#0A0A0A] h-full rounded-full transition-all duration-300"
                    style={{ width: `${item.soldPercent}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => handleFlashSaleAction('Edit Sale', item.title)}
                  className="h-7 px-3 border border-gray-200 text-[#0A0A0A] text-[11px] font-medium rounded-lg hover:bg-gray-50 transition-colors cursor-pointer bg-white"
                >
                  Edit Sale
                </button>
                <button
                  type="button"
                  onClick={() => handleFlashSaleAction('End Early', item.title)}
                  className="h-7 px-3 border border-gray-200 text-[#0A0A0A] text-[11px] font-medium rounded-lg hover:bg-gray-50 transition-colors cursor-pointer bg-white"
                >
                  End Early
                </button>
                <button
                  type="button"
                  onClick={() => handleFlashSaleAction('View Analytics', item.title)}
                  className="h-7 px-3 bg-[#0A0A0A] text-white text-[11px] font-medium rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  View Analytics
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'Competitor Analysis' && (
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-xs space-y-4">
          <div>
            <h2 className="text-xs font-semibold text-[#0A0A0A]">
              Competitor Price Analysis
            </h2>
            <p className="text-[11px] text-gray-400 mt-0.5">
              Real-time market comparison for Wireless Earbuds Pro
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="bg-[#F9FAFB] rounded-xl p-3.5 flex items-center justify-between border border-gray-50">
              <div>
                <p className="text-[11px] text-gray-500 font-medium">Competitor A</p>
                <p className="text-base font-bold text-[#0A0A0A] mt-0.5">$85.99</p>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end gap-1 text-emerald-500 font-semibold text-xs">
                  <img src={greenTrendIcon} alt="Down" className="w-3 h-3 object-contain" />
                  <span>$-4.00</span>
                </div>
                <p className="text-[10px] text-gray-400 mt-0.5">vs our price ($89.99)</p>
              </div>
            </div>
            <div className="bg-[#F9FAFB] rounded-xl p-3.5 flex items-center justify-between border border-gray-50">
              <div>
                <p className="text-[11px] text-gray-500 font-medium">Competitor B</p>
                <p className="text-base font-bold text-[#0A0A0A] mt-0.5">$92.99</p>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end gap-1 text-rose-500 font-semibold text-xs">
                  <img src={redTrendIcon} alt="Up" className="w-3 h-3 object-contain" />
                  <span>+$3.00</span>
                </div>
                <p className="text-[10px] text-gray-400 mt-0.5">vs our price ($89.99)</p>
              </div>
            </div>
            <div className="bg-[#F9FAFB] rounded-xl p-3.5 flex items-center justify-between border border-gray-50">
              <div>
                <p className="text-[11px] text-gray-500 font-medium">Competitor C</p>
                <p className="text-base font-bold text-[#0A0A0A] mt-0.5">$87.5</p>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end gap-1 text-emerald-500 font-semibold text-xs">
                  <img src={greenTrendIcon} alt="Down" className="w-3 h-3 object-contain" />
                  <span>$-2.49</span>
                </div>
                <p className="text-[10px] text-gray-400 mt-0.5">vs our price ($89.99)</p>
              </div>
            </div>
            <div className="bg-[#F9FAFB] rounded-xl p-3.5 flex items-center justify-between border border-gray-50">
              <div>
                <p className="text-[11px] text-gray-500 font-medium">Market Average</p>
                <p className="text-base font-bold text-[#0A0A0A] mt-0.5">$88.83</p>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end gap-1 text-emerald-500 font-semibold text-xs">
                  <img src={greenTrendIcon} alt="Down" className="w-3 h-3 object-contain" />
                  <span>$-1.16</span>
                </div>
                <p className="text-[10px] text-gray-400 mt-0.5">vs our price ($89.99)</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F3F4F6]/70 rounded-xl p-3.5 flex items-start gap-2.5 border border-gray-100">
            <img src={infoIcon} alt="Info" className="w-3.5 h-3.5 mt-0.5 object-contain shrink-0 opacity-60" />
            <div className="text-xs">
              <p className="font-semibold text-[#0A0A0A]">Recommendation</p>
              <p className="text-gray-500 text-[11px] mt-0.5 leading-relaxed">
                Your current price is competitive. Consider maintaining current pricing or applying a small discount to capture more market share from Competitor B.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}