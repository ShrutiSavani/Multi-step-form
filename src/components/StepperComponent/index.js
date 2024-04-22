import React, { useContext, useEffect } from 'react'
import { Box, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps } from '@chakra-ui/react'
import { StepContext } from '../../context/StepContext'

const StepperComponent = () => {
    const { step } = useContext(StepContext)
    const steps = [
        { title: 'First', description: 'Contact Info' },
        { title: 'Second', description: 'Date & Time' },
        { title: 'Third', description: 'Select Rooms' },
        { title: 'Four', description: 'Select Rooms' },
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
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                    </Box>

                    <StepSeparator />
                </Step>
            ))}
        </Stepper>
    )
}

export default StepperComponent