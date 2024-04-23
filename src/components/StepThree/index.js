import React, { useContext } from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import { StepContext } from '../../context/StepContext'

import HeaderComponent from '../HeaderComponent'
import CheckBoxSettings from '../CheckBoxSettings'

const StepThree = ({ boxStyle }) => {
  const checkBoxOptions = [
    {
      type: 'Online service',
      about: 'Access to multiplayer games',
      price: '$1/mo'
    },
    {
      type: 'Larger storage',
      about: 'Extra 1TB of cloud save',
      price: '$2/mo'
    },
    {
      type: 'Custmizable profile',
      about: 'Custome themes on your profile',
      price: '$2/mo'
    },
  ]

  const { goToPreviousStep, goToNextStep } = useContext(StepContext)

  return (
    <Flex
      direction='column'
      h='100%'
      justifyContent='space-between'
      {...boxStyle}
    >
      <Box>
        <HeaderComponent 
        title={'Pick add-ons'} 
        description={'Add-ons help snhance your gaming experience.'} 
        boxStyle={{
          mb:'36px'
        }}
        />
        <CheckBoxSettings checkBoxOptions={checkBoxOptions}/>
      </Box>
      <Flex justifyContent='space-between'>
        <Button onClick={goToPreviousStep} variant='prev'>Go Back</Button>
        <Button onClick={goToNextStep} variant='solid'>Next Step</Button>
      </Flex>
    </Flex>
  )
}

export default StepThree