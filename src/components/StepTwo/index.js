import React, { useContext } from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { StepContext } from '../../context/StepContext'

const StepTwo = ({ boxStyle }) => {
  const { goToPreviousStep, goToNextStep } = useContext(StepContext)
  return (
    <Flex
      direction='column'
      {...boxStyle}
    >
      <Flex justifyContent='space-between'>
        <Button onClick={goToPreviousStep} variant='prev'>go back</Button>
        <Button onClick={goToNextStep} variant='solid'>next</Button>
      </Flex>
    </Flex>
  )
}

export default StepTwo