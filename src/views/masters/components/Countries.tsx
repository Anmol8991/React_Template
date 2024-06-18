import { Card, Select } from '@/components/ui'
import { useState } from 'react'
import { Field, Form, Formik, FieldProps } from 'formik'
import { FormItem, FormContainer } from '@/components/ui/Form'
import * as Yup from 'yup'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import CountriesTable from '../components/tables/CountriesTable'


type Option = {
    value: string
    label: string
}
type FormModel = {
    name: string
}

const Countries = () => {
    const [initialValue, setSetInitialValue] = useState({
        country: '',
    })

    const handleEdit = (item) => {
        setSetInitialValue({
            country: item.country,
        })
    }
    const validationSchema = Yup.object().shape({
        country: Yup.string().required('This is required'),
    })

    return (
        <>
        {/* <Card
            id="drawdownBasis"
            className="flex justify-center items-center"
            bodyClass="w-full lg:w-1/2"
        >
            <div className="w-full">
                <h5 className="mb-4">Countries</h5>
                <Formik
                    enableReinitialize
                    initialValues={initialValue}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log('values', values)
                    }}
                >
                    {({ values, touched, errors, resetForm }) => (
                        <Form>
                            <FormContainer>
                                <FormItem
                                    asterisk
                                    label="Country"
                                    invalid={errors.country && touched.country}
                                    errorMessage={errors.country}
                                >
                                    <Field
                                        type="text"
                                        name="country"
                                        placeholder="Enter Country Name"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem>
                                    <div className="w-full flex justify-end gap-4">
                                        <Button
                                            type="reset"
                                            onClick={() => {
                                                setSetInitialValue({
                                                    country: '',
                                                })
                                                resetForm()}}
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
        <CountriesTable handleEdit={handleEdit}/>
        </>
    )
}

export default Countries
