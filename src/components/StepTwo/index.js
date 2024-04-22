import React, { useContext } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { StepContext } from '../../context/StepContext'

const StepTwo = () => {
  const { goToPreviousStep, goToNextStep } = useContext(StepContext)
  return (
    <Box>
      <Text>StepTwo</Text>
      <Button onClick={goToPreviousStep} variant='prev'>go back</Button>
      <Button onClick={goToNextStep} variant='solid'>next</Button>
    </Box>
  )
}

export default StepTwo