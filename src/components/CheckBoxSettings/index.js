import { Box, Checkbox, CheckboxGroup, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import HeaderComponent from '../HeaderComponent'

const CheckBoxSettings = ({ checkBoxOptions }) => {

    return (
        <CheckboxGroup colorScheme='green' defaultValue={['Online service', 'Larger storage']}>
            <Flex direction='column' gap='8px'>
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
                                }}>
                                <Flex
                                    gap='32px'
                                    minW='296px'
                                    flex='1'
                                    justifyContent='space-between'
                                    alignItems='center'>
                                    <Box>
                                        <HeaderComponent title={option.type} description={option.about} type='text' />
                                    </Box>
                                    <Text color='blue.500'>+{option.price}</Text>
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