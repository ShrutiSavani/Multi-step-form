import { createContext, useState } from 'react';

export const StepContext = createContext()

const StepProvider = ({ children }) => {
    const [step, setStep] = useState(0)

    const goToNextStep = () => {
        setStep((prev) => prev + 1)
    }

    const goToPreviousStep = () => {
        setStep((prev) => prev - 1)
    }
    return (
        <StepContext.Provider value={{
            step,
            goToNextStep,
            goToPreviousStep
        }}>
            {children}
        </StepContext.Provider>
    )
}
export default StepProvider