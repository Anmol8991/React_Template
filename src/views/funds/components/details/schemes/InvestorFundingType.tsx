import {
    Button,
    Card,
    FormContainer,
    FormItem,
    Input,
    Checkbox,
} from '@/components/ui'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const InvestorFundingType = () => {
    const entityOptions = [
        { value: 'entity1', label: 'Entity 1' },
        { value: 'entity2', label: 'Entity 2' },
    ]

    const validationSchema = Yup.object().shape({
        investorCapitalAccount: Yup.string()
            .required('This field is required')
            .nullable(),
        investorLoanAndCapitalAmount: Yup.bool(),
    })
    return (
        <Card
            id="feeFrequency"
            className="flex justify-center items-center"
            bodyClass="w-full"
        >
            <div className="w-full">
                <Formik
                    enableReinitialize
                    initialValues={{
                        investorCapitalAccount: '',
                        investorLoanAndCapitalAmount: false,
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
                                    className="w-full sm:flex-1 sm:mr-2"
                                    label="Investor Capital Amount"
                                    invalid={
                                        errors.investorCapitalAccount && touched.investorCapitalAccount
                                    }
                                    errorMessage={errors.investorCapitalAccount}
                                >
                                    <Field
                                        type="text"
                                        name="investorCapitalAccount"
                                        placeholder="Enter Account"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem>
                                <Field name="investorLoanAndCapitalAmount" component={Checkbox}>
                                Investor Loan And Capital Amount
                                </Field>
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

export default InvestorFundingType
