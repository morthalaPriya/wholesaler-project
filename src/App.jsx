import React, { useState } from 'react';
import SelectType from './components/LoginPage';
import WholesalerLogin from './components/WholesalerLogin';
import ResetPassword from './components/ResetPassword';
import VerifyIdentity from './components/Verify';

function App() {
  const [selectedType, setSelectedType] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('selectType'); 

  return (
    <div>
      {currentScreen === 'verifyIdentity' ? (
        <VerifyIdentity 
          onSendOtp={(email) => console.log('Sending OTP to', email)}
          onBackToLogin={() => setCurrentScreen('login')}
          onBackToMethod={() => setCurrentScreen('resetPassword')}
        />
      ) : currentScreen === 'resetPassword' ? (
        <ResetPassword 
          onSelectMethod={(method) => setCurrentScreen('verifyIdentity')} 
          onBackToLogin={() => setCurrentScreen('login')}
        />
      ) : currentScreen === 'login' && selectedType === 'wholesaler' ? (
        <WholesalerLogin 
          onSelectType={(type) => setSelectedType(type)} 
          onForgotPassword={() => setCurrentScreen('resetPassword')}
        />
      ) : (
        <SelectType onSelectType={(type) => {
          setSelectedType(type);
          if (type === 'wholesaler') setCurrentScreen('login');
        }} />
      )}
    </div>
  );
}

export default App;