import React, { useContext } from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import { StepContext } from '../../context/StepContext'

import HeaderComponent from '../HeaderComponent'
import CheckBoxSettings from '../CheckBoxSettings'
import { SwitchContext } from '../../context/SwitchContext'
import useWindowsWidth from '../../hooks/UseWindowsWidth'

const StepThree = ({ boxStyle }) => {
  const { width } = useWindowsWidth()
  const { goToPreviousStep, goToNextStep } = useContext(StepContext)
  const { addToArray } = useContext(SwitchContext)
  const checkBoxOptions = [
    {
      id: 1,
      type: 'Online service',
      about: 'Access to multiplayer games',
      priceM: 1,
      priceY: 10
    },
    {
      id: 2,
      type: 'Larger storage',
      about: 'Extra 1TB of cloud save',
      priceM: 2,
      priceY: 20
    },
    {
      id: 3,
      type: 'Custmizable profile',
      about: 'Custome themes on your profile',
      priceM: 2,
      priceY: 20
    },
  ]


  const onValueChange = (object) => {
    addToArray(object)
  }

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
            mb: '36px'
          }}
        />
        <CheckBoxSettings checkBoxOptions={checkBoxOptions} onValueChange={onValueChange} />
      </Box>
      <Flex justifyContent='space-between' display={{ base: 'none', md: 'block' }}>
                <Button onClick={goToPreviousStep} variant='prev'>Go Back</Button>
                <Button onClick={() => goToNextStep()} variant='solid'>Next Step</Button>
      </Flex>
    </Flex>
  )
}

export default StepThree