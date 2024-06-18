import { Card, Select } from '@/components/ui'
import { useState } from 'react'
import { Field, Form, Formik, FieldProps } from 'formik'
import { FormItem, FormContainer } from '@/components/ui/Form'
import * as Yup from 'yup'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import CurrenciesTable from '../components/tables/CurrenciesTable'

type Option = {
    value: string
    label: string
}
type FormModel = {
    name: string
    code: string
}

const Currencies = () => {
    const [initialValue, setSetInitialValue] = useState({
        name: '',
        code: '',
    })

    const handleEdit = (item) => {
        setSetInitialValue({
            name: item.name,
            code: item.code,
        })
    }
    const options: Option[] = [
        { value: 'rupees', label: 'Rupees' },
        { value: 'dollar', label: 'Dollar' },
    ]

    const options2: Option[] = [
        { value: 'code1', label: 'Code 1' },
        { value: 'code2', label: 'Code 2' },
    ]

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Please select one!'),
        code: Yup.string().required('Please select one!'),
    })

    return (
        <>
            <Card
                id="drawdownBasis"
                className="flex justify-center items-center"
                bodyClass="w-full lg:w-1/2"
            >
                <div className="w-full">
                    <h5 className="mb-4">Currencies</h5>
                    <Formik
                        enableReinitialize
                        initialValues={initialValue}
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
                                            asterisk
                                            className="w-full sm:flex-1 sm:mr-2"
                                            label="Name"
                                            invalid={
                                                errors.name && touched.name
                                            }
                                            errorMessage={errors.name}
                                        >
                                            <Field name="name">
                                                {({
                                                    field,
                                                    form,
                                                }: FieldProps<FormModel>) => (
                                                    <Select
                                                        field={field}
                                                        form={form}
                                                        placeholder="Select Currency"
                                                        options={options}
                                                        value={options.filter(
                                                            (option) =>
                                                                option.value ===
                                                                values.name
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
                                            label="Code"
                                            invalid={
                                                errors.code && touched.code
                                            }
                                            errorMessage={errors.code}
                                        >
                                            <Field name="code">
                                                {({
                                                    field,
                                                    form,
                                                }: FieldProps<FormModel>) => (
                                                    <Select
                                                        field={field}
                                                        form={form}
                                                        placeholder="Please Select Code"
                                                        options={options2}
                                                        value={options2.filter(
                                                            (option) =>
                                                                option.value ===
                                                                values.code
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
                                                        name: '',
                                                        code: '',
                                                    })
                                                    resetForm()
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
                                    </FormItem>
                                </FormContainer>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Card>
            <CurrenciesTable handleEdit={handleEdit} />
        </>
    )
}

export default Currencies
