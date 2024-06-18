import { useState } from 'react'
import {
    Button,
    Card,
    DatePicker,
    FormContainer,
    FormItem,
    Input,
    Select
} from '@/components/ui'
import { Field, Form, FieldProps,  Formik } from 'formik'
import * as Yup from 'yup'
import type { MouseEvent } from 'react'

interface FormModel {
    fundName: string
    legalEntityName: string
    startDate: Date | null
    endDate: Date| null
    fundTerm: number
    launchDate: Date| null
    fundSize: number

}

interface PropsType{
    initialValues: FormModel,
    onHandleSave: (values: FormModel)=> void,
    onHandleCancel: (e: MouseEvent)=> void

}

const CreateFund = (props: PropsType) => {
    const { initialValues, onHandleSave, onHandleCancel } = props
    const validationSchema = Yup.object().shape({
        fundName: Yup.string().required('This field is required'),
        legalEntityName: Yup.string().required('This field is required'),
        startDate: Yup.date().required('This field is required'),
        endDate: Yup.date().required('This field is required'),
        fundTerm: Yup.number().required('This field is required'),
        launchDate: Yup.date().required('This field is required'),
        fundSize: Yup.number(),
    })

    return (
        <div>
            <div className="flex flex-col gap-4">
                <h5>Create Fund</h5>
                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        // console.log('values', values)
                        onHandleSave(values)
                        setSubmitting(false)
                    }}
                >
                    {({ values, touched, errors, resetForm }) => (
                        <Form>
                            <FormContainer>
                                <FormItem
                                    asterisk
                                    label="Fund Name"
                                    invalid={
                                        errors.fundName && touched.fundName
                                    }
                                    errorMessage={errors.fundName}
                                >
                                    <Field
                                        type="text"
                                        name="fundName"
                                        placeholder="Enter Fund Name"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem
                                    asterisk
                                    label="Legal Entity Name"
                                    invalid={
                                        errors.legalEntityName &&
                                        touched.legalEntityName
                                    }
                                    errorMessage={errors.legalEntityName}
                                >
                                    <Field
                                        type="text"
                                        name="legalEntityName"
                                        placeholder="Enter Legal Entity Name"
                                        component={Input}
                                    />
                                </FormItem>
                                <div className="flex flex-col md:flex-row md:gap-4">
                                    <FormItem
                                        asterisk
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
                                        >
                                            {({ field, form }: FieldProps<FormModel>) => (
                                                <DatePicker
                                                    field={field}
                                                    placeholder="Enter Start Date"
                                                    form={form}
                                                    value={values?.startDate}
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
                                        label="End Date"
                                        invalid={
                                            errors.endDate && touched.endDate
                                        }
                                        errorMessage={errors.endDate}
                                    >
                                        <Field
                                            name="endDate"
                                            placeholder="Enter End Date"
                                        >
                                            {({ field, form }: FieldProps<FormModel>) => (
                                                <DatePicker
                                                    field={field}
                                                    placeholder="Enter End Date"
                                                    form={form}
                                                    value={values?.endDate}
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
                                        asterisk
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
                                            {({ field, form }: FieldProps<FormModel>) => (
                                                <DatePicker
                                                    field={field}
                                                    placeholder="Enter Launch Date"
                                                    form={form}
                                                    value={values?.launchDate}
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
                                        asterisk
                                        className="w-full"
                                        label="Fund Term (in years)"
                                        invalid={
                                            errors.fundTerm && touched.fundTerm
                                        }
                                        errorMessage={errors.fundTerm}
                                    >
                                        <Field
                                            type="number"
                                            name="fundTerm"
                                            placeholder="Enter Fund Term in years"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        className="w-full"
                                        label="Fund Size"
                                        invalid={
                                            errors.fundSize && touched.fundSize
                                        }
                                        errorMessage={errors.fundSize}
                                    >
                                        <Field
                                            type="number"
                                            name="fundSize"
                                            placeholder="Enter Fund Size"
                                            component={Input}
                                        />
                                    </FormItem>                             
                                </div>
                                
                                <div className="w-full flex justify-end gap-4 mb-4">
                                    <Button
                                        type="reset"
                                        onClick={(e) => {
                                            resetForm()
                                            onHandleCancel(e)
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button variant="solid" type="submit">
                                        Save
                                    </Button>
                                </div>
                                
                            </FormContainer>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default CreateFund
