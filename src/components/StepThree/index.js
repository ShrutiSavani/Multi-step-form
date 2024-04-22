import React, { useContext } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { StepContext } from '../../context/StepContext'

const StepThree = () => {
  const { goToPreviousStep, goToNextStep } = useContext(StepContext)
  return (
    <Box>
      <Text>StepThree</Text>
      <Button onClick={goToPreviousStep}>go back</Button>
      <Button colorScheme='teal' onClick={goToNextStep}>next</Button>
    </Box>
  )
}

export default StepThree