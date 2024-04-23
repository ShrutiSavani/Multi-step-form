import { Box, Button, Image, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { StepContext } from '../../context/StepContext'
import HeaderComponent from '../HeaderComponent'
import RadioSettings from '../RadioSettings'

import arcadeIcon from '../../assets/icon-arcade.svg'
import advancedIcon from '../../assets/icon-advanced.svg'
import proIcon from '../../assets/icon-pro.svg'
import CheckBoxSettings from '../CheckBoxSettings'

const StepOne = () => {
  const { goToNextStep } = useContext(StepContext)
  const radioOptions = [
    {
      type: 'Arcade',
      price: '$9/mo',
      icon: arcadeIcon,
      scheme: '2 months free'
    },
    {
      type: 'Advanced',
      price: '$12/mo',
      icon: advancedIcon,
      scheme: '2 months free'
    },
    {
      type: 'Pro',
      price: '$15/mo',
      icon: proIcon,
      scheme: '2 months free'
    }
  ]
  return (
    <Box>
      <Text>StepOne</Text>
      <Image src={arcadeIcon} />
      <HeaderComponent title={'Personal Info'} description={'Please provide your name'}  />
      <RadioSettings radioOptions={radioOptions} name={'monthly'} />
      <CheckBoxSettings/>
      <Button onClick={goToNextStep} variant='solid'>next</Button>
    </Box>
  )
}

export default StepOne