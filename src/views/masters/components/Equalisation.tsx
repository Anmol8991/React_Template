import { useState } from 'react'
import EqualizationTable from '../components/tables/EqualizationTable'
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

const Equalisation = () => {
    const navigate = useNavigate()
    const [initialValue, setSetInitialValue] = useState({
        equalisationBasis: '',
        equalisationCalenderDays: null,
    })

    const handleEdit = (item) => {
        setSetInitialValue({
            equalisationBasis: item.equalizationBasis,
            equalisationCalenderDays: item.equalisationCalenderDays,
        })
    }

    const validationSchema = Yup.object().shape({
        equalisationBasis: Yup.string().required(
            'Equalisation Basis is required'
        ),
        irr: Yup.string().required('IRR is required'),
        equalisationCalenderDays: Yup.number().required(
            'Equalisation Calender Days is required'
        ),
    })
    const equalisationBasisOptions = [
        { value: 'annual', label: 'Annual Compounding' },
        { value: 'quarterly', label: 'Quarterly Compounding' },
        { value: 'halfYearly', label: 'Half Yearly Compounding' },
        { value: 'irr', label: 'IRR' },
        { value: 'simpleInterest', label: 'Simple Interest' },
    ]
    const equalisationCalenderDaysOptions = [
        { value: 360, label: '360 Days (Each month is of 30 days)' },
        { value: 365, label: '365 Days (Each month has actual days)' },
    ]

    return (
        <>
        {/* <Card
            className="flex justify-center items-center"
            bodyClass="w-full lg:w-1/2"
        >
            <div className="w-full">
                <h5 className="mb-4">Equalisation</h5>
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
                                    label="Equalisation Basis"
                                    labelClass="!justify-start"
                                    invalid={
                                        errors.equalisationBasis &&
                                        touched.equalisationBasis
                                    }
                                    errorMessage={errors.equalisationBasis}
                                >
                                    <Field name="equalisationBasis">
                                        {({ field, form }) => (
                                            <Select
                                                field={field}
                                                form={form}
                                                placeholder="Select Equalisation Basis"
                                                options={
                                                    equalisationBasisOptions
                                                }
                                                value={equalisationBasisOptions.filter(
                                                    (option) =>
                                                        option.value ===
                                                        values.equalisationBasis
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
                                    className="w-full sm:flex-1"
                                    label="Equalisation Calender Days"
                                    labelClass="!justify-start"
                                    invalid={
                                        errors.equalisationCalenderDays &&
                                        touched.equalisationCalenderDays
                                    }
                                    errorMessage={
                                        errors.equalisationCalenderDays
                                    }
                                >
                                    <Field name="equalisationCalenderDays">
                                        {({ field, form }) => (
                                            <Select
                                                field={field}
                                                form={form}
                                                placeholder="Select Equalisation Calender Days"
                                                options={
                                                    equalisationCalenderDaysOptions
                                                }
                                                value={equalisationCalenderDaysOptions.filter(
                                                    (option) =>
                                                        option.value ===
                                                        values.equalisationCalenderDays
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
                                                    equalisationBasis: '',
                                                    equalisationCalenderDays: null,
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
        <EqualizationTable handleEdit={handleEdit}/>
        </>

    )
}

export default Equalisation
