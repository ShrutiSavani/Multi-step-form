import { Box, Input, Text } from '@chakra-ui/react'
import React from 'react'

const MyInput = ({
    boxStyle,
    lable,
    lableStyle,
    inputStyle,
    placeholder,
}) => {
    return (
        <Box
            my='8px'
            {...boxStyle}
        >
            <Text
                fontWeight='600'
                color='blue.600'
                {...lableStyle}
            >
                {lable} :
            </Text>
            <Input
                mt='8px'
                w='376px'
                color='blue.600'
                placeholder={placeholder}
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
                {...inputStyle}
            />
        </Box>
    )
}

export default MyInput