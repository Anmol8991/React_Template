import { Button } from '../ui'
import { useApi } from '@/utils/hooks/useApi'
import { apiGoogleLogin } from '@/services/auth.api'
import axios from 'axios'
import { useGoogleLogin } from '@react-oauth/google'

const SocialLogin = () => {
    const { mutateAsync, isError, error, isLoading, isSuccess, data } =
        useApi(apiGoogleLogin)

    const loginGoogle = async (payload) => {
        axios
            .get(`https://api.fundpe.org/api/auth/google/callback`, {
                params: payload,
            })
            .then((response) => {
                // Handle the response or redirect as needed
                console.log(response)
            })
            .catch((error) => {
                console.error('Callback error:', error)
            })
    }

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: async (res) => {
            console.log(res)
            loginGoogle(res)

            // const payload = {
            //     token: res?.code,
            // }
            // await mutateAsync(payload)
            // console.log({data, error})
        },
        onError: (e) => {
            console.log('Login Failed', e)
        },
        flow: 'auth-code',
    })

    // const getGUrl = async () => {
    //     try {
    //         const res = axios.get('https://api.fundpe.org/api/v1/auth/google')
    //         return res
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const handleGoogleLogin = async () => {
    //     getGUrl().then((res) => {
    //         window.location.href = res?.data?.data
    //     })
    // }

    return (
        <>
            <p className="my-2 text-center">OR</p>
            <div className="my-2 flex gap-3">
                <Button
                    type="button"
                    size="sm"
                    className="flex items-center gap-3 justify-center flex-auto"
                    onClick={handleGoogleLogin}
                >
                    <img className="w-4" src="/img/others/google.png" alt="" />
                    <span>Sign in with Google</span>
                </Button>
                {/* <Button
                type="button"
                size="sm"
                className="flex items-center gap-3 justify-center flex-auto"
            >
                <img className="w-4" src="/img/others/microsoft.png" alt="" />
                <span>Sign In with Microsoft</span>
            </Button> */}
            </div>
        </>
    )
}

export default SocialLogin
