import { useState } from 'react'
import {
    Button,
    Card,
    DatePicker,
    FormContainer,
    FormItem,
    Input,
} from '@/components/ui'
import { Field, Form, FieldProps, Formik } from 'formik'
import * as Yup from 'yup'

interface FormModel {
    fundName: string
    legalEntityName: string
    startDate: Date | null
    endDate: Date | null
    fundLife: number
    launchDate: Date | null
    fundSize: number
}

const Details = ({ data, editable, setEditable }) => {
    const validationSchema = Yup.object().shape({
        fundName: Yup.string().required('This field is required'),
        legalEntityName: Yup.string().required('This field is required'),
        startDate: Yup.date().required('This field is required'),
        endDate: Yup.date().required('This field is required'),
        fundLife: Yup.number().required('This field is required'),
        launchDate: Yup.date().required('This field is required'),
        fundSize: Yup.number().required('This field is required'),
    })

    return (
        
            <div>
                <div className="w-full">
                    <Formik
                        enableReinitialize
                        initialValues={data}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log('values', values)
                            // Notify that it the conetents are saved
                            setEditable(false)
                        }}
                    >
                        {({ values, touched, errors, resetForm }) => (
                            <Form>
                                <FormContainer>
                                    <FormItem
                                        asterisk={editable}
                                        label="Fund Name"
                                        invalid={
                                            errors.fundName && touched.fundName
                                        }
                                        errorMessage={errors.fundName}
                                    >
                                        <Field
                                            disabled={!editable}
                                            type="text"
                                            name="fundName"
                                            placeholder="Enter Fund Name"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        asterisk={editable}
                                        label="Legal Entity Name"
                                        invalid={
                                            errors.legalEntityName &&
                                            touched.legalEntityName
                                        }
                                        errorMessage={errors.legalEntityName}
                                    >
                                        <Field
                                            disabled={!editable}
                                            type="text"
                                            name="legalEntityName"
                                            placeholder="Enter Legal Entity Name"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <div className="flex flex-col md:flex-row md:gap-4">
                                        <FormItem
                                            asterisk={editable}
                                            className="w-full"
                                            label="Start Date"
                                            invalid={
                                                errors.startDate &&
                                                touched.startDate
                                            }
                                            errorMessage={errors.startDate}
                                        >
                                            <Field
                                                name="startDate"
                                                placeholder="Enter Start Date"
                                            >
                                                {({
                                                    field,
                                                    form,
                                                }: FieldProps<FormModel>) => (
                                                    <DatePicker
                                                        disabled={!editable}
                                                        field={field}
                                                        placeholder="Enter Start Date"
                                                        form={form}
                                                        value={
                                                            new Date(
                                                                values?.startDate
                                                            )
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
                                            asterisk={editable}
                                            className="w-full"
                                            label="End Date"
                                            invalid={
                                                errors.endDate &&
                                                touched.endDate
                                            }
                                            errorMessage={errors.endDate}
                                        >
                                            <Field
                                                name="endDate"
                                                placeholder="Enter End Date"
                                            >
                                                {({
                                                    field,
                                                    form,
                                                }: FieldProps<FormModel>) => (
                                                    <DatePicker
                                                        field={field}
                                                        placeholder="Enter End Date"
                                                        form={form}
                                                        disabled={!editable}
                                                        value={
                                                            new Date(
                                                                values?.endDate
                                                            )
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
                                    </div>
                                    <FormItem
                                        asterisk={editable}
                                        className="w-full"
                                        label="Launch Date"
                                        invalid={
                                            errors.launchDate &&
                                            touched.launchDate
                                        }
                                        errorMessage={errors.launchDate}
                                    >
                                        <Field
                                            name="launchDate"
                                            placeholder="Enter Launch Date"
                                        >
                                            {({
                                                field,
                                                form,
                                            }: FieldProps<FormModel>) => (
                                                <DatePicker
                                                    disabled={!editable}
                                                    field={field}
                                                    placeholder="Enter Launch Date"
                                                    form={form}
                                                    value={
                                                        new Date(
                                                            values?.launchDate
                                                        )
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
                                    <div className="flex flex-col md:flex-row md:gap-4">
                                        <FormItem
                                            asterisk={editable}
                                            className="w-full"
                                            label="Fund Life (in Years)"
                                            invalid={
                                                errors.fundLife &&
                                                touched.fundLife
                                            }
                                            errorMessage={errors.fundLife}
                                        >
                                            <Field
                                                disabled={!editable}
                                                type="number"
                                                name="fundLife"
                                                placeholder="Enter Fund Life in Years"
                                                component={Input}
                                            />
                                        </FormItem>
                                        <FormItem
                                            asterisk={editable}
                                            className="w-full"
                                            label="Fund Size (in Millions)"
                                            invalid={
                                                errors.fundSize &&
                                                touched.fundSize
                                            }
                                            errorMessage={errors.fundSize}
                                        >
                                            <Field
                                                disabled={!editable}
                                                type="number"
                                                name="fundSize"
                                                placeholder="Enter Fund Size"
                                                component={Input}
                                            />
                                        </FormItem>
                                    </div>
                                    <>
                                        {editable && (
                                            <div className="w-full flex justify-end gap-4 my-2">
                                                <Button
                                                    type="reset"
                                                    onClick={(e) => {
                                                        resetForm()
                                                        setEditable(false)
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
                                        )}
                                    </>
                                </FormContainer>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        
    )
}

export default Details
