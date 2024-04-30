import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { StepCompleted, StepFour, StepOne, StepThree, StepTwo, StepperComponent, StepperMobile } from '../../components'
import { StepContext } from '../../context/StepContext'
import useWindowsWidth from '../../hooks/UseWindowsWidth'

const Form = () => {
    const { step } = useContext(StepContext)
    const { width } = useWindowsWidth()

    return (
        // <Box
        //     // bg='yellow'
        //     // bg={{ base: 'none', md: 'white' }}   
        //     m={{ base: '32px', md: '60px auto' }}
        //     // p='20px'
        //     maxW='1040px'
        // >
        //     <Flex
        //         direction={{ base: 'column', md: 'row' }}
        //         gap='40px'
        //         justifyContent='center'
        //         alignItems={{ base: 'center', md: 'unset' }}
        //     >
        //         <Box
        //             bg='blue.50'
        //             p={{ base: '12px', md: '20px' }}
        //             pl={{ base: '12px', lg: '40px', xl: '80px' }}
        //             flex='2'
        //             maxW={{ base: 'fit-content', md: '340px' }}
        //             borderRadius='8px'
        //         >
        //             {/* {
        //                 width >= 768 ? (
        //                     <StepperComponent
        //                         boxStyle={{
        //                             h: '320px',
        //                         }}
        //                     />
        //                 ) : ( */}
        //                     <StepperMobile
        //                         boxStyle={{
        //                             w: { base: '220px', sm: '320px' }
        //                         }} />
        //                 {/* )
        //             } */}

        //         </Box>

                <Box
                    // bg='pink'
                    bg='white'
                    borderRadius='12px'
                    boxShadow='0px 8px 6px -6px #adafb1'
                    p={{ base: '20px', md: '40px' }}
                    // m='20px'
                    flex='5'
                    minW={{ base: '372px', md: '500px' }}
                    maxW='516px'
                    h='530px'
                >
                    {
                        step === 0 ?
                            <StepOne />
                            :
                            step === 1 ?
                                <StepTwo />
                                :
                                step === 2 ?
                                    <StepThree />
                                    :
                                    step === 3 ?
                                        <StepFour />
                                        :
                                        <StepCompleted />
                    }
                </Box>

        //         <Box bg='teal' w='100%'>
        //             <Button>hru</Button>
        //         </Box>
        //     </Flex >
        // </Box >
    )
}

export default Form