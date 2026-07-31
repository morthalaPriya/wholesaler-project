import React, { useState } from 'react';

export default function CompanyForm() {
  const [formData, setFormData] = useState({
    companyName: 'TechWholesale Co.',
    description: 'Leading wholesale distributor of electronics and tech products',
    email: 'abc@abc.in',
    phone: '+1 (555) 123-4567',
    website: 'www.techwholesale.com',
    taxId: 'TX-123456789',
    businessType: 'Distributor',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Company details saved successfully!');
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-base font-semibold text-gray-900 font-heading">
          Company Information
        </h2>
        <p className="text-xs text-gray-400 mt-1">
          Update your company details and contact information
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full h-9 px-3 py-1 rounded-lg bg-[#F3F3F5] border-none text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Business Type
            </label>
            <input
              type="text"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="w-full h-9 px-3 py-1 rounded-lg bg-[#F3F3F5] border-none text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-9 px-3 py-1 rounded-lg bg-[#F3F3F5] border-none text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-9 px-3 py-1 rounded-lg bg-[#F3F3F5] border-none text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Website
            </label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full h-9 px-3 py-1 rounded-lg bg-[#F3F3F5] border-none text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Tax ID
            </label>
            <input
              type="text"
              name="taxId"
              value={formData.taxId}
              onChange={handleChange}
              className="w-full h-9 px-3 py-1 rounded-lg bg-[#F3F3F5] border-none text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Company Description
          </label>
          <textarea
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#F3F3F5] border-none text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 resize-none"
          />
        </div>
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-5 py-2.5 bg-black text-white text-xs font-medium rounded-xl hover:bg-gray-800 transition-colors shadow-xs cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}