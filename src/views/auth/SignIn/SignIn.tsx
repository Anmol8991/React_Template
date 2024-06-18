import SignInForm from './SignInForm'
import Logo from '@/components/template/Logo'
import { useEffect } from 'react'

const SignIn = () => {
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search)
        // searchParams.forEach((value, key) => {
        //     console.log(`${key}: ${value}`)
        // })

        const gCode = searchParams.get('code')
        console.log({ gCode })
    }, [])

    return (
        <>
            <div className="flex justify-center items-center lg:hidden mb-8 ">
                <Logo mode="light" />
            </div>
            <div className="mb-8">
                <h3 className="mb-1">Welcome back!</h3>
                <p>Please enter your credentials to sign in!</p>
            </div>
            <SignInForm disableSubmit={false} />
        </>
    )
}

export default SignIn
