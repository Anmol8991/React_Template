import { useAppSelector } from '@/store'
import Checkbox from '@/components/ui/Checkbox'
import { useState, ComponentType } from 'react'
import Loading from '@/components/shared/Loading'
import { HiOutlinePencil, HiOutlineCheckCircle, HiOutlineBan } from 'react-icons/hi'
import {ImSpinner2} from 'react-icons/im'
import {
    Button,
    Card,
    FormContainer,
    FormItem,
    Input,
    Select,
} from '@/components/ui'
import InputGroup from '@/components/ui/InputGroup'
import { NumericFormat, NumericFormatProps } from 'react-number-format'
import type { InputProps } from '@/components/ui/Input'
import { countryList } from '@/data'
import type { OptionProps, SingleValueProps } from 'react-select'
import { components } from 'react-select'
import type { MouseEvent } from 'react'
import { Form, Field, FieldInputProps, FieldProps, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useApi } from '@/utils/hooks/useApi'
import { apiUpdateProfile, apiCheckPassword } from '@/services/admin.api'
import { notify } from '@/utils/commonHelper'
import debounce from 'lodash/debounce'

const { Addon } = InputGroup
type CountryOption = {
    label: string
    dialCode: string
    value: string
}

const NumberInput = (props: InputProps) => {
    return <Input {...props} value={props.field.value} />
}

const NumericFormatInput = ({
    onValueChange,
    ...rest
}: Omit<NumericFormatProps, 'form'> & {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    form: any
    field: FieldInputProps<unknown>
}) => {
    return (
        <NumericFormat
            customInput={Input as ComponentType}
            type="text"
            autoComplete="off"
            onValueChange={onValueChange}
            {...rest}
        />
    )
}

const PhoneSelectOption = ({
    innerProps,
    data,
    isSelected,
}: OptionProps<CountryOption>) => {
    return (
        <div
            className={`cursor-pointer flex items-center justify-between p-2 ${
                isSelected
                    ? 'bg-gray-100 dark:bg-gray-500'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-600'
            }`}
            {...innerProps}
        >
            <div className="flex items-center gap-2">
                <span>
                    ({data.value}) {data.dialCode}
                </span>
            </div>
        </div>
    )
}

const { SingleValue } = components
const PhoneControl = (props: SingleValueProps<CountryOption>) => {
    const selected = props.getValue()[0]
    return (
        <SingleValue {...props}>
            {selected && <span>{selected.dialCode}</span>}
        </SingleValue>
    )
}

