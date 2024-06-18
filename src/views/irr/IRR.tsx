import {
    Button,
    Card,
    DatePicker,
    FormContainer,
    FormItem,
    Input,
    Select,
} from '@/components/ui'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const IRR = () => {
    const options = [
        { value: 'scheme1', label: 'Scheme 1' },
        { value: 'scheme2', label: 'Scheme 2' },
    ]

    const validationSchema = Yup.object().shape({
        scheme: Yup.string().required('This field is required'),
        
    })

    return (
        <Card
            id="feeFrequency"
            className="flex justify-center items-center"
            bodyClass="w-full lg:w-1/2"
        >
            <div className="w-full">
                <h5 className="mb-4">IRR</h5>
                <Formik
                    enableReinitialize
                    initialValues={{
                        scheme: '',
                        irr: '',
                        type: '',
                        fromDate: null,
                        toDate: null,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
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
                                    label="Scheme"
                                    invalid={
                                        errors.scheme && touched.scheme
                                    }
                                    errorMessage={errors.scheme}
                                >
                                    <Field name="scheme">
                                        {({
                                            field,
                                            form,
                                        }) => (
                                            <Select
                                                field={field}
                                                form={form}
                                                options={options}
                                                placeholder="Please Select Scheme"
                                                value={options.filter(
                                                    (option) =>
                                                        option.value ===
                                                        values.scheme
                                                )}
                                                onChange={(option) =>
                                                    form.setFieldValue(
                                                        field.name,
                                                        option.value
                                                    )
                                                }
                                            />
                                        )}
                                    </Field>
                                </FormItem>
                                <FormItem
                                    asterisk
                                    className="w-full sm:flex-1 sm:mr-2"
                                    label="IRR"
                                    invalid={
                                        errors.irr &&
                                        touched.irr
                                    }
                                    errorMessage={errors.irr}
                                >
                                    <Field
                                        type="text"
                                        name="irr"
                                        placeholder="Enter IRR"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem
                                    asterisk
                                    className="w-full sm:flex-1 sm:mr-2"
                                    label="Type"
                                    invalid={
                                        errors.type &&
                                        touched.type
                                    }
                                    errorMessage={errors.type}
                                >
                                    <Field
                                        type="text"
                                        name="type"
                                        placeholder="Enter Type "
                                        component={Input}
                                    />
                                </FormItem>
                                <div className="flex flex-col md:flex-row md:gap-4">
                                    <FormItem
                                        asterisk
                                        className="w-full"
                                        label="From Date"
                                        invalid={
                                            errors.fromDate &&
                                            touched.fromDate
                                        }
                                        errorMessage={errors.fromDate}
                                    >
                                        <Field
                                            name="fromDate"
                                            placeholder="Enter From Date"
                                        >
                                            {({ field, form }) => (
                                                <DatePicker
                                                    field={field}
                                                    placeholder="Enter From Date"
                                                    form={form}
                                                    value={values.fromDate}
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
                                        label="To Date"
                                        invalid={
                                            errors.toDate && touched.toDate
                                        }
                                        errorMessage={errors.toDate}
                                    >
                                        <Field
                                            name="toDate"
                                            placeholder="To End Date"
                                        >
                                            {({ field, form }) => (
                                                <DatePicker
                                                    field={field}
                                                    placeholder="Enter To Date"
                                                    form={form}
                                                    value={values.toDate}
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

                             

                                <FormItem>
                                    <div className="w-full flex justify-end gap-4">
                                        <Button
                                            type="reset"
                                            onClick={() => resetForm()}
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
    )
}

export default IRR
