import React, { useState } from 'react';
import brandIllustration from '../assets/you.png';
import wholesalerIcon from '../assets/Icon(2).svg';
import retailerIcon from '../assets/Icon(1).svg';

export default function SelectAccountType() {
  const [selectedType, setSelectedType] = useState(null);

  const handleSelect = (type) => {
    setSelectedType(type);
    console.log('Selected type:', type);
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#FAFAFA]">
      <div className="md:w-1/2 w-full h-screen bg-[#F5F6F8]">
        <img 
          src={brandIllustration} 
          alt="Build Your Brand" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-1/2 w-full flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl shadow-slate-500/50 border border-slate-100">
          
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Select your account type to continue
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => handleSelect('wholesaler')}
              className={`flex flex-col items-center justify-center p-6 rounded-xl border transition-all duration-200 ${
                selectedType === 'wholesaler' 
                  ? 'border-slate-800 bg-slate-50 text-slate-900 shadow-sm' 
                  : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-white'
              }`}
            >
              <img 
                src={wholesalerIcon} 
                alt="Wholesaler" 
                className="w-6 h-6 mb-2 object-contain"
              />
              <span className="text-sm font-medium text-black-800">Wholesaler</span>
            </button>

            <button
              type="button"
              onClick={() => handleSelect('retailer')}
              className={`flex flex-col items-center justify-center p-6 rounded-xl border transition-all duration-200 ${
                selectedType === 'retailer' 
                  ? 'border-slate-800 bg-slate-50 text-slate-900 shadow-sm' 
                  : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-white'
              }`}
            >
              <img 
                src={retailerIcon} 
                alt="Retailer" 
                className="w-6 h-6 mb-2 object-contain"
              />
              <span className="text-sm font-medium text-black-800">Retailer</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}