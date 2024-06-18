import { useState } from 'react'
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
import FeeFrequencyTable from '../components/tables/FeeFrequencyTable'


const FeeFrequency = () => {
    const [initialValue, setSetInitialValue] = useState({
        feeFrequency: '',
    })
    const navigate = useNavigate()

    const validationSchema = Yup.object().shape({
        feeFrequency: Yup.string().required('Fee Frequency is required'),
    })

    const handleEdit = (item) => {
        setSetInitialValue({
            feeFrequency: item.type
        })
    }

    const feeFrequenctOptions = [
        { value: 'yearly', label: 'Yearly' },
        { value: 'halfYearly', label: 'Half Yearly' },
        { value: 'quarterly', label: 'Quarterly' },
        { value: 'monthly', label: 'Monthly' },
    ]
    return (
       <>
        {/* <Card
            id="feeFrequency"
            className="flex justify-center items-center"
            bodyClass="w-full lg:w-1/2"
        >
            <div className="w-full">
                <h5 className="mb-4">Fee Frequency</h5>
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
                                <div className="flex flex-wrap mt-3">
                                    <FormItem
                                        asterisk
                                        className="w-full sm:flex-1"
                                        label="Fee Frequency Type"
                                        labelClass="!justify-start"
                                        invalid={errors.feeFrequency && touched.feeFrequency}
                                        errorMessage={errors.feeFrequency}
                                    >
                                        <Field name="feeFrequency">
                                            {({ field, form }) => (
                                                <Select
                                                    field={field}
                                                    form={form}
                                                    placeholder="Select Fee Fee Frequency"
                                                    options={feeFrequenctOptions}
                                                    value={feeFrequenctOptions.filter(
                                                        (option) =>
                                                            option.value ===
                                                            values.feeFrequency
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

                                <FormItem>
                                    <div className="w-full flex justify-end gap-4">
                                        <Button
                                            type="reset"
                                            onClick={() => {
                                                setSetInitialValue({
                                                    feeFrequency: '',
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
        <FeeFrequencyTable handleEdit={handleEdit}/>
       </>

    )
}

export default FeeFrequency
