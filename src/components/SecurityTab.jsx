import React, { useState } from 'react';
import shieldIcon from '../assets/Icon (13).png';
import checkIcon from '../assets/Icon (4).png';
import keyIcon from '../assets/Vector (1).png';

export default function SecurityTab() {
  const [twoFactor, setTwoFactor] = useState(true);
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const [notifications, setNotifications] = useState({
    email: true,
    orders: true,
    lowStock: true,
    security: true,
    marketing: false,
  });

  const handlePasswordChange = (e) => {
    e.preventDefault();
    alert('Password updated successfully!');
    setPasswords({ current: '', new: '', confirm: '' });
  };

  const toggleNotification = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto text-left font-sans">
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xs space-y-4">
        <div>
          <h2 className="text-sm font-bold text-gray-900">Change Password</h2>
          <p className="text-xs text-gray-400 mt-1">
            Update your password to keep your account secure
          </p>
        </div>

        <form onSubmit={handlePasswordChange} className="space-y-3 pt-2">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Current Password
            </label>
            <input
              type="password"
              value={passwords.current}
              onChange={(e) =>
                setPasswords({ ...passwords, current: e.target.value })
              }
              placeholder="Enter current password"
              className="w-full h-9 px-3 py-1 bg-[#F3F3F5] border-none rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              value={passwords.new}
              onChange={(e) =>
                setPasswords({ ...passwords, new: e.target.value })
              }
              placeholder="Enter new password"
              className="w-full h-9 px-3 py-1 bg-[#F3F3F5] border-none rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              value={passwords.confirm}
              onChange={(e) =>
                setPasswords({ ...passwords, confirm: e.target.value })
              }
              placeholder="Confirm new password"
              className="w-full h-9 px-3 py-1 bg-[#F3F3F5] border-none rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300"
              required
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white text-xs font-medium rounded-xl hover:bg-gray-800 transition-colors cursor-pointer flex items-center gap-2"
            >
              <img src={keyIcon} alt="Key" className="w-3.5 h-3.5 object-contain invert" />
              <span>Change Password</span>
            </button>
          </div>
        </form>
      </div>
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xs space-y-4">
        <div>
          <h2 className="text-sm font-bold text-gray-900">
            Two-Factor Authentication
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Add an extra layer of security to your account
          </p>
        </div>
        <div className="border border-gray-100 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
              <img src={shieldIcon} alt="Shield" className="w-4 h-4 object-contain" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-900">
                Two-Factor Authentication
              </p>
              <p className="text-[11px] text-gray-400">
                {twoFactor ? 'Enabled' : 'Disabled'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setTwoFactor(!twoFactor)}
            className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors cursor-pointer ${
              twoFactor ? 'bg-black' : 'bg-gray-200'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white shadow-xs transition-transform ${
                twoFactor ? 'translate-x-4' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
        {twoFactor && (
          <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-3.5 flex items-start gap-3">
            <img src={checkIcon} alt="Check" className="w-4 h-4 mt-0.5 object-contain shrink-0" />
            <div>
              <p className="text-xs font-semibold text-emerald-900">
                2FA is Active
              </p>
              <p className="text-[11px] text-emerald-700 mt-0.5">
                Your account is protected with two-factor authentication using authenticator app.
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xs space-y-4">
        <div>
          <h2 className="text-sm font-bold text-gray-900">
            Notification Preferences
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Manage how you receive notifications
          </p>
        </div>

        <div className="divide-y divide-gray-100">
          {[
            {
              id: 'email',
              title: 'Email Notifications',
              desc: 'Receive email about your account activity',
            },
            {
              id: 'orders',
              title: 'Order Notifications',
              desc: 'Get notified about new orders',
            },
            {
              id: 'lowStock',
              title: 'Low Stock Alerts',
              desc: 'Alert when products are low on stock',
            },
            {
              id: 'security',
              title: 'Security Alerts',
              desc: 'Important security updates',
            },
            {
              id: 'marketing',
              title: 'Marketing Emails',
              desc: 'Promotional offers and updates',
            },
          ].map((item) => (
            <div
              key={item.id}
              className="py-3 flex items-center justify-between first:pt-0 last:pb-0"
            >
              <div>
                <p className="text-xs font-semibold text-gray-900">
                  {item.title}
                </p>
                <p className="text-[11px] text-gray-400 mt-0.5">{item.desc}</p>
              </div>

              <button
                type="button"
                onClick={() => toggleNotification(item.id)}
                className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors cursor-pointer ${
                  notifications[item.id] ? 'bg-black' : 'bg-gray-200'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white shadow-xs transition-transform ${
                    notifications[item.id] ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}