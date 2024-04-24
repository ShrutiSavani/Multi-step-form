import { createContext, useState } from 'react';

export const CalculationContext = createContext()

const CalculationProvider = ({ children }) => {
    const [checked, setCheckd] = useState(false)

    const toggleCalculation = () => {
        setCheckd(!checked)
    }

    return (
        <CalculationContext.Provider value={{
            checked,
            toggleCalculation
        }}>
            {children}
        </CalculationContext.Provider>
    )
}
export default CalculationProvider