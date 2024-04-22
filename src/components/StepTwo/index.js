import React, { useContext } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { StepContext } from '../../context/StepContext'

const StepTwo = () => {
  const { goToPreviousStep, goToNextStep } = useContext(StepContext)
  return (
    <Box>
      <Text>StepTwo</Text>
      <Button onClick={goToPreviousStep}>go back</Button>
      <Button colorScheme='teal' onClick={goToNextStep}>next</Button>
    </Box>
  )
}

export default StepTwo