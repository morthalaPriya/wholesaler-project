import React, { useState } from 'react';
import backButtonIcon from '../assets/Button.svg';
import logoIcon from '../assets/Icon(7).svg';
import tickIcon from '../assets/tick.svg';
import eyeIcon from '../assets/eye.svg';

export default function NewPassword({ onResetSuccess, onBackToLogin, onBackToMethod }) {
  const [newPassword, setNewPassword] = useState('nbmfgdsdg');
  const [confirmPassword, setConfirmPassword] = useState('ndgfsdhgnmjh');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const hasMinLength = newPassword.length >= 8;
  const hasUppercase = /[A-Z]/.test(newPassword);
  const hasLowercase = /[a-z]/.test(newPassword);
  const hasNumber = /[0-9]/.test(newPassword);
  const hasSpecialChar = /[!@#$%^&*]/.test(newPassword);

  const missingRules = [];
  if (!hasUppercase) missingRules.push('One uppercase letter');
  if (!hasNumber) missingRules.push('One number');
  if (!hasSpecialChar) missingRules.push('One special character');

  const isValidPassword =
    hasMinLength &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialChar &&
    newPassword === confirmPassword;

  function handleSubmit(event) {
    event.preventDefault();
    if (isValidPassword) {
      if (onResetSuccess) {
        onResetSuccess(newPassword);
      } else {
        alert('Password successfully reset!');
      }
    }
  }

  const RequirementCheck = ({ isMet, label }) => (
    <div className="flex items-center gap-2 text-[11px]">
      {isMet ? (
        <div
          className="w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0"
          style={{ borderColor: '#00A63E', color: '#00A63E' }}
        >
          <svg
            className="w-2.5 h-2.5"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="2.5 6 5 8.5 9.5 3.5" />
          </svg>
        </div>
      ) : (
        <div className="w-3.5 h-3.5 rounded-full border border-slate-300 flex items-center justify-center shrink-0">
          <svg
            className="w-2.5 h-2.5 text-slate-300"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="2.5 6 5 8.5 9.5 3.5" />
          </svg>
        </div>
      )}
      <span className={isMet ? 'text-slate-700' : 'text-slate-400'}>
        {label}
      </span>
    </div>
  );

  return (
    <div className="h-screen w-full flex flex-col md:flex-row font-sans bg-[#FAF9FF] overflow-hidden">

      <div
        className="md:w-1/2 w-full p-10 md:p-16 text-white flex flex-col justify-center h-full relative overflow-hidden shrink-0"
        style={{
          background: 'linear-gradient(135deg, #155DFC 0%, #9810FA 100%)'
        }}
      >
        <button
          type="button"
          onClick={onBackToMethod}
          className="absolute top-6 left-6 md:top-8 md:left-8 hover:opacity-80 transition-opacity cursor-pointer z-20"
        >
          <img
            src={backButtonIcon}
            alt="Back"
            className="w-8 h-8 md:w-9 md:h-9 object-contain"
          />
        </button>

        <div className="relative z-10 w-full max-w-[440px] mx-auto flex flex-col justify-center my-auto">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
            <img src={logoIcon} alt="Logo" className="w-8 h-8 object-contain" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
            Secure Password Reset
          </h1>
          <p className="text-white/80 text-lg leading-relaxed font-normal mb-12 max-w-[400px]">
            We'll help you regain access to your <br />account securely.
          </p>

          <div className="flex justify-between items-start pt-2 max-w-[230px]">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl md:text-[23px] font-bold text-white tracking-tight">100%</h3>
              <p className="text-white/80 text-[11px] md:text-sm mt-1 font-normal leading-tight">Secure</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl md:text-[23px] font-bold text-white tracking-tight">2-Step</h3>
              <p className="text-white/80 text-[11px] md:text-xs mt-1 font-normal leading-tight">Verification</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl md:text-[23px] font-bold text-white tracking-tight">24/7</h3>
              <p className="text-white/80 text-[11px] md:text-xs mt-1 font-normal leading-tight">Support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 w-full h-full flex items-center justify-center p-6 md:p-12 shrink-0">
        <div className="w-[480px] h-[580px] bg-white p-6 md:p-8 rounded-xl shadow-2xl shadow-slate-500/50 flex flex-col justify-between">

          <div className="text-center">
            <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
              Create New Password
            </h2>
            <p className="text-xs text-slate-400 mt-0.5 font-normal">
              Create a strong password for your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">

            <div>
              <label className="block text-[11px] font-semibold text-slate-800 mb-1">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full pl-3.5 pr-9 py-2 bg-[#F3F3F5] border border-transparent rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-slate-300 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                >
                  <img
                    src={eyeIcon}
                    alt="Toggle view"
                    className="w-4 h-4 opacity-40 hover:opacity-70 transition-opacity"
                  />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-800 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full pl-3.5 pr-9 py-2 bg-[#F3F3F5] border border-transparent rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-slate-300 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                >
                  <img
                    src={eyeIcon}
                    alt="Toggle view"
                    className="w-4 h-4 opacity-40 hover:opacity-70 transition-opacity"
                  />
                </button>
              </div>
            </div>

            <div className="bg-[#F3F3F5] p-3 rounded-xl space-y-1.5">
              <p className="text-[11px] font-medium text-slate-700 mb-1">
                Password must contain:
              </p>

              <RequirementCheck isMet={hasMinLength} label="At least 8 characters" />
              <RequirementCheck isMet={hasUppercase} label="One uppercase letter" />
              <RequirementCheck isMet={hasLowercase} label="One lowercase letter" />
              <RequirementCheck isMet={hasNumber} label="One number" />
              <RequirementCheck isMet={hasSpecialChar} label="One special character (!@#$%^&*)" />
            </div>

            {missingRules.length > 0 && (
              <div className="border border-slate-300/80 bg-[#ffffff] rounded-md p-2.5 flex items-start gap-2">
                <div className="w-4 h-4 rounded-full border border-[F3F3F5] text-[#D4183DE5] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  !
                </div>
                <p className="text-[11px] text-[#D4183DE5] leading-tight font-normal">
                  Password must contain: {missingRules.join(', ')}
                </p>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-medium text-xs bg-[#030213] text-white hover:bg-slate-900 transition-all shadow-md cursor-pointer mt-1"
            >
              Reset Password
            </button>
          </form>

          <div className="flex items-start justify-center gap-5  mt-4">
            <span className="text-xs text-slate-400 text-right leading-[1.28] block translate-y-[0px]">
              Remember your <br /> <center>password?</center>
            </span>
            <button
              type="button"
              onClick={onBackToLogin}
              className="font-semibold text-[13px] text-slate-900 hover:underline transition-all cursor-pointer"
            >
              Back to Login
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}