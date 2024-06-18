import { Card, Select } from '@/components/ui'
import { FormItem, FormContainer } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import type { InputProps } from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { Form, Field, FieldProps, FieldInputProps, Formik } from 'formik'
import type { ComponentType } from 'react'
import { NumericFormat, NumericFormatProps } from 'react-number-format'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

type Option = {
    value: string
    label: string
}

type FormModel = {
    name: string
    description: string
    scheme: string
    country: string
    currency: string
    sector: string
    allocationKey: string
    investmentLeave: number
    entryCostBudget: number
}
const NumberInput = (props: InputProps) => {
    return <Input {...props} value={props.field.value} />
}

interface NumericFormatInputProps extends Omit<NumericFormatProps, 'form'> {
    form: any
    field: FieldInputProps<unknown>
}

// NumericFormatInputProps is an interface declaration in TypeScript.
// It extends Omit<NumericFormatProps, 'form'>, which means it inherits all properties from the NumericFormatProps interface except for the 'form' property.
// The form property is added to NumericFormatInputProps and is of type any. This property allows any value to be assigned to it.
// The field property is also added to NumericFormatInputProps and is of type FieldInputProps<unknown>. This indicates that the field property should conform to the FieldInputProps interface, where the generic type unknown represents an unknown type.

function Pipelines() {
    const schemeOptions: Option[] = [
        { value: 'scheme1', label: 'Scheme 1' },
        { value: 'scheme2', label: 'Scheme 2' },
    ]
    const countryOptions: Option[] = [
        { value: 'india', label: 'India' },
        { value: 'usa', label: 'Usa' },
    ]
    const keyOptions: Option[] = [
        { value: 'type1', label: 'Type 1' },
        { value: 'type2', label: 'Type 2' },
    ]
    const options: Option[] = [
        { value: 'rupees', label: 'Rupees' },
        { value: 'dollar', label: 'Dollar' },
    ]

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        description: Yup.string().required('Description is required'),
        scheme: Yup.string().required('Scheme is required'),
        country: Yup.string().required('Country is required'),
        currency: Yup.string().required('Currency is required'),
        sector: Yup.string().required('Sector is required'),
        allocationKey: Yup.string().required('Allocation Key is required'),
        investmentLeave: Yup.number().required('Investment Leave is required!'),
        entryCostBudget: Yup.number().required('Budget is required!'),
    })

    const NumericFormatInput = (props: NumericFormatInputProps) => {
        const { onValueChange, ...rest } = props
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
    return (
        <Card
            id="feeBasis"
            className="flex justify-center items-center"
            bodyClass="w-full"
        >
            <div className="w-full">
                <h5 className="mb-4">Pipelines</h5>
                <Formik
                    enableReinitialize
                    initialValues={{
                        name: '',
                        description: '',
                        scheme: '',
                        country: '',
                        currency: '',
                        sector: '',
                        allocationKey: '',
                        investmentLeave: '',
                        entryCostBudget: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log('values', values)
                        // setTimeout(() => {
                        //     alert(JSON.stringify(values, null, 2))
                        //     setSubmitting(false)
                        // }, 400)
                    }}
                >
                    {({ values, touched, errors, resetForm }) => (
                        <Form>
                            <FormContainer>
                                <div className="grid lg:grid-cols-2 lg:gap-4 grid-cols-1">
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
                                                type="text"
                                                name="name"
                                                placeholder="Enter Name"
                                                component={Input}
                                            />
                                        </FormItem>
                                        <div className="flex flex-col md:flex-row md:gap-4">
                                            <FormItem
                                                className="w-full"
                                                asterisk
                                                label="Description"
                                                invalid={
                                                    errors.description &&
                                                    touched.description
                                                }
                                                errorMessage={
                                                    errors.description
                                                }
                                            >
                                                <Field
                                                    type="text"
                                                    name="description"
                                                    placeholder="Enter Description"
                                                    component={Input}
                                                />
                                            </FormItem>
                                            <FormItem
                                                asterisk
                                                className="w-full"
                                                label="Scheme"
                                                invalid={
                                                    errors.scheme &&
                                                    touched.scheme
                                                }
                                                errorMessage={errors.scheme}
                                            >
                                                <Field name="scheme">
                                                    {({
                                                        field,
                                                        form,
                                                    }: FieldProps<FormModel>) => (
                                                        <Select
                                                            field={field}
                                                            form={form}
                                                            placeholder="Select Scheme"
                                                            options={
                                                                schemeOptions
                                                            }
                                                            value={schemeOptions.filter(
                                                                (option) =>
                                                                    option.value ===
                                                                    values.scheme
                                                            )}
                                                            onChange={(
                                                                option
                                                            ) =>
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
                                        <div className="flex flex-col md:flex-row md:gap-4">
                                            <FormItem
                                                className="w-full"
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
                                                            field={field}
                                                            form={form}
                                                            placeholder="Select Country"
                                                            options={
                                                                countryOptions
                                                            }
                                                            value={countryOptions.filter(
                                                                (option) =>
                                                                    option.value ===
                                                                    values.country
                                                            )}
                                                            onChange={(
                                                                option
                                                            ) =>
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
                                                className="w-full"
                                                asterisk
                                                label="Currency"
                                                invalid={
                                                    errors.currency &&
                                                    touched.currency
                                                }
                                                errorMessage={errors.currency}
                                            >
                                                <Field name="currency">
                                                    {({
                                                        field,
                                                        form,
                                                    }: FieldProps<FormModel>) => (
                                                        <Select
                                                            field={field}
                                                            form={form}
                                                            placeholder="Select Currency"
                                                            options={options}
                                                            value={options.filter(
                                                                (option) =>
                                                                    option.value ===
                                                                    values.currency
                                                            )}
                                                            onChange={(
                                                                option
                                                            ) =>
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
                                    </FormContainer>
                                    <FormContainer>
                                        <div className="flex flex-col md:flex-row md:gap-4">
                                            <FormItem
                                                className="w-full"
                                                asterisk
                                                label="Sector"
                                                invalid={
                                                    errors.sector &&
                                                    touched.sector
                                                }
                                                errorMessage={errors.sector}
                                            >
                                                <Field
                                                    type="text"
                                                    name="sector"
                                                    placeholder="Enter Sector"
                                                    component={Input}
                                                />
                                            </FormItem>
                                            <FormItem
                                                asterisk
                                                className="w-full"
                                                label="Allocation Key"
                                                invalid={
                                                    errors.allocationKey &&
                                                    touched.allocationKey
                                                }
                                                errorMessage={
                                                    errors.allocationKey
                                                }
                                            >
                                                <Field name="allocationKey">
                                                    {({
                                                        field,
                                                        form,
                                                    }: FieldProps<FormModel>) => (
                                                        <Select
                                                            field={field}
                                                            form={form}
                                                            placeholder="Please Select Key"
                                                            options={keyOptions}
                                                            value={keyOptions.filter(
                                                                (option) =>
                                                                    option.value ===
                                                                    values.allocationKey
                                                            )}
                                                            onChange={(
                                                                option
                                                            ) =>
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
                                        <FormItem
                                            asterisk
                                            className="w-full"
                                            label="Investment Leave"
                                            invalid={
                                                errors.investmentLeave &&
                                                touched.investmentLeave
                                            }
                                            errorMessage={
                                                errors.investmentLeave
                                            }
                                        >
                                            <Field name="investmentLeave">
                                                {({
                                                    field,
                                                    form,
                                                }: FieldProps) => {
                                                    return (
                                                        <NumericFormatInput
                                                            form={form}
                                                            field={field}
                                                            placeholder="Investment Leave"
                                                            customInput={
                                                                NumberInput as ComponentType
                                                            }
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
                                        </FormItem>
                                        <FormItem
                                            asterisk
                                            className="w-full"
                                            label="Entry Cost Budget"
                                            invalid={
                                                errors.entryCostBudget &&
                                                touched.entryCostBudget
                                            }
                                            errorMessage={
                                                errors.entryCostBudget
                                            }
                                        >
                                            <Field name="entryCostBudget">
                                                {({
                                                    field,
                                                    form,
                                                }: FieldProps) => {
                                                    return (
                                                        <NumericFormatInput
                                                            form={form}
                                                            field={field}
                                                            placeholder="Enter Budget"
                                                            customInput={
                                                                NumberInput as ComponentType
                                                            }
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
                                        </FormItem>
                                    </FormContainer>
                                </div>

                                <FormItem>
                                    <div className="w-full flex justify-end gap-4">
                                        <Button
                                            type="reset"
                                            onClick={() => resetForm()}
                                        >
                                            Cancel
                                        </Button>
                                        <Button variant="solid" type="submit">
                                            Save
                                        </Button>
                                    </div>
                                </FormItem>
                            </FormContainer>
                        </Form>
                    )}
                </Formik>
            </div>
        </Card>
    )
}

export default Pipelines
