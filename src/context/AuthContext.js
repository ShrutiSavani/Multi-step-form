import { createContext, useState } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')

    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [phoneNoError, setPhoneNoError] = useState('')

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