import React, { useState } from "react";

import RegistrationLayout from "../layouts/RegistrationLayout";

import Step1CompanyDetails from "../Components/Step1CompanyDetails";
import Step2ContactPerson from "../Components/Step2ContactPerson";
import Step3BusinessLicense from "../Components/Step3BusinessLicense";
import Step4AddressWarehouse from "../Components/Step4AddressWarehouse";
import Step5Verification from "../Components/Step5Verification";
import Step6Review from "../Components/Step6Review";


function Registration() {

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});


    const handleNext = () => {
        setCurrentStep((prev) => Math.min(prev + 1, 6));
    };
    const handleBack = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const updateFormData = (newData) => {
        setFormData((prev) => ({
            ...prev,
            ...newData
        }));
    };
    const handleEditStep = (step) => {
        setCurrentStep(step);
    };


    return (
        <RegistrationLayout 
            currentStep={currentStep} 
            totalSteps={6}
        >
            {currentStep === 1 && (
                <Step1CompanyDetails
                    formData={formData}
                    updateFormData={updateFormData}
                    onNext={handleNext}
                />
            )}
            {currentStep === 2 && (
                <Step2ContactPerson
                    formData={formData}
                    updateFormData={updateFormData}
                    onNext={handleNext}
                    onBack={handleBack}
                />
            )}
            {currentStep === 3 && (
                <Step3BusinessLicense
                    formData={formData}
                    updateFormData={updateFormData}
                    onNext={handleNext}
                    onBack={handleBack}
                />
            )}
            {currentStep === 4 && (
                <Step4AddressWarehouse
                    formData={formData}
                    updateFormData={updateFormData}
                    onNext={handleNext}
                    onBack={handleBack}
                />
            )}
            {currentStep === 5 && (
                <Step5Verification
                    formData={formData}
                    onNext={handleNext}
                    onBack={handleBack}
                />
            )}
            {currentStep === 6 && (
                <Step6Review
                    formData={formData}
                    onEditStep={handleEditStep}
                    onBack={handleBack}
                />
            )}
        </RegistrationLayout>
    );
}


export default Registration;