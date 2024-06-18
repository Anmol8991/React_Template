import { useState } from 'react'
import { FormItem, FormContainer } from '@/components/ui/Form'
import Button from '@/components/ui/Button'
import Alert from '@/components/ui/Alert'
import PasswordInput from '@/components/shared/PasswordInput'
import ActionLink from '@/components/shared/ActionLink'
import { useNavigate, useParams } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import type { CommonProps } from '@/@types/common'
import { useApi } from '@/utils/hooks/useApi'
import { apiResetPassword } from '@/services/auth.api'

interface ResetPasswordFormProps extends CommonProps {
    disableSubmit?: boolean
    signInUrl?: string
}

type ResetPasswordFormSchema = {
    password: string
    confirmPassword: string
}

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .max(16, 'Password must be at most 16 characters')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(
            /[!@#$%^&*(),.?":{}|<>]/,
            'Password must contain at least one special character'
        )
        .required('Password is required'),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
})

const ResetPasswordForm = (props: ResetPasswordFormProps) => {
    const { id } = useParams()

    const { className, signInUrl = '/sign-in' } = props

    const { isSuccess, isError, error, mutateAsync, isLoading } = useApi(
        apiResetPassword,
        { onSuccess: () => setResetComplete(true) }
    )

    const [resetComplete, setResetComplete] = useState(false)

    const navigate = useNavigate()

    const onSubmit = async (values: ResetPasswordFormSchema) => {
        const payload = {
            password: values.password,
            password_confirmation: values.confirmPassword,
            email: 'fundpe@exelica.com',
            token: id,
        }

        await mutateAsync(payload)
    }

    const onContinue = () => {
        navigate('/sign-in')
    }

    return (
        <div className={className}>
            <div className="mb-6">
                {isSuccess ? (
                    <>
                        <h3 className="mb-1">Reset done</h3>
                        <p>Your password has been successfully reset</p>
                    </>
                ) : (
                    <>
                        <h3 className="mb-1">Set new password</h3>
                        <p>
                            Your new password must different to previous
                            password
                        </p>
                    </>
                )}
            </div>
            {isError && (
                <Alert
                    showIcon
                    className="mb-4"
                    type="danger"
                    title={error.response.data.message}
                >
                    {JSON.stringify(error.response.data.data)}
                </Alert>
            )}
            <Formik
                initialValues={{
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    onSubmit(values)
                }}
            >
                {({ touched, errors }) => (
                    <Form>
                        <FormContainer>
                            {!resetComplete ? (
                                <>
                                    <FormItem
                                        label="Password"
                                        invalid={
                                            errors.password && touched.password
                                        }
                                        errorMessage={errors.password}
                                    >
                                        <Field
                                            autoComplete="off"
                                            name="password"
                                            placeholder="Password"
                                            component={PasswordInput}
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Confirm Password"
                                        invalid={
                                            errors.confirmPassword &&
                                            touched.confirmPassword
                                        }
                                        errorMessage={errors.confirmPassword}
                                    >
                                        <Field
                                            autoComplete="off"
                                            name="confirmPassword"
                                            placeholder="Confirm Password"
                                            component={PasswordInput}
                                        />
                                    </FormItem>
                                    <Button
                                        block
                                        loading={isLoading}
                                        variant="solid"
                                        type="submit"
                                    >
                                        {isLoading ? 'Submitting...' : 'Submit'}
                                    </Button>
                                </>
                            ) : (
                                <Button
                                    block
                                    variant="solid"
                                    type="button"
                                    onClick={onContinue}
                                >
                                    Continue
                                </Button>
                            )}

                            <div className="mt-4 text-center">
                                <span>Back to </span>
                                <ActionLink to={signInUrl}>Sign in</ActionLink>
                            </div>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ResetPasswordForm
