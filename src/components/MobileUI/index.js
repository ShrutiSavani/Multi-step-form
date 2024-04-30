import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { StepperMobile } from '../../components'
import { StepContext } from '../../context/StepContext'
import { Form } from '../../pages'
import { AuthContext } from '../../context/AuthContext'

const MobileUI = () => {
  const { step, goToPreviousStep, goToNextStep } = useContext(StepContext)

  const { handleFormValidation } = useContext(AuthContext)

  return (
    <Box
      maxW='1040px'
    >
      <Flex
        m='28px'
        direction='column'
        gap='40px'
        justifyContent='center'
        alignItems='center'
      >
        <Box
          p='12px'
          flex='2'
          maxW='fit-content'
          borderRadius='8px'
        >
          <StepperMobile
            boxStyle={{
              w: '220px'
            }} />
        </Box>
        <Form />
        <Box bg='white' w='100%' position='fixed' bottom='0' >
          {
            step === 0 ?
              <Flex
                p='24px 12px'
                w='100%'
                justifyContent='flex-end'
              >
                <Button
                  p='8px'
                  h='auto'
                  justifyContent='end'
                  variant='solid'
                  onClick={() => { handleFormValidation(goToNextStep) }}
                >
                  Next Step</Button>
              </Flex>
              :
              step == 1 || step == 2 ?
                <Flex
                  alignItems='center'
                  p='24px 12px'
                  w='100%'
                  justifyContent='space-between'
                >
                  <Button p='8px'
                    h='auto' variant='prev' onClick={goToPreviousStep}>Go Back</Button>
                  <Button p='8px'
                    h='auto' variant='solid' onClick={goToNextStep}>Next Step</Button>
                </Flex>
                :
                step === 3 ?
                  <Flex justifyContent='space-between' p='24px 12px'
                    w='100%'>
                    <Button
                      p='8px'
                      h='auto'
                      onClick={goToPreviousStep}
                      variant='prev'
                    >Go Back</Button>
                    <Button
                      p='8px'
                      h='auto'
                      bg='blue.800'
                      variant='solid'
                      _hover={{
                        bg: 'blue.100',
                        color: 'blue.600',
                        borderColor: 'white'
                      }}
                      onClick={() => goToNextStep()}
                    >Confirm</Button>
                  </Flex>
                  : ''
          }
        </Box>
      </Flex >
    </Box >
  )
}

export default MobileUI