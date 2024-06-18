import { Card } from '@/components/ui'
import { useState } from 'react'
import { HiOutlinePencil } from 'react-icons/hi'
import { useLocation } from 'react-router-dom'
import { FormItem, FormContainer } from '@/components/ui/Form'
import { allFunds } from '@/data'
import DatePicker from '@/components/ui/DatePicker'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { Form, Field, FieldProps, Formik } from 'formik'
import { notify } from '@/utils/commonHelper'
import * as Yup from 'yup'

type FormModel = {
    name: string
    legalEntityName: string
    description: string
    // startDate: Date | null
    // endDate: Date | null
    // extendedDate: Date | null
}

const SchemeInfo = () => {
    const location = useLocation()
    let initialValue = { name: '', legalEntityName: '', description: '' }
    const pathArray = location.pathname.split('/')
    if (pathArray[pathArray.length - 1] !== 'scheme') {
        const value = allFunds[parseInt(pathArray[pathArray.length - 1])]
        initialValue = { name: value.fundName, legalEntityName: value.legalEntityName, description: '' }
    }
    const [isEditable, setIsEditable] = useState(()=> {
        if (pathArray[pathArray.length - 1] !== 'scheme'){
            return false
        }
        return true
    })

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        legalEntityName: Yup.string().required('Legal Entity Name is required'),
        description: Yup.string().required('Description is required'),
        // startDate: Yup.date().required('Start Date Required!'),
        // endDate: Yup.date().nullable(),
        // extendedDate: Yup.date().required('Extended Date Required!'),
    })
    

    return (
        <Card>
            <div className="flex justify-center items-center">
                <div className="w-full">
                    {pathArray[pathArray.length - 1] === 'scheme' ? <h5 className="mb-4">Scheme Info</h5>: (
                        <div className="flex justify-between mb-4">
                        <h5 className="mb-4">Scheme Info</h5>
                        <Button
                            disabled={isEditable}
                            type="button"
                            icon={<HiOutlinePencil />}
                            size="sm"
                            onClick={() => setIsEditable(true)}
                        >
                            Edit
                        </Button>
                    </div>
                    )}
                    
                    <Formik
                        enableReinitialize
                        initialValues={initialValue}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log('values', values)
                            notify('Schemes added succesfully', true)
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
                                                invalid={
                                                    errors.name && touched.name
                                                }
                                                errorMessage={errors.name}
                                            >
                                                <Field
                                                disabled={!isEditable}
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter Name"
                                                    component={Input}
                                                />
                                            </FormItem>
                                            {/* <div className="flex flex-col md:flex-row md:gap-4">
                                                <FormItem
                                                    asterisk
                                                    className="w-full"
                                                    label="Start Date"
                                                    invalid={
                                                        errors.startDate &&
                                                        touched.startDate
                                                    }
                                                    errorMessage={
                                                        errors.startDate
                                                    }
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
                                                <FormItem
                                                    className="w-full"
                                                    label="End Date"
                                                    invalid={
                                                        errors.endDate &&
                                                        touched.endDate
                                                    }
                                                    errorMessage={
                                                        errors.endDate
                                                    }
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
                                            </div> */}
                                        </FormContainer>
                                        <FormContainer>
                                            <FormItem
                                                asterisk
                                                label="Legal Entity Name"
                                                invalid={
                                                    errors.legalEntityName &&
                                                    touched.legalEntityName
                                                }
                                                errorMessage={
                                                    errors.legalEntityName
                                                }
                                            >
                                                <Field
                                                disabled={!isEditable}
                                                    type="text"
                                                    name="legalEntityName"
                                                    placeholder="Enter Legal Entity Name"
                                                    component={Input}
                                                />
                                            </FormItem>
                                            {/* <FormItem
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
                                            </FormItem> */}
                                        </FormContainer>
                                    </div>
                                    <FormItem
                                        asterisk
                                        label="Description"
                                        invalid={
                                            errors.description &&
                                            touched.description
                                        }
                                        errorMessage={errors.description}
                                    >
                                        <Field
                                        disabled={!isEditable}
                                            type="text"
                                            name="description"
                                            placeholder="Enter Description"
                                            component={Input}
                                        />
                                    </FormItem>
                                    { isEditable && (<FormItem>
                                        <div className="w-full flex justify-end gap-4">
                                            <Button
                                                type="reset"
                                                onClick={() => {
                                                    resetForm()
                                                    if (pathArray[pathArray.length - 1] !== 'scheme'){
                                                        setIsEditable(false)
                                                    }
                                                    
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
                                    </FormItem>)}
                                </FormContainer>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </Card>
    )
}

export default SchemeInfo
