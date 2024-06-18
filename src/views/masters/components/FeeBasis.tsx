import { Card, Select, Table, Dropdown } from '@/components/ui'
import { useState } from 'react'
import { clients, allFunds } from '@/data'
// import RichTextEditor from '@/components/shared/RichTextEditor'
import { FormItem, FormContainer } from '@/components/ui/Form'
import DatePicker from '@/components/ui/DatePicker'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { Field, Form, Formik, FieldProps } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import {
    HiOutlineEye,
    HiOutlineMenuAlt4,
    HiOutlineMinusCircle,
    HiOutlineSearch,
} from 'react-icons/hi'
import FeeBasisTable from '../components/tables/FeeBasisTable'

type Option = {
    value: string
    label: string
}

const FeeBasis = () => {
    const [initialValue, setSetInitialValue] = useState({
        name: '',
        formula: 'ABC Formula',
    })
    const navigate = useNavigate()

    const calendarTypeOptions: Option[] = [
        { value: '360', label: '360 Days' },
        { value: '365', label: '365 Days' },
    ]
    const feeBasisOptions: Option[] = [
        { value: 'commitment', label: 'Commitment' },
        { value: 'computed amount', label: 'Computed Amount' },
        { value: 'undrawn commitment', label: 'Undrawn Commitment' },
        // { value: 'fixedFee', label: 'Fixed Fee' },
    ]
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .matches(/^[a-zA-Z\s]*$/, 'Only letters and spaces are allowed')
            .min(3, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Name is required'),
        // type: Yup.string().required('Please select one!'),
        formula: Yup.string(),
    })

    const handleEdit = (item) => {
        setSetInitialValue({
            name: item.fundName,
            formula: 'ABC Formula',
        })
    }
    return (
        <>
            <Card
                id="feeBasis"
                className="flex justify-center items-center"
                bodyClass="w-full"
            >
                <div className="w-full">
                    <h5 className="mb-4">Fee Basis</h5>
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
                                    <FormContainer className="grid lg:grid-cols-2 lg:gap-4 grid-cols-1">
                                        <FormItem
                                            asterisk
                                            label="Name"
                                            invalid={
                                                errors.name && touched.name
                                            }
                                            errorMessage={errors.name}
                                        >
                                            <Field
                                                type="text"
                                                name="name"
                                                placeholder="Enter Name"
                                                component={Input}
                                            />
                                        </FormItem>
                                        {/* <FormItem
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
                                                        field={field}
                                                        form={form}
                                                        placeholder="Select Fee Type"
                                                        options={
                                                            feeBasisOptions
                                                        }
                                                        value={feeBasisOptions.filter(
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
                                        </FormItem> */}
                                        <FormItem label="Formula">
                                            <Field
                                                disabled
                                                type="text"
                                                name="formula"
                                                placeholder="Enter Formula"
                                                component={Input}
                                            />
                                        </FormItem>
                                    </FormContainer>

                                    <FormItem>
                                        <div className="w-full flex justify-end gap-4">
                                            <Button
                                                type="reset"
                                                onClick={() => {
                                                    setSetInitialValue({
                                                        name: '',
                                                        formula: 'ABC Formula',
                                                    })
                                                    resetForm()
                                                }}
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
                                </FormContainer>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Card>
            <FeeBasisTable handleEdit={handleEdit} />
        </>
    )
}

export default FeeBasis
