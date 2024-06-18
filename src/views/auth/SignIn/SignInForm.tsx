import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Checkbox from '@/components/ui/Checkbox'
import { FormItem, FormContainer } from '@/components/ui/Form'
import Alert from '@/components/ui/Alert'
import PasswordInput from '@/components/shared/PasswordInput'
import ActionLink from '@/components/shared/ActionLink'
import useAuth from '@/utils/hooks/useAuth'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import type { CommonProps } from '@/@types/common'

import SocialLogin from '@/components/custom/SocialLogin'

import { useApi } from '@/utils/hooks/useApi'
import { apiLogin } from '@/services/auth.api'

interface SignInFormProps extends CommonProps {
    disableSubmit?: boolean
    forgotPasswordUrl?: string
    signUpUrl?: string
}

const validationSchema = Yup.object().shape({
    userName: Yup.string().required('Please enter your user name'),
    password: Yup.string().required('Please enter your password'),
    rememberMe: Yup.bool(),
})

const SignInForm = (props: SignInFormProps) => {
    const {
        className,
        forgotPasswordUrl = '/forgot-password',
        signUpUrl = '/sign-up',
    } = props

    const { signIn } = useAuth()

    const { mutate, error, isError, isLoading } = useApi(apiLogin, {
        onSuccess: (data) => {
            signIn(data.data.data)
        },
    })
    return (
        <div className={className}>
            {isError && (
                <Alert showIcon className="mb-4" type="danger">
                    <>{error?.response?.data?.message}</>
                </Alert>
            )}
            <Formik
                initialValues={{
                    userName: '',
                    password: '',
                    rememberMe: true,
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    const username = values.userName
                    const password = values.password

                    mutate({ username, password })
                }}
            >
                {({ touched, errors }) => (
                    <Form>
                        <FormContainer>
                            <FormItem
                                label="User Name"
                                invalid={
                                    (errors.userName &&
                                        touched.userName) as boolean
                                }
                                errorMessage={errors.userName}
                            >
                                <Field
                                    type="text"
                                    autoComplete="off"
                                    name="userName"
                                    placeholder="User Name"
                                    component={Input}
                                />
                            </FormItem>
                            <FormItem
                                label="Password"
                                invalid={
                                    (errors.password &&
                                        touched.password) as boolean
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
                            <div className="flex justify-between mb-6">
                                <Field
                                    className="mb-0"
                                    name="rememberMe"
                                    component={Checkbox}
                                >
                                    Remember Me
                                </Field>
                                <ActionLink to={forgotPasswordUrl}>
                                    Forgot Password?
                                </ActionLink>
                            </div>
                            <Button
                                block
                                loading={isLoading}
                                variant="solid"
                                type="submit"
                            >
                                {isLoading ? 'Signing in...' : 'Sign In'}
                            </Button>
                            <SocialLogin />

                            <div className="mt-4 text-center">
                                <span>{`Don't have an account yet?`} </span>
                                <ActionLink to={signUpUrl}>Sign up</ActionLink>
                            </div>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignInForm
