import { Box, Flex, Switch, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { SwitchContext } from '../../context/SwitchContext'

const SwitchButton = () => {
    const { checked, toggleSwitch } = useContext(SwitchContext)

    return (
        <Box>
            <Flex
                gap='8px'
                alignItems='center'>
                <Text
                    fontSize='14px'
                    fontWeight='600'
                    color={!checked ? 'blue.700' : 'gray.500'}
                    onClick={() => toggleSwitch()}
                >
                    Monthly
                </Text>
                <Switch onChange={() => toggleSwitch()} />
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