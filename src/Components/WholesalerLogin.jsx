
import React, { useState } from 'react';
import retailerIcon from '../assets/Icon(1).svg';
import wholesalerIcon from '../assets/Icon(2).svg';
import googleIcon from '../assets/Icon(3).svg';
import appleIcon from '../assets/Icon(4).svg';
import emailIcon from '../assets/Icon(6).svg';
import lockIcon from '../assets/Icon(5).svg';
import logoIcon from '../assets/Icon(7).svg';

export default function WholesalerLogin({ onLogin, onForgotPassword, onRegister }) {

  const [loginMethod, setLoginMethod] = useState('password');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleAccountTypeSelect(accountType) {
    if (accountType === 'retailer') {
      alert('Retailer portal is currently unavailable. Please continue as Wholesaler.');
      return;
    }

    setLoginMethod('password');
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (loginMethod === 'otp') {
      alert(`Sending OTP code to: ${email}`);
    } else {
      alert(`Logging in with email: ${email}`);

      if (onLogin) {
        onLogin();
      }
    }
  }

  const isOtpSelected = loginMethod === 'otp';
  const isPasswordSelected = loginMethod === 'password';

  return (
    <div className="h-screen w-full flex flex-col md:flex-row font-sans overflow-hidden bg-[#f4f5f8]">
      <div
        className="relative md:w-1/2 w-full p-6 md:p-10 text-white flex flex-col justify-center h-full overflow-hidden transition-colors duration-500 shrink-0"
        style={{
          backgroundColor: isOtpSelected ? '#155DFC' : '#4E0860'
        }}
      >
        {isPasswordSelected && (
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

          <p className="text-white/90 text-lg leading-relaxed font-normal mb-10 max-w-[400px]">
            Connect wholesalers and retailers in a <br /> seamless marketplace. Build partnerships,<br /> manage inventory, and grow your business.
          </p>

          <div className="flex justify-between items-start pt-2 max-w-[280px]">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl md:text-[22px] font-bold text-white tracking-tight">10K+</h3>
              <p className="text-white/80 text-[11px] md:text-xs mt-1 font-normal leading-tight">Active Users</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl md:text-[22px] font-bold text-white tracking-tight">50K+</h3>
              <p className="text-white/80 text-[11px] md:text-xs mt-1 font-normal leading-tight">Products</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl md:text-[22px] font-bold text-white tracking-tight">99%</h3>
              <p className="text-white/80 text-[11px] md:text-xs mt-1 font-normal leading-tight">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 w-full h-full flex items-center justify-center p-4 md:p-6 overflow-y-auto shrink-0">
        <div className="w-full max-w-[440px] bg-white p-6 md:p-8 rounded-xl shadow-2xl shadow-slate-500/50 border border-slate-100 my-auto">
          <div className="text-center mb-4">
            <h2 className="text-lg font-bold text-slate-800">Welcome Back</h2>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Select your account type to continue
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button
              type="button"
              onClick={() => handleAccountTypeSelect('wholesaler')}
              className="h-[76px] w-full rounded-xl bg-[#030213] text-white flex flex-col items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              <img src={wholesalerIcon} alt="Wholesaler" className="w-4 h-4 object-contain invert" />
              <span className="text-xs font-semibold tracking-wide">Wholesaler</span>
            </button>
            <button
              type="button"
              onClick={() => handleAccountTypeSelect('retailer')}
              className="h-[76px] w-full rounded-xl border border-slate-200 bg-white text-slate-800 flex flex-col items-center justify-center gap-1.5 hover:bg-[#ECECF0] transition-all cursor-pointer"
            >
              <img src={retailerIcon} alt="Retailer" className="w-4 h-4 object-contain" />
              <span className="text-xs font-semibold tracking-wide">Retailer</span>
            </button>
          </div>
          <div className="bg-[#ECECF0] p-1 rounded-2xl flex mb-4">
            <button
              type="button"
              onClick={() => setLoginMethod('password')}
              className={
                'flex-1 py-1.5 text-xs font-semibold rounded-xl cursor-pointer transition-all ' +
                (isPasswordSelected
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700')
              }
            >
              Password
            </button>
            <button
              type="button"
              onClick={() => setLoginMethod('otp')}
              className={
                'flex-1 py-1.5 text-xs font-semibold rounded-xl cursor-pointer transition-all ' +
                (isOtpSelected
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700')
              }
            >
              OTP
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">
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
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-2 bg-[#ECECF0] border border-transparent rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-slate-300 transition-all"
                />
              </div>
            </div>

            {isPasswordSelected && (
              <>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
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
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-2 bg-[#ECECF0] border border-transparent rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-slate-300 transition-all"
                    />
                  </div>
                </div>

                <div className="text-right">
                  <button
                    type="button"
                    onClick={onForgotPassword}
                    className="text-xs font-medium text-slate-900 hover:underline cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full py-2.5 bg-[#030213] text-white rounded-xl font-semibold text-xs hover:bg-slate-800 transition-all cursor-pointer shadow-md"
            >
              {isOtpSelected ? 'Send OTP' : 'Sign In'}
            </button>
          </form>
          <div className="relative my-4 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <span className="relative bg-white px-3 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
              OR CONTINUE WITH
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button
              type="button"
              className="flex items-center justify-center gap-2 py-2 border border-slate-200 rounded-xl hover:bg-[#ECECF0] transition-all cursor-pointer text-xs font-semibold text-slate-900"
            >
              <img src={googleIcon} alt="Google" className="w-4 h-4 object-contain" />
              Google
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 py-2 border border-slate-200 rounded-xl hover:bg-[#ECECF0] transition-all cursor-pointer text-xs font-semibold text-slate-900"
            >
              <img src={appleIcon} alt="Apple" className="w-4 h-4 object-contain" />
              Apple
            </button>
          </div>
          <div className="text-center text-[13px] text-slate-500">
            New to the platform?{' '}
            <button
              type="button"
              onClick={onRegister}
              className="font-medium text-[15px] text-slate-900 hover:underline cursor-pointer"
            >
              Register as Wholesaler
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}