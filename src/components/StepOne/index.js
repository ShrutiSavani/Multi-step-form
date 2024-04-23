import { Box, Button, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { StepContext } from '../../context/StepContext'
import HeaderComponent from '../HeaderComponent'

const StepOne = () => {
  const { goToNextStep } = useContext(StepContext)

  return (
    <Box>
      <Text>StepOne</Text>
      <HeaderComponent title={'Personal Info'} description={'Please provide your name'} />
      <Button onClick={goToNextStep} variant='solid'>next</Button>
    </Box>
  )
}

export default StepOne