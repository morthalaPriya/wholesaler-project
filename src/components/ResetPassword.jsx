import React from 'react';
import emailIcon from '../assets/Icon(8).svg';
import mobileIcon from '../assets/Icon(9).svg';
import logoIcon from '../assets/Icon(7).svg';

export default function ResetPassword({ onSelectMethod, onBackToLogin }) {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row font-sans bg-[#FAF9FF]">
      
      <div
        className="md:w-1/2 w-full p-10 md:p-16 text-white flex flex-col justify-between min-h-screen relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #155DFC 0%, #9810FA 100%)'
        }}
      >
        <div className="hidden md:block"></div>

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
              <h3 className="text-2xl md:text-[20px] font-bold text-white tracking-tight">100%</h3>
              <p className="text-white/80 text-[11px] md:text-sm mt-1 font-normal leading-tight">Secure</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl md:text-[20px] font-bold text-white tracking-tight">2-Step</h3>
              <p className="text-white/80 text-[11px] md:text-xs mt-1 font-normal leading-tight">Verification</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl md:text-[20px] font-bold text-white tracking-tight">24/7</h3>
              <p className="text-white/80 text-[11px] md:text-xs mt-1 font-normal leading-tight">Support</p>
            </div>
          </div>
        </div>

        <div className="hidden md:block"></div>
      </div>

      <div className="md:w-1/2 w-full flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-[460px] h-[320px] bg-white p-8 md:p-10 rounded-2xl shadow-2xl shadow-slate-500/50 border border-slate-100 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-slate-900 tracking-tight">Reset Password</h2>
            <p className="text-sm text-slate-500 mt-1 font-normal">
              Choose your preferred verification method
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <button
              type="button"
              onClick={() => onSelectMethod && onSelectMethod('email')}
              className="group p-5 rounded-xl border border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-sm transition-all flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center mb-3 group-hover:bg-slate-200/70 transition-colors">
                <img src={emailIcon} alt="Email" className="w-5 h-5 opacity-100" />
              </div>
              <span className="text-sm font-semibold text-slate-800 mb-0.5">Verify via Email</span>
              <span className="text-[11px] text-slate-400 font-normal">Receive OTP by email</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectMethod && onSelectMethod('mobile')}
              className="group p-5 rounded-xl border border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-sm transition-all flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center mb-3 group-hover:bg-slate-200/70 transition-colors">
                <img src={mobileIcon} alt="Mobile" className="w-5 h-5 opacity-100" />
              </div>
              <span className="text-sm font-semibold text-slate-800 mb-0.5">Verify via Mobile</span>
              <span className="text-[11px] text-slate-400 font-normal">Receive OTP by SMS</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 text-xs">
            <span className="text-slate-400">Remember your <br /><center>password?</center> </span>
            <button
              type="button"
              onClick={onBackToLogin}
              className="font-semibold text-slate-900 hover:underline transition-all cursor-pointer"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}