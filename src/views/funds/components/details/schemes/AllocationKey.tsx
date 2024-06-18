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
const AllocationKey = () => {
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
            bodyClass="w-full"
        >
            <div className="w-full">
                <h5 className="mb-4">Allocation Keys</h5>
                <Formik
                    enableReinitialize
                    initialValues={{
                        name: '',
                        scheme: '',
                        effectiveDate: null,
                        commitment: '',
                        undrawnCommitment: '',
                        custom: '',
                        details: '',
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
                                <div className="flex flex-col md:flex-row md:gap-4">
                                    <FormItem
                                        asterisk
                                        className="w-full"
                                        label="Name"
                                        invalid={errors.name && touched.name}
                                        errorMessage={errors.name}
                                    >
                                        <Field
                                            type="text"
                                            name="Name"
                                            placeholder="Enter Name"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        asterisk
                                        className="w-full"
                                        label="Scheme"
                                        invalid={
                                            errors.scheme && touched.scheme
                                        }
                                        errorMessage={errors.scheme}
                                    >
                                        <Field name="scheme">
                                            {({ field, form }) => (
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
                                                            option?.value
                                                        )
                                                    }
                                                />
                                            )}
                                        </Field>
                                    </FormItem>
                                </div>

                                <div className="flex flex-col md:flex-row md:gap-4">
                                    <FormItem
                                        asterisk
                                        className="w-full"
                                        label="Effective Date"
                                        invalid={
                                            errors.effectiveDate &&
                                            touched.effectiveDate
                                        }
                                        errorMessage={errors.effectiveDate}
                                    >
                                        <Field
                                            name="effectiveDate"
                                            placeholder="Enter Effective Date"
                                        >
                                            {({ field, form }) => (
                                                <DatePicker
                                                    field={field}
                                                    placeholder="Enter Effective Date"
                                                    form={form}
                                                    value={values.effectiveDate}
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
                                        label="Custom"
                                        invalid={
                                            errors.custom && touched.custom
                                        }
                                        errorMessage={errors.custom}
                                    >
                                        <Field
                                            type="text"
                                            name="custom"
                                            placeholder="Enter custom"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <div className="flex flex-col md:flex-row md:gap-4">
                                    <FormItem
                                        asterisk
                                        className="w-full"
                                        label="Commitment"
                                        invalid={
                                            errors.commitment &&
                                            touched.commitment
                                        }
                                        errorMessage={errors.commitment}
                                    >
                                        <Field
                                            type="text"
                                            name="commitment"
                                            placeholder="Enter Commitment"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        asterisk
                                        className="w-full"
                                        label="Undrawn Commitment"
                                        invalid={
                                            errors.undrawnCommitment &&
                                            touched.undrawnCommitment
                                        }
                                        errorMessage={errors.undrawnCommitment}
                                    >
                                        <Field
                                            type="text"
                                            name="undrawnCommitment"
                                            placeholder="Enter Undrawn Commitment"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <FormItem
                                    asterisk
                                    className="w-full"
                                    label="Details"
                                    invalid={errors.details && touched.details}
                                    errorMessage={errors.details}
                                >
                                    <Field
                                        type="textarea"
                                        name="details"
                                        placeholder="Enter Details"
                                        component={Input}
                                    />
                                </FormItem>
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

export default AllocationKey
