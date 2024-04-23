import { Box, Flex, Switch, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { SwitchContext } from '../../context/SwitchContext'

const SwitchButton = () => {
    const { checked, toggleSwitch } = useContext(SwitchContext)

    return (
        <Box
            borderWidth='1px'
            borderStyle='solid'
            borderColor='blue.500'
            borderRadius='4px'
            p='8px 4px'
            bg='blue.50'
        >
            <Flex
                gap='8px'
                justifyContent='center'
                alignItems='center'>
                <Text
                    fontSize='14px'
                    fontWeight='600'
                    color={!checked ? 'blue.700' : 'gray.500'}
                    onClick={() => toggleSwitch()}
                >
                    Monthly
                </Text>
                <Switch
                    _focusVisible={{
                        boxShadow: 'none'
                    }}
                    onChange={() => toggleSwitch()}
                />
                <Text
                    fontSize='14px'
                    fontWeight='600'
                    color={checked ? 'blue.700' : 'gray.500'}
                >
                    Yearly
                </Text>
            </Flex>
        </Box>
    )
}

export default SwitchButton