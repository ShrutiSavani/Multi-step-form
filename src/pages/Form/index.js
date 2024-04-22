import { Box, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { StepFour, StepOne, StepThree, StepTwo, StepperComponent } from '../../components'
import { StepContext } from '../../context/StepContext'

const Form = () => {
    const { step } = useContext(StepContext)
    return (
        <Box>
            <Flex>
                <StepperComponent />
                {
                    step === 0 ?
                        <StepOne />
                        :
                        step === 1 ?
                            <StepTwo />
                            :
                            step === 2 ?
                                <StepThree />
                                :
                                <StepFour />
                }
            </Flex>
        </Box>
    )
}

export default Form