const Profile = () => {
    const [isEditable, setIsEditable] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)

    const userData = useAppSelector((state) => state.auth.user)
    // console.log(userData)

    // const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const minLengthRegex = /^.{8,}$/
    const uppercaseRegex = /^(?=.*[A-Z])/
    const lowercaseRegex = /^(?=.*[a-z])/
    const numberRegex = /^(?=.*\d)/
    const specialCharRegex = /^(?=.*[@$!%*?&#])/
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('This field is required!'),
        email: Yup.string().required('This field is required!'),
        role: Yup.string().required('This field is required!'),
        dialCode: Yup.string().required('Please select dial code'),
        phoneNumber: Yup.string()
            .matches(/^\d{10}$/, 'Invalid phone number')
            .required('Phone number is required'),
        changePassword: Yup.bool(),
        newPassword: Yup.string().when('changePassword', {
            is: true,
            then: () =>
                Yup.string()
                    .matches(
                        minLengthRegex,
                        'Password must be at least 8 characters long.'
                    )
                    .matches(
                        uppercaseRegex,
                        'Password must contain at least one uppercase letter.'
                    )
                    .matches(
                        lowercaseRegex,
                        'Password must contain at least one lowercase letter.'
                    )
                    .matches(
                        numberRegex,
                        'Password must contain at least one number.'
                    )
                    .matches(
                        specialCharRegex,
                        'Password must contain at least one special character.'
                    )
                    .required('This field is required!'),
            otherwise: () => Yup.string().nullable(),
        }),
        confirmPassword: Yup.string().when('changePassword', {
            is: true,
            then: () =>
                Yup.string()
                    .required('Confirm Password Required')
                    .oneOf([Yup.ref('newPassword')], 'Password does not match'),
            otherwise: () => Yup.string().nullable(),
        }),
    })

    const { mutateAsync: mutateCheckPassword, isSuccess: isCheckPasswordSuccess, isError: isCheckPasswordError, isLoading: isCheckPasswordLoading } = useApi(apiCheckPassword, {
        onSuccess: (response) => {
            console.log(
                'Response of Check Password Api: ',
                response?.data?.message
            )
            setIsCorrect(true)
        },
        onError: (err) => {
            console.log('Error in response of Check Password: ', err)
            setIsCorrect(false)
            // notify(err.response.data.message, false)
        },
    })

    const { mutateAsync, error, isError, isLoading, reset, data } = useApi(
        apiUpdateProfile,
        {
            onSuccess: (data) => {
                // console.log("Data on Success: ",data);
                notify(data?.data?.message, true)
            },
            onError: (error) => {
                // console.log("Error: ", error)
                notify(error?.response?.data?.message, false)
            },
        }
    )

    const handleClick = async (values) => {
        await mutateAsync({
            name: values.name,
            contact_no: values.phoneNumber,
            email: values.email,
        })
    }

    const checkPassword = async (value) => {
        await mutateCheckPassword({ password: value })
    }
    const debounceFn = debounce(checkPassword, 1000)
    const handleCheckPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        debounceFn(e.target.value)
    }

    return (
        <Card
            id="feeFrequency"
            className="flex justify-center items-center"
            bodyClass="w-full"
        >
            <div className="w-full">
                <div className="flex justify-between">
                    <h5>Profile</h5>
                    <Button
                        disabled={isEditable}
                        size="sm"
                        type="button"
                        icon={<HiOutlinePencil />}
                        onClick={() => {
                            setIsEditable(true)
                        }}
                    >
                        <span>Edit</span>
                    </Button>
                </div>
                <Formik
                    enableReinitialize
                    initialValues={{
                        name: userData.name,
                        email: userData.email,
                        role: userData.role_name,
                        dialCode: '',
                        phoneNumber: '',
                        changePassword: false,
                        newPassword: null,
                        confirmPassword: null,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        console.log('values', values)
                        handleClick(values)
                        setIsCorrect(false)
                        setIsEditable(false)

                        resetForm()
                    }}
                >
                    {({ values, touched, errors, resetForm }) => (
                        <Form>
                            <FormContainer>
                                <div className="grid lg:grid-cols-2 lg:gap-6 grid-cols-1">
                                    <FormContainer>
                                        <FormItem
                                            asterisk
                                            label="Name"
                                            invalid={
                                                errors.name && touched.name
                                            }
                                            errorMessage={errors.name}
                                        >
                                            <Field
                                                disabled={!isEditable}
                                                type="text"
                                                name="name"
                                                placeholder="Enter Name"
                                                component={Input}
                                            />
                                        </FormItem>
                                        <FormItem
                                            asterisk
                                            label="Role"
                                            invalid={
                                                errors.role && touched.role
                                            }
                                            errorMessage={errors.role}
                                        >
                                            <Field
                                                disabled
                                                type="text"
                                                name="role"
                                                component={Input}
                                            />
                                        </FormItem>
                                    </FormContainer>
                                    <FormContainer>
                                        <FormItem
                                            asterisk
                                            label="Email"
                                            invalid={
                                                errors.email && touched.email
                                            }
                                            errorMessage={errors.email}
                                        >
                                            <Field
                                                disabled={!isEditable}
                                                type="text"
                                                name="email"
                                                placeholder="Enter Email"
                                                component={Input}
                                            />
                                        </FormItem>
                                        <FormItem
                                            label="Phone Number"
                                            invalid={
                                                (errors.dialCode &&
                                                    touched.dialCode) ||
                                                (errors.phoneNumber &&
                                                    touched.phoneNumber)
                                            }
                                            errorMessage="Please enter your phone number"
                                        >
                                            <InputGroup>
                                                <Field name="dialCode">
                                                    {({
                                                        field,
                                                        form,
                                                    }: FieldProps) => (
                                                        <Select<CountryOption>
                                                            isDisabled={
                                                                !isEditable
                                                            }
                                                            className="min-w-[130px]"
                                                            placeholder="Dial Code"
                                                            components={{
                                                                Option: PhoneSelectOption,
                                                                SingleValue:
                                                                    PhoneControl,
                                                            }}
                                                            field={field}
                                                            form={form}
                                                            options={
                                                                countryList
                                                            }
                                                            value={countryList.filter(
                                                                (country) =>
                                                                    country.value ===
                                                                    values.dialCode
                                                            )}
                                                            onChange={(
                                                                country
                                                            ) =>
                                                                form.setFieldValue(
                                                                    field.name,
                                                                    country?.value
                                                                )
                                                            }
                                                        />
                                                    )}
                                                </Field>
                                                <Field name="phoneNumber">
                                                    {({
                                                        field,
                                                        form,
                                                    }: FieldProps) => {
                                                        return (
                                                            <NumericFormatInput
                                                                disabled={
                                                                    !isEditable
                                                                }
                                                                form={form}
                                                                field={field}
                                                                customInput={
                                                                    NumberInput as ComponentType
                                                                }
                                                                placeholder="Phone Number"
                                                                onValueChange={(
                                                                    e
                                                                ) => {
                                                                    form.setFieldValue(
                                                                        field.name,
                                                                        e.value
                                                                    )
                                                                }}
                                                            />
                                                        )
                                                    }}
                                                </Field>
                                            </InputGroup>
                                        </FormItem>
                                    </FormContainer>
                                </div>
                                {isEditable && (
                                    <>
                                        <FormItem>
                                            <Field
                                                name="changePassword"
                                                component={Checkbox}
                                            >
                                                Change Password
                                            </Field>
                                        </FormItem>
                                        {values.changePassword && (
                                            <>
                                                <div className="grid md:grid-cols-3 md:gap-6 grid-cols-1">
                                                    <div className="md:col-span-2">
                                                        <FormItem
                                                            asterisk
                                                            label="Current Password"
                                                        >
                                                            <InputGroup>
                                                                <Input
                                                                    autoComplete="new-password"
                                                                    // disabled={
                                                                    //     isCorrect
                                                                    // }
                                                                    // value={
                                                                    //     currentPassword
                                                                    // }
                                                                    type="password"
                                                                    placeholder="Enter Current Password"
                                                                    onChange={
                                                                        handleCheckPassword
                                                                    }
                                                                />
                                                                {isCheckPasswordSuccess && <Addon><HiOutlineCheckCircle /> </Addon>}
                                                                {isCheckPasswordLoading && <Addon><ImSpinner2 /></Addon>}
                                                                {isCheckPasswordError && <Addon><HiOutlineBan /> </Addon>}

                                                            </InputGroup>
                                                        </FormItem>
                                                        <FormItem
                                                            asterisk
                                                            label="New Password"
                                                            invalid={
                                                                errors.newPassword &&
                                                                touched.newPassword
                                                            }
                                                            errorMessage={
                                                                errors.newPassword
                                                            }
                                                        >
                                                            <Field
                                                                disabled={
                                                                    !isCorrect
                                                                }
                                                                autoComplete="off"
                                                                type="password"
                                                                name="newPassword"
                                                                placeholder="Enter New password"
                                                                component={
                                                                    Input
                                                                }
                                                                value={
                                                                    values.newPassword
                                                                }
                                                            />
                                                        </FormItem>
                                                        <FormItem
                                                            asterisk
                                                            autoComplete='off'
                                                            label="Confirm Password"
                                                            invalid={
                                                                errors.confirmPassword &&
                                                                touched.confirmPassword
                                                            }
                                                            errorMessage={
                                                                errors.confirmPassword
                                                            }
                                                        >
                                                            <Field
                                                                disabled={
                                                                    !isCorrect
                                                                }
                                                                type="password"
                                                                name="confirmPassword"
                                                                placeholder="Re-Enter new Password"
                                                                component={
                                                                    Input
                                                                }
                                                                value={
                                                                    values.confirmPassword
                                                                }
                                                            />
                                                        </FormItem>
                                                    </div>
                                                    <div className="md:col-span-1 mb-2">
                                                        <Card>
                                                            <h5 className="fs-13">
                                                                Password must
                                                                contain:{' '}
                                                            </h5>
                                                            <p
                                                                id="pass-length"
                                                                className="invalid fs-12 mb-2"
                                                            >
                                                                Minimum{' '}
                                                                <b>
                                                                    8 characters{' '}
                                                                </b>
                                                            </p>
                                                            <p
                                                                id="pass-lower"
                                                                className="invalid fs-12 mb-2"
                                                            >
                                                                At{' '}
                                                                <b>lowercase</b>{' '}
                                                                letter (a-z)
                                                            </p>
                                                            <p
                                                                id="pass-upper"
                                                                className="invalid fs-12 mb-2"
                                                            >
                                                                At least{' '}
                                                                <b>uppercase</b>{' '}
                                                                letter (A-Z)
                                                            </p>
                                                            <p
                                                                id="pass-number"
                                                                className="invalid fs-12 mb-0"
                                                            >
                                                                At least{' '}
                                                                <b>number</b>{' '}
                                                                (0-9)
                                                            </p>
                                                            <p
                                                                id="pass-number"
                                                                className="invalid fs-12 mb-0"
                                                            >
                                                                At least{' '}
                                                                <b>
                                                                    one special
                                                                    character
                                                                </b>{' '}
                                                                (@$!%*?&#)
                                                            </p>
                                                        </Card>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        <FormItem>
                                            <div className="w-full flex justify-end gap-4">
                                                <Button
                                                    type="reset"
                                                    onClick={() => {
                                                        resetForm()
                                                        setIsEditable(false)
                                                        setIsCorrect(false)
                                                    }}
                                                >
                                                    Cancel
                                                </Button>
                                                <Button
                                                    variant="solid"
                                                    type="submit"
                                                >
                                                    Save
                                                </Button>
                                            </div>
                                        </FormItem>
                                    </>
                                )}
                            </FormContainer>
                        </Form>
                    )}
                </Formik>
            </div>
        </Card>
    )
}

export default Profile
