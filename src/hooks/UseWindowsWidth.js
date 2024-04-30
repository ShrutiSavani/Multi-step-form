import { useEffect, useState } from 'react'

const useWindowsWidth = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [window.innerWidth])

    return {
        width
    }
}

export default useWindowsWidth