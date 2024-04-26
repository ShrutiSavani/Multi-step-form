import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { StepContext } from '../../context/StepContext'
import HeaderComponent from '../HeaderComponent'
import MyInput from '../MyInput'
import { AuthContext } from '../../context/AuthContext'

const StepOne = ({ boxStyle }) => {
  const { goToNextStep } = useContext(StepContext)
  const {
    handleFormValidation,
    nameError,
    emailError,
    phoneNoError,
  } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNo, setPhoneNo] = useState('')

  const formData = { name: name, email: email, phoneNo: phoneNo }

  const handleValidation = () => {
    handleFormValidation(formData, goToNextStep)
  }

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
            mb: '36px'
          }}
        />
        <MyInput
          lable={'Name'}
          placeholder={'e.g. Aamy Gyorge'}
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={nameError}
        />
        <MyInput
          boxStyle={{
            mt: '20px'
          }}
          lable={'Email address'}
          placeholder={'e.g. Aamy@abcd.in'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
        />
        <MyInput
          boxStyle={{
            mt: '20px'
          }}
          lable={'Phone No.'}
          placeholder={'e.g. +1 234 567 89'}
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          error={phoneNoError}
        />
      </Box>
      <Flex
        justifyContent='flex-end'
      >
        <Button
          justifyContent='end'
          variant='solid'
          onClick={() => { handleValidation() }}
        >Next Step</Button>
      </Flex>

    </Flex>
  )
}

export default StepOne