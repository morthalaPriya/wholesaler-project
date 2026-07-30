import React from 'react';
import { Upload } from 'lucide-react';
import DocumentIcon from '../assets/Icon (8).png';
import VerifiedIcon from '../assets/Icon (10).png';

export default function LicenseTab() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-6">
      <div>
        <h2 className="text-base font-semibold text-gray-900">
          Business License & Documents
        </h2>
        <p className="text-xs text-gray-500 mt-0.5">
          Manage your business licenses and verification documents
        </p>
      </div>
      <div className="bg-[#F8F9FA] border border-gray-100 rounded-2xl p-5 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Business License
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">
              Verified on Jan 15, 2025
            </p>
          </div>
          <span className="inline-flex items-center gap-1 bg-[#E6F9EE] text-[#008236] text-[12px] font-medium px-2.5 py-1 rounded-full">
            <img
              src={VerifiedIcon}
              alt="Verified"
              className="w-3.5 h-3.5 object-contain"
            />
            <span>Verified</span>
          </span>
        </div>

        <div className="text-xs text-gray-400 pt-2">
          <span>License Number: </span>
          <span className="font-semibold text-gray-900">BL-123456789</span>
          <span className="ml-4 mr-1">Expires:</span>
          <span className="font-semibold text-gray-900">Dec 31, 2025</span>
        </div>
      </div>
      <div className="space-y-3">
        <h4 className="text-xs font-semibold text-gray-900">
          Upload New License
        </h4>

        <div className="border border-gray-200 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-white hover:bg-gray-50/50 transition-colors cursor-pointer">
          <Upload className="w-6 h-6 text-gray-500 mb-2" />
          <p className="text-xs font-semibold text-gray-900">
            Click to upload or drag and drop
          </p>
          <p className="text-[11px] text-gray-400 mt-0.5">
            PDF, JPG, PNG up to 10MB
          </p>
        </div>
        <button
          type="button"
          className="w-full h-10 bg-[#080811] text-white text-xs font-medium rounded-xl hover:bg-black transition-colors shadow-sm flex items-center justify-center"
        >
          Submit for Verification
        </button>
      </div>
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-semibold text-gray-900">
          Additional Documents
        </h4>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3.5 border border-gray-100 rounded-xl bg-white">
            <div className="flex items-center space-x-3">
              <img 
                src={DocumentIcon} 
                alt="Tax Certificate" 
                className="w-5 h-5 object-contain" 
              />
              <div>
                <p className="text-xs font-semibold text-gray-900">Tax Certificate</p>
                <p className="text-[11px] text-gray-400">Uploaded Jan 10, 2025</p>
              </div>
            </div>

            <span className="inline-flex items-center justify-center h-6 px-3 bg-black text-white text-[11px] font-medium rounded-md">
              Verified
            </span>
          </div>
          <div className="flex items-center justify-between p-3.5 border border-gray-100 rounded-xl bg-white">
            <div className="flex items-center space-x-3">
              <img 
                src={DocumentIcon} 
                alt="Insurance Certificate" 
                className="w-5 h-5 object-contain" 
              />
              <div>
                <p className="text-xs font-semibold text-gray-900">Insurance Certificate</p>
                <p className="text-[11px] text-gray-400">Uploaded Jan 5, 2025</p>
              </div>
            </div>

            <span className="inline-flex items-center justify-center h-6 px-3 bg-black text-white text-[11px] font-medium rounded-md">
              Verified
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}