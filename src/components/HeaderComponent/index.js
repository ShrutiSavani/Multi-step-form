import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const HeaderComponent = ({
    title,
    titleStyle,
    description,
    descriptionStyle
}) => {
    return (
        <Box>
            <Text
                fontSize='28px'
                color='blue.600'
                fontWeight='600'
                {...titleStyle}
            >
                {title}
            </Text>
            <Text
                color='gray.500'
                {...descriptionStyle}
            >
                {description}
            </Text>
        </Box>
    )
}

export default HeaderComponent