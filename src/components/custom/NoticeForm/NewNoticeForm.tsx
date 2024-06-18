import { Card, Select } from '@/components/ui'
import Upload from '@/components/ui/Upload'
import { FormItem, FormContainer } from '@/components/ui/Form'
import DatePicker from '@/components/ui/DatePicker'
import type { InputProps } from '@/components/ui/Input'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { Form, Field, FieldProps, FieldInputProps, Formik } from 'formik'
import type { ComponentType } from 'react'
import { NumericFormat, NumericFormatProps } from 'react-number-format'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

type Option = {
    value: string
    label: string
}

type FormModel = {
    noticeId: string
    noticeType: string
    amount: number
    creationDate: Date | null
    attachment: File[]
}
const NumberInput = (props: InputProps) => {
    return <Input {...props} value={props.field.value} />
}

interface NumericFormatInputProps extends Omit<NumericFormatProps, 'form'> {
    form: any
    field: FieldInputProps<unknown>
}

function NewNoticeForm() {
    const navigate = useNavigate()
    const noticeTypeOptions: Option[] = [
        { value: 'drawdown', label: 'Drawdown' },
        { value: 'distribution', label: 'Distribution' },
    ]
    const MIN_UPLOAD = 1
    const MAX_UPLOAD = 2
    const validationSchema = Yup.object().shape({
        noticeId: Yup.string()
            .min(3, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Notice Id is required'),
        noticeType: Yup.string().required('Type is required!'),
        amount: Yup.number().required('Please Enter Amount'),
        creationDate: Yup.date().required('Date Required!'),
        attachment: Yup.array().min(MIN_UPLOAD, 'At least one file uploaded!'),
    })

    const beforeUpload = (file: FileList | null, fileList: File[]) => {
        let valid: string | boolean = true

        const allowedFileType = ['image/jpeg', 'image/png']
        const MAX_FILE_SIZE = 50000000

        if (fileList.length >= MAX_UPLOAD) {
            return `You can only upload ${MAX_UPLOAD} file(s)`
        }

        if (file) {
            for (const f of file) {
                if (!allowedFileType.includes(f.type)) {
                    valid = 'Please upload a .jpeg or .png file!'
                }

                if (f.size >= MAX_FILE_SIZE) {
                    valid = 'Upload image cannot more then 500kb!'
                }
            }
        }

        return valid
    }
    const NumericFormatInput = (props: NumericFormatInputProps) => {
        const { onValueChange, ...rest } = props
        return (
            <NumericFormat
                customInput={Input as ComponentType}
                type="text"
                autoComplete="off"
                onValueChange={onValueChange}
                {...rest}
            />
        )
    }

    return (
        <>
            <Card
                id="newNotice"
                className="flex justify-center items-center"
                bodyClass="w-full"
            >
                <div className="w-full">
                    <h5 className="mb-4">New Notice</h5>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            noticeId: '',
                            noticeType: '',
                            amount: '',
                            creationDate: null,
                            attachment: [],
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log('values', values)
                            navigate('/notices')
                            // setTimeout(() => {
                            //     alert(JSON.stringify(values, null, 2))
                            //     setSubmitting(false)
                            // }, 400)
                        }}
                    >
                        {({ values, touched, errors, resetForm }) => (
                            <Form>
                                <FormContainer>
                                    <div className="grid lg:grid-cols-2 lg:gap-4 grid-cols-1">
                                        <FormContainer>
                                            <FormItem
                                                asterisk
                                                className="w-full"
                                                label="Notice Id"
                                                invalid={
                                                    errors.noticeId &&
                                                    touched.noticeId
                                                }
                                                errorMessage={errors.noticeId}
                                            >
                                                <Field
                                                    type="text"
                                                    name="noticeId"
                                                    placeholder="Enter Notice Id"
                                                    component={Input}
                                                />
                                            </FormItem>
                                            <FormItem
                                                className="w-full"
                                                asterisk
                                                label="Amount"
                                                labelClass="!justify-start"
                                                invalid={
                                                    errors.amount &&
                                                    touched.amount
                                                }
                                                errorMessage={errors.amount}
                                            >
                                                <Field name="amount">
                                                    {({
                                                        field,
                                                        form,
                                                    }: FieldProps) => {
                                                        return (
                                                            <NumericFormatInput
                                                                form={form}
                                                                field={field}
                                                                placeholder="Fund Size"
                                                                customInput={
                                                                    NumberInput as ComponentType
                                                                }
                                                                onValueChange={(
                                                                    e
                                                                ) => {
                                                                    form.setFieldValue(
                                                                        field.name,
                                                                        e.value
                                                                    )
                                                                }}
                                                            />
                                                        )
                                                    }}
                                                </Field>
                                            </FormItem>
                                        </FormContainer>
                                        <FormContainer>
                                            <FormItem
                                                className="w-full"
                                                asterisk
                                                label="Notice Type"
                                                invalid={
                                                    errors.noticeType &&
                                                    touched.noticeType
                                                }
                                                errorMessage={errors.noticeType}
                                            >
                                                <Field name="noticeType">
                                                    {({
                                                        field,
                                                        form,
                                                    }: FieldProps<FormModel>) => (
                                                        <Select
                                                            field={field}
                                                            form={form}
                                                            placeholder="Select Notice Type"
                                                            options={
                                                                noticeTypeOptions
                                                            }
                                                            value={noticeTypeOptions.filter(
                                                                (option) =>
                                                                    option.value ===
                                                                    values.noticeType
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
                                                className="w-full"
                                                label="Creation Date"
                                                invalid={
                                                    errors.creationDate &&
                                                    touched.creationDate
                                                }
                                                errorMessage={
                                                    errors.creationDate
                                                }
                                            >
                                                <Field name="creationDate">
                                                    {({
                                                        field,
                                                        form,
                                                    }: FieldProps<FormModel>) => (
                                                        <DatePicker
                                                            field={field}
                                                            form={form}
                                                            placeholder="Enter Creation Date"
                                                            value={
                                                                values.creationDate
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
                                        </FormContainer>
                                    </div>
                                    <FormItem
                                        asterisk
                                        label="Upload"
                                        invalid={Boolean(
                                            errors.attachment &&
                                                touched.attachment
                                        )}
                                        errorMessage={
                                            errors.attachment as string
                                        }
                                    >
                                        <Field name="attachment">
                                            {({
                                                field,
                                                form,
                                            }: FieldProps<FormModel>) => (
                                                <Upload
                                                    beforeUpload={beforeUpload}
                                                    fileList={values.attachment}
                                                    onChange={(files) =>
                                                        form.setFieldValue(
                                                            field.name,
                                                            files
                                                        )
                                                    }
                                                    onFileRemove={(files) =>
                                                        form.setFieldValue(
                                                            field.name,
                                                            files
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
        </>
    )
}

export default NewNoticeForm
