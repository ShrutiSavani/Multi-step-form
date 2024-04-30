import { Box, Flex, Image, useRadio, useRadioGroup } from '@chakra-ui/react'
import React, { useContext } from 'react'
import HeaderComponent from '../HeaderComponent'
import { SwitchContext } from '../../context/SwitchContext'

function RadioCard(props) {
    const { getInputProps, getRadioProps } = useRadio(props)
    const { checked } = useContext(SwitchContext)
    const input = getInputProps()
    const checkbox = getRadioProps()

    return (
        <Box as='label' >
            <input {...input} />
            <Flex
                {...checkbox}
                direction={{ base: 'row', md: 'column' }}
                gap='36px'
                justifyContent={{ base: '', md: 'space-between' }}
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
                    {
                        !checked ?
                            <HeaderComponent title={props.type} description={`$${props.priceM}/mo`} type='text' />
                            :
                            <HeaderComponent title={props.type} description={`$${props.priceY}/yr`} subDescription={props.scheme} type='text' />
                    }

                </Box>
            </Flex>
        </Box>
    )
}

const RadioSettings = ({ radioOptions, name, boxStyle, onValueChange }) => {

    const { selectedSchemesArray } = useContext(SwitchContext)

    const index = radioOptions.findIndex((option) => {
        return option.slug === selectedSchemesArray[0].slug
    })

    const { getRootProps, getRadioProps } = useRadioGroup({
        name,
        defaultValue: radioOptions[index].slug,
        onChange: onValueChange,
    })
    const group = getRootProps()

    return (
        <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            {...group} {...boxStyle}>
            {radioOptions.map((option, index) => {
                const radio = getRadioProps({ ...option, value: option.slug })
                return (
                    <RadioCard key={index} {...radio} />
                )
            })}
        </Flex >
    )
}

export default RadioSettings