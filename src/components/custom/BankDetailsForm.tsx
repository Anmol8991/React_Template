import React from 'react'
import { Card, Select } from '@/components/ui'
import { FormItem, FormContainer } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import type { InputProps } from '@/components/ui/Input'
import type { ComponentType } from 'react'
import Button from '@/components/ui/Button'
import { Field, Form, Formik, FieldInputProps, FieldProps } from 'formik'
import * as Yup from 'yup'
import { NumericFormat, NumericFormatProps } from 'react-number-format'
import Switcher from '@/components/ui/Switcher'
import { useLocation } from 'react-router-dom'


const NumberInput = (props: InputProps) => {
    return <Input {...props} value={props.field.value} />
}

interface NumericFormatInputProps extends Omit<NumericFormatProps, 'form'> {
    form: any
    field: FieldInputProps<unknown>
}

type FormModel = {
    beneficiaryName: string
    bank: string
    bankBranch: string
    accountNumber: number
    iban: string
    beneficiarySwiftCode: string
    beneficiaryIfscCode: string
    correspondentBank: string
    correspondentBankBranch: string
    correspondentAccountNumber: number
    correspondentIban: string
    correspondentSwiftCode: string
    correspondentIfscCode: string
    defaultForNotices: boolean
}

const BankDetailsForm = ({ currentValue, handleSave, handleCancel }) => {
const location = useLocation();
const pathArray = location.pathname.split('/');

    const validationSchema = Yup.object().shape({
        beneficiaryName: Yup.string().required('This field is required'),
        bank: Yup.string().required('This field is required'),
        bankBranch: Yup.string().required('This field is required'),
        accountNumber: Yup.number().required('This field is required'),
        iban: Yup.string().required('This field is required'),
        beneficiarySwiftCode: Yup.string().required('This field is required'),
        beneficiaryIfscCode: Yup.string().required('This field is required'),
        correspondentBank: Yup.string().required('This field is required'),
        correspondentBankBranch: Yup.string().required(
            'This field is required'
        ),
        correspondentAccountNumber: Yup.number().required(
            'This field is required'
        ),
        correspondentIban: Yup.string().required('This field is required'),
        correspondentSwiftCode: Yup.string().required('This field is required'),
        correspondentIfscCode: Yup.string().required('This field is required'),
        defaultForNotices: Yup.bool()
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
                <Formik
                    enableReinitialize
                    initialValues={currentValue}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log('values', values)
                        // setTimeout(() => {
                        //     alert(JSON.stringify(values, null, 2))
                        //     setSubmitting(false)
                        // }, 400)
                        handleSave(values)
                    }}
                >
                    {({ values, touched, errors, resetForm }) => (
                        <Form>
                            <FormContainer>
                                <div className="grid lg:grid-cols-2 lg:gap-6 grid-cols-1">
                                    <FormContainer>
                                        <Card className="mb-4">
                                            <h5 className="mb-4">
                                                Beneficiary Bank Details
                                            </h5>
                                            <FormItem
                                                asterisk
                                                className="w-full sm:flex-1"
                                                label="Beneficiary Name"
                                                invalid={
                                                    errors.beneficiaryName &&
                                                    touched.beneficiaryName
                                                }
                                                errorMessage={
                                                    errors.beneficiaryName
                                                }
                                            >
                                                <Field
                                                    type="text"
                                                    name="beneficiaryName"
                                                    placeholder="Enter Beneficiary Name"
                                                    component={Input}
                                                />
                                            </FormItem>
                                            <FormItem
                                                asterisk
                                                label="Bank"
                                                invalid={
                                                    errors.bank && touched.bank
                                                }
                                                errorMessage={errors.bank}
                                            >
                                                <Field
                                                    type="text"
                                                    name="bank"
                                                    placeholder="Enter Bank"
                                                    component={Input}
                                                />
                                            </FormItem>
                                            <FormItem
                                                asterisk
                                                className="w-full"
                                                label="Bank Branch"
                                                invalid={
                                                    errors.bankBranch &&
                                                    touched.bankBranch
                                                }
                                                errorMessage={errors.bankBranch}
                                            >
                                                <Field
                                                    type="text"
                                                    name="bankBranch"
                                                    placeholder="Enter Bank Branch"
                                                    component={Input}
                                                />
                                            </FormItem>
                                            <FormItem
                                                asterisk
                                                className="w-full"
                                                label="Account Number"
                                                invalid={
                                                    errors.accountNumber &&
                                                    touched.accountNumber
                                                }
                                                errorMessage={
                                                    errors.accountNumber
                                                }
                                            >
                                                <Field name="accountNumber">
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
                                                asterisk
                                                className="w-full"
                                                label="IBAN"
                                                invalid={
                                                    errors.iban && touched.iban
                                                }
                                                errorMessage={errors.iban}
                                            >
                                                <Field
                                                    type="text"
                                                    name="iban"
                                                    placeholder="Enter IBAN"
                                                    component={Input}
                                                />
                                            </FormItem>
                                            <FormItem
                                                asterisk
                                                className="w-full"
                                                label="Beneficiary SWIFT Code"
                                                invalid={
                                                    errors.beneficiarySwiftCode &&
                                                    touched.beneficiarySwiftCode
                                                }
                                                errorMessage={
                                                    errors.beneficiarySwiftCode
                                                }
                                            >
                                                <Field
                                                    type="text"
                                                    name="beneficiarySwiftCode"
                                                    placeholder="Enter Corresponding SWIFT code"
                                                    component={Input}
                                                />
                                            </FormItem>
                                            <FormItem
                                                asterisk
                                                className="w-full"
                                                label="Beneficiary IIFSC"
                                                invalid={
                                                    errors.beneficiaryIfscCode &&
                                                    touched.beneficiaryIfscCode
                                                }
                                                errorMessage={
                                                    errors.beneficiaryIfscCode
                                                }
                                            >
                                                <Field
                                                    type="text"
                                                    name="beneficiaryIfscCode"
                                                    placeholder="Enter beneficiary IFSC"
                                                    component={Input}
                                                />
                                            </FormItem>
                                        </Card>
                                    </FormContainer>
                                    <FormContainer>
                                        <Card className="mb-4">
                                            <h5 className="mb-4">
                                                Correspondent Bank Details
                                            </h5>
                                            <FormItem
                                                asterisk
                                                className="w-full"
                                                label="Correspondent Bank"
                                                invalid={
                                                    errors.correspondentBank &&
                                                    touched.correspondentBank
                                                }
                                                errorMessage={
                                                    errors.correspondentBank
                                                }
                                            >
                                                <Field
                                                    type="text"
                                                    name="correspondentBank"
                                                    placeholder="Enter Correspondent Bank"
                                                    component={Input}
                                                />
                                            </FormItem>
                                            <FormItem
                                                asterisk
                                                className="w-full"
                                                label="Correspondent Bank Branch"
                                                invalid={
                                                    errors.correspondentBankBranch &&
                                                    touched.correspondentBankBranch
                                                }
                                                errorMessage={
                                                    errors.correspondentBankBranch
                                                }
                                            >
                                                <Field
                                                    type="text"
                                                    name="correspondentBankBranch"
                                                    placeholder="Enter Correspondent Bank Branch"
                                                    component={Input}
                                                />
                                            </FormItem>
                                            <FormItem
                                                asterisk
                                                className="w-full"
                                                label="Correspondent Account Number"
                                                invalid={
                                                    errors.correspondentAccountNumber &&
                                                    touched.correspondentAccountNumber
                                                }
                                                errorMessage={
                                                    errors.correspondentAccountNumber
                                                }
                                            >
                                                <Field name="correspondentAccountNumber">
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
                                                asterisk
                                                className="w-full"
                                                label="Correspondent IBAN"
                                                invalid={
                                                    errors.correspondentIban &&
                                                    touched.correspondentIban
                                                }
                                                errorMessage={
                                                    errors.correspondentIban
                                                }
                                            >
                                                <Field
                                                    type="text"
                                                    name="correspondentIban"
                                                    placeholder="Enter Corresponding Iban"
                                                    component={Input}
                                                />
                                            </FormItem>
                                            <FormItem
                                                asterisk
                                                className="w-full"
                                                label="Correspondent SWIFT Code"
                                                invalid={
                                                    errors.correspondentSwiftCode &&
                                                    touched.correspondentSwiftCode
                                                }
                                                errorMessage={
                                                    errors.correspondentSwiftCode
                                                }
                                            >
                                                <Field
                                                    type="text"
                                                    name="correspondentSwiftCode"
                                                    placeholder="Enter Corresponding SWIFT code"
                                                    component={Input}
                                                />
                                            </FormItem>
                                            <FormItem
                                                asterisk
                                                className="w-full"
                                                label="Correspondent IIFSC"
                                                invalid={
                                                    errors.correspondentIfscCode &&
                                                    touched.correspondentIfscCode
                                                }
                                                errorMessage={
                                                    errors.correspondentIfscCode
                                                }
                                            >
                                                <Field
                                                    type="text"
                                                    name="correspondentIfscCode"
                                                    placeholder="Enter Correspondent IFSC"
                                                    component={Input}
                                                />
                                            </FormItem>

                                            {pathArray[pathArray.length-1] !== 'addInvestors' && (
                                                <FormItem
                                                    className="w-1/10"
                                                    label="Default for Notices"
                                                    invalid={
                                                        errors.defaultForNotices &&
                                                        touched.defaultForNotices
                                                    }
                                                    errorMessage={
                                                        errors.defaultForNotices
                                                    }
                                                >
                                                    <Field name="defaultForNotices">
                                                        {({
                                                            field,
                                                            form,
                                                        }: FieldProps<FormModel>) => (
                                                            <Switcher
                                                                onChange={(
                                                                    val: boolean,
                                                                    e: ChangeEvent
                                                                ) => {
                                                                    // console.log(val, e)
                                                                    form.setFieldValue(
                                                                        field.name,
                                                                        val
                                                                    )
                                                                }}
                                                            />
                                                        )}
                                                    </Field>
                                                </FormItem>
                                            )}
                                            
                                        </Card>
                                    </FormContainer>
                                </div>
                                <FormItem>
                                    <div className="w-full flex justify-end gap-4">
                                        <Button
                                            type="reset"
                                            onClick={() => {
                                                resetForm()
                                                handleCancel()
                                            }}
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

BankDetailsForm.defaultProps = {
    currentValue: {
        beneficiaryName: '',
        bank: '',
        bankBranch: '',
        accountNumber: null,
        iban: '',
        beneficiarySwiftCode: '',
        beneficiaryIfscCode: '',
        correspondentBank: '',
        correspondentBankBranch: '',
        correspondentAccountNumber: null,
        correspondentIban: '',
        correspondentSwiftCode: '',
        correspondentIfscCode: '',
        defaultForNotices: false,
    },
    handleSave: ()=> {console.log("save values")},
    handleCancel: () => {console.log("reset form")}
}

export default BankDetailsForm
