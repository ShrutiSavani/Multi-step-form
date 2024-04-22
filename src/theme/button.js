import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const solid = defineStyle({
    color: 'white',
    bg: 'blue.600',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    p: '0px 6px',
    h: '28px',
    _hover: {
        color: 'blue.600',
        bg: 'white',
    }
})

const prev = defineStyle({
    color: 'blue.600',
    border: '1px solid',
    borderColor: 'blue.600',
    borderRadius: '4px',
    fontSize: '14px',
    p: '0px 6px',
    h: '28px',
    _hover: {
        color: 'white',
        bg: 'blue.600'
    }
})

export const buttonTheme = defineStyleConfig({
    variants: {
        solid,
        prev
    }
})

export default buttonTheme