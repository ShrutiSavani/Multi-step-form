import { createContext, useState } from 'react';

export const SwitchContext = createContext()

const SwitchProvider = ({ children }) => {
    const [checked, setCheckd] = useState(false)

    const defaultArrayRadio = [{
        id: 1,
        slug: '1',
        type: 'Arcade',
        priceM: 9,
        priceY: 90,
        scheme: '2 months free'
    },]
    const [selectedSchemesArray, setSelectedSchemeArray] = useState(defaultArrayRadio)

    const defaultArrayCheck = [{
        id: 1,
        type: 'Online service',
        about: 'Access to multiplayer games',
        priceM: 1,
        priceY: 10
    },
    {
        id: 2,
        type: 'Larger storage',
        about: 'Extra 1TB of cloud save',
        priceM: 2,
        priceY: 20
    }]
    const [selectedCheckboxesArray, setSelectedBoxesArray] = useState(defaultArrayCheck)

    const toggleSwitch = () => {
        setCheckd(!checked)
    }

    const pushToArray = (object) => {
        console.log(object)
        if (selectedSchemesArray.length !== 0) {
            const cloneArray = [...selectedSchemesArray]
            const updatedArray = cloneArray.splice(0, 1)
            setSelectedSchemeArray(cloneArray)
        }
        setSelectedSchemeArray([object])
    }

    const addToArray = (object) => {
        if (object !== undefined) {
            const index = selectedCheckboxesArray.findIndex((option) => {
                return option.id == object.id
            })

            if (index === -1) {
                setSelectedBoxesArray([...selectedCheckboxesArray, object])
            } else {
                const cloneArray = [...selectedCheckboxesArray]
                const arrayAfterSplice = cloneArray.splice(index, 1)
                setSelectedBoxesArray(cloneArray)
            }
            console.log('up', selectedCheckboxesArray)
        }
    }

    return (
        <SwitchContext.Provider value={{
            checked,
            toggleSwitch,
            selectedSchemesArray,
            pushToArray,
            selectedCheckboxesArray,
            addToArray,
        }}>
            {children}
        </SwitchContext.Provider>
    )
}
export default SwitchProvider