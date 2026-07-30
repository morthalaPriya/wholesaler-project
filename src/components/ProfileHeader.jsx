import React from 'react';
import { SquarePen, Building2, Star, MapPin, Upload } from 'lucide-react';
import verifiedIcon from '../assets/Icon (10).png';
function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 bg-[#E6F9EE] text-[#008236] text-[12px] font-normal px-2.5 py-0.5 rounded-full">
      <img
        src={verifiedIcon}
        alt="Verified"
        className="w-3.5 h-3.5 object-contain"
      />
      <span>Verified</span>
    </span>
  );
}

export default function ProfileHeader() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-5">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gray-100 text-gray-700 font-bold text-2xl flex items-center justify-center">
            T
          </div>
          <button className="absolute bottom-0 right-0 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm">
            <Upload className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h2 className="text-base font- Regular text-gray-900">
              TechWholesale Co.
            </h2>
            <VerifiedBadge />
          </div>

          <p className="text-xs text-gray-400">
            Leading wholesale distributor of electronics and tech products
          </p>
          <div className="flex items-center gap-4 pt-1 text-xs">
            <div className="flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-gray-400" />
              <span className="font-semibold text-gray-900">Distributor</span>
            </div>

            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-semibold text-gray-900">4.7 Rating</span>
            </div>

            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-gray-400" />
              <span className="font-semibold text-gray-900">2 Warehouses</span>
            </div>
          </div>
        </div>
      </div>
      <button className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 text-gray-700 rounded-xl text-xs font-medium hover:bg-gray-50 transition-colors shadow-xs">
        <SquarePen className="w-4 h-4 text-gray-700" />
        <span className="text-gray-900 font-medium">Quick Edit</span>
      </button>
    </div>
  );
}