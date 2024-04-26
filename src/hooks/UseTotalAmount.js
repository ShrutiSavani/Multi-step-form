import { useContext } from 'react'
import { SwitchContext } from '../context/SwitchContext'

const useTotalAmount = () => {
    const { checked, selectedSchemesArray, selectedCheckboxesArray } = useContext(SwitchContext)

    let totalAmount

    if (!checked) {
        totalAmount = selectedSchemesArray[0].priceM + selectedCheckboxesArray.reduce((accu, curr) => {
            return accu + curr.priceM
        }, 0)
    } else {
        totalAmount = selectedSchemesArray[0].priceY + selectedCheckboxesArray.reduce((accu, curr) => {
            return accu + curr.priceY
        }, 0)
    }

    return {
        totalAmount
    }
}

export default useTotalAmount