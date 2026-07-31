import React, { useState } from 'react';
import uploadIcon from '../assets/Icon (24).png';
import verifiedIcon from '../assets/Icon (4).png';
import docIcon from '../assets/Icon (8).png';

const documentList = [
  {
    id: 1,
    title: 'Tax Certificate',
    uploadDate: 'Uploaded Jan 10, 2025',
    status: 'Verified',
  },
  {
    id: 2,
    title: 'Insurance Certificate',
    uploadDate: 'Uploaded Jan 5, 2025',
    status: 'Verified',
  },
];

function DocumentRow({ title, uploadDate, status }) {
  return (
    <div className="flex items-center justify-between p-3.5 border border-gray-100 rounded-xl bg-white">
      <div className="flex items-center space-x-3">
        <img src={docIcon} alt="Document" className="w-5 h-5 object-contain" />
        <div>
          <p className="text-xs font-semibold text-gray-900">{title}</p>
          <p className="text-xs text-gray-400">{uploadDate}</p>
        </div>
      </div>

      <span className="inline-flex items-center justify-center h-6 px-3 bg-black text-white text-xs font-medium rounded-md">
        {status}
      </span>
    </div>
  );
}

export default function LicenseTab() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-6 w-full text-left">
      <div>
        <h2 className="text-base font-semibold text-gray-900">
          Business License & Documents
        </h2>
        <p className="text-xs text-gray-500 mt-0.5">
          Manage your business licenses and verification documents
        </p>
      </div>
      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Business License
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">
              Verified on Jan 15, 2025
            </p>
          </div>

          <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-1 rounded-full">
            <img src={verifiedIcon} alt="Verified" className="w-3.5 h-3.5 object-contain" />
            <span>Verified</span>
          </span>
        </div>

        <div className="text-xs text-gray-400 pt-2 flex flex-wrap gap-x-4 gap-y-1">
          <div>
            <span>License Number: </span>
            <span className="font-semibold text-gray-900">BL-123456789</span>
          </div>
          <div>
            <span>Expires: </span>
            <span className="font-semibold text-gray-900">Dec 31, 2025</span>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-xs font-semibold text-gray-900">
          Upload New License
        </h3>

        <label className="border border-gray-200 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-white hover:bg-gray-50/50 transition-colors cursor-pointer block">
          <input
            type="file"
            className="hidden"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
          />
          <img src={uploadIcon} alt="Upload" className="w-6 h-6 mb-2 object-contain" />
          <p className="text-xs font-semibold text-gray-900">
            {selectedFile ? selectedFile.name : 'Click to upload or drag and drop'}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">
            PDF, JPG, PNG up to 10MB
          </p>
        </label>

        <button
          type="button"
          className="w-full h-10 bg-gray-900 text-white text-xs font-medium rounded-xl hover:bg-black transition-colors shadow-sm flex items-center justify-center cursor-pointer"
        >
          Submit for Verification
        </button>
      </div>
      <div className="space-y-3 pt-2">
        <h3 className="text-xs font-semibold text-gray-900">
          Additional Documents
        </h3>

        <div className="space-y-3">
          {documentList.map((doc) => (
            <DocumentRow
              key={doc.id}
              title={doc.title}
              uploadDate={doc.uploadDate}
              status={doc.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}