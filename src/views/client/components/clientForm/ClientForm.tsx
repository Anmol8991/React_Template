import AdaptableCard from '@/components/shared/AdaptableCard'
import {useNavigate, useLocation } from 'react-router-dom'
// import RichTextEditor from '@/components/shared/RichTextEditor'
import { FormItem, FormContainer } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Select from '@/components/ui/Select'
import { Field, Form, Formik, FieldProps } from 'formik'
import * as Yup from 'yup'
import ClientLogo from './ClientLogo'


type Option = {
    value: string | number
    label: string
}

type FormModel = {
    organizationName: string
    country: string
    subscriptionType: string
    subDomain: string
    adminName: string
    description: string
    panGst: string
    designation: string
    adminEmail: string
    contactName: string
    contactPhone: string
    contactEmail: string
    referredBy: string
    img?: string
    imgList?: {
        id: string
        name: string
        img: string
    }[]
}

const options: Option[] = [
    { value: 1, label: 'India' },
    { value: 2, label: 'USA' },
]
const options2: Option[] = [
    { value: 'Premium', label: 'Plan-A' },
    { value: 'Basic', label: 'PlanB-D' },
]

interface PropsType {
    type?: boolean
    initialData?: FormModel
    setType?: () => void
    handleSave: (values: FormModel) => void
}

