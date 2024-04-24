import { createContext, useState } from 'react';

export const SwitchContext = createContext()

const SwitchProvider = ({ children }) => {
    const [checked, setCheckd] = useState(false)

    let selectedSchemesArray = []

    const toggleSwitch = () => {
        setCheckd(!checked)
    }

    const pushToArray = (object) => {
        if (selectedSchemesArray.length !== 0) {
            selectedSchemesArray.shift()
        }
        selectedSchemesArray.push(object)
    }

    return (
        <SwitchContext.Provider value={{
            checked,
            toggleSwitch,
            selectedSchemesArray,
            pushToArray
        }}>
            {children}
        </SwitchContext.Provider>
    )
}
export default SwitchProvider