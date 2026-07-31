import React, { useState } from 'react';
import backButtonIcon from '../assets/Button.svg';
import emailIcon from '../assets/Icon(6).svg';
import mobileIcon from '../assets/Icon(9).svg';
import logoIcon from '../assets/Icon(7).svg';

export default function VerifyIdentity({ 
  selectedMethod = 'email', 
  onSendOtp, 
  onBackToLogin, 
  onBackToMethod 
}) {
  const [inputValue, setInputValue] = useState('');

  const isEmail = selectedMethod === 'email';

  function handleSubmit(event) {
    event.preventDefault();
    if (onSendOtp) {
      onSendOtp({ method: selectedMethod, value: inputValue });
    } else {
      alert(`Sending OTP to ${isEmail ? 'email' : 'mobile'}: ${inputValue}`);
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row font-sans bg-[#FAF9FF]">
      
      <div
        className="md:w-1/2 w-full p-10 md:p-16 text-white flex flex-col justify-center min-h-screen relative overflow-hidden"
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
            className="w-10 h-10 md:w-9 md:h-9 object-contain"
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
      </div>

      <div className="md:w-1/2 w-full flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-[460px] h-[300px] bg-white p-8 md:p-10 rounded-2xl shadow-2xl shadow-slate-500/50 border border-slate-100 flex flex-col justify-center">

          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-slate-900 tracking-tight">
              Verify Your Identity
            </h2>
            <p className="text-sm text-slate-500 mt-1 font-normal">
              {isEmail ? 'Enter your email address' : 'Enter your mobile number'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-2">
                {isEmail ? 'Email Address' : 'Mobile Number'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <img 
                    src={isEmail ? emailIcon : mobileIcon} 
                    alt={isEmail ? 'Email' : 'Mobile'} 
                    className="w-4 h-4 opacity-40" 
                  />
                </div>
                <input
                  type={isEmail ? 'email' : 'tel'}
                  required
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  placeholder={isEmail ? 'your@email.com' : '+1 (555) 000-0000'}
                  className="w-full pl-10 pr-4 py-3 bg-[#F3F4F6] border border-transparent rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-slate-300 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#030213] text-white rounded-xl font-medium text-xs hover:bg-slate-900 transition-all shadow-md cursor-pointer"
            >
              Send OTP
            </button>
          </form>

          <div className="flex items-center justify-center gap-6 text-xs mt-8">
            <span className="text-slate-400">Remember your <br /><center>password?</center></span>
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