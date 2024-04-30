import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const data = JSON.parse(localStorage.getItem('userdata')) || ''
    // const [name, setName] = useState(localStorage.getItem('name') || '')

    const [name, setName] = useState('' || data.name)
    const [email, setEmail] = useState('' || data.email)
    const [phoneNo, setPhoneNo] = useState('' || data.phoneNo)

    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [phoneNoError, setPhoneNoError] = useState('')

    useEffect(() => {
        // localStorage.setItem('name', (name))

        const userdata = { name: name, email: email, phoneNo: phoneNo }
        localStorage.setItem('userdata', JSON.stringify(userdata))
    }, [name, email, phoneNo])

    const handleFormValidation = (goToNextStep) => {

        const reEmail = /\S+@\S+\.\S+/;
        const isValidEmail = reEmail.test(email);

        const rePhone = /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/;
        const isValidPhoneNo = rePhone.test(phoneNo);

        if (name !== '' && reEmail.test(email) && rePhone.test(phoneNo)) {
            goToNextStep()
        }

        if (name === '') {
            setNameError('This field is reqired.')
        } else {
            setNameError('')
        }

        if (email === '') {
            setEmailError('This field is reqired.')
        } else if (isValidEmail === false) {
            setEmailError('Please enter valid email.')
        } else {
            setEmailError('')
        }

        if (phoneNo === '') {
            setPhoneNoError('This field is reqired.')
        } else if (isValidPhoneNo === false) {
            setPhoneNoError('Please enter valid PhoneNo.')
        } else {
            setPhoneNoError('')
        }
    }

    return (
        <AuthContext.Provider value={{
            handleFormValidation,
            name,
            setName,
            nameError,
            email,
            setEmail,
            emailError,
            phoneNo,
            setPhoneNo,
            phoneNoError,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider