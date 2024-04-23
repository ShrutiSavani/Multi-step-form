import { Box, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { StepFour, StepOne, StepThree, StepTwo, StepperComponent } from '../../components'
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
                gap='60px'
                justifyContent='center'
            >
                <StepperComponent
                    boxStyle={{
                        p: '20px',
                        pl: '80px',
                        maxW: '340px',
                        h: '320px',
                        bg: 'pink',
                        flex: '2',
                        borderRadius: '8px'
                    }}
                />
                <Box
                    p='40px'
                    flex='5'
                    maxW='516px'
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
                                    <StepFour />
                    }
                </Box>
            </Flex>
        </Box>
    )
}

export default Form