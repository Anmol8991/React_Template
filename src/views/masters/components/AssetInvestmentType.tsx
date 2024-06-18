import { Field, Form, Formik, FieldProps } from 'formik'
import { FormItem, FormContainer } from '@/components/ui/Form'
import * as Yup from 'yup'
import { Card, Select } from '@/components/ui'
import Button from '@/components/ui/Button'
import { useState } from 'react'
import InstrumentTypeTable from '../components/tables/InstrumentTypeTable'

type Option = {
    value: string
    label: string
}

type FormModel = {
    name: string
    scheme: string
}

const AssetInvestmentType = () => {
    const [initialValue, setSetInitialValue] = useState({
        type: '',
    })

    const handleEdit = (item) => {
        setSetInitialValue({
            type: item.type,
        })
    }
    const schemeOptions: Option[] = [
        { value: 'debt', label: 'Debt' },
        { value: 'equity', label: 'Equity' },
        { value: 'preferenceShares', label: 'Preference shares' },
        { value: 'loan', label: 'Loan' },
    ]
    const validationSchema = Yup.object().shape({
        type: Yup.string()
        .required('This is required'),
    })

    return (
       <>
        <Card
            id="assetInvestmentType"
            className="flex justify-center items-center"
            bodyClass="w-full lg:w-1/2"
        >
            <div className="w-full">
                <h5 className="mb-4">Investment Instrument Type</h5>
                <Formik
                    enableReinitialize
                    initialValues={initialValue}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log('values', values)
                    }}
                >
                    {({ values, touched, errors, resetForm }) => (
                        <Form>
                            <FormContainer>
                                {/* <FormItem
                                    asterisk
                                    className="w-full sm:flex-1 sm:mr-2"
                                    label="Name"
                                    invalid={errors.name && touched.name}
                                    errorMessage={errors.name}
                                >
                                    <Field
                                        type="text"
                                        name="name"
                                        placeholder="Enter Name"
                                        component={Input}
                                    />
                                </FormItem> */}
                                <FormItem
                                    asterisk
                                    className="w-full sm:flex-1"
                                    label="Scheme"
                                    invalid={errors.type && touched.type}
                                    errorMessage={errors.type}
                                >
                                    <Field name="type">
                                        {({
                                            field,
                                            form,
                                        }: FieldProps<FormModel>) => (
                                            <Select
                                                field={field}
                                                form={form}
                                                placeholder="Please Select type"
                                                options={schemeOptions}
                                                value={schemeOptions.filter(
                                                    (option) =>
                                                        option.value ===
                                                        values.type
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
                                                    type: "",
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
        <InstrumentTypeTable handleEdit={handleEdit}/>

       </>
    )
}

export default AssetInvestmentType
