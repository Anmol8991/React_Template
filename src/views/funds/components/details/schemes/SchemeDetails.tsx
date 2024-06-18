import React from 'react'
import { Select, Card } from '@/components/ui'
import { FormItem, FormContainer } from '@/components/ui/Form'
import DatePicker from '@/components/ui/DatePicker'
import Input from '@/components/ui/Input'
import type { InputProps } from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { Form, Field, FieldProps, FieldInputProps, Formik } from 'formik'
import type { ComponentType } from 'react'
import { NumericFormat, NumericFormatProps } from 'react-number-format'
import * as Yup from 'yup'

type Option = {
    value: string
    label: string
}

type FormModel = {
    fundLife: string
    equalizationEffectiveDate: Date | null
    launchDate: Date | null
    reportingCurrency: string
    fundSize: number | string
    targetFundSize: number | string
    investableCorpus: number | string
    carryRate: number | string
    catchUp: string
    feeRate: number | string
    commitmeentPeriod: string
    extendedDate: Date | null
    // reportingDate: string
    calendarType: string
    type: string
    formula: string
}

const NumberInput = (props: InputProps) => {
    return <Input {...props} value={props.field.value} />
}

interface NumericFormatInputProps extends Omit<NumericFormatProps, 'form'> {
    form: unknown
    field: FieldInputProps<unknown>
}
// NumericFormatInputProps is an interface declaration in TypeScript.
// It extends Omit<NumericFormatProps, 'form'>, which means it inherits all properties from the NumericFormatProps interface except for the 'form' property.
// The form property is added to NumericFormatInputProps and is of type any. This property allows any value to be assigned to it.
// The field property is also added to NumericFormatInputProps and is of type FieldInputProps<unknown>. This indicates that the field property should conform to the FieldInputProps interface, where the generic type unknown represents an unknown type.

