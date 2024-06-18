import { Card, Select } from '@/components/ui'
import { FormItem, FormContainer } from '@/components/ui/Form'
import DatePicker from '@/components/ui/DatePicker'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { Field, Form, Formik, FieldProps } from 'formik'
import * as Yup from 'yup'
import { HiOutlinePencil } from 'react-icons/hi'
import { useState } from 'react'

type Option = {
    value: string
    label: string
}

type FormModel = {
    scheme: string
    investorFolio: string
    country: string
    ratio: string
    startDate: Date | null
    endDate: Date | null
    type: string
}
const ViewEditInvestor = () => {
    const [editForm, setEditForm] = useState(false)

    const schemeOptions: Option[] = [
        { value: 'scheme1', label: 'Scheme 1' },
        { value: 'scheme2', label: 'Scheme 2' },
    ]
    const countryOptions: Option[] = [
        { value: 'india', label: 'India' },
        { value: 'usa', label: 'Usa' },
    ]
    const typeOptions: Option[] = [
        { value: 'current', label: 'Current ' },
        { value: 'old', label: 'Old' },
    ]
    const validationSchema = Yup.object().shape({
        scheme: Yup.string().required('This field is required'),
        investorFolio: Yup.string().required('This field is required'),
        country: Yup.string().required('This field is required'),
        ratio: Yup.string().required('This field is required'),
        startDate: Yup.date().required('Date is Required!'),
        endDate: Yup.date().required('Date is Required!'),
        type: Yup.string().required('This field is required'),
    })

    return (
        <Card
            id="feeBasis"
            className="flex justify-center items-center"
            bodyClass="w-full"
        >
            <div className="w-full">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="mb-4">ABC Investor</h3>
                    <Button
                            size="sm"
                            disabled={editForm}
                            icon={<HiOutlinePencil />}
                            onClick={() => setEditForm(!editForm)}
                        >
                            <span>Edit</span>
                        </Button>
                </div>

                <Formik
                    enableReinitialize
                    initialValues={{
                        scheme: 'scheme1',
                        investorFolio: 'Folio-abc',
                        country: 'india',
                        ratio: '28.3%',
                        startDate: null,
                        endDate: null,
                        type: 'current',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log('values', values)
                    }}
                >
                    {({ values, touched, errors, resetForm }) => (
                        <Form>
                            <FormContainer>
                                <div className="grid lg:grid-cols-2 lg:gap-4 grid-cols-1">
                                    <FormContainer>
                                        <div className="flex flex-col md:flex-row md:gap-4">
                                            <FormItem
                                                asterisk
                                                className="w-full"
                                                label="Scheme"
                                                invalid={
                                                    errors.scheme &&
                                                    touched.scheme
                                                }
                                                errorMessage={errors.scheme}
                                            >
                                                <Field name="scheme">
                                                    {({
                                                        field,
                                                        form,
                                                    }: FieldProps<FormModel>) => (
                                                        <Select
                                                            isDisabled={
                                                                !editForm
                                                            }
                                                            field={field}
                                                            form={form}
                                                            placeholder="Select Scheme"
                                                            options={
                                                                schemeOptions
                                                            }
                                                            value={schemeOptions.filter(
                                                                (option) =>
                                                                    option.value ===
                                                                    values.scheme
                                                            )}
                                                            defaultValue={
                                                                values.scheme
                                                            }
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
                                                className="w-full"
                                                label="Investor Folio"
                                                invalid={
                                                    errors.investorFolio &&
                                                    touched.investorFolio
                                                }
                                                errorMessage={
                                                    errors.investorFolio
                                                }
                                            >
                                                <Field
                                                    disabled={!editForm}
                                                    type="text"
                                                    name="investorFolio"
                                                    placeholder="Enter Investor Folio"
                                                    component={Input}
                                                />
                                            </FormItem>
                                        </div>

                                        <div className="flex flex-col md:flex-row md:gap-4">
                                            <FormItem
                                                asterisk
                                                className="w-full"
                                                label="Country"
                                                invalid={
                                                    errors.country &&
                                                    touched.country
                                                }
                                                errorMessage={errors.country}
                                            >
                                                <Field name="country">
                                                    {({
                                                        field,
                                                        form,
                                                    }: FieldProps<FormModel>) => (
                                                        <Select
                                                            isDisabled={
                                                                !editForm
                                                            }
                                                            field={field}
                                                            form={form}
                                                            placeholder="Select Country"
                                                            options={
                                                                countryOptions
                                                            }
                                                            value={countryOptions.filter(
                                                                (option) =>
                                                                    option.value ===
                                                                    values.country
                                                            )}
                                                            defaultValue={
                                                                values.country
                                                            }
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
                                                className="w-full"
                                                label="Ratio"
                                                invalid={
                                                    errors.ratio &&
                                                    touched.ratio
                                                }
                                                errorMessage={errors.ratio}
                                            >
                                                <Field
                                                    disabled={!editForm}
                                                    type="text"
                                                    name="ratio"
                                                    placeholder="Enter Ratio"
                                                    component={Input}
                                                />
                                            </FormItem>
                                        </div>
                                    </FormContainer>
                                    <FormContainer>
                                        <div className="flex flex-col md:flex-row md:gap-4">
                                            <FormItem
                                                asterisk
                                                className="w-full"
                                                label="Start Date"
                                                invalid={
                                                    errors.startDate &&
                                                    touched.startDate
                                                }
                                                errorMessage={errors.startDate}
                                            >
                                                <Field name="startDate">
                                                    {({
                                                        field,
                                                        form,
                                                    }: FieldProps<FormModel>) => (
                                                        <DatePicker
                                                            disabled={!editForm}
                                                            field={field}
                                                            form={form}
                                                            placeholder="Enter Effective Date"
                                                            value={
                                                                values.startDate
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
                                            <FormItem
                                                asterisk
                                                className="w-full"
                                                label="End Date"
                                                invalid={
                                                    errors.endDate &&
                                                    touched.endDate
                                                }
                                                errorMessage={errors.endDate}
                                            >
                                                <Field
                                                    name="endDate"
                                                    placeholder="Date"
                                                >
                                                    {({
                                                        field,
                                                        form,
                                                    }: FieldProps<FormModel>) => (
                                                        <DatePicker
                                                            disabled={!editForm}
                                                            field={field}
                                                            form={form}
                                                            placeholder="Enter End Date"
                                                            value={
                                                                values.endDate
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
                                        <FormItem
                                            asterisk
                                            className="w-full"
                                            label="Type"
                                            labelClass="!justify-start"
                                            invalid={
                                                errors.type && touched.type
                                            }
                                            errorMessage={errors.type}
                                        >
                                            <Field name="type">
                                                {({
                                                    field,
                                                    form,
                                                }: FieldProps<FormModel>) => (
                                                    <Select
                                                        isDisabled={!editForm}
                                                        field={field}
                                                        form={form}
                                                        placeholder="Select Type"
                                                        options={typeOptions}
                                                        value={typeOptions.filter(
                                                            (option) =>
                                                                option.value ===
                                                                values.type
                                                        )}
                                                        defaultValue={
                                                            values.type
                                                        }
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
                                    </FormContainer>
                                </div>
                                {editForm && (
                                    <FormItem>
                                        <div className="w-full flex justify-end gap-4">
                                            <Button
                                                type="button"
                                                onClick={() =>
                                                    setEditForm(false)
                                                }
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
                                )}
                            </FormContainer>
                        </Form>
                    )}
                </Formik>
            </div>
        </Card>
    )
}

export default ViewEditInvestor
