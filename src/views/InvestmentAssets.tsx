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
    instrumentClass: string
    name: string
    code: string
    dematIsim: string
    currency: string
    registeredOfficeAddress: string
    seniority: string
    type: string
    totalInvestment: number
    allocationKey: string
    sector: string
    region: string
    investmentLead: string
    contactPersonDetails: string
    amount: number
    stakePercentage: number
    portfolioManagementBudget: string
    exitCostBudget: number
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

function InvestmentAssets() {
    const instrumentClassOptions: Option[] = [
        { value: 'class1', label: 'Class 1' },
        { value: 'class2', label: 'Class 2' },
    ]
    const typeOptions: Option[] = [
        { value: 'type1', label: 'Type 1' },
        { value: 'type2', label: 'Type 2' },
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
        instrumentClass: Yup.string().required('Instrument Class is required'),
        name: Yup.string().required('Name is required'),
        code: Yup.string().required('Code is required'),
        dematIsim: Yup.string().required('Demat ISIM is required'),
        currency: Yup.string().required('Currency is required'),
        registeredOfficeAddress: Yup.string().required('Office Address is required'),
        seniority: Yup.string().required('Senority is required'),
        type: Yup.string().required('Type is required'),
        totalInvestment: Yup.number().required('Total Investmentis required!'),
        allocationKey: Yup.string().required('Allocation Key is required'),
        sector: Yup.string().required('Sector is required'),
        region: Yup.string().required('Region is required'),
        investmentLead: Yup.string().required('Investment Lead is required'),
        contactPersonDetails: Yup.string().required('Contact Person is required'),
        amount: Yup.number().required('Amount is required!'),
        stakePercentage: Yup.number().required('Stake Percentage is required!'),
        portfolioManagementBudget: Yup.string().required('Budget is required'),
        exitCostBudget: Yup.number().required('Budget is required!'),
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
                <h5 className="mb-4">Investment Assets</h5>
                <Formik
                    enableReinitialize
                    initialValues={{
                        instrumentClass: '',
                        name: '',
                        code: '',
                        dematIsim: '',
                        currency: '',
                        registeredOfficeAddress: '',
                        seniority: '',
                        type: '',
                        totalInvestment: '',
                        allocationKey: '',
                        sector: '',
                        region: '',
                        investmentLead: '',
                        contactPersonDetails: '',
                        amount: '',
                        stakePercentage: '',
                        portfolioManagementBudget: '',
                        exitCostBudget: '',
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
                                    label="Instrument Class"
                                    invalid={errors.instrumentClass && touched.instrumentClass}
                                    errorMessage={errors.instrumentClass}
                                >
                                    <Field name="instrumentClass">
                                        {({
                                            field,
                                            form,
                                        }: FieldProps<FormModel>) => (
                                            <Select
                                                field={field}
                                                form={form}
                                                placeholder="Please Select Instrument Class"
                                                options={instrumentClassOptions}
                                                value={instrumentClassOptions.filter(
                                                    (option) =>
                                                        option.value ===
                                                        values.instrumentClass
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
                                <div className="flex flex-col md:flex-row md:gap-4">
                                    <FormItem
                                        className="w-full"
                                        asterisk
                                        label="Name"
                                        invalid={errors.name && touched.name}
                                        errorMessage={errors.name}
                                    >
                                        <Field
                                            type="text"
                                            name="name"
                                            placeholder="Enter Name"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        className="w-full"
                                        asterisk
                                        label="Code"
                                        invalid={
                                            errors.code &&
                                            touched.code
                                        }
                                        errorMessage={errors.code}
                                    >
                                        <Field
                                            type="text"
                                            name="code"
                                            placeholder="Enter Code"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <div className="flex flex-col md:flex-row md:gap-4">
                                    <FormItem
                                        className="w-full"
                                        asterisk
                                        label="Demat ISIM"
                                        invalid={
                                            errors.dematIsim &&
                                            touched.dematIsim
                                        }
                                        errorMessage={errors.dematIsim}
                                    >
                                        <Field
                                            type="text"
                                            name="dematIsim"
                                            placeholder="Enter Demat ISIM"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        className="w-full"
                                        asterisk
                                        label="Currency"
                                        invalid={
                                            errors.currency && touched.currency
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
                                <FormItem
                                    className="w-full"
                                    asterisk
                                    label="Registered Office Address"
                                    invalid={
                                        errors.registeredOfficeAddress &&
                                        touched.registeredOfficeAddress
                                    }
                                    errorMessage={errors.registeredOfficeAddress}
                                >
                                    <Field
                                        type="text"
                                        name="registeredOfficeAddress"
                                        placeholder="Enter Registered Office Address"
                                        component={Input}
                                    />
                                </FormItem>
                                
                                <div className="flex flex-col md:flex-row md:gap-4">
                                    <FormItem
                                        className="w-full"
                                        asterisk
                                        label="Seniority"
                                        invalid={
                                            errors.seniority &&
                                            touched.seniority
                                        }
                                        errorMessage={errors.seniority}
                                    >
                                       <Field
                                            type="text"
                                            name="seniority"
                                            placeholder="Enter Seniority"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        className="w-full"
                                        asterisk
                                        label="Type"
                                        invalid={
                                            errors.type &&
                                            touched.type
                                        }
                                        errorMessage={
                                            errors.type
                                        }
                                    >
                                        <Field name="type">
                                        {({
                                            field,
                                            form,
                                        }: FieldProps<FormModel>) => (
                                            <Select
                                                field={field}
                                                form={form}
                                                placeholder="Please Select Type"
                                                options={typeOptions}
                                                value={typeOptions.filter(
                                                    (option) =>
                                                        option.value ===
                                                        values.type
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
                                </FormContainer>
                                <FormContainer>
                                <div className="flex flex-col md:flex-row md:gap-4">
                                    <FormItem
                                        className="w-full"
                                        asterisk
                                        label="Total Investment Amount"
                                        invalid={
                                            errors.totalInvestment && touched.totalInvestment
                                        }
                                        errorMessage={errors.totalInvestment}
                                    >
                                        <Field name="totalInvestment">
                                            {({ field, form }: FieldProps) => {
                                                return (
                                                    <NumericFormatInput
                                                        form={form}
                                                        field={field}
                                                        placeholder="Total Investment Amount"
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
                                        className="w-full"
                                        asterisk
                                        label="Allocation key"
                                        invalid={
                                            errors.allocationKey &&
                                            touched.allocationKey
                                        }
                                        errorMessage={errors.allocationKey}
                                    >
                                        <Field name="allocationKey">
                                        {({
                                            field,
                                            form,
                                        }: FieldProps<FormModel>) => (
                                            <Select
                                                field={field}
                                                form={form}
                                                placeholder="Select Allocation Key"
                                                options={keyOptions}
                                                value={keyOptions.filter(
                                                    (option) =>
                                                        option.value ===
                                                        values.allocationKey
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
                                <div className="flex flex-col md:flex-row md:gap-4">
                                    <FormItem
                                        className="w-full"
                                        asterisk
                                        label="Sector"
                                        invalid={
                                            errors.sector &&
                                            touched.sector
                                        }
                                        errorMessage={
                                            errors.sector
                                        }
                                    >
                                        <Field
                                            type="text"
                                            name="sector"
                                            placeholder="Enter Sector"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        className="w-full"
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
                                </div>
                                <div className="flex flex-col md:flex-row md:gap-4">
                                    <FormItem
                                        asterisk
                                        label="Investment Lead"
                                        className="w-full"
                                        invalid={
                                            (errors.investmentLead &&
                                                touched.investmentLead) as boolean
                                        }
                                        errorMessage={errors.investmentLead}
                                    >
                                        <Field
                                            type="text"
                                            name="investmentLead"
                                            placeholder="Enter Investment Lead"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        asterisk
                                        label="Contact Person"
                                        className="w-full"
                                        invalid={
                                            (errors.contactPersonDetails &&
                                                touched.contactPersonDetails) as boolean
                                        }
                                        errorMessage={errors.contactPersonDetails}
                                    >
                                        <Field
                                            type="text"
                                            name="contactPersonDetails"
                                            placeholder="Enter Contact Person"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <div className="flex flex-col md:flex-row md:gap-4">
                                    <FormItem
                                        asterisk
                                        label="Amount"
                                        className="w-full"
                                        invalid={
                                            (errors.amount &&
                                                touched.amount) as boolean
                                        }
                                        errorMessage={errors.amount}
                                    >
                                        <Field name="amount">
                                            {({ field, form }: FieldProps) => {
                                                return (
                                                    <NumericFormatInput
                                                        form={form}
                                                        field={field}
                                                        placeholder="Enter Amount"
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
                                        label="Stake Percentage"
                                        className="w-full"
                                        invalid={
                                            (errors.stakePercentage &&
                                                touched.stakePercentage) as boolean
                                        }
                                        errorMessage={errors.stakePercentage}
                                    >
                                        <Field name="stakePercentage">
                                            {({ field, form }: FieldProps) => {
                                                return (
                                                    <NumericFormatInput
                                                        form={form}
                                                        field={field}
                                                        placeholder="Enter Stake Percentage"
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
                                </div>
                                <div className="flex flex-col md:flex-row md:gap-4">
                                    <FormItem
                                        className="w-full"
                                        asterisk
                                        label="Portfolio Management Budget"
                                        invalid={
                                            errors.portfolioManagementBudget &&
                                            touched.portfolioManagementBudget
                                        }
                                        errorMessage={errors.portfolioManagementBudget}
                                    >
                                        <Field name="portfolioManagementBudget">
                                            {({ field, form }: FieldProps) => {
                                                return (
                                                    <NumericFormatInput
                                                        form={form}
                                                        field={field}
                                                        placeholder="Enter Portfolio Management Budget"
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
                                        className="w-full"
                                        asterisk
                                        label="Exit Cost Budget"
                                        invalid={
                                            errors.exitCostBudget &&
                                            touched.exitCostBudget
                                        }
                                        errorMessage={errors.exitCostBudget}
                                    >
                                        <Field name="exitCostBudget">
                                            {({ field, form }: FieldProps) => {
                                                return (
                                                    <NumericFormatInput
                                                        form={form}
                                                        field={field}
                                                        placeholder="Enter Exit Cost Budget"
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
                                </div>
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

export default InvestmentAssets
