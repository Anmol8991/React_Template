import {
    Button,
    Card,
    FormContainer,
    FormItem,
    Input,
    Radio,
} from '@/components/ui'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required!'),
    faceValue: Yup.number().required('This field is required!'),
    type: Yup.string().required('This field is required!'),
})

const Units = () => {
    return (
        <Card>
            <h5 className="mb-4">Units</h5>
            <Formik
                enableReinitialize
                initialValues={{
                    name: '',
                    faceValue: '',
                    type: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {({ values, touched, errors, resetForm }) => (
                    <Form>
                        <FormContainer className="grid lg:grid-cols-3 lg:gap-4 grid-cols-1">
                            <FormItem
                                label="Name"
                                invalid={errors.name && touched.name}
                                errorMessage={errors.name}
                            >
                                <Field
                                    name="name"
                                    type="text"
                                    placeholder="Enter Name"
                                    component={Input}
                                />
                            </FormItem>
                            <FormItem
                                label="Face Value"
                                invalid={errors.faceValue && touched.faceValue}
                                errorMessage={errors.faceValue}
                            >
                                <Field
                                    name="faceValue"
                                    type="number"
                                    placeholder="Enter Face Value"
                                    component={Input}
                                />
                            </FormItem>

                            <FormItem
                                label="Type"
                                invalid={errors.type && touched.type}
                                errorMessage={errors.type}
                            >
                                <Field name="type">
                                    {({ field, form }) => (
                                        <Radio.Group
                                            value={values.type}
                                            onChange={(val) =>
                                                form.setFieldValue(
                                                    field.name,
                                                    val
                                                )
                                            }
                                        >
                                            <Radio value={'partly'}>
                                                Partly Paid
                                            </Radio>
                                            <Radio value={'fully'}>
                                                Fully Paid
                                            </Radio>
                                        </Radio.Group>
                                    )}
                                </Field>
                            </FormItem>
                        </FormContainer>
                        <FormContainer className="mt-4">
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
        </Card>
    )
}

export default Units
