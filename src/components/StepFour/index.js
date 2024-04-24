import React, { useContext } from 'react'
import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react'
import { StepContext } from '../../context/StepContext'

import HeaderComponent from '../HeaderComponent'

const StepFour = ({ boxStyle }) => {
    const { goToPreviousStep, goToNextStep } = useContext(StepContext)

    return (
        <Flex
            direction='column'
            h='100%'
            justifyContent='space-between'
            {...boxStyle}
        >
            <Box>
                <HeaderComponent
                    title={'Finishin up'}
                    description={'Double-check everything looks OK before confirming.'}
                    boxStyle={{
                        mb: '32px'
                    }}
                />
                <Box
                    bg='blue.50'
                    p='12px'
                    borderRadius='8px'
                >
                    <Flex
                        alignItems='center'
                        justifyContent='space-between'
                    >
                        <Box>
                            <Text color='blue.700' fontWeight='600'>Arcade (monthly)</Text>
                            <Text
                                textDecoration='underline'
                                color='gray.500'
                                _hover={{
                                    color:'purple.600',
                                    textDecoration:'underline',
                                    cursor: 'pointer'
                                }}>Change</Text>
                        </Box>
                        <Text 
                        fontWeight='600'color='blue.700'>$9/mo</Text>
                    </Flex>
                    <Divider my='12px' />
                    <Flex justifyContent='space-between' mb='4px'>
                        <Text color='gray.500'>Online service</Text>
                        <Text color='blue.700'>$1/mo</Text>
                    </Flex>
                    <Flex justifyContent='space-between'>
                        <Text color='gray.500'>Larger storage</Text>
                        <Text color='blue.700'>$2/mo</Text>
                    </Flex>
                </Box>
                <Flex
                    justifyContent='space-between'
                    p='12px'
                    borderRadius='8px'
                >
                    <Text color='gray.500'>Total (per month)</Text>
                    <Text
                        fontSize='20px'
                        fontWeight='600'
                        color='blue.800'
                    >+$12/mo</Text>
                </Flex>
            </Box>
            <Flex justifyContent='space-between'>
                <Button onClick={goToPreviousStep} variant='prev'>Go Back</Button>
                <Button
                    bg='blue.800'
                    variant='solid'
                    _hover={{
                        bg: 'blue.100',
                        color: 'blue.600',
                        borderColor: 'white'
                    }}
                    onClick={()=>goToNextStep()}
                >Confirm</Button>
            </Flex>
        </Flex>
    )
}

export default StepFour