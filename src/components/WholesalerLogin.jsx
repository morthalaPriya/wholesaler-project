import React, { useState } from 'react';
import retailerIcon from '../assets/Icon(1).svg';
import wholesalerIcon from '../assets/Icon(2).svg';
import googleIcon from '../assets/Icon(3).svg';
import appleIcon from '../assets/Icon(4).svg';
import emailIcon from '../assets/Icon(5).svg';
import lockIcon from '../assets/Icon(6).svg';
import logoIcon from '../assets/Icon(7).svg';

export default function WholesalerLogin({ onSelectType }) {
  const [loginMethod, setLoginMethod] = useState('password');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleAccountTypeSelect = (type) => {
    setLoginMethod('password');
    if (onSelectType) {
      onSelectType(type);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginMethod === 'otp') {
      alert(`Sending OTP code to: ${email}`);
    } else {
      alert(`Logging in with email: ${email}`);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row font-sans">
        <div 
         className="relative md:w-1/2 w-full p-10 md:p-14 text-white flex flex-col justify-center min-h-screen overflow-hidden transition-colors duration-500"
         style={{ 
          backgroundColor: loginMethod === 'otp' ? '#155DFC' : '#4E0860' 
        }}
      >
        {loginMethod === 'password' && (
          <>
            <div 
              className="absolute -top-16 -left-16 w-[320px] h-[320px] rounded-full pointer-events-none"
              style={{ background: '#D9D9D9', opacity: 0.45, filter: 'blur(100px)' }}
            />
            <div 
              className="absolute top-[35%] -right-16 w-[280px] h-[280px] rounded-full pointer-events-none"
              style={{ background: '#D9D9D9', opacity: 0.45, filter: 'blur(100px)' }}
            />
            <div 
              className="absolute -bottom-20 left-[20%] w-[350px] h-[350px] rounded-full pointer-events-none"
              style={{ background: '#D9D9D9', opacity: 0.30, filter: 'blur(100px)' }}
            />
          </>
        )}
        <div className="relative z-10 w-full max-w-[420px] mx-auto flex flex-col justify-center">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-8">
            <img src={logoIcon} alt="Logo" className="w-8 h-8 object-contain" />
          </div>
          <h1 className="text-[32px] md:text-[34px] font-bold tracking-tight text-white mb-4 leading-tight">
            B2B Wholesale Platform
          </h1>
          <p className="text-white/90 text-sm leading-relaxed font-normal mb-10 max-w-[380px]">
            Connect wholesalers and retailers in a seamless marketplace. Build partnerships, manage inventory, and grow your business.
          </p>
          <div className="grid grid-cols-3 gap-6 md:gap-8 pt-2">
            <div>
              <h3 className="text-2xl md:text-[28px] font-bold text-white tracking-tight">10K+</h3>
              <p className="text-white/80 text-[11px] md:text-xs mt-1 font-normal leading-tight">Active Users</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-[28px] font-bold text-white tracking-tight">50K+</h3>
              <p className="text-white/80 text-[11px] md:text-xs mt-1 font-normal leading-tight">Products</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-[28px] font-bold text-white tracking-tight">99%</h3>
              <p className="text-white/80 text-[11px] md:text-xs mt-1 font-normal leading-tight">Satisfaction</p>
            </div>
          </div>

        </div>
      </div>
      <div className="md:w-1/2 w-full bg-[#f4f5f8] flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-xl bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
          
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-slate-800">Welcome Back</h2>
            <p className="text-xs text-slate-500 mt-1">
              Select your account type to continue
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={() => handleAccountTypeSelect('wholesaler')}
              className="h-[96px] w-full rounded-[8px] bg-[#030213] text-white flex flex-col items-center justify-center gap-2 shadow-sm transition-all"
            >
              <img src={wholesalerIcon} alt="Wholesaler" className="w-5 h-5 object-contain invert" />
              <span className="text-xs font-semibold tracking-wide">Wholesaler</span>
            </button>

            <button
              type="button"
              onClick={() => handleAccountTypeSelect('retailer')}
              className="h-[96px] w-full rounded-[8px] border border-slate-200 bg-white text-slate-800 flex flex-col items-center justify-center gap-2 hover:bg-[#ECECF0] transition-all"
            >
              <img src={retailerIcon} alt="Retailer" className="w-5 h-5 object-contain" />
              <span className="text-xs font-semibold tracking-wide">Retailer</span>
            </button>
          </div>
          <div className="bg-[#ECECF0] p-1 rounded-3xl flex mb-6">
            <button
              type="button"
              onClick={() => setLoginMethod('password')}
              className={`flex-1 py-2 text-xs font-semibold rounded-full transition-all ${
                loginMethod === 'password' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Password
            </button>
            <button
              type="button"
              onClick={() => setLoginMethod('otp')}
              className={`flex-1 py-2 text-xs font-semibold rounded-full transition-all ${
                loginMethod === 'otp' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              OTP
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <img src={emailIcon} alt="Email" className="w-4 h-4 opacity-50" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#ECECF0] border border-transparent rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-slate-300 transition-all"
                />
              </div>
            </div>
            {loginMethod === 'password' && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <img src={lockIcon} alt="Password" className="w-4 h-4 opacity-50" />
                    </div>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-2.5 bg-[#ECECF0] border border-transparent rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-slate-300 transition-all"
                    />
                  </div>
                </div>
                <div className="text-right">
                  <a href="#forgot" className="text-[13px] font-medium text-slate-900 hover:text-slate-900 hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-[#030213] text-white rounded-xl font-semibold text-xs hover:bg-slate-800 transition-all shadow-md mt-2"
            >
              {loginMethod === 'otp' ? 'Send OTP' : 'Sign In'}
            </button>
          </form>

          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <span className="relative bg-white px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              OR CONTINUE WITH
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl hover:bg-[#ECECF0] transition-all text-xs font-semibold text-slate-900"
            >
              <img src={googleIcon} alt="Google" className="w-4 h-4 object-contain" />
              Google
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl hover:bg-[#ECECF0] transition-all text-xs font-semibold text-slate-900"
            >
              <img src={appleIcon} alt="Apple" className="w-4 h-4 object-contain" />
              Apple
            </button>
          </div>

          <div className="text-center text-sm text-slate-500">
            New to the platform?{' '}
            <a href="#register" className="font-medium text-slate-900 hover:underline">
              Register as Wholesaler
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}