import React, { useContext } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { StepContext } from '../../context/StepContext'

const StepThree = () => {
  const { goToPreviousStep, goToNextStep } = useContext(StepContext)
  return (
    <Box>
      <Text>StepThree</Text>
      <Button onClick={goToPreviousStep} variant='prev'>go back</Button>
      <Button onClick={goToNextStep} variant='solid'>next</Button>
    </Box>
  )
}

export default StepThree