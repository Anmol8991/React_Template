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
    scheme: string
    country: string
    region: string
    sector: string
    minLimit: number
    maxLimit: number
    basis: string
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

function SchemeRestrictions() {
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
        scheme: Yup.string().required('This field is required'),
        country: Yup.string().required('This field is required'),
        region: Yup.string().required('This field is required'),
        sector: Yup.string().required('This field is required'),
        minLimit: Yup.number().required('Min Limit is required!'),
        maxLimit: Yup.number().required('Max Limit is required!'),
        basis: Yup.string().required('This field is required'),
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
                <h5 className="mb-4">Scheme Restrictions</h5>
                <Formik
                    enableReinitialize
                    initialValues={{
                        scheme: '',
                        country: '',
                        region: '',
                        sector: '',
                        minLimit: '',
                        maxLimit: '',
                        basis: '',
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
                                <div className="grid lg:grid-cols-2 lg:gap-6 grid-cols-1">
                                    <FormContainer>
                                        <div className="flex flex-wrap">
                                            <FormItem
                                                className="w-full sm:flex-1 sm:mr-2"
                                                asterisk
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
                                            <FormItem
                                                className="w-full sm:flex-1 "
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
                                        </div>
                                        <div className="flex flex-wrap">
                                            <FormItem
                                                className="w-full sm:flex-1 sm:mr-2"
                                                asterisk
                                                label="Region"
                                                invalid={
                                                    errors.region &&
                                                    touched.region
                                                }
                                                errorMessage={errors.region}
                                            >
                                                <Field
                                                    type="text"
                                                    name="region"
                                                    placeholder="Enter Region"
                                                    component={Input}
                                                />
                                            </FormItem>
                                            <FormItem
                                                className="w-full sm:flex-1"
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
                                        </div>
                                    </FormContainer>
                                    <FormContainer>
                                        <div className="flex flex-wrap">
                                            <FormItem
                                                className="w-full sm:flex-1 sm:mr-2"
                                                asterisk
                                                label="Minimum Limit"
                                                invalid={
                                                    errors.minLimit &&
                                                    touched.minLimit
                                                }
                                                errorMessage={errors.minLimit}
                                            >
                                                <Field name="minLimit">
                                                    {({
                                                        field,
                                                        form,
                                                    }: FieldProps) => {
                                                        return (
                                                            <NumericFormatInput
                                                                form={form}
                                                                field={field}
                                                                placeholder="Minimum Limit"
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
                                                className="w-full sm:flex-1"
                                                asterisk
                                                label="Maximum Limit"
                                                invalid={
                                                    errors.maxLimit &&
                                                    touched.maxLimit
                                                }
                                                errorMessage={errors.maxLimit}
                                            >
                                                <Field name="maxLimit">
                                                    {({
                                                        field,
                                                        form,
                                                    }: FieldProps) => {
                                                        return (
                                                            <NumericFormatInput
                                                                form={form}
                                                                field={field}
                                                                placeholder="Maximum Limit"
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
                                        </div>
                                        <FormItem
                                            className="w-full sm:flex-1"
                                            asterisk
                                            label="Basis"
                                            invalid={
                                                errors.basis && touched.basis
                                            }
                                            errorMessage={errors.basis}
                                        >
                                            <Field
                                                type="text"
                                                name="basis"
                                                placeholder="Enter Basis"
                                                component={Input}
                                            />
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

export default SchemeRestrictions
