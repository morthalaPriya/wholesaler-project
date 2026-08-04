import React from 'react';
import logoIcon from '../assets/Icon(7).svg';
import successCheckIcon from '../assets/Green tick logo.svg';

export default function PasswordSuccess({ onBackToLogin }) {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row font-sans bg-[#FAF9FF] overflow-hidden">
      
      <div
        className="md:w-1/2 w-full p-10 md:p-16 text-white flex flex-col justify-center h-full relative overflow-hidden shrink-0"
        style={{
          background: 'linear-gradient(135deg, #155DFC 0%, #9810FA 100%)'
        }}
      >
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

      <div className="md:w-1/2 w-full h-full flex items-center justify-center p-6 md:p-12 shrink-0">
        <div className="w-full max-w-[440px] h-[550px] bg-white p-6 md:p-8 rounded-xl shadow-2xl shadow-slate-500/50  flex flex-col justify-between">
          
          <div className="text-center">
            <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
              Password Reset Successful
            </h2>
            <p className="text-xs text-slate-400 mt-1 font-normal">
              Your password has been successfully reset
            </p>
          </div>

          <div className="flex flex-col items-center my-auto">
            <div className="w-20 h-20 mb-4 flex items-center justify-center">
              <img 
                src={successCheckIcon} 
                alt="Success" 
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-base font-semibold text-slate-900 mb-2">
              All Set!
            </h3>
            <p className="text-xs text-slate-500 text-center max-w-[320px] leading-relaxed">
              Your password has been reset successfully. You can now log in with your new password.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-[#F3F3F5] p-4 rounded-xl space-y-2.5">
              <p className="text-xs font-semibold text-slate-800 mb-2">
                Next Steps:
              </p>

              <div className="flex items-center gap-2.5 text-xs">
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
                <span className="text-slate-600">Use your new password to log in</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs">
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
                <span className="text-slate-600">Consider enabling two-factor authentication</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs">
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
                <span className="text-slate-600">Keep your password secure and don't share it</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onBackToLogin}
              className="w-full py-3.5 rounded-xl font-medium text-xs bg-[#030213] text-white hover:bg-slate-900 transition-all shadow-md cursor-pointer"
            >
              Back to Login
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}