import { Alert, Select } from '@/components/ui'
import { FormItem, FormContainer } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import { useNavigate, useLocation } from 'react-router-dom'
import Button from '@/components/ui/Button'
import { Field, Form, Formik, FieldProps } from 'formik'
import * as Yup from 'yup'
import { useApi } from '@/utils/hooks/useApi'
import { apiAddUser, apiEditUser } from '@/services/admin.api'
import ShowError from '@/components/custom/ShowError'

type Option = {
    value: string
    label: string
}

type FormModel = {
    name: string
    email: string
    role: string
    client: string
}
interface PropsType {
    type?: boolean
    initialData?: FormModel
    setType?: () => void
}

const roleOptions: Option[] = [
    { value: 'ADMIN', label: 'Admin' },
    { value: 'USER', label: 'User' },
]
const clientOptions: Option[] = [
    { value: 'client1', label: 'Client 1' },
    { value: 'client2', label: 'Client 2' },
]

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[a-zA-Z\s]*$/, 'Only letters and spaces are allowed')
        .min(3, 'Too Short!')
        .max(20, 'Too Long!')
        .required('This field is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('This field is required'),
    role: Yup.string().required('This field is required'),
    client: Yup.string().required('This field is required'),
})

const UserForm = (props: PropsType) => {
    const { type, initialData, setType } = props
    const navigate = useNavigate()
    const location = useLocation()

    const isAddUserPath = location.pathname === '/users/addUser'

    const {
        data: editUserData,
        error: editUserError,
        isError: editUserIsError,
        mutate: editUserFun,
    } = useApi(apiEditUser)

    const {
        data: addUserData,
        error: addUserError,
        isError: addUserIsError,
        mutate: addUserFun,
    } = useApi(apiAddUser)

    const handleSubmit = (values) => {
        if (isAddUserPath) {
            const payload = {
                name: values.name,
                email: values.email,
                role_id: 5213,
                client_id: values.client,
            }
            addUserFun(payload)
        } else if (type) {
            const payload = {
                id: 15,
                name: values.name,
                email: values.email,
                role_id: 523,
                client_id: values.client,
            }
            editUserFun(payload)
        }
    }

    return (
        <Formik
            enableReinitialize
            initialValues={initialData}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                handleSubmit(values)
            }}
        >
            {({ values, touched, errors, resetForm }) => (
                <Form>
                    <FormContainer>
                        <div className="grid lg:grid-cols-2 lg:gap-4 grid-cols-1">
                            <FormContainer>
                                <FormItem
                                    asterisk={type}
                                    label="Name"
                                    invalid={errors.name && touched.name}
                                    errorMessage={errors.name}
                                >
                                    <Field
                                        disabled={!type}
                                        type="text"
                                        name="name"
                                        placeholder="Enter Name"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem
                                    asterisk={type}
                                    label="Email"
                                    invalid={errors.email && touched.email}
                                    errorMessage={errors.email}
                                >
                                    <Field
                                        disabled={!type}
                                        type="text"
                                        name="email"
                                        placeholder="Enter Email"
                                        component={Input}
                                    />
                                </FormItem>
                            </FormContainer>
                            <FormContainer>
                                <FormItem
                                    asterisk={type}
                                    label="Role"
                                    invalid={errors.role && touched.role}
                                    errorMessage={errors.role}
                                >
                                    <Field name="role">
                                        {({
                                            field,
                                            form,
                                        }: FieldProps<FormModel>) => (
                                            <Select
                                                isDisabled={!type}
                                                field={field}
                                                form={form}
                                                placeholder="Select Role"
                                                options={roleOptions}
                                                value={roleOptions.filter(
                                                    (option) =>
                                                        option.value ===
                                                        values.role
                                                )}
                                                onChange={(option) =>
                                                    form.setFieldValue(
                                                        field.name,
                                                        option?.value
                                                    )
                                                }
                                            />
                                        )}
                                    </Field>
                                </FormItem>
                                <FormItem
                                    asterisk={type}
                                    label="Client"
                                    invalid={errors.client && touched.client}
                                    errorMessage={errors.client}
                                >
                                    <Field name="client">
                                        {({
                                            field,
                                            form,
                                        }: FieldProps<FormModel>) => (
                                            <Select
                                                isDisabled={!type}
                                                field={field}
                                                form={form}
                                                placeholder="Select Client"
                                                options={clientOptions}
                                                value={clientOptions.filter(
                                                    (option) =>
                                                        option.value ===
                                                        values.client
                                                )}
                                                onChange={(option) =>
                                                    form.setFieldValue(
                                                        field.name,
                                                        option?.value
                                                    )
                                                }
                                            />
                                        )}
                                    </Field>
                                </FormItem>
                            </FormContainer>
                        </div>
                        {(addUserIsError || editUserIsError) &&
                            (isAddUserPath || type) && (
                                <Alert
                                    showIcon
                                    closable
                                    triggerByToast={true}
                                    className="mb-4"
                                    type="danger"
                                >
                                    {addUserIsError && (
                                        <ShowError err={addUserError} />
                                    )}
                                    {editUserIsError && (
                                        <ShowError err={editUserError} />
                                    )}
                                </Alert>
                            )}

                        {(addUserData?.data?.success ||
                            editUserData?.data?.success) && (
                            <FormItem>
                                <Alert
                                    showIcon
                                    closable
                                    triggerByToast={true}
                                    type="success"
                                >
                                    {addUserData?.data?.success && (
                                        <>addUserData?.response?.message</>
                                    )}
                                    {editUserData?.data?.success && (
                                        <>editUserData?.response?.message</>
                                    )}
                                </Alert>
                            </FormItem>
                        )}
                        {type && (
                            <FormItem>
                                <div className="w-full flex justify-end gap-4">
                                    <Button
                                        type="reset"
                                        onClick={() => {
                                            resetForm()
                                            if (!isAddUserPath) {
                                                setType()
                                            } else {
                                                navigate('/users')
                                            }
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button variant="solid" type="submit">
                                        {isAddUserPath ? 'Add User' : 'Save'}
                                    </Button>
                                </div>
                            </FormItem>
                        )}
                    </FormContainer>
                </Form>
            )}
        </Formik>
    )
}
UserForm.defaultProps = {
    type: true,
    initialData: {
        name: '',
        email: '',
        role: '',
        client: '',
    },
}
export default UserForm
