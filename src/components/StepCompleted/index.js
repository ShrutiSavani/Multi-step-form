import React from 'react'

import thakYouImg from '../../assets/icon-thank-you.svg'
import { Flex, Image, Text } from '@chakra-ui/react'

const StepCompleted = () => {
    return (
        <Flex
            p={{ base: '40px 0' ,md:''}}
            direction='column'
            h='100%'
            alignItems='center'
            justifyContent='center'>
            <Image
                src={thakYouImg}
                w='60px'
            />
            <Text
                color='blue.700'
                fontWeight='600'
                fontSize='26px'
                mt='24px'
                mb='12px'
            >Thank You!</Text>
            <Text
                color='gray.500'
                fontSize='16px'
                textAlign='center'
            >
                Thanks for confirming your subscription! We hope you have fun using your plateform. If you ever need supprot, please feel free to email us at support@lorengaming.com.
            </Text>
        </Flex>
    )
}

export default StepCompleted