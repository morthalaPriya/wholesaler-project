import React, { useState } from 'react';
import heroLogo from '../assets/hero.png';         
import iconBuilding from '../assets/Icon.png';   
import iconStar from '../assets/Icon (1).png';    
import iconMapPin from '../assets/Icon (2).png';   
import iconVerified from '../assets/Icon (3).png'; 

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-0.5 rounded-full select-none">
      <img
        src={iconVerified}
        alt="Verified"
        className="w-3.5 h-3.5 object-contain"
      />
      <span>Verified</span>
    </span>
  );
}

export default function ProfileHeader() {
  const [profile] = useState({
    name: 'TechWholesale Co.',
    description:
      'Leading wholesale distributor of electronics and tech products',
    type: 'Distributor',
    rating: '4.7 Rating',
    warehouses: '2 Warehouses',
  });

  const metaItems = [
    { id: 'type', icon: iconBuilding, text: profile.type },
    { id: 'rating', icon: iconStar, text: profile.rating },
    { id: 'warehouses', icon: iconMapPin, text: profile.warehouses },
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-center gap-5">
        <img
          src={heroLogo}
          alt={profile.name}
          className="w-20 h-20 object-contain shrink-0 select-none"
        />
        <div className="space-y-1 text-left">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-gray-900 font-heading">
              {profile.name}
            </h2>
            <VerifiedBadge />
          </div>

          <p className="text-xs text-gray-500">{profile.description}</p>
          <div className="flex flex-wrap items-center gap-4 pt-1 text-xs">
            {metaItems.map((item) => (
              <div key={item.id} className="flex items-center gap-1.5">
                <img
                  src={item.icon}
                  alt={item.id}
                  className="w-3.5 h-3.5 object-contain shrink-0"
                />
                <span className="font-semibold text-gray-900">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}