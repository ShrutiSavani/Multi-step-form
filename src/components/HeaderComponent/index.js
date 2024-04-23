import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const HeaderComponent = ({
    type,
    title,
    titleStyle,
    description,
    descriptionStyle,
    subDescription,
    subDescriptionStyle
}) => {
    return (
        <Box>
            <Text
                fontSize={type == 'text' ? '' : '28px'}
                color='blue.600'
                fontWeight='600'
                {...titleStyle}
            >
                {title}
            </Text>
            <Text
                fontSize={type == 'text' ? '14px' : ''}
                maxW='210px'
                color='gray.500'
                {...descriptionStyle}
            >
                {description}
            </Text>
            <Text
                fontSize={type == 'text' ? '12px' : ''}
                color='blue.500'
                {...subDescriptionStyle}
            >
                {subDescription}
            </Text>
        </Box>
    )
}

export default HeaderComponent