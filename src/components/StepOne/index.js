import { Box, Button, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { StepContext } from '../../context/StepContext'

function StepOne() {
  const { goToNextStep } = useContext(StepContext)
  return (
    <Box>
      <Text>StepOne</Text>
      <Button colorScheme='teal' onClick={goToNextStep}>next</Button>
    </Box>
  )
}

export default StepOne