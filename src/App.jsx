import React, { useState } from 'react';
import SelectType from './components/SelectType';
import WholesalerLogin from './components/WholesalerLogin';
import ResetPassword from './components/ResetPassword.jsx';

function App() {
  const [selectedType, setSelectedType] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('selectType'); 

  const handleSelectType = (type) => {
    setSelectedType(type);
    if (type === 'wholesaler') {
      setCurrentScreen('login');
    }
  };

  const handleForgotPassword = () => {
    setCurrentScreen('resetPassword');
  };

  const handleBackToLogin = () => {
    setCurrentScreen('login');
  };

  const handleSelectResetMethod = (method) => {
    console.log('Selected verification method:', method);
  };

  return (
    <div className="min-h-screen">
      {currentScreen === 'resetPassword' ? (
        <ResetPassword 
          onSelectMethod={handleSelectResetMethod} 
          onBackToLogin={handleBackToLogin} 
        />
      ) : currentScreen === 'login' && selectedType === 'wholesaler' ? (
        <WholesalerLogin 
          onSelectType={handleSelectType} 
          onForgotPassword={handleForgotPassword}
        />
      ) : (
        <SelectType onSelectType={handleSelectType} />
      )}
    </div>
  );
}

export default App;