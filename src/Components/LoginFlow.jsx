import React, { useState } from 'react';

import SelectType from './LoginPage';
import WholesalerLogin from './WholesalerLogin';
import ResetPassword from './ResetPassword';
import VerifyIdentity from './Verify';
import EnterOtp from './EnterOtp';
import CreateNewPassword from './NewPassword';
import PasswordSuccess from './PasswordSuccess';

function LoginFlow({ onLogin }) {
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
        console.log('OTP Verified:', otp);
        setCurrentScreen('createNewPassword');
    }

    function handleResetSuccess(newPassword) {
        setCurrentScreen('passwordSuccess');
    }

    return (
        <div>
            {currentScreen === 'passwordSuccess' ? (
                <PasswordSuccess
                    onBackToLogin={() => setCurrentScreen('login')}
                />
            ) : currentScreen === 'createNewPassword' ? (
                <CreateNewPassword
                    onResetSuccess={handleResetSuccess}
                    onBackToLogin={() => setCurrentScreen('login')}
                    onBackToMethod={() => setCurrentScreen('enterOtp')}
                />
            ) : currentScreen === 'enterOtp' ? (
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
                    onLogin={onLogin}
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

export default LoginFlow;