import { useApi } from '@/utils/hooks/useApi'
import ResetPasswordForm from './ResetPasswordForm'
import { apiVerifyResetPasswordToken } from '@/services/auth.api'
import { ActionLink, Loading } from '@/components/shared'
import { useEffect } from 'react'
import { Alert, Card } from '@/components/ui'

const ResetPassword = () => {
    const { isError, isSuccess, isLoading, mutateAsync } = useApi(
        apiVerifyResetPasswordToken
    )

    const verifyToken = async () => {
        const currentUrl = window.location.href
        const url = new URL(currentUrl)
        const token = url.pathname.split('/').pop()
        const email = url.searchParams.get('email')
        const payload = {
            token,
            email,
        }
        await mutateAsync(payload)
    }

    useEffect(() => {
        verifyToken()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLoading) {
        return <Loading />
    }

    if (isError) {
        return (
            <Card>
                <Alert showIcon type="danger">
                    This link is invalid or expired to reset password
                </Alert>
                <div className="mt-4 text-center">
                    <span>Go back to </span>
                    <ActionLink to={'/sign-in'}>Sign in</ActionLink> or{' '}
                    <ActionLink to={'/forgot-password'}>
                        Forgot password
                    </ActionLink>
                </div>
            </Card>
        )
    }

    if (isSuccess) {
        return <ResetPasswordForm disableSubmit={false} />
    }
}

export default ResetPassword
