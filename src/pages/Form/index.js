import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { StepCompleted, StepFour, StepOne, StepThree, StepTwo } from '../../components'
import { StepContext } from '../../context/StepContext'

const Form = () => {
    const { step } = useContext(StepContext)

    return (
        <Box
            bg='white'
            borderRadius='12px'
            boxShadow='0px 8px 6px -6px #adafb1'
            p={{ base: '20px', md: '40px' }}
            flex='5'
            minW={{ base: '370px', sm: '420px', md: '500px' }}
            maxW={{ base: '372px', sm: '428px', md: '516px' }}
            h='530px'
        >
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
                            step === 3 ?
                                <StepFour />
                                :
                                <StepCompleted />
            }
        </Box>
    )
}

export default Form