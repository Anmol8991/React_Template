import { useState } from 'react'
import { Field, Form, Formik, FieldProps } from 'formik'
import { FormItem, FormContainer } from '@/components/ui/Form'
import * as Yup from 'yup'
import { Card, Select } from '@/components/ui'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import DatePicker from '@/components/ui/DatePicker'

type Option = {
    value: string
    label: string
}

type FormModel = {
    name: string
    description: string
    scheme: string
    type: string
    transferDate: Date | null,
    effectiveDate: Date | null
}

function Drawdowns() {
    const schemeOptions: Option[] = [
        { value: 'scheme1', label: 'Scheme 1' },
        { value: 'scheme2', label: 'Scheme 2' },
        { value: 'scheme3', label: 'Scheme 3' },
        { value: 'scheme4', label: 'Scheme 4' },
        { value: 'scheme5', label: 'Scheme 5' },
        { value: 'scheme6', label: 'Scheme 6' },
        { value: 'scheme7', label: 'Scheme 7' },
        { value: 'scheme8', label: 'Scheme 8' },
        { value: 'scheme9', label: 'Scheme 9' },
        { value: 'scheme910', label: 'Scheme 10' },
    ]
    const typeOptions: Option[] = [
        { value: 'type1', label: 'Type 1' },
        { value: 'type2', label: 'Type 2' },
        { value: 'type3', label: 'Type 3' },
    ]

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .matches(/^[a-zA-Z\s]*$/, 'Only letters and spaces are allowed')
            .min(3, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Name is required'),
        description: Yup.string().required('Please Enter Description'),
        scheme: Yup.string().required('Please select one!').nullable(),
        type: Yup.string().required('Please select one!'),
        transferDate: Yup.date().required('Date is Required!'),
        effectiveDate: Yup.date().required('Date is Required!'),
    })
  return (
    <Card
            id="drawdownBasis"
            className="flex justify-center items-center"
            bodyClass="w-full"
        >
            <div className="w-full">
                <h5 className="mb-4">Drawdowns</h5>
                <Formik
                    enableReinitialize
                    initialValues={{
                        name: '',
                        description: '',
                        scheme: '',
                        type: '',
                        transferDate: null,
                        effectiveDate: null,                    
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
                                <div className="flex flex-col md:flex-row md:gap-4">
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
                                                placeholder="Please Select Scheme"
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
                                    className="w-full"
                                    label="Type"
                                    labelClass="!justify-start"
                                    invalid={errors.type && touched.type}
                                    errorMessage={errors.type}
                                >
                                    <Field name="type">
                                        {({
                                            field,
                                            form,
                                        }: FieldProps<FormModel>) => (
                                            <Select
                                                field={field}
                                                form={form}
                                                placeholder="Select Type"
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
                                <FormItem
                                    asterisk
                                    label="Description"
                                    invalid={errors.description && touched.description}
                                    errorMessage={errors.description}
                                >
                                    <Field
                                        type="text"
                                        name="description"
                                        placeholder="Enter Description"
                                        component={Input}
                                    />
                                </FormItem>
                                
                                <div className="flex flex-col md:flex-row md:gap-4">
                                    <FormItem
                                        asterisk
                                        className="w-full"
                                        label="Transfer Date"
                                        invalid={
                                            errors.transferDate &&
                                            touched.transferDate
                                        }
                                        errorMessage={errors.transferDate}
                                    >
                                        <Field name="transferDate">
                                            {({
                                                field,
                                                form,
                                            }: FieldProps<FormModel>) => (
                                                <DatePicker
                                                    field={field}
                                                    form={form}
                                                    placeholder="Enter Transfer Date"
                                                    value={values.transferDate}
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
                                        className="w-full"
                                        label="Effective Date"
                                        invalid={
                                            errors.effectiveDate &&
                                            touched.effectiveDate
                                        }
                                        errorMessage={errors.effectiveDate}
                                    >
                                        <Field name="effectiveDate">
                                            {({
                                                field,
                                                form,
                                            }: FieldProps<FormModel>) => (
                                                <DatePicker
                                                    field={field}
                                                    form={form}
                                                    placeholder="Enter Effective Date"
                                                    value={values.effectiveDate}
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

export default Drawdowns
