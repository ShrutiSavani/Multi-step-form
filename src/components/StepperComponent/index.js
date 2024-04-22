import React, { useContext, useEffect } from 'react'
import { Box, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps } from '@chakra-ui/react'
import { StepContext } from '../../context/StepContext'

const StepperComponent = () => {
    const { step } = useContext(StepContext)
    const steps = [
        { title: 'STEP 1', description: 'YOUR INFO' },
        { title: 'STEP 2', description: 'SELECT PLAN' },
        { title: 'STEP 3', description: 'ADD ONS' },
        { title: 'STEP 4', description: 'SUMMARY' },
    ]

    useEffect(() => {
        setActiveStep(step)
    }, [step])

    const { activeStep, setActiveStep } = useSteps({
        index: step,
        count: steps.length,
    })

    return (
        <Stepper index={activeStep} orientation='vertical' height='400px' gap='0'>
            {steps.map((step, index) => (
                <Step key={index}>
                    <StepIndicator>
                        <StepStatus
                            complete={<StepIcon />}
                            incomplete={<StepNumber />}
                            active={<StepNumber />}
                        />
                    </StepIndicator>

                    <Box flexShrink='0'>
                        <StepTitle fontSize='10px' color='gray.500'>{step.title}</StepTitle>
                        <StepDescription fontSize='12px'>{step.description}</StepDescription>
                    </Box>

                    <StepSeparator />
                </Step>
            ))}
        </Stepper>
    )
}

export default StepperComponent