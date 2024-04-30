import React, { useContext, useEffect } from 'react'
import { Box, Image, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps } from '@chakra-ui/react'
import { StepContext } from '../../context/StepContext'
import bgImg from '../../assets/bg-sidebar-desktop.svg'
import style from './index.module.css'


const StepperComponent = ({ boxStyle }) => {

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

        <Stepper index={activeStep} orientation='vertical' gap='0' {...boxStyle} >

            {steps.map((step, index) => (
                <Step key={index} className={style.ylpnre}>
                    <StepIndicator >
                        <StepStatus
                            complete={<StepIcon className={style.stepIsCompleted} />}
                            incomplete={<StepNumber className={style.stepIsInCompleted} />}
                            active={<StepNumber className={style.stepIsActive} />}
                        />
                    </StepIndicator>

                    <Box flexShrink='0' fontWeight='700'>
                        <StepTitle fontSize='10px' color='white'>{step.title}</StepTitle>
                        <StepDescription fontSize='12px' color='white' >{step.description}</StepDescription>
                    </Box>

                    <StepSeparator />
                </Step>
            ))}
            <Image src={bgImg} position='absolute' top='0' left='0' zIndex='-1' h='100%' w='100%' objectFit='cover' borderRadius='8px' />
        </Stepper>
    )
}

export default StepperComponent