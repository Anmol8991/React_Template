import { Field, Form, Formik, FieldProps } from 'formik'
import { FormItem, FormContainer } from '@/components/ui/Form'
import * as Yup from 'yup'
import { Card } from '@/components/ui'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { useState } from 'react'
import AccountGroupTable from '../components/tables/AccountGroupTable'


const AccountGroup = () => {
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
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('This field is required'),
        series: Yup.number().required('This field is required'),
        remarks: Yup.string().required('This field is required'),
    })
    return (
        <>
        <Card
            id="drawdownBasis"
            // className="flex justify-center items-center"
            // bodyClass="w-full lg:w-1/2"
        >
            <div className="w-full">
                <h5 className="mb-4">Account Group</h5>
                <Formik
                    enableReinitialize
                    initialValues={{
                        name: '',
                        series: '',
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
                                        label="Name"
                                        invalid={errors.name && touched.name}
                                        errorMessage={errors.name}
                                    >
                                        <Field
                                            type="text"
                                            name="name"
                                            placeholder="Enter Name"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        asterisk
                                        label="Series"
                                        invalid={
                                            errors.series && touched.series
                                        }
                                        errorMessage={errors.series}
                                    >
                                        <Field
                                            type="number"
                                            name="name"
                                            placeholder="Enter Series"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        asterisk
                                        label="Remarks"
                                        invalid={
                                            errors.remarks && touched.remarks
                                        }
                                        errorMessage={errors.remarks}
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
        <AccountGroupTable handleEdit={handleEdit}/>
</>
    )
}

export default AccountGroup
