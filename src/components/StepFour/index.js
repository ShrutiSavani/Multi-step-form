import React, { useContext } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { StepContext } from '../../context/StepContext'

const StepFour = () => {
    const { goToPreviousStep } = useContext(StepContext)

    return (
        <Box>
            <Text>StepFour</Text>
            <Button onClick={goToPreviousStep}>go back</Button>
        </Box>
    )
}

export default StepFour