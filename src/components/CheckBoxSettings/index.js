import { Box, Checkbox, CheckboxGroup, Flex, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import HeaderComponent from '../HeaderComponent'
import { SwitchContext } from '../../context/SwitchContext'

const CheckBoxSettings = ({ checkBoxOptions }) => {
    const { checked } = useContext(SwitchContext)
    return (
        <CheckboxGroup colorScheme='green' defaultValue={['Online service', 'Larger storage']}>
            <Flex direction='column' gap='16px'>
                {
                    checkBoxOptions.map((option, index) => {
                        return (
                            <Checkbox
                                justifyContent='space-between'
                                gap='32px'
                                key={index}
                                value={option.type}
                                colorScheme='blue'
                                borderWidth='1px'
                                borderStyle='solid'
                                borderColor='blue.500'
                                borderRadius='8px'
                                p='12px'
                                _checked={{
                                    bg: 'blue.50'
                                }}
                                _focusVisible={{
                                    boxShadow: 'none'
                                }}
                            >
                                <Flex
                                    gap='32px'
                                    minW='296px'
                                    flex='1'
                                    justifyContent='space-between'
                                    alignItems='center'>
                                    <Box>
                                        <HeaderComponent title={option.type} description={option.about} type='text' />
                                    </Box>
                                    {
                                        !checked ?
                                            <Text color='blue.500'>+${option.priceM}/mo</Text>
                                            :
                                            <Text color='blue.500'>+${option.priceY}/yr</Text>
                                    }

                                </Flex>
                            </Checkbox>
                        )
                    })
                }
            </Flex>
        </CheckboxGroup>
    )
}

export default CheckBoxSettings