import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import StepperComponent from '../StepperComponent'
import { Form } from '../../pages'

const DesktopUI = () => {
  return (
    <Box
      m={{ base: '32px', md: '60px auto' }}
      p='20px'
      maxW='1040px'
    >
      <Flex
        gap='20px'
        justifyContent='center'
      >
        <Box
          p='20px'
          pl={{ md: '40px', xl: '52px' }}
          flex='2'
          minW={{ md: '220px', lg: '280px' }}
          maxW='fit-content'
          borderRadius='8px'
          position='relative'
        >
          <StepperComponent
            boxStyle={{
              h: '320px',
            }}
          />
        </Box>
        <Form />
      </Flex>
    </Box>
  )
}

export default DesktopUI