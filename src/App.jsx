import React, { useState } from 'react';
import SelectType from './components/loginPage';
import WholesalerLogin from './components/WholesalerLogin';
import ResetPassword from './components/ResetPassword';
import VerifyIdentity from './components/Verify';
import EnterOtp from './components/EnterOtp';

function App() {
  const [selectedType, setSelectedType] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('selectType');
  
  const [selectedMethod, setSelectedMethod] = useState('email');
  const [targetDestination, setTargetDestination] = useState('');

  function handleSelectMethod(method) {
    setSelectedMethod(method);
    setCurrentScreen('verifyIdentity');
  }

  function handleSendOtp(data) {
    setTargetDestination(data.value || 'your registered contact');
    setCurrentScreen('enterOtp');
  }

  function handleVerifyOtp(otp) {
    console.log('OTP Verified successfully:', otp);
    alert(`OTP Verified: ${otp}`);
  }

  return (
    <div>
      {currentScreen === 'enterOtp' ? (
        <EnterOtp
          targetDestination={targetDestination}
          onVerifyOtp={handleVerifyOtp}
          onBackToLogin={() => setCurrentScreen('login')}
          onBackToMethod={() => setCurrentScreen('verifyIdentity')}
        />
      ) : currentScreen === 'verifyIdentity' ? (
        <VerifyIdentity 
          selectedMethod={selectedMethod}
          onSendOtp={handleSendOtp}
          onBackToLogin={() => setCurrentScreen('login')}
          onBackToMethod={() => setCurrentScreen('resetPassword')}
        />
      ) : currentScreen === 'resetPassword' ? (
        <ResetPassword 
          onSelectMethod={handleSelectMethod} 
          onBackToLogin={() => setCurrentScreen('login')}
        />
      ) : currentScreen === 'login' && selectedType === 'wholesaler' ? (
        <WholesalerLogin 
          onSelectType={(type) => setSelectedType(type)} 
          onForgotPassword={() => setCurrentScreen('resetPassword')}
        />
      ) : (
        <SelectType 
          onSelectType={(type) => {
            setSelectedType(type);
            if (type === 'wholesaler') setCurrentScreen('login');
          }} 
        />
      )}
    </div>
  );
}

export default App;