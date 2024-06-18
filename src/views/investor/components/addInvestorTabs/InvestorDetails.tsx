import { Card, Select } from '@/components/ui'
import { useState } from 'react'
import { HiOutlinePencil } from 'react-icons/hi'
import { useLocation } from 'react-router-dom'
import { investors } from '@/data'
// import RichTextEditor from '@/components/shared/RichTextEditor'
import { FormItem, FormContainer } from '@/components/ui/Form'
import DatePicker from '@/components/ui/DatePicker'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { Field, Form, Formik, FieldProps } from 'formik'
import * as Yup from 'yup'

type Option = {
    value: string
    label: string
}
const schemeOptions: Option[] = [
    { value: 'scheme1', label: 'Scheme 1' },
    { value: 'scheme2', label: 'Scheme 2' },
]

const fundOptions: Option[]  = [
    { value: 'fund1', label: 'Fund 1' },
    { value: 'fund2', label: 'Fund 2' },
]

const investorClassOptions: Option[]  = [
    { value: 'class1', label: 'Class 1' },
    { value: 'class2', label: 'Class 2' },
]

const countryOptions: Option[] = [
    { value: 'india', label: 'India' },
    { value: 'usa', label: 'Usa' },
]

type FormModel = {
    scheme: string
    investorFolio: string
    country: string
    ratio: string
    admissionDate: Date | null
    endDate: Date | null
    type: string
}
const InvestorDetails = () => {
    const location = useLocation()
    let initialValue = {
        investorName: '',
        investorAlias: '',
        // fund: '',
        scheme: '',
        country: '',
        investorClass: '',
        admissionDate: null,
        investorCode: '',
    }
    const pathArray = location.pathname.split('/')
    if (pathArray[pathArray.length - 1] !== 'addInvestors') {
        const value = investors[parseInt(pathArray[pathArray.length - 1])]
        initialValue = {
            investorName: value?.scheme,
            investorAlias: value.folio,
            // fund: '',
            scheme: '',
            country: '',
            investorClass: '',
            admissionDate: new Date(value.startDate),
            investorCode: value.ratio,
        }
        // {
        //     scheme:"Scheme-713",
        //     folio:"Folio-95",
        //     startDate:"4/5/2073",
        //     endDate:"12/3/2075",
        //     country:"Guernsey",
        //     ratio:"68.2151%",
        //     type:"Current"
        // },
    }
    const [isEditable, setIsEditable] = useState(()=> {
        if (pathArray[pathArray.length - 1] !== 'addInvestors'){
            return false
        }
        return true
    })
    

    const validationSchema = Yup.object().shape({
        investorName: Yup.string().required('This field is required'),
        investorAlias: Yup.string().required('This field is required'),
        // fund: Yup.string().required('This field is required'),
        scheme: Yup.string().required('This field is required'),
        country: Yup.string().required('This field is required'),
        investorClass: Yup.string().required('This field is required'),
        admissionDate: Yup.date().required('This field is required'),
        investorCode: Yup.string().required('This field is required'),
    })

    return (
        <Card
            id="feeBasis"
            className="flex justify-center items-center"
            bodyClass="w-full"
        >
            <div className="w-full">
            {pathArray[pathArray.length - 1] === 'addInvestors' ? <h5 className="mb-4">Investor Details</h5>: (
                        <div className="flex justify-between mb-4">
                        <h5 className="mb-4">Investor Details</h5>
                        <Button
                            disabled={isEditable}
                            type="button"
                            icon={<HiOutlinePencil />}
                            size="sm"
                            onClick={() => setIsEditable(true)}
                        >
                            Edit
                        </Button>
                    </div>
                    )}
            
                <Formik
                    enableReinitialize
                    initialValues={initialValue}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log('values', values)
                    }}
                >
                    {({ values, touched, errors, resetForm }) => (
                        <Form>
                            <FormContainer>
                                <div>
                                    <FormContainer className="grid lg:grid-cols-3 lg:gap-4 grid-cols-1">
                                        <FormItem
                                            asterisk
                                            label="Investor Name"
                                            invalid={
                                                errors.investorName &&
                                                touched.investorName
                                            }
                                            errorMessage={errors.investorName}
                                        >
                                            <Field
                                                disabled={!isEditable}

                                                type="text"
                                                name="investorName"
                                                placeholder="Enter Investor Name"
                                                component={Input}
                                            />
                                        </FormItem>{' '}
                                        <FormItem
                                            asterisk
                                            label="Investor Alias"
                                            invalid={
                                                errors.investorAlias &&
                                                touched.investorAlias
                                            }
                                            errorMessage={errors.investorAlias}
                                        >
                                            <Field
                                                disabled={!isEditable}
                                                type="text"
                                                name="investorAlias"
                                                placeholder="Enter Investor Alias"
                                                component={Input}
                                            />
                                        </FormItem>
                                        {/* <FormItem
                                            asterisk
                                            label="Fund"
                                            invalid={
                                                errors.fund && touched.fund
                                            }
                                            errorMessage={errors.fund}
                                        >
                                            <Field name="fund">
                                                {({ field, form }) => (
                                                    <Select
                                                        field={field}
                                                        form={form}
                                                        placeholder="Select Fund"
                                                        options={schemeOptions}
                                                        value={fundOptions.filter(
                                                            (option) =>
                                                                option.value ===
                                                                values.fund
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
                                        </FormItem> */}
                                        <FormItem
                                            asterisk
                                            label="Scheme"
                                            invalid={
                                                errors.scheme && touched.scheme
                                            }
                                            errorMessage={errors.scheme}
                                        >
                                            <Field name="scheme">
                                                {({
                                                    field,
                                                    form,
                                                }: FieldProps<FormModel>) => (
                                                    <Select
                                                    isDisabled={!isEditable}
                                                        field={field}
                                                        form={form}
                                                        placeholder="Select Scheme"
                                                        options={schemeOptions}
                                                        value={schemeOptions.filter(
                                                            (option) =>
                                                                option.value ===
                                                                values.scheme
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
                                            asterisk
                                            label="Admission Date"
                                            invalid={
                                                errors.admissionDate &&
                                                touched.admissionDate
                                            }
                                            errorMessage={errors.admissionDate}
                                        >
                                            <Field name="admissionDate">
                                                {({
                                                    field,
                                                    form,
                                                }: FieldProps<FormModel>) => (
                                                    <DatePicker
                                                    disabled={!isEditable}
                                                        field={field}
                                                        form={form}
                                                        placeholder="Enter Admission Date"
                                                        value={
                                                            values.admissionDate
                                                        }
                                                        onChange={(date) => {
                                                            form.setFieldValue(
                                                                field.name,
                                                                date
                                                            )
                                                        }}
                                                    />
                                                )}
                                            </Field>
                                        </FormItem>
                                        <FormItem
                                            asterisk
                                            label="Investor Class"
                                            invalid={
                                                errors.investorClass &&
                                                touched.investorClass
                                            }
                                            errorMessage={errors.investorClass}
                                        >
                                            <Field name="investorClass">
                                                {({ field, form }) => (
                                                    <Select
                                                    isDisabled={!isEditable}
                                                        field={field}
                                                        form={form}
                                                        placeholder="Select Investor Class"
                                                        options={schemeOptions}
                                                        value={investorClassOptions.filter(
                                                            (option) =>
                                                                option.value ===
                                                                values.investorClass
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
                                            asterisk
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
                                                    isDisabled={!isEditable}
                                                        field={field}
                                                        form={form}
                                                        placeholder="Select Country"
                                                        options={countryOptions}
                                                        value={countryOptions.filter(
                                                            (option) =>
                                                                option.value ===
                                                                values.country
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
                                            asterisk
                                            label="Investor Code"
                                            invalid={
                                                errors.investorCode &&
                                                touched.investorCode
                                            }
                                            errorMessage={errors.investorCode}
                                        >
                                            <Field
                                                disabled={!isEditable}
                                                type="text"
                                                name="investorCode"
                                                placeholder="Enter Investor Code"
                                                component={Input}
                                            />
                                        </FormItem>
                                    </FormContainer>
                                </div>
                                { isEditable && (
                                    <FormItem>
                                    <div className="w-full flex justify-end gap-4">
                                        <Button
                                            type="reset"
                                            onClick={() => {resetForm()
                                                if (pathArray[pathArray.length - 1] !== 'scheme'){
                                                    setIsEditable(false)
                                                }
                                            }
                                                 
                                            }
                                        >
                                            Cancel
                                        </Button>
                                        <Button variant="solid" type="submit">
                                            Save
                                        </Button>
                                    </div>
                                </FormItem>
                                )}
                            </FormContainer>
                        </Form>
                    )}
                </Formik>
            </div>
        </Card>
    )
}

export default InvestorDetails
