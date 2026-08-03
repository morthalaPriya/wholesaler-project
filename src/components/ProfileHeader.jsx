import React, { useState } from 'react';

import {

  SquarePen,

  Building2,

  Star,

  MapPin,

  Upload,

  CheckCircle2,

} from 'lucide-react';



function VerifiedBadge() {

  return (

    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-0.5 rounded-full">

      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />

      <span>Verified</span>

    </span>

  );

}



export default function ProfileHeader() {

  const [profile, setProfile] = useState({

    name: 'TechWholesale Co.',

    description:

      'Leading wholesale distributor of electronics and tech products',

    type: 'Distributor',

    rating: '4.7 Rating',

    warehouses: '2 Warehouses',

  });

  const handleAvatarUpload = (event) => {

    const file = event.target.files[0];

    if (file) {

      alert(`Selected new avatar image: ${file.name}`);

    }

  };

  const metaItems = [

    { id: 'type', icon: Building2, text: profile.type },

    { id: 'rating', icon: Star, text: profile.rating, iconColor: 'text-amber-400 fill-amber-400' },

    { id: 'warehouses', icon: MapPin, text: profile.warehouses },

  ];



  return (

    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

      <div className="flex items-center gap-5">

        <div className="relative">

          <div className="w-20 h-20 rounded-full bg-gray-100 text-gray-700 font-bold text-2xl flex items-center justify-center border border-gray-200">

            {profile.name.charAt(0)}

          </div>

          <label className="absolute bottom-0 right-0 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm cursor-pointer">

            <input

              type="file"

              accept="image/*"

              className="hidden"

              onChange={handleAvatarUpload}

            />

            <Upload className="w-3.5 h-3.5" />

          </label>

        </div>

        <div className="space-y-1">

          <div className="flex items-center gap-2">

            <h2 className="text-base font-semibold text-gray-900">

              {profile.name}

            </h2>

            <VerifiedBadge />

          </div>



          <p className="text-xs text-gray-500">

            {profile.description}

          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1 text-xs">

            {metaItems.map((item) => {

              const Icon = item.icon;

              return (

                <div key={item.id} className="flex items-center gap-1">

                  <Icon className={`w-3.5 h-3.5 ${item.iconColor || 'text-gray-400'}`} />

                  <span className="font-semibold text-gray-900">{item.text}</span>

                </div>

              );

            })}

          </div>

        </div>

      </div>

      <button

        type="button"

        onClick={() => alert('Opening Edit Profile Modal...')}

        className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 text-gray-700 rounded-xl text-xs font-medium hover:bg-gray-50 transition-colors shadow-xs cursor-pointer shrink-0"

      >

        <SquarePen className="w-4 h-4 text-gray-700" />

        <span className="text-gray-900 font-medium">Quick Edit</span>

      </button>

    </div>

  );

}

