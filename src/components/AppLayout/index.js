import React from 'react'
import useWindowsWidth from '../../hooks/UseWindowsWidth'
import DesktopUI from '../DesktopUI'
import MobileUI from '../MobileUI'

const AppLayout = () => {
    const { width } = useWindowsWidth()

    if (width < 768) {
        return <MobileUI />
    }
    return <DesktopUI />
}

export default AppLayout