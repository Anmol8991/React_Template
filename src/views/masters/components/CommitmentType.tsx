import { Card, Select } from '@/components/ui'
import { useState } from 'react'
import { Field, Form, Formik, FieldProps } from 'formik'
import { FormItem, FormContainer } from '@/components/ui/Form'
import * as Yup from 'yup'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

const CommitmentType = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .matches(/^[a-zA-Z\s]*$/, 'Only letters and spaces are allowed')
            .min(3, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Name is required'),
        formula: Yup.string().required('Formula is required!'),
    })

    return (
        <Card
            id="drawdownBasis"
            className="flex justify-center items-center"
            bodyClass="w-full lg:w-1/2"
        >
            <div className="w-full">
                <h5 className="mb-4">Commitment Type</h5>
                <Formik
                    enableReinitialize
                    initialValues={{
                        name: '',
                        formula: '',
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
                                <div className="flex flex-wrap mt-3">
                                    <FormItem
                                        className="w-full sm:flex-1 sm:mr-2"
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
                                        asterisk
                                        className="w-full sm:flex-1"
                                        label="Formula"
                                        invalid={
                                            errors.formula && touched.formula
                                        }
                                        errorMessage={errors.formula}
                                    >
                                        <Field
                                            type="text"
                                            name="formula"
                                            placeholder="Enter Formula"
                                            component={Input}
                                        />
                                    </FormItem>
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

export default CommitmentType
