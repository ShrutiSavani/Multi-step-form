import { createContext, useState } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [phoneNoError, setPhoneNoError] = useState('')

    const handleFormValidation = (formData, goToNextStep) => {

        const reEmail = /\S+@\S+\.\S+/;
        const isValidEmail = reEmail.test(formData.email);

        const rePhone = /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/;
        const isValidPhoneNo = rePhone.test(formData.phoneNo);

        if (formData.name !== '' && reEmail.test(formData.email) && rePhone.test(formData.phoneNo)) {
            goToNextStep()
        }

        if (formData.name === '') {
            setNameError('This field is reqired.')
        } else {
            setNameError('')
        }

        if (formData.email === '') {
            setEmailError('This field is reqired.')
        } else if (isValidEmail === false) {
            setEmailError('Please enter valid email.')
        } else {
            setEmailError('')
        }

        if (formData.phoneNo === '') {
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
            nameError,
            emailError,
            phoneNoError,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider