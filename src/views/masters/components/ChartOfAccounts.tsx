import { Field, Form, Formik, FieldProps } from 'formik'
import { FormItem, FormContainer } from '@/components/ui/Form'
import * as Yup from 'yup'
import { Card, Select } from '@/components/ui'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { useState } from 'react'
import ChartOfAccountsTable from '../components/tables/ChartOfAccountsTable'


const ChartOfAccounts = () => {
    const [initialValue, setSetInitialValue] = useState({
        name: '',
        type: '',
        formula: 'ABC Formula',
    })

    const handleEdit = (item) => {
        setSetInitialValue({
            name: item.fundName,
            type: item.type,
            formula: 'ABC Formula',
        })
    }
    const accountGroupOptions = [
        { value: 'group1', label: 'Group 1' },
        { value: 'group2', label: 'Group 2' },
    ]

    const validationSchema = Yup.object().shape({
        accountCode: Yup.number().required('This field is required'),
        accountName: Yup.string().required('This field is required'),
        accountGroup: Yup.string().required('This field is required'),
        remarks: Yup.string().required('This field is required'),
    })

    return (
        <>
        <Card id="drawdownBasis">
            <div className="w-full">
                <h5 className="mb-4">Chart of Accounts</h5>
                <Formik
                    enableReinitialize
                    initialValues={{
                        accountCode: '',
                        accountName: '',
                        accountGroup: '',
                        remarks: '',
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
                                    <FormItem
                                        asterisk
                                        label="Account Code"
                                        invalid={
                                            errors.accountCode &&
                                            touched.accountCode
                                        }
                                        errorMessage={errors.accountCode}
                                    >
                                        <Field
                                            type="number"
                                            name="accountCode"
                                            placeholder="Enter Account Code"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        asterisk
                                        label="Account Name"
                                        invalid={
                                            errors.accountName &&
                                            touched.accountName
                                        }
                                        errorMessage={errors.accountName}
                                    >
                                        <Field
                                            type="text"
                                            name="accountName"
                                            placeholder="Enter Account Name"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        asterisk
                                        className="w-full"
                                        label="Account Group"
                                        labelClass="!justify-start"
                                        invalid={
                                            errors.accountGroup &&
                                            touched.accountGroup
                                        }
                                        errorMessage={errors.accountGroup}
                                    >
                                        <Field name="accountGroup">
                                            {({ field, form }) => (
                                                <Select
                                                    field={field}
                                                    form={form}
                                                    placeholder="Select Account Group"
                                                    options={
                                                        accountGroupOptions
                                                    }
                                                    value={accountGroupOptions.filter(
                                                        (option) =>
                                                            option.value ===
                                                            values.accountGroup
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
                                    <FormItem
                                        asterisk
                                        label="Remarks"
                                        invalid={
                                            errors.accountCode &&
                                            touched.accountCode
                                        }
                                        errorMessage={errors.accountCode}
                                    >
                                        <Field
                                            type="text"
                                            name="remarks"
                                            placeholder="Enter Remarks"
                                            component={Input}
                                        />
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
        <ChartOfAccountsTable handleEdit={handleEdit}/>
</>
    )
}

export default ChartOfAccounts
