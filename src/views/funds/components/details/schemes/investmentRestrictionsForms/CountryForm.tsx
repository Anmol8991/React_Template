import React from 'react'

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
    country: string
    minLimit: number | null
    maxLimit: number | null
    remarks: string
}



const CountryForm = ({ currentValue, handleSave, handleCancel }) => {

    const countryOptions: Option[] = [
        { value: 'india', label: 'India' },
        { value: 'usa', label: 'Usa' },
    ]

    const validationSchema = Yup.object().shape({
        country: Yup.string().required('This field is required'),
        minLimit: Yup.number().required('Min Limit is required!'),
        maxLimit: Yup.number().required('Max Limit is required!'),
        remarks: Yup.string().required('This field is required'),
    })

    return (
        <Card
            id="feeBasis"
            className="flex justify-center items-center"
            bodyClass="w-full"
        >
            <div className="w-full">
                <h5 className="mb-4">Country Details</h5>
                <Formik
                    enableReinitialize
                    initialValues={currentValue}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        // console.log(event.target.id)
                        // console.log('values', values)
                        handleSave(values)
                    }}
                >
                    {({ values, touched, errors, resetForm }) => (
                        <Form>
                            <FormContainer>
                                <div className="grid lg:grid-cols-2 lg:gap-4 grid-cols-1">
                                    <FormContainer>
                                        
                                            <FormItem     
                                                asterisk
                                                className="w-full"
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
                                            asterisk
                                            className="w-full sm:flex-1"
                                            label="Remarks"
                                            invalid={
                                                errors.remarks && touched.remarks
                                            }
                                            errorMessage={errors.remarks}
                                        >
                                            <Field
                                                type="text"
                                                name="remarks"
                                                // value={currentValue.remarks}
                                                placeholder="Enter Remarks"
                                                component={Input}
                                            />
                                        </FormItem>
                                        
                                    </FormContainer>
                                    <FormContainer>
                                        
                                            <FormItem
                                            asterisk
                                                className="w-full"
                                                label="Minimum Limit"
                                                invalid={
                                                    errors.minLimit &&
                                                    touched.minLimit
                                                }
                                                errorMessage={errors.minLimit}
                                            >
                                                <Field
                                                    type="number"
                                                    name="minLimit"
                                                    placeholder="Enter Minimum Limit"
                                                    component={Input}
                                                />
                                            </FormItem>
                                            <FormItem
                                            asterisk
                                                className="w-full"
                                                label="Maximum Limit"
                                                invalid={
                                                    errors.maxLimit &&
                                                    touched.maxLimit
                                                }
                                                errorMessage={errors.maxLimit}
                                            >
                                                <Field
                                                    type="number"
                                                    name="maxLimit"
                                                    placeholder="Enter Maximum Limit"
                                                    component={Input}
                                                />
                                            </FormItem>
                                        
                                        
                                    </FormContainer>
                                </div>
                                <FormItem>
                                    <div className="w-full flex justify-end gap-4">
                                        <Button
                                            type="reset"
                                            onClick={() => {resetForm()
                                                handleCancel()}}
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

export default CountryForm
