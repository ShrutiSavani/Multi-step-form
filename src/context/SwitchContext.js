import { createContext, useState } from 'react';

export const SwitchContext = createContext()

const SwitchProvider = ({ children }) => {
    const [checked, setCheckd] = useState(false)

    const toggleSwitch = () => {
        setCheckd(!checked)
    }

    return (
        <SwitchContext.Provider value={{
            checked,
            toggleSwitch
        }}>
            {children}
        </SwitchContext.Provider>
    )
}
export default SwitchProvider