import React, { useContext } from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import { StepContext } from '../../context/StepContext'

import HeaderComponent from '../HeaderComponent'
import RadioSettings from '../RadioSettings'

import arcadeIcon from '../../assets/icon-arcade.svg'
import advancedIcon from '../../assets/icon-advanced.svg'
import proIcon from '../../assets/icon-pro.svg'
import SwitchButton from '../SwitchButton'

const StepTwo = ({ boxStyle }) => {
  const { goToPreviousStep, goToNextStep } = useContext(StepContext)

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
    <Flex
      direction='column'
      h='100%'
      justifyContent='space-between'
      {...boxStyle}
    >
      <Box>
        <HeaderComponent
          title={'Select Your Plan'}
          description={'You have the option of monthly or yearly billing.'}
        />
        <RadioSettings
          radioOptions={radioOptions}
          name={'monthly'}
          boxStyle={{
            gap: '0',
            justifyContent: 'space-between',
            my: '40px'
          }}
        />
        <SwitchButton />
      </Box>

      <Flex
        justifyContent='space-between'>
        <Button onClick={goToPreviousStep} variant='prev'>Go Back</Button>
        <Button onClick={goToNextStep} variant='solid'>Next Step</Button>
      </Flex>
    </Flex>
  )
}

export default StepTwo