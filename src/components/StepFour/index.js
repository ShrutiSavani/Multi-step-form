import React, { useContext } from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { StepContext } from '../../context/StepContext'

const StepFour = ({ boxStyle }) => {
    const { goToPreviousStep } = useContext(StepContext)

    return (
        <Flex
            direction='column'
            {...boxStyle}
        >
            <Flex justifyContent='space-between'>
                <Button onClick={goToPreviousStep} variant='prev'>go back</Button>
                <Button
                    bg='blue.800'
                    variant='solid'
                    _hover={{
                        bg: 'blue.100',
                        color: 'blue.600',
                        borderColor: 'white'
                    }}
                >Confirm</Button>
            </Flex>
        </Flex>
    )
}

export default StepFour