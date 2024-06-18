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
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

const CompensationDetails = () => {
    const navigate = useNavigate()
    const validationSchema = Yup.object().shape({
        scheme: Yup.string().required('This field is required'),
        commitment: Yup.string().required('This field is required'),
        feeContribution: Yup.string().required('This field is required'),
        investmentContribution: Yup.string().required('This field is required'),
        otherContribution: Yup.string().required('This field is required'),
        feeContributionDate: Yup.string().required('This field is required'),
        investmentContributionDate: Yup.string().required(
            'This field is required'
        ),
        otherContributionDate: Yup.string().required('This field is required'),
        feeContributionRemarks: Yup.string().required('This field is required'),
        investmentContributionRemarks: Yup.string().required(
            'This field is required'
        ),
        otherContributionRemarks: Yup.string().required(
            'This field is required'
        ),
    })

    const schemeOptions = [
        { value: 'scheme1', label: 'Scheme 1' },
        { value: 'scheme2', label: 'Scheme 2' },
        { value: 'scheme3', label: 'Scheme 3' },
        { value: 'scheme4', label: 'Scheme 4' },
        { value: 'scheme5', label: 'Scheme 5' },
        { value: 'scheme6', label: 'Scheme 6' },
        { value: 'scheme7', label: 'Scheme 7' },
        { value: 'scheme8', label: 'Scheme 8' },
        { value: 'scheme9', label: 'Scheme 9' },
        { value: 'scheme910', label: 'Scheme 10' },
    ]

    return (
        <Card
            id="feeFrequency"
            className="flex justify-center items-center"
            bodyClass="w-full"
        >
            <div className="w-full">
                <h5 className="mb-4">Compensation Details</h5>
                <Formik
                    enableReinitialize
                    initialValues={{
                        scheme: '',
                        commitment: '',
                        feeContribution: '',
                        investmentContribution: '',
                        otherContribution: '',
                        feeContributionDate: '',
                        investmentContributionDate: '',
                        otherContributionDate: '',
                        feeContributionRemarks: '',
                        investmentContributionRemarks: '',
                        otherContributionRemarks: '',
                    }}
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
                                <div className="grid lg:grid-cols-2 lg:gap-6 grid-cols-1">
                                    <FormContainer>
                                        <FormItem
                                            asterisk
                                            label="Scheme"
                                            invalid={
                                                errors.scheme && touched.scheme
                                            }
                                            errorMessage={errors.scheme}
                                        >
                                            <Field name="select">
                                                {({ field, form }) => (
                                                    <Select
                                                        field={field}
                                                        form={form}
                                                        placeholder="Please Select Scheme"
                                                        options={schemeOptions}
                                                        value={schemeOptions.filter(
                                                            (option) =>
                                                                option.value ===
                                                                values.scheme
                                                        )}
                                                        onChange={(option) =>
                                                            form.setFieldValue(
                                                                field.scheme,
                                                                option?.value
                                                            )
                                                        }
                                                    />
                                                )}
                                            </Field>
                                        </FormItem>

                                        <FormItem
                                            asterisk
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
                                        <div className="flex flex-wrap mt-3">
                                            <FormItem
                                                asterisk
                                                className="w-full sm:flex-1 sm:mr-2"
                                                label="Fee Contribution"
                                                invalid={
                                                    errors.feeContribution &&
                                                    touched.feeContribution
                                                }
                                                errorMessage={
                                                    errors.feeContribution
                                                }
                                            >
                                                <Field
                                                    type="text"
                                                    name="feeContribution"
                                                    placeholder="Enter Fee Contribution"
                                                    component={Input}
                                                />
                                            </FormItem>
                                            <FormItem
                                                asterisk
                                                className="w-full sm:flex-1"
                                                label="Investment Contribution"
                                                invalid={
                                                    errors.investmentContribution &&
                                                    touched.investmentContribution
                                                }
                                                errorMessage={
                                                    errors.investmentContribution
                                                }
                                            >
                                                <Field
                                                    type="text"
                                                    name="investmentContribution"
                                                    placeholder="Enter Investment Contribution"
                                                    component={Input}
                                                />
                                            </FormItem>
                                        </div>
                                        <FormItem
                                            asterisk
                                            label="Other Contribution"
                                            invalid={
                                                errors.otherContribution &&
                                                touched.otherContribution
                                            }
                                            errorMessage={
                                                errors.otherContribution
                                            }
                                        >
                                            <Field
                                                type="text"
                                                name="otherContribution"
                                                placeholder="Enter Other Contribution"
                                                component={Input}
                                            />
                                        </FormItem>
                                    </FormContainer>
                                    <FormContainer>
                                        <div className="flex flex-wrap">
                                            <FormItem
                                                asterisk
                                                className="w-full sm:flex-1 sm:mr-2"
                                                label="Fee Contribution Date"
                                                invalid={
                                                    errors.feeContributionDate &&
                                                    touched.feeContributionDate
                                                }
                                                errorMessage={
                                                    errors.feeContributionDate
                                                }
                                            >
                                                <Field
                                                    type="date"
                                                    name="feeContributionDate"
                                                    placeholder="Enter Fee Contribution Date"
                                                    component={DatePicker}
                                                />
                                            </FormItem>
                                            <FormItem
                                                asterisk
                                                className="w-full sm:flex-1"
                                                label="Investment Contribution Date"
                                                invalid={
                                                    errors.investmentContributionDate &&
                                                    touched.investmentContributionDate
                                                }
                                                errorMessage={
                                                    errors.investmentContributionDate
                                                }
                                            >
                                                <Field
                                                    type="date"
                                                    name="investmentContributionDate"
                                                    placeholder="Enter Investment Contribution Date"
                                                    component={DatePicker}
                                                />
                                            </FormItem>
                                        </div>
                                        <FormItem
                                            asterisk
                                            label="Other Contribution Date"
                                            invalid={
                                                errors.otherContributionDate &&
                                                touched.otherContributionDate
                                            }
                                            errorMessage={
                                                errors.otherContributionDate
                                            }
                                        >
                                            <Field
                                                type="date"
                                                name="otherContributionDate"
                                                placeholder="Enter Other Contribution Date"
                                                component={DatePicker}
                                            />
                                        </FormItem>
                                        <div className="flex flex-wrap mt-3">
                                            <FormItem
                                                asterisk
                                                className="w-full sm:flex-1 sm:mr-2"
                                                label="Fee Contribution Remarks"
                                                invalid={
                                                    errors.feeContributionRemarks &&
                                                    touched.feeContributionRemarks
                                                }
                                                errorMessage={
                                                    errors.feeContributionRemarks
                                                }
                                            >
                                                <Field
                                                    type="text"
                                                    name="feeContributionRemarks"
                                                    placeholder="Enter Fee Contribution Remarks"
                                                    component={Input}
                                                />
                                            </FormItem>
                                            <FormItem
                                                asterisk
                                                className="w-full sm:flex-1"
                                                label="Investment Contribution Remarks"
                                                invalid={
                                                    errors.investmentContributionRemarks &&
                                                    touched.investmentContributionRemarks
                                                }
                                                errorMessage={
                                                    errors.investmentContributionRemarks
                                                }
                                            >
                                                <Field
                                                    type="text"
                                                    name="investmentContributionRemarks"
                                                    placeholder="Enter Investment Contribution Remarks"
                                                    component={Input}
                                                />
                                            </FormItem>
                                        </div>
                                        <FormItem
                                            asterisk
                                            label="Other Contribution Remarks"
                                            invalid={
                                                errors.otherContributionRemarks &&
                                                touched.otherContributionRemarks
                                            }
                                            errorMessage={
                                                errors.otherContributionRemarks
                                            }
                                        >
                                            <Field
                                                type="text"
                                                name="otherContributionRemarks"
                                                placeholder="Enter Other Contribution Remarks"
                                                component={DatePicker}
                                            />
                                        </FormItem>
                                    </FormContainer>
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

export default CompensationDetails
