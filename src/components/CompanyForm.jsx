import React from 'react';

export default function CompanyForm() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-base font-semibold text-gray-900">Company Information</h2>
        <p className="text-xs text-gray-400 mt-0.5">
          Update your company details and contact information
        </p>
      </div>

      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Company Name
            </label>
            <input
              type="text"
              defaultValue="TechWholesale Co."
              className="w-full h-[36px] px-[12px] py-[4px] rounded-lg bg-[#F3F3F5] border-none text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Business Type
            </label>
            <input
              type="text"
              defaultValue="Distributor"
              className="w-full h-[36px] px-[12px] py-[4px] rounded-lg bg-[#F3F3F5] border-none text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Email
            </label>
            <input
              type="email"
              defaultValue="abc@abc.in"
              className="w-full h-[36px] px-[12px] py-[4px] rounded-lg bg-[#F3F3F5] border-none text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Phone
            </label>
            <input
              type="text"
              defaultValue="+1 (555) 123-4567"
              className="w-full h-[36px] px-[12px] py-[4px] rounded-lg bg-[#F3F3F5] border-none text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Website
            </label>
            <input
              type="text"
              defaultValue="www.techwholesale.com"
              className="w-full h-[36px] px-[12px] py-[4px] rounded-lg bg-[#F3F3F5] border-none text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Tax ID
            </label>
            <input
              type="text"
              defaultValue="TX-123456789"
              className="w-full h-[36px] px-[12px] py-[4px] rounded-lg bg-[#F3F3F5] border-none text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">
            Company Description
          </label>
          <textarea
            rows={3}
            defaultValue="Leading wholesale distributor of electronics and tech products"
            className="w-full px-[12px] py-[8px] rounded-lg bg-[#F3F3F5] border-none text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 resize-none"
          />
        </div>
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-5 py-2.5 bg-black text-white text-xs font-medium rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}