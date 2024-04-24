import React, { useContext } from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import { StepContext } from '../../context/StepContext'

import HeaderComponent from '../HeaderComponent'
import RadioSettings from '../RadioSettings'

import arcadeIcon from '../../assets/icon-arcade.svg'
import advancedIcon from '../../assets/icon-advanced.svg'
import proIcon from '../../assets/icon-pro.svg'
import SwitchButton from '../SwitchButton'
import { SwitchContext } from '../../context/SwitchContext'

const StepTwo = ({ boxStyle }) => {
  const { goToPreviousStep, goToNextStep } = useContext(StepContext)
  const { checked } = useContext(SwitchContext)

  const radioOptions = [
    {
      type: 'Arcade',
      priceM: 9,
      priceY: 90,
      icon: arcadeIcon,
      scheme: '2 months free'
    },
    {
      type: 'Advanced',
      priceM: 12,
      priceY: 120,
      icon: advancedIcon,
      scheme: '2 months free'
    },
    {
      type: 'Pro',
      priceM: 15,
      priceY: 150,
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
          boxStyle={{
            mb: '36px'
          }}
        />
        <RadioSettings
          radioOptions={radioOptions}
          name={'monthly'}
          boxStyle={{
            gap: '0',
            justifyContent: 'space-between',
            mb: '40px'
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