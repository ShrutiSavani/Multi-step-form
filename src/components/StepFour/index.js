import React, { useContext } from 'react'
import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react'
import { StepContext } from '../../context/StepContext'

import HeaderComponent from '../HeaderComponent'
import { SwitchContext } from '../../context/SwitchContext'

const StepFour = ({ boxStyle }) => {
    const { goToPreviousStep, goToNextStep } = useContext(StepContext)
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
                            <Flex color='blue.700' fontWeight='600'>
                                <Text>{selectedSchemesArray[0].type}</Text>
                                <Text>({!checked ? 'monthly' : 'yearly'})</Text>
                            </Flex>
                            <Text
                                textDecoration='underline'
                                color='gray.500'
                                _hover={{
                                    color: 'purple.600',
                                    textDecoration: 'underline',
                                    cursor: 'pointer'
                                }}>Change</Text>
                        </Box>
                        <Text
                            fontWeight='600' color='blue.700'>${!checked ? `${selectedSchemesArray[0].priceM}/mo` : `${selectedSchemesArray[0].priceY}/yr`}</Text>
                    </Flex>
                    <Divider my='12px' />
                    {
                        selectedCheckboxesArray.map((option) => {
                            return (
                                <Flex justifyContent='space-between' mb='4px'>
                                    <Text color='gray.500'>{option.type}</Text>
                                    <Text color='blue.700'>${!checked ? `${option.priceM}/mo` : `${option.priceY}/yr`}</Text>
                                </Flex>
                            )
                        })
                    }
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
                    >+${totalAmount}/mo</Text>
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
                    onClick={() => goToNextStep()}
                >Confirm</Button>
            </Flex>
        </Flex>
    )
}

export default StepFour