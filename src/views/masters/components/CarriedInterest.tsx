import { Button, Card, FormContainer, FormItem, Select } from '@/components/ui'
import { Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useState } from 'react'
import CarriedInterestTable from '../components/tables/CarriedInterestTable'


const CarriedInterest = () => {
    const navigate = useNavigate()
    const [initialValue, setSetInitialValue] = useState({
        carriedInterest: '',
    })

    const handleEdit = (item) => {
        setSetInitialValue({
            carriedInterest: item.value,
        })
    }
    const validationSchema = Yup.object().shape({
        carriedInterest: Yup.string().required(
            'Carried Interest Type is required'
        ),
    })
    const carriedInterestOptions = [
        { value: 'dealByDeal', label: 'Deal by Deal' },
        { value: 'dealByFundLevel', label: 'Deal by Fund Level' },
    ]

    return (
        <>
        <Card
            id="feeFrequency"
            className="flex justify-center items-center"
            bodyClass="w-full lg:w-1/2"
        >
            <div className="w-full">
                <h5 className="mb-4">Carried Interest</h5>
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
                                    label="Carried Interest"
                                    labelClass="!justify-start"
                                    invalid={
                                        errors.carriedInterest &&
                                        touched.carriedInterest
                                    }
                                    errorMessage={errors.carriedInterest}
                                >
                                    <Field name="carriedInterest">
                                        {({ field, form }) => (
                                            <Select
                                                field={field}
                                                form={form}
                                                placeholder="Select Carried Interest"
                                                options={carriedInterestOptions}
                                                value={carriedInterestOptions.filter(
                                                    (option) =>
                                                        option.value ===
                                                        values.carriedInterest
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
                                            onClick={() => {resetForm()
                                                setSetInitialValue({
                                                    carriedInterest: "",
                                                })}}
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
        <CarriedInterestTable handleEdit={handleEdit}/>

        </>
    )
}

export default CarriedInterest
