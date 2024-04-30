import React, { useContext, useEffect } from 'react'
import { Step, StepIcon, StepIndicator, StepNumber, StepStatus, Stepper, useSteps } from '@chakra-ui/react'
import { StepContext } from '../../context/StepContext'
import style from './index.module.css'

const StepperMobile = ({ boxStyle }) => {

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

        <Stepper index={activeStep} gap='0' {...boxStyle} >

            {steps.map((step, index) => (
                <Step key={index} className={style.ylpnre}>
                    <StepIndicator>
                        <StepStatus
                            complete={<StepIcon className={style.stepIsCompleted} />}
                            incomplete={<StepNumber className={style.stepIsInCompleted} />}
                            active={<StepNumber className={style.stepIsActive} />}
                        />
                    </StepIndicator>
                </Step>
            ))}
        </Stepper>
    )
}

export default StepperMobile