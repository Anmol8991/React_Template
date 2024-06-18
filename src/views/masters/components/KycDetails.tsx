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

const KycDetails = () => {
    const navigate = useNavigate()

    const entityOptions = [
        { value: 'entity1', label: 'Entity 1' },
        { value: 'entity2', label: 'Entity 2' },
    ]

    const validationSchema = Yup.object().shape({
        establishmentDate: Yup.date()
            .required('This field is required')
            .nullable(),
    })

    return (
        <Card
            id="feeFrequency"
            className="flex justify-center items-center"
            bodyClass="w-full"
        >
            <div className="w-full">
                <h5 className="mb-4">Kyc Details</h5>
                <Formik
                    enableReinitialize
                    initialValues={{
                        legalName: '',
                        entityType: '',
                        establishmentDate: null,
                        identity: '',
                        identificationType: '',
                        taxIdentification: '',
                        taxJurisdiction: '',
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
                                <div className="grid lg:grid-cols-2 lg:gap-6 grid-cols-1">
                                    <FormContainer>
                                        <FormItem
                                            asterisk
                                            label="Legal Name"
                                            invalid={
                                                errors.legalName &&
                                                touched.legalName
                                            }
                                            errorMessage={errors.legalName}
                                        >
                                            <Field
                                                type="text"
                                                name="legalName"
                                                placeholder="Enter Legal Name"
                                                component={Input}
                                            />
                                        </FormItem>
                                        <div className="flex flex-wrap mt-3">
                                            <FormItem
                                                asterisk
                                                className="w-full sm:flex-1 sm:mr-2"
                                                label="Entity Type"
                                                invalid={
                                                    errors.entityType &&
                                                    touched.entityType
                                                }
                                                errorMessage={errors.entityType}
                                            >
                                                <Field name="entityType">
                                                    {({ field, form }) => (
                                                        <Select
                                                            field={field}
                                                            form={form}
                                                            placeholder="Please Entity Type"
                                                            options={
                                                                entityOptions
                                                            }
                                                            value={entityOptions.filter(
                                                                (option) =>
                                                                    option.value ===
                                                                    values.entityType
                                                            )}
                                                            onChange={(
                                                                option
                                                            ) =>
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
                                                label="Establishment Date"
                                                invalid={
                                                    errors.establishmentDate &&
                                                    touched.establishmentDate
                                                }
                                                errorMessage={
                                                    errors.establishmentDate
                                                }
                                            >
                                                <Field
                                                    name="establishmentDate"
                                                    placeholder="Enter Establishment Date"
                                                >
                                                    {({ field, form }) => (
                                                        <DatePicker
                                                            field={field}
                                                            placeholder="Enter Establishment Date"
                                                            form={form}
                                                            value={
                                                                values.establishmentDate
                                                            }
                                                            onChange={(
                                                                date
                                                            ) => {
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
                                    </FormContainer>
                                    <FormContainer>
                                        <div className="flex flex-wrap">
                                            <FormItem
                                                asterisk
                                                className="w-full sm:flex-1 sm:mr-2"
                                                label="Identity"
                                                invalid={
                                                    errors.identity &&
                                                    touched.identity
                                                }
                                                errorMessage={errors.identity}
                                            >
                                                <Field
                                                    type="text"
                                                    name="identity"
                                                    placeholder="Enter Identity"
                                                    component={Input}
                                                />
                                            </FormItem>
                                            <FormItem
                                                asterisk
                                                label="Identification Type"
                                                className="w-full sm:flex-1"
                                                invalid={
                                                    errors.identificationType &&
                                                    touched.identificationType
                                                }
                                                errorMessage={
                                                    errors.identificationType
                                                }
                                            >
                                                <Field
                                                    type="text"
                                                    name="identificationType"
                                                    placeholder="Enter Identification Type"
                                                    component={Input}
                                                />
                                            </FormItem>
                                        </div>
                                        <div className="flex flex-wrap">
                                            <FormItem
                                                asterisk
                                                className="w-full sm:flex-1 sm:mr-2"
                                                label="Tax Identification"
                                                invalid={
                                                    errors.taxIdentification &&
                                                    touched.taxIdentification
                                                }
                                                errorMessage={
                                                    errors.taxIdentification
                                                }
                                            >
                                                <Field
                                                    type="text"
                                                    name="taxIdentification"
                                                    placeholder="Enter Tax Identification"
                                                    component={Input}
                                                />
                                            </FormItem>
                                            <FormItem
                                                asterisk
                                                className="w-full sm:flex-1"
                                                label="Tax Jurisdiction"
                                                invalid={
                                                    errors.taxJurisdiction &&
                                                    touched.taxJurisdiction
                                                }
                                                errorMessage={
                                                    errors.taxJurisdiction
                                                }
                                            >
                                                <Field
                                                    type="text"
                                                    name="tax Jurisdiction"
                                                    placeholder="Enter Tax Jurisdiction"
                                                    component={Input}
                                                />
                                            </FormItem>
                                        </div>
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

export default KycDetails
