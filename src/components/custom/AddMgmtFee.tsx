import React, { ComponentType } from 'react'
import type { InputProps } from '@/components/ui/Input'
import { Form, Field, FieldProps, FieldInputProps, Formik } from 'formik'
import {Button,Card,DatePicker,FormContainer,FormItem,Input,Select,Table,Dropdown} from '@/components/ui'
import * as Yup from 'yup'
import { NumericFormat, NumericFormatProps } from 'react-number-format'


type Option = {
    value: string
    label: string
}
type FormModel = {
    feePeriod: [Date | null, Date | null]
    startDate: Date | null
    endDate: Date | null
    rate: number | null
    taxRate: number | null
    fixedFee: number | null
    feeBasis: string
    feeFrequency: string
    calendarType: string
}
const NumberInput = (props: InputProps) => {
    return <Input {...props} value={props.field.value} />
}

interface NumericFormatInputProps extends Omit<NumericFormatProps, 'form'> {
    form: any
    field: FieldInputProps<unknown>
}


const AddMgmtFee = ({currentValue, handleSave, handleCancel}) => {
    const validationSchema = Yup.object().shape({
        startDate: Yup.date().required('Start Date is required'),
        endDate: Yup.date().required('End Date is required'),
        rate: Yup.number().required('Rate is required!'),
        taxRate: Yup.number().required('Rate is required!'),
        fixedFee: Yup.number().nullable(),
        feeBasis: Yup.string().required('This field is required!').nullable(),
        feeFrequency: Yup.string().required('This field is required!'),
        calendarType: Yup.string().required('This field is required!'),
    })
    const feeBasisOptions: Option[] = [
        { value: 'basis1', label: 'Basis 1' },
        { value: 'basis2', label: 'Basis 2' },
    ]

    const feeFrequencyOptions: Option[] = [
        { value: 'quaterly', label: 'Quaterly' },
        { value: 'half-yearly', label: 'Half-yearly' },
        { value: 'yearly', label: 'Yearly' },
        { value: 'monthly', label: 'Monthly' },
    ]

    const calendarOptions: Option[] = [
        { value: '360', label: '360 days (each month is of 30 days)' },
        { value: '365', label: '365 days (each month has actual days)' },
    ]

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
    <div className="w-full">
                <h3 className="mb-4">Add Management Fee</h3>

                    <Formik
                        enableReinitialize
                        initialValues={currentValue}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            handleSave(values);
                            resetForm();
                        }}
                    >
                        {({ values, touched, errors, resetForm }) => (
                            <Form>
                                <FormContainer>
                                    <div className="grid lg:grid-cols-2 lg:gap-6 grid-cols-1">
                                        <FormContainer>
                                        <FormItem
                                            asterisk
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
                                                        value={
                                                            values.startDate
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
                                                        value={
                                                            values.endDate
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
                                                    label="Rate"
                                                    invalid={
                                                        errors.rate &&
                                                        touched.rate
                                                    }
                                                    errorMessage={errors.rate}
                                                >
                                                    <Field name="rate">
                                            {({ field, form }: FieldProps) => {
                                                return (
                                                    <NumericFormatInput
                                                        form={form}
                                                        field={field}
                                                        placeholder="Enter Rate (in %)"
                                                        value={values.rate}
                                                        customInput={
                                                            NumberInput as ComponentType
                                                        }
                                                        onValueChange={(e) => {
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
                                                    label="Tax Rate on fee "
                                                    invalid={
                                                        errors.taxRate &&
                                                        touched.taxRate
                                                    }
                                                    errorMessage={
                                                        errors.taxRate
                                                    }
                                                >
                                                    <Field name="taxRate">
                                            {({ field, form }: FieldProps) => {
                                                return (
                                                    <NumericFormatInput
                                                        form={form}
                                                        field={field}
                                                        placeholder="Enter Tx Rate (in %)"
                                                        value={values.taxRate}
                                                        customInput={
                                                            NumberInput as ComponentType
                                                        }
                                                        onValueChange={(e) => {
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
                                        <FormContainer>
                                            <FormItem
                                                asterisk
                                                label="Calendar Type"
                                                invalid={
                                                    errors.calendarType &&
                                                    touched.calendarType
                                                }
                                                errorMessage={
                                                    errors.calendarType
                                                }
                                            >
                                                <Field name="calendarType">
                                                    {({ field, form }) => (
                                                        <Select
                                                            field={field}
                                                            form={form}
                                                            placeholder="Please Enter Type"
                                                            options={
                                                                calendarOptions
                                                            }
                                                            value={calendarOptions.filter(
                                                                (option) =>
                                                                    option.value ===
                                                                    values.calendarType
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
                                                    asterisk
                                                    label="Fee Basis"
                                                    invalid={
                                                        errors.feeBasis &&
                                                        touched.feeBasis
                                                    }
                                                    errorMessage={
                                                        errors.feeBasis
                                                    }
                                                >
                                                    <Field name="feeBasis">
                                                        {({ field, form }) => (
                                                            <Select
                                                                field={field}
                                                                form={form}
                                                                placeholder="Please select"
                                                                options={
                                                                    feeBasisOptions
                                                                }
                                                                value={feeBasisOptions.filter(
                                                                    (option) =>
                                                                        option.value ===
                                                                        values.feeBasis
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
                                                    asterisk
                                                    label="Fee Frequency"
                                                    invalid={
                                                        errors.feeFrequency &&
                                                        touched.feeFrequency
                                                    }
                                                    errorMessage={
                                                        errors.feeFrequency
                                                    }
                                                >
                                                    <Field name="feeFrequency">
                                                        {({ field, form }) => (
                                                            <Select
                                                                field={field}
                                                                form={form}
                                                                placeholder="Please Select"
                                                                options={
                                                                    feeFrequencyOptions
                                                                }
                                                                value={feeFrequencyOptions.filter(
                                                                    (option) =>
                                                                        option.value ===
                                                                        values.feeFrequency
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
                                                    asterisk
                                                    label="Fixed Fee per annum"
                                                    invalid={
                                                        errors.fixedFee &&
                                                        touched.fixedFee
                                                    }
                                                    errorMessage={errors.fixedFee}
                                                >
                                                    <Field name="fixedFee">
                                            {({ field, form }: FieldProps) => {
                                                return (
                                                    <NumericFormatInput
                                                        form={form}
                                                        field={field}
                                                        placeholder="Enter Fee"
                                                        value={values.rate}
                                                        customInput={
                                                            NumberInput as ComponentType
                                                        }
                                                        onValueChange={(e) => {
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
                                                onClick={(e: MouseEvent) => {
                                                    resetForm()
                                                    handleCancel(e)
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
  )
}

AddMgmtFee.defaultProps = {
    startDate: null,
    endDate: null,
    rate: null,
    taxRate:null,
    fixedFee: null,
    feeBasis:'',
    feeFrequency:'',
    calendarType:'',
}
export default AddMgmtFee
