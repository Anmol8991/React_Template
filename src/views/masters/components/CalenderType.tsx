import { useState } from 'react'
import CalendarTypeTable from '../components/tables/CalendarTypeTable'
import {
    Button,
    Card,
    FormContainer,
    FormItem,
    Input,
    Select,
} from '@/components/ui'
import { Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

const CalenderType = () => {
    const navigate = useNavigate()
    const [initialValue, setSetInitialValue] = useState({
        calenderType: null,
    })

    const handleEdit = (item) => {
        setSetInitialValue({
            calenderType: item.type,
        })
    }
    const validationSchema = Yup.object().shape({
        calenderType: Yup.string().required('Calender Type is required'),
    })
    const calenderTypeOptions = [
        { value: 360, label: '360 Days (Each month is of 30 days)' },
        { value: 365, label: '365 Days (Each month has actual days)' },
    ]
    return (
        <>
        {/* <Card
            id="feeFrequency"
            className="flex justify-center items-center"
            bodyClass="w-full lg:w-1/2"
        >
            <div className="w-full">
                <h5 className="mb-4">Calender Type</h5>
                <Formik
                    enableReinitialize
                    initialValues={initialValue}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        navigate('/clients')
                        console.log('values', values)
                        setTimeout(() => {
                            setSubmitting(false)
                        }, 400)
                    }}
                >
                    {({ values, touched, errors, resetForm }) => (
                        <Form>
                            <FormContainer>
                                <FormItem
                                    asterisk
                                    className="w-full sm:flex-1"
                                    label="Calender Type Type"
                                    labelClass="!justify-start"
                                    invalid={
                                        errors.calenderType &&
                                        touched.calenderType
                                    }
                                    errorMessage={errors.calenderType}
                                >
                                    <Field name="calenderType">
                                        {({ field, form }) => (
                                            <Select
                                                field={field}
                                                form={form}
                                                placeholder="Select Calender Type"
                                                options={calenderTypeOptions}
                                                value={calenderTypeOptions.filter(
                                                    (option) =>
                                                        option.value ===
                                                        values.calenderType
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
                                <FormItem>
                                    <div className="w-full flex justify-end gap-4">
                                        <Button
                                            type="reset"
                                            onClick={() => {
                                                setSetInitialValue({
                                                    calenderType: null,
                                                })
                                                resetForm()
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
        </Card> */}
        <CalendarTypeTable handleEdit={handleEdit}/>
        </>
    )
}

export default CalenderType
