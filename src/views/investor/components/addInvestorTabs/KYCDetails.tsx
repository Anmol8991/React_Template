import { Card } from '@/components/ui'

import { FormItem, FormContainer } from '@/components/ui/Form'
import DatePicker from '@/components/ui/DatePicker'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const KYCDetails = () => {
    const validationSchema = Yup.object().shape({
        legalName: Yup.string(),
        entityType: Yup.string(),
        establishmentDate: Yup.date(),
        identity: Yup.string(),
        identificationType: Yup.string(),
        taxIdentification: Yup.string(),
        taxJurisdiction: Yup.string(),
        jurisdictionTaxId: Yup.string(),
    })

    return (
        <Card
            id="feeBasis"
            className="flex justify-center items-center"
            bodyClass="w-full"
        >
            <div className="w-full">
                <h5 className="mb-4">KYC Details</h5>
                <Formik
                    enableReinitialize
                    initialValues={{
                        legalName: '',
                        entityType: '',
                        establishmentDate: '',
                        identity: '',
                        identificationType: '',
                        taxIdentification: '',
                        taxJurisdiction: '',
                        jurisdictionTaxId: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log('values', values)
                    }}
                >
                    {({ values, touched, errors, resetForm }) => (
                        <Form>
                            <FormContainer>
                                <div>
                                    <FormContainer className="grid lg:grid-cols-3 lg:gap-4 grid-cols-1">
                                        <FormItem
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

                                        <FormItem
                                            label="Entity Type"
                                            invalid={
                                                errors.entityType &&
                                                touched.entityType
                                            }
                                            errorMessage={errors.entityType}
                                        >
                                            <Field
                                                type="text"
                                                name="entityType"
                                                placeholder="Enter Entity Type"
                                                component={Input}
                                            />
                                        </FormItem>

                                        <FormItem
                                            label="Establishment Date"
                                            invalid={
                                                errors.establishmentDate &&
                                                touched.establishmentDate
                                            }
                                            errorMessage={
                                                errors.establishmentDate
                                            }
                                        >
                                            <Field name="establishmentDate">
                                                {({ field, form }) => (
                                                    <DatePicker
                                                        field={field}
                                                        form={form}
                                                        placeholder="Enter Establishment Date"
                                                        value={
                                                            values.establishmentDate
                                                        }
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
                                            label="Identification Type"
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
                                        <FormItem
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
                                                name="taxJurisdiction"
                                                placeholder="Enter Tax Jurisdiction"
                                                component={Input}
                                            />
                                        </FormItem>

                                        <FormItem
                                            label="Jurisdiction Tax Identification"
                                            invalid={
                                                errors.jurisdictionTaxId &&
                                                touched.jurisdictionTaxId
                                            }
                                            errorMessage={
                                                errors.jurisdictionTaxId
                                            }
                                        >
                                            <Field
                                                type="text"
                                                name="jurisdictionTaxId"
                                                placeholder="Enter Jurisdiction Tax Identification"
                                                component={Input}
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

export default KYCDetails