const ClientForm = (props: PropsType) => {
    const { type, initialData, setType, handleSave } = props
    // console.log(initialData)
    const navigate = useNavigate()
    const location = useLocation()

    const validationSchema = Yup.object().shape({
        organizationName: Yup.string()
            .matches(/^[a-zA-Z\s]*$/, 'Only letters and spaces are allowed')
            .min(3, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Oranization Name is required'),
        adminName: Yup.string()
            .matches(/^[a-zA-Z\s]*$/, 'Only letters and spaces are allowed')
            .min(3, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Admin Name is required'),
        country: Yup.number().required('Please select one!'),
        subscriptionType: Yup.string().required('Please select one!'),
        subDomain: Yup.string()
            .matches(/^[a-zA-Z\s]*$/, 'Only letters and spaces are allowed')
            .min(3, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Sub Domain is required'),
        description: Yup.string()
            .matches(/^[a-zA-Z\s]*$/, 'Only letters and spaces are allowed')
            .required('Description is required'),
        panGst: Yup.string()
            .matches(/^[a-zA-Z0-9\s]*$/, 'Only letters and spaces are allowed')
            .min(3, 'Too Short!')
            .max(20, 'Too Long!')
            .nullable(),
        designation: Yup.string()
            .matches(/^[a-zA-Z\s]*$/, 'Only letters and spaces are allowed')
            .min(3, 'Too Short!')
            .max(20, 'Too Long!'),
        adminEmail: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        contactName: Yup.string()
            .matches(/^[a-zA-Z\s]*$/, 'Only letters and spaces are allowed')
            .min(3, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Admin Name is required'),
        contactPhone: Yup.string()
            .matches(
                /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
                'Phone number is not valid'
            )
            .required('Phone Number is required'),
        contactEmail: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        referredBy: Yup.string()
            .matches(/^[a-zA-Z\s]*$/, 'Only letters and spaces are allowed')
            .min(3, 'Too Short!')
            .max(20, 'Too Long!'),
    })
    
    return (
        <Formik
            enableReinitialize
            initialValues={initialData}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                // navigate('/clients/allClients')
                console.log('values', values)
                handleSave(values)
            }}
        >
            {({ values, touched, errors, resetForm }) => (
                <Form>
                    <FormContainer>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <div className="lg:col-span-2">
                                <AdaptableCard>
                                    <h5>Organization Information</h5>
                                    <div className="flex flex-wrap mt-4">
                                        <FormItem
                                            asterisk={type}
                                            className="w-full sm:flex-1 sm:mr-2"
                                            label="Organization Name"
                                            invalid={
                                                errors.organizationName &&
                                                touched.organizationName
                                            }
                                            errorMessage={
                                                errors.organizationName
                                            }
                                        >
                                            <Field
                                                disabled={!type}
                                                type="text"
                                                name="organizationName"
                                                placeholder="Enter Name"
                                                value={values?.organizationName}
                                                component={Input}
                                            />
                                        </FormItem>
                                        <FormItem
                                            asterisk={type}
                                            className="w-full sm:flex-1"
                                            label="Country"
                                            invalid={
                                                errors.country &&
                                                touched.country
                                            }
                                            errorMessage={errors.country}
                                        >
                                            <Field name="country">
                                                {({
                                                    field,
                                                    form,
                                                }: FieldProps<FormModel>) => (
                                                    <Select
                                                        isDisabled={!type}
                                                        field={field}
                                                        form={form}
                                                        placeholder="Please Select Country"
                                                        options={options}
                                                        value={options.filter(
                                                            (option) =>
                                                                option.value ===
                                                                values?.country
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
                                    </div>
                                    <div className="flex flex-wrap">
                                        <FormItem
                                            asterisk={type}
                                            className="w-full sm:flex-1 sm:mr-2"
                                            label="Subscription Type"
                                            invalid={
                                                errors.subscriptionType &&
                                                touched.subscriptionType
                                            }
                                            errorMessage={
                                                errors.subscriptionType
                                            }
                                        >
                                            <Field name="subscriptionType">
                                                {({
                                                    field,
                                                    form,
                                                }: FieldProps<FormModel>) => (
                                                    <Select
                                                        isDisabled={!type}
                                                        field={field}
                                                        form={form}
                                                        placeholder="Please Select Subscription Type"
                                                        options={options2}
                                                        value={options2.filter(
                                                            (option) =>
                                                                option.value ===
                                                                values?.subscriptionType
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
                                            className="w-full sm:flex-1"
                                            label="Sub Domain"
                                            invalid={
                                                errors.subDomain &&
                                                touched.subDomain
                                            }
                                            errorMessage={errors.subDomain}
                                        >
                                            <Field
                                                disabled={!type}
                                                type="text"
                                                name="subDomain"
                                                placeholder="Enter Sub Domain"
                                                value={values?.subDomain}
                                                component={Input}
                                            />
                                        </FormItem>
                                    </div>
                                    <FormItem
                                        asterisk={type}
                                        label="Description"
                                        labelClass="!justify-start"
                                        invalid={
                                            errors.description &&
                                            touched.description
                                        }
                                        errorMessage={errors.description}
                                    >
                                        <Field
                                            disabled={!type}
                                            type="text"
                                            name="description"
                                            placeholder="Enter Description"
                                            value={values?.description}
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        asterisk={
                                            type && values.country === 'india'
                                        }
                                        label="PAN/GST"
                                        labelClass="!justify-start"
                                        invalid={
                                            errors.panGst && touched.panGst
                                        }
                                        errorMessage={errors.panGst}
                                    >
                                        <Field
                                            disabled={!type}
                                            type="text"
                                            name="panGst"
                                            value={values?.panGst}
                                            placeholder="Enter PAN/GST"
                                            component={Input}
                                        />
                                    </FormItem>
                                </AdaptableCard>
                                <AdaptableCard>
                                    <h5>Admin Information</h5>
                                    <div className="flex flex-wrap mt-4">
                                        <FormItem
                                            className="w-full sm:flex-1 sm:mr-2"
                                            asterisk={type}
                                            label="Admin Name"
                                            invalid={
                                                errors.adminName &&
                                                touched.adminName
                                            }
                                            errorMessage={errors.adminName}
                                        >
                                            <Field
                                                disabled={!type}
                                                type="text"
                                                value={values?.adminName}
                                                name="adminName"
                                                placeholder="Enter Admin Name"
                                                component={Input}
                                            />
                                        </FormItem>
                                        <FormItem
                                            className="w-full sm:flex-1"
                                            label="Designation"
                                            invalid={
                                                errors.designation &&
                                                touched.designation
                                            }
                                            errorMessage={errors.designation}
                                        >
                                            <Field
                                                disabled={!type}
                                                type="text"
                                                value={values?.designation}
                                                name="designation"
                                                placeholder="Enter Designation"
                                                component={Input}
                                            />
                                        </FormItem>
                                    </div>
                                    <FormItem
                                        asterisk={type}
                                        label="Email"
                                        invalid={
                                            errors.adminEmail &&
                                            touched.adminEmail
                                        }
                                        errorMessage={errors.adminEmail}
                                    >
                                        <Field
                                            disabled={!type}
                                            type="email"
                                            autoComplete="off"
                                            name="adminEmail"
                                            placeholder="Email"
                                            value={values?.adminEmail}
                                            component={Input}
                                        />
                                    </FormItem>
                                </AdaptableCard>
                                <AdaptableCard divider>
                                    <h5>Contact Person Details</h5>
                                    <div className="flex flex-wrap mt-4">
                                        <FormItem
                                            asterisk={type}
                                            className="w-full sm:flex-1 sm:mr-2"
                                            label="Name"
                                            invalid={
                                                errors.contactName &&
                                                touched.contactName
                                            }
                                            errorMessage={errors.contactName}
                                        >
                                            <Field
                                                disabled={!type}
                                                type="text"
                                                name="contactName"
                                                placeholder="Enter Name"
                                                value={values?.contactName}
                                                component={Input}
                                            />
                                        </FormItem>
                                        <FormItem
                                            asterisk={type}
                                            className="w-full sm:flex-1"
                                            label="Phone Number"
                                            invalid={
                                                errors.contactPhone &&
                                                touched.contactPhone
                                            }
                                            errorMessage={errors.contactPhone}
                                        >
                                            <Field
                                                disabled={!type}
                                                type="text"
                                                autoComplete="off"
                                                name="contactPhone"
                                                placeholder="Phone Number"
                                                value={values?.contactPhone}
                                                component={Input}
                                            />
                                        </FormItem>
                                    </div>
                                    <div className="flex flex-wrap mt-3">
                                        <FormItem
                                            asterisk={type}
                                            className="w-full sm:flex-1 sm:mr-2"
                                            label="Email"
                                            invalid={
                                                errors.contactEmail &&
                                                touched.contactEmail
                                            }
                                            errorMessage={errors.contactEmail}
                                        >
                                            <Field
                                                disabled={!type}
                                                type="email"
                                                autoComplete="off"
                                                name="contactEmail"
                                                placeholder="Email"
                                                value={values?.contactEmail}
                                                component={Input}
                                            />
                                        </FormItem>
                                        <FormItem
                                            className="w-full sm:flex-1"
                                            label="Referred By"
                                            invalid={
                                                errors.referredBy &&
                                                touched.referredBy
                                            }
                                            errorMessage={errors.referredBy}
                                        >
                                            <Field
                                                disabled={!type}
                                                type="text"
                                                name="referredBy"
                                                placeholder="Enter Name"
                                                value={values?.referredBy}
                                                component={Input}
                                            />
                                        </FormItem>
                                    </div>
                                </AdaptableCard>
                            </div>
                            <div className="lg:col-span-1">
                                <ClientLogo values={values.img} />
                            </div>
                        </div>
                        <FormItem>
                            {type && (
                                <div className="w-full flex justify-end gap-4">
                                    <Button
                                        type="reset"
                                        onClick={() => {
                                            resetForm()
                                            if (
                                                location.pathname.split('/')[
                                                    location.pathname.split('/')
                                                        .length - 1
                                                ] !== 'addClient'
                                            ) {
                                                setType()
                                            }
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button variant="solid" type="submit">
                                        Save
                                    </Button>
                                </div>
                            )}
                        </FormItem>
                    </FormContainer>
                </Form>
            )}
        </Formik>
    )
}
ClientForm.defaultProps = {
    type: true,
    initialData: {
        organizationName: '',
        country: '',
        subscriptionType: '',
        subDomain: '',
        description: '',
        panGst: '',
        adminName: '',
        designation: '',
        adminEmail: '',
        contactName: '',
        contactPhone: '',
        contactEmail: '',
        referredBy: '',
        img: '',
        imgList: [],
    },
}

export default ClientForm
