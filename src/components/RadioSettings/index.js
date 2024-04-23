import { Box, Flex, HStack, Icon, Image, Text, useRadio, useRadioGroup } from '@chakra-ui/react'
import React from 'react'

function RadioCard(props) {
    const { getInputProps, getRadioProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getRadioProps()

    return (
        <Box as='label'>
            <input {...input} />
            <Flex
                {...checkbox}
                direction='column'
                gap='36px'
                justifyContent='space-between'
                cursor='pointer'
                borderWidth='1px'
                borderRadius='8px'
                boxShadow='md'
                minW='120px'
                p='12px'
                _hover={{
                    borderColor: 'blue.500'
                }}
                _checked={{
                    bg: 'blue.50',
                    borderColor: 'blue.500',
                }}
            >
                <Image src={props.icon} w='32px' />
                <Box>
                    <Text color='blue.600' fontWeight='600'>{props.type}</Text>
                    <Text color='gray.500' fontSize='14px'>{props.price}</Text>
                    <Text color='blue.500' fontSize='12PX'>{props.scheme ? props.scheme : ''}</Text>
                </Box>
            </Flex>
        </Box>
    )
}

const RadioSettings = ({ radioOptions, name }) => {

    const { getRootProps, getRadioProps } = useRadioGroup({
        name,
        defaultValue: radioOptions[0].type,
        onChange: console.log,
    })
    const group = getRootProps()

    return (
        <HStack {...group}>
            {radioOptions.map((option, index) => {
                const radio = getRadioProps({ ...option, value: option.type })
                return (
                    <RadioCard key={index} {...radio} />
                )
            })}
        </HStack>
    )
}

export default RadioSettings