import { Box, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'

const MyInput = ({
    boxStyle,
    lable,
    lableStyle,
    inputStyle,
    placeholder,
    value,
    onChange,
    error,
}) => {
    return (
        <Box
            my='8px'
            {...boxStyle}
        >
            <Flex justifyContent='space-between'>
                <Text
                    fontSize={{ base: '14px', md: '16px' }}
                    fontWeight='600'
                    color='blue.600'
                    {...lableStyle}
                >
                    {lable} :
                </Text>
                <Text
                    fontWeight='600'
                    fontSize={{ base: '12px', md: '14px' }}
                    color='red'
                    {...lableStyle}
                >
                    {error}
                </Text>
            </Flex>
            <Input
                borderWidth='1px'
                borderStyle='solid'
                borderColor={error ? 'red' : 'gray.200'}
                mt='4px'
                color='blue.600'
                placeholder={placeholder}
                _placeholder={{
                    fontSize: { base: '14px', md: '16px' }
                }}
                _hover={{
                    cursor: 'pointer',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'blue.500'
                }}
                _focusVisible={{
                    outline: 'none',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'blue.500'
                }}
                value={value}
                onChange={onChange}
                {...inputStyle}
            />
        </Box >
    )
}

export default MyInput