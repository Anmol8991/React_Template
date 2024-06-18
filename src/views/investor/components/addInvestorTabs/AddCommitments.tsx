import React from 'react'
import { Form, Field, FieldProps, Formik } from 'formik'
import {
    Button,
    Card,
    DatePicker,
    FormContainer,
    FormItem,
    Input,
    Select,
    Table,
    Dropdown,
} from '@/components/ui'
import * as Yup from 'yup'

type Option = {
    value: string
    label: string
}
type FormModel = {
    date: Date | null
    amount: number | null
}

// interface PropType {
//     currentValue: FormModel,
//     handleSave: (values: FormModel)=> void,
//     handleCancel: (e: MouseEvent)=> void
// }
const AddCommitments = ({ currentValue, handleSave, handleCancel }) => {
    const validationSchema = Yup.object().shape({
        date: Yup.date().required('Date is required'),
        amount: Yup.number().required('This field is required!'),
    })

    return (
        <div className="w-full">
                <h3 className="mb-4">Add Commitments</h3>

            <Formik
                enableReinitialize
                initialValues={currentValue}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    handleSave(values)
                    resetForm()
                }}
            >
                {({ values, touched, errors, resetForm }) => (
                    <Form>
                        <FormContainer>
                            <div className="grid lg:grid-cols-2 lg:gap-6 grid-cols-1">
                                <FormContainer>
                                    <FormItem
                                        asterisk
                                        label="Date"
                                        invalid={errors.date && touched.date}
                                        errorMessage={errors.date}
                                    >
                                        <Field name="date">
                                            {({
                                                field,
                                                form,
                                            }: FieldProps<FormModel>) => (
                                                <DatePicker
                                                    field={field}
                                                    form={form}
                                                    placeholder="Enter Date"
                                                    value={values.date}
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
                                <FormContainer>
                                    <FormItem
                                        asterisk
                                        label="Amount "
                                        invalid={
                                            errors.amount && touched.amount
                                        }
                                        errorMessage={errors.amount}
                                    >
                                        <Field
                                            type="number"
                                            name="amount"
                                            placeholder="Enter Amount"
                                            value={values.amount}
                                            component={Input}
                                        />
                                    </FormItem>
                                </FormContainer>
                            </div>
                            <FormItem>
                                <div className="w-full flex justify-end gap-4">
                                    <Button
                                        type="reset"
                                        onClick={(e: MouseEvent) => {
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
    )
}

export default AddCommitments
