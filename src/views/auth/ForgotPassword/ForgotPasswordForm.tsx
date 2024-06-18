import { FormItem, FormContainer } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Alert from '@/components/ui/Alert'
import ActionLink from '@/components/shared/ActionLink'

import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import type { CommonProps } from '@/@types/common'
import { useApi } from '@/utils/hooks/useApi'
import { apiForgotPassword } from '@/services/auth.api'

interface ForgotPasswordFormProps extends CommonProps {
    disableSubmit?: boolean
    signInUrl?: string
}

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Please enter your email'),
})

const ForgotPasswordForm = (props: ForgotPasswordFormProps) => {
    const { className, signInUrl = '/sign-in' } = props

    const { data, mutateAsync, isLoading, isError, error } = useApi(apiForgotPassword)

    return (
        <div className={className}>
            <div className="mb-6">
                {data?.data?.success ? (
                    <>
                        <h3 className="mb-1">Check your email</h3>
                        <p>
                            We have sent a password recovery instruction to your
                            email
                        </p>
                    </>
                ) : (
                    <>
                        <h3 className="mb-1">Forgot Password</h3>
                        <p>
                            Please enter your email address to receive a
                            verification code
                        </p>
                    </>
                )}
            </div>
            {isError && (
                <Alert showIcon className="mb-4" type="danger">
                    {error?.response?.data?.message}
                </Alert>
            )}
            <Formik
                initialValues={{
                    email: '',
                }}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    mutateAsync({ email: values.email })
                }}
            >
                {({ touched, errors }) => (
                    <Form>
                        <FormContainer>
                            <div
                                className={data?.data?.success ? 'hidden' : ''}
                            >
                                <FormItem
                                    invalid={errors.email && touched.email}
                                    errorMessage={errors.email}
                                >
                                    <Field
                                        type="email"
                                        autoComplete="off"
                                        name="email"
                                        placeholder="Email"
                                        component={Input}
                                    />
                                </FormItem>
                            </div>
                            <Button
                                block
                                loading={isLoading}
                                variant="solid"
                                type="submit"
                            >
                                {data?.data?.success
                                    ? 'Resend Email'
                                    : 'Send Email'}
                            </Button>
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

export default ForgotPasswordForm
