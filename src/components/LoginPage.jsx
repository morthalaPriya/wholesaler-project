import React from 'react';
import brandIllustration from '../assets/you.png';
import wholesalerIcon from '../assets/Icon(2).svg';
import retailerIcon from '../assets/Icon(1).svg';


export default function SelectType({ onSelectType }) {
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
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl shadow-slate-500/50 border border-slate-100">

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
              onClick={() => onSelectType("wholesaler")}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-slate-200 hover:border-slate-250 hover:bg-[#ECECF0] text-slate-500/50 transition-all cursor-pointer duration-200"
            >
              <img src={wholesalerIcon} alt="Wholesaler" className="w-6 h-6 mb-2 object-contain" />
              <span className="text-sm font-medium text-slate-800">Wholesaler</span>
            </button>

            <button
              type="button"
              onClick={() => alert("Retailer login not implemented yet")}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-slate-200 hover:border-slate-250 hover:bg-[#ECECF0] text-slate-500/50  transition-all cursor-pointer duration-200"
            >
              <img src={retailerIcon} alt="Retailer" className="w-6 h-6 mb-2 object-contain" />
              <span className="text-sm font-medium text-slate-800">Retailer</span>
            </button>
          </div>

        </div>
      </div>
    </div >
  );
}