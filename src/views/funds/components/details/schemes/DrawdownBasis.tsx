import { Field, Form, Formik, FieldProps } from 'formik'
import { FormItem, FormContainer } from '@/components/ui/Form'
import * as Yup from 'yup'
import { Card, Select } from '@/components/ui'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

type Option = {
    value: string
    label: string
}

type FormModel = {
    type: string
}

const DrawdownBasis = () => {
    const commitmentTypeOptions: Option[] = [
        { value: 'Commitment', label: 'Commitment' },
        { value: 'undrawnCommitment', label: 'Undrawn Commitment' },
    ]

    const validationSchema = Yup.object().shape({
        type: Yup.string().required('Please select one!'),
    })

    return (
        <Card
            id="drawdownBasis"
            className="flex justify-center items-center"
            bodyClass="w-full lg:w-1/2"
        >
            <div className="w-full">
                <h5 className="mb-4">Drawdown Basis</h5>
                <Formik
                    enableReinitialize
                    initialValues={{
                        type: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log('values', values)
                        
                    }}
                >
                    {({ values, touched, errors, resetForm }) => (
                        <Form>
                            <FormContainer>
                                <FormItem
                                    asterisk
                                    className="w-full sm:flex-1"
                                    label="Type"
                                    labelClass="!justify-start"
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
                                                placeholder="Select Type"
                                                options={commitmentTypeOptions}
                                                value={commitmentTypeOptions.filter(
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

export default DrawdownBasis
