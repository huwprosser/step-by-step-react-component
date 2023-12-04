import React, { useState } from "react";
import "./StepByStepForm.css"; // Import the CSS file for animations

const StepByStepForm: React.FC = ({ onSubmit }: any) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});
    const numberOfSteps = 2;
    const [isStepValid, setIsStepValid] = useState(false);

    const handleNextStep = () => {
        if (isStepValid) {
            setCurrentStep((prevStep) => prevStep + 1);
        }
    };

    const handlePreviousStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleFormSubmit = () => {
        console.log("Form Data:", formData);
        onSubmit(formData);
    };

    const handleFormChange = (stepData: any) => {
        setFormData((prevData) => ({
            ...prevData,
            ...stepData,
        }));
    };

    const validateStep = (stepData: any) => {
        const isStepDataValid = Object.values(stepData).every(
            (value) => value !== null && value !== ""
        );
        setIsStepValid(isStepDataValid);
    };

    return (
        <div>
            <h1>Step {currentStep + 1}</h1>
            <div className="form-container">
                <div
                    className={`form-step ${currentStep === 0 ? "active" : ""}`}
                >
                    <Step1Form
                        onChange={handleFormChange}
                        onValidate={validateStep}
                    />
                </div>
                <div
                    className={`form-step ${currentStep === 1 ? "active" : ""}`}
                >
                    <Step2Form
                        onChange={handleFormChange}
                        onValidate={validateStep}
                    />
                </div>
                <div
                    className={`form-step ${currentStep === 2 ? "active" : ""}`}
                >
                    <Step3Form
                        onChange={handleFormChange}
                        onValidate={validateStep}
                    />
                </div>
            </div>
            <button onClick={handlePreviousStep} disabled={currentStep === 0}>
                Previous
            </button>
            {currentStep === numberOfSteps - 1 ? (
                <button onClick={handleFormSubmit}>Submit</button>
            ) : (
                <button
                    onClick={handleNextStep}
                    disabled={currentStep === numberOfSteps - 1 || !isStepValid}
                >
                    Next
                </button>
            )}
        </div>
    );
};

// Separate sub-components for each form step
const Step1Form: React.FC<{
    onChange: (data: any) => void;
    onValidate: (data: any) => void;
}> = ({ onChange, onValidate }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        onChange({ [name]: value });
        onValidate({ [name]: value });
    };

    return (
        <div>
            <input type="text" name="step1Field" onChange={handleInputChange} />
        </div>
    );
};

const Step2Form: React.FC<{
    onChange: (data: any) => void;
    onValidate: (data: any) => void;
}> = ({ onChange, onValidate }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        onChange({ [name]: value });
        onValidate({ [name]: value });
    };

    return (
        <div>
            <input type="text" name="step2Field" onChange={handleInputChange} />
        </div>
    );
};

const Step3Form: React.FC<{
    onChange: (data: any) => void;
    onValidate: (data: any) => void;
}> = ({ onChange, onValidate }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        onChange({ [name]: value });
        onValidate({ [name]: value });
    };

    return (
        <div>
            <input type="text" name="step3Field" onChange={handleInputChange} />
        </div>
    );
};

export default StepByStepForm;