const SchemeDetails = () => {
    const options: Option[] = [
        { value: 'rupees', label: 'Rupees' },
        { value: 'dollar', label: 'Dollar' },
    ]

    const validationSchema = Yup.object().shape({
        reportingCurrency: Yup.string().required('Currency is required!'),
        targetCommitment: Yup.number().required('Fund is required!'),
        corpusFund: Yup.number(),
        investableCorpus: Yup.number().required('Fund is required!'),
        commitmentEndDate: Yup.date().required('Date is Required!'),
        extendedDate: Yup.date().required('Extended Date Required!'),
        // reportingDate: Yup.date().required('Date is Required!'),
        startDate: Yup.date().required('Date is Required!'),
        endDate: Yup.date().required('Date is Required!'),
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
        <Card>
            <div className="flex justify-center items-center">
                <div className="w-full">
                <h5 className="mb-4">Scheme Details</h5>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            reportingCurrency: '',
                            targetCommitment: '',
                            corpusFund: 123,
                            investableCorpus: '',
                            commitmentEndDate: null,
                            // reportingDate: null,
                            startDate: null,
                            endDate: null,
                            extendedDate: null,

                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log('values', values)
                            
                        }}
                    >
                        {({ values, touched, errors, resetForm }) => (
                            <Form>
                                <FormContainer>
                                    <FormContainer className="grid lg:grid-cols-3 lg:gap-4 grid-cols-1">
                                        <FormItem
                                            asterisk
                                            label="Reporting Currency"
                                            invalid={
                                                errors.reportingCurrency &&
                                                touched.reportingCurrency
                                            }
                                            errorMessage={
                                                errors.reportingCurrency
                                            }
                                        >
                                            <Field name="reportingCurrency">
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
                                                                values.reportingCurrency
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
                                            label="Corpus of Fund"
                                            invalid={
                                                (errors.corpusFund &&
                                                    touched.corpusFund) as boolean
                                            }
                                            errorMessage={errors.corpusFund}
                                        >
                                            <Field name="corpusFund">
                                                {({
                                                    field,
                                                    form,
                                                }: FieldProps) => {
                                                    return (
                                                        <NumericFormatInput
                                                            disabled
                                                            form={form}
                                                            field={field}
                                                            placeholder="Fund Size"
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
                                            label="Commitment/Investment Period upto"
                                            invalid={
                                                errors.commitmentEndDate &&
                                                touched.commitmentEndDate
                                            }
                                            errorMessage={
                                                errors.commitmentEndDate
                                            }
                                        >
                                            <Field name="commitmentEndDate">
                                                {({
                                                    field,
                                                    form,
                                                }: FieldProps<FormModel>) => (
                                                    <DatePicker
                                                        field={field}
                                                        form={form}
                                                        placeholder="Enter Date"
                                                        value={values.endDate}
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
                                            label="Target Commitment"
                                            invalid={
                                                (errors.targetCommitment &&
                                                    touched.targetCommitment) as boolean
                                            }
                                            errorMessage={
                                                errors.targetCommitment
                                            }
                                        >
                                            <Field name="targetCommitment">
                                                {({
                                                    field,
                                                    form,
                                                }: FieldProps) => {
                                                    return (
                                                        <NumericFormatInput
                                                            form={form}
                                                            field={field}
                                                            placeholder="Fund Size"
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
                                            label="Investable Corpus"
                                            invalid={
                                                (errors.investableCorpus &&
                                                    touched.investableCorpus) as boolean
                                            }
                                            errorMessage={
                                                errors.investableCorpus
                                            }
                                        >
                                            <Field name="investableCorpus">
                                                {({
                                                    field,
                                                    form,
                                                }: FieldProps) => {
                                                    return (
                                                        <NumericFormatInput
                                                            form={form}
                                                            field={field}
                                                            placeholder="Fund Size"
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
                                                className="w-full sm:flex-1 sm:mr-2"
                                                label="Extended Date"
                                                invalid={
                                                    errors.extendedDate &&
                                                    touched.extendedDate
                                                }
                                                errorMessage={
                                                    errors.extendedDate
                                                }
                                            >
                                                <Field name="extendedDate">
                                                    {({
                                                        field,
                                                        form,
                                                    }: FieldProps<FormModel>) => (
                                                        <DatePicker
                                                            field={field}
                                                            form={form}
                                                            placeholder="Enter Date"
                                                            value={
                                                                values.extendedDate
                                                            }
                                                            onChange={(
                                                                date
                                                            ) => {
                                                                form.setFieldValue(
                                                                    field.name,
                                                                    date
                                                                )
                                                            }}
                                                        />
                                                    )}
                                                </Field>
                                            </FormItem>
                                        {/* <FormItem
                                            asterisk
                                            className="w-full sm:flex-1"
                                            label="Reporting Date"
                                            invalid={
                                                errors.reportingDate &&
                                                touched.reportingDate
                                            }
                                            errorMessage={errors.reportingDate}
                                        >
                                            <Field name="reportingDate">
                                                {({
                                                    field,
                                                    form,
                                                }: FieldProps<FormModel>) => (
                                                    <DatePicker
                                                        field={field}
                                                        form={form}
                                                        placeholder="Enter Date"
                                                        value={values.endDate}
                                                        onChange={(date) => {
                                                            form.setFieldValue(
                                                                field.name,
                                                                date
                                                            )
                                                        }}
                                                    />
                                                )}
                                            </Field>
                                        </FormItem> */}
                                        <FormItem
                                            asterisk
                                            className="w-full sm:flex-1 sm:mr-2"
                                            label="Start Date"
                                            invalid={
                                                errors.startDate &&
                                                touched.startDate
                                            }
                                            errorMessage={errors.startDate}
                                        >
                                            <Field name="startDate">
                                                {({
                                                    field,
                                                    form,
                                                }: FieldProps<FormModel>) => (
                                                    <DatePicker
                                                        field={field}
                                                        form={form}
                                                        placeholder="Enter Start Date"
                                                        value={values.startDate}
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
                                            className="w-full sm:flex-1"
                                            label="End Date"
                                            invalid={
                                                errors.endDate &&
                                                touched.endDate
                                            }
                                            errorMessage={errors.endDate}
                                        >
                                            <Field name="endDate">
                                                {({
                                                    field,
                                                    form,
                                                }: FieldProps<FormModel>) => (
                                                    <DatePicker
                                                        field={field}
                                                        form={form}
                                                        placeholder="Enter End Date"
                                                        value={values.endDate}
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
                                    </FormContainer>
                                    <FormItem>
                                        <div className="w-full flex justify-end gap-4">
                                            <Button
                                                type="reset"
                                                onClick={() => {
                                                    resetForm()
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
                                </FormContainer>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </Card>
    )
}

export default SchemeDetails
