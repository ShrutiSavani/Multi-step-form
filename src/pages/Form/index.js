import { Box, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { StepCompleted, StepFour, StepOne, StepThree, StepTwo, StepperComponent } from '../../components'
import { StepContext } from '../../context/StepContext'

const Form = () => {
    const { step } = useContext(StepContext)
    return (
        <Box
            m='60px auto'
            maxW='1440px'
            p='20px'
            border='1px solid black'>
            <Flex
                gap='40px'
                justifyContent='center'
            >
                <Box
                    bg='pink'
                    p='20px'
                    pl='80px'
                    flex='2'
                    maxW='340px'
                    borderRadius='8px'
                >
                    <StepperComponent
                        boxStyle={{
                            h: '320px',
                        }}
                    />
                </Box>

                <Box
                    p='40px'
                    flex='5'
                    maxW='516px'
                    h='530px'
                    border='1px solid black'
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
            </Flex>
        </Box>
    )
}

export default Form