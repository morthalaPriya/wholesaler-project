import React, { useState } from 'react';
import { ChevronDown, MapPin, ArrowRight, ArrowLeft, Locate } from 'lucide-react';

export default function Step4AddressWarehouse({ formData, updateFormData, onNext, onBack }) {
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  // Handler to fetch current device location
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    setIsLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        updateFormData({
          latitude,
          longitude,
          locationPinned: true,
        });
        setIsLoadingLocation(false);
      },
      (error) => {
        console.error('Error fetching location:', error);
        alert('Unable to retrieve location. Please ensure location permissions are allowed.');
        setIsLoadingLocation(false);
      }
    );
  };

  return (
    <div>
      {/* Title & Subtitle */}
      <div className="mb-6">
        <h2 className="text-base font-semibold text-[#0F172A]">Address & Warehouse</h2>
        <p className="text-xs text-[#94A3B8] mt-0.5">Where are you located?</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Country / State / City Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Country */}
          <div>
            <label className="block text-xs font-semibold text-[#334155] mb-1.5">
              Country <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="country"
                required
                value={formData.country || ''}
                onChange={handleChange}
                className="w-full appearance-none px-4 py-2.5 bg-[#F1F5F9] border border-transparent rounded-xl text-xs text-[#94A3B8] focus:outline-none focus:bg-white focus:border-purple-500 transition-all cursor-pointer"
              >
                <option value="" disabled hidden>
                  Select country
                </option>
                <option value="United States" className="text-slate-800">
                  United States
                </option>
                <option value="Canada" className="text-slate-800">
                  Canada
                </option>
                <option value="United Kingdom" className="text-slate-800">
                  United Kingdom
                </option>
                <option value="India" className="text-slate-800">
                  India
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#94A3B8] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* State / Province */}
          <div>
            <label className="block text-xs font-semibold text-[#334155] mb-1.5">
              State/Province <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="state"
              required
              placeholder="Enter state"
              value={formData.state || ''}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-[#F1F5F9] border border-transparent rounded-xl text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:bg-white focus:border-purple-500 transition-all"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-xs font-semibold text-[#334155] mb-1.5">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              required
              placeholder="Enter city"
              value={formData.city || ''}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-[#F1F5F9] border border-transparent rounded-xl text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:bg-white focus:border-purple-500 transition-all"
            />
          </div>
        </div>

        {/* Street Address */}
        <div>
          <label className="block text-xs font-semibold text-[#334155] mb-1.5">
            Street Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="streetAddress"
            required
            placeholder="Enter complete address"
            value={formData.streetAddress || ''}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-[#F1F5F9] border border-transparent rounded-xl text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:bg-white focus:border-purple-500 transition-all"
          />
        </div>

        {/* Section Divider / Title */}
        <div className="pt-2">
          <h3 className="text-xs font-semibold text-[#334155]">Warehouse Details (Optional)</h3>
        </div>

        {/* Warehouse Name */}
        <div>
          <label className="block text-xs font-semibold text-[#334155] mb-1.5">
            Warehouse Name
          </label>
          <input
            type="text"
            name="warehouseName"
            placeholder="e.g., Main Warehouse"
            value={formData.warehouseName || ''}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-[#F1F5F9] border border-transparent rounded-xl text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:bg-white focus:border-purple-500 transition-all"
          />
        </div>

        {/* Warehouse Address */}
        <div>
          <label className="block text-xs font-semibold text-[#334155] mb-1.5">
            Warehouse Address
          </label>
          <input
            type="text"
            name="warehouseAddress"
            placeholder="Enter warehouse address if different from company address"
            value={formData.warehouseAddress || ''}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-[#F1F5F9] border border-transparent rounded-xl text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:bg-white focus:border-purple-500 transition-all"
          />
        </div>

        {/* Interactive Click-to-Locate Map Box */}
        <div className="pt-1">
          <button
            type="button"
            onClick={handleGetLocation}
            disabled={isLoadingLocation}
            className="w-full h-36 bg-[#F8FAFC] border border-dashed border-[#CBD5E1] hover:border-purple-400 hover:bg-purple-50/20 rounded-2xl flex flex-col items-center justify-center p-4 gap-2 transition-all cursor-pointer group focus:outline-none focus:ring-2 focus:ring-purple-500/20"
          >
            <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
              <MapPin className={`w-5 h-5 ${formData.latitude ? 'text-purple-600' : 'text-[#64748B]'}`} />
            </div>

            <div className="text-center">
              <span className="text-xs font-semibold text-[#334155] block">
                {isLoadingLocation
                  ? 'Detecting location...'
                  : formData.latitude
                  ? `Location Pinned: (${formData.latitude.toFixed(4)}, ${formData.longitude.toFixed(4)})`
                  : 'Click on map to add location pin'}
              </span>
              <p className="text-[11px] text-[#94A3B8] mt-0.5 flex items-center justify-center gap-1">
                <Locate className="w-3 h-3 text-purple-600 inline" />
                Click anywhere in this box to set location
              </p>
            </div>
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-6">
          <button
            type="button"
            onClick={onBack}
            className="bg-[#F1F5F9] hover:bg-slate-200 text-[#334155] text-xs font-medium px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer active:scale-95"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </button>

          <button
            type="submit"
            className="bg-[#090D16] hover:bg-slate-800 text-white text-xs font-medium px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
          >
            Continue
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>
    </div>
  );
}