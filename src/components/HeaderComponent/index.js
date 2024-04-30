import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const HeaderComponent = ({
    boxStyle,
    type,
    title,
    titleStyle,
    description,
    descriptionStyle,
    subDescription,
    subDescriptionStyle
}) => {
    return (
        <Box {...boxStyle}>
            <Text
                fontSize={type === 'text' ? { base: '14px', md: '16px' } : { base: '20px', md: '28px' }}
                color={type === 'text' ? 'blue.600' : 'blue.700'}
                fontWeight='600'
                {...titleStyle}
            >
                {title}
            </Text>
            <Text
                fontSize={type === 'text' ? { base: '12px', md: '14px' } : { base: '14px', md: '16px' }}
                maxW={type === 'text' ? '210px' : 'none'}
                color='gray.500'
                {...descriptionStyle}
            >
                {description}
            </Text>
            <Text
                fontSize={type === 'text' ? '12px' : ''}
                color='blue.500'
                {...subDescriptionStyle}
            >
                {subDescription}
            </Text>
        </Box>
    )
}

export default HeaderComponent