import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { StepContext } from '../../context/StepContext'
import HeaderComponent from '../HeaderComponent'
import MyInput from '../MyInput'

const StepOne = ({ boxStyle }) => {
  const { goToNextStep } = useContext(StepContext)

  return (
    <Flex
      direction='column'
      justifyContent='space-between'
      h='100%'
      {...boxStyle}
    >
      <Box>
        <HeaderComponent
          title={'Personal Info'}
          description={'Please provide your name, email address and phone number'}
          boxStyle={{
            mb: '32px'
          }}
        />
        <MyInput
          lable={'Name'}
          placeholder={'e.g. Aamy Gyorge'}
        />
        <MyInput
          boxStyle={{
            mt: '20px'
          }}
          lable={'Email address'}
          placeholder={'e.g. Aamy@abcd.in'}
        />
        <MyInput
          boxStyle={{
            mt: '20px'
          }}
          lable={'Phone No.'}
          placeholder={'e.g. +123456789'}
        />
      </Box>
      <Flex
        justifyContent='flex-end'
      >
        <Button
          justifyContent='end'
          variant='solid'
          onClick={goToNextStep}
        >Next Step</Button>
      </Flex>

    </Flex>
  )
}

export default StepOne