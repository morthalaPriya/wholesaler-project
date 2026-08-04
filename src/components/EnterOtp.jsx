import React, { useState, useEffect, useRef } from 'react';
import backButtonIcon from '../assets/Button.svg';
import logoIcon from '../assets/Icon(7).svg';
import tickIcon from '../assets/tick.svg';

export default function EnterOtp({ 
  targetDestination = 'jhgh@dlw.com', 
  onVerifyOtp, 
  onBackToLogin, 
  onBackToMethod 
}) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const [seconds, setSeconds] = useState(54);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [seconds]);

  const fullOtp = otp.join('');
  const isComplete = fullOtp.length === 6;

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; 

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim().slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const newOtp = pastedData.split('');
      while (newOtp.length < 6) newOtp.push('');
      setOtp(newOtp);

      const nextIndex = Math.min(pastedData.length, 5);
      inputRefs.current[nextIndex]?.focus();
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (onVerifyOtp) {
      onVerifyOtp(fullOtp);
    } else {
      alert(`Verifying OTP: ${fullOtp}`);
    }
  }

  function handleResend() {
    if (seconds === 0) {
      setSeconds(60);
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
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

      <div className="md:w-1/2 w-full flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-[460px] h-[480px] bg-white p-8 md:p-10 rounded-xl shadow-2xl shadow-slate-500/50 border border-slate-100 flex flex-col justify-center">
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
              Enter Verification Code
            </h2>
            <p className="text-sm text-slate-500 mt-1 font-normal">
              We've sent a code to your email
            </p>
          </div>
          <div className="mb-6 bg-[#F0FDF4] border border-[#DCFCE7] rounded-xl p-3 flex items-start justify-start gap-2">
            <img src={tickIcon} alt="Success" className="w-4 h-4" />
            <span className="text-md font-medium text-[#16A34A]">
              Verification code sent successfully!
            </span>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-3">
                Enter 6-digit code
              </label>

              <div className=" flex flex-row  justify-center gap-1">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    className="w-12 h-12 text-center text-sm font-semibold bg-[#F3F3F5] border border-transparent rounded-xl text-slate-800 focus:outline-none focus:bg-white focus:border-slate-300 transition-all cursor-pointer "
                  />
                ))}
              </div>

              <p className="text-[11px] text-slate-400 text-center mt-3">
                Sent to <span className="text-slate-600 font-medium">{targetDestination}</span>
              </p>
            </div>

            <button
              type="submit"
              disabled={!isComplete}
              className={`w-full py-3.5 rounded-xl font-medium text-xs transition-all shadow-md cursor-pointer ${
                isComplete 
                  ? 'bg-[#030213] text-white hover:bg-slate-900' 
                  : 'bg-[#737380] text-white'
              }`}
            >
              Verify OTP
            </button>
          </form>

          <div className="text-center mt-6 space-y-1">
            <p className="text-xs text-slate-400">Didn't receive the code?</p>
            {seconds > 0 ? (
              <p className="text-xs text-slate-400 font-normal">
                Resend in {seconds}s
              </p>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="text-xs font-semibold text-slate-900 hover:underline cursor-pointer"
              >
                Resend Code
              </button>
            )}
          </div>

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