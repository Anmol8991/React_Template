import {
    Button,
    Card,
    FormContainer,
    FormItem,
    Input,
    Select,
} from '@/components/ui'
import type { InputProps } from '@/components/ui/Input'
import { Form, Field, Formik,FieldInputProps } from 'formik'
import * as Yup from 'yup'
import { NumericFormat, NumericFormatProps } from 'react-number-format'

const NumberInput = (props: InputProps) => {
    return <Input {...props} value={props.field.value} />
}

interface NumericFormatInputProps extends Omit<NumericFormatProps, 'form'> {
    form: any
    field: FieldInputProps<unknown>
}

type Option = {
    value: string
    label: string
}
type FormModel = {
    type: string
    hurdle: number
    hurdleCurrency: number
    catchUp: number
    carryRate: number
}

const Interests = () => {


    const typeOptions: Option[] = [
        { value: 'dealbydeal', label: 'Deal by Deal' },
        { value: 'fundlevel', label: 'Fund Level' },
    ]
    const currencyOptions: Option[] = [
        { value: 'rupees', label: 'Rupees' },
        { value: 'dollar', label: 'Dollar' },
    ]

    const validationSchema = Yup.object().shape({
        type: Yup.string().required('This field is required!'),
        hurdle: Yup.number().required('This field is required!'),
        hurdleCurrency: Yup.string().required('This field is required!'),
        carryRate: Yup.number().required('This field is required!'),
        catchUp: Yup.number().required('This field is required!'),
    })
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
        <Card
            id="feeFrequency"
            className="flex justify-center items-center"
            bodyClass="w-full"
        >
            <div className="w-full">
            <h5 className="mb-4">Interests</h5>
                <Formik
                    enableReinitialize
                    initialValues={{
                        type: '',
                        hurdle: '',
                        hurdleCurrency: '',
                        carryRate: 15,
                        catchUp: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log('values', values)
                        
                    }}
                >
                    {({ values, touched, errors, resetForm }) => (
                        <Form>
                            <FormContainer>
                                <div className="grid lg:grid-cols-2 lg:gap-4 grid-cols-1">
                                    <FormContainer>
                                        <FormItem
                                            asterisk
                                            label="Type"
                                            invalid={
                                                errors.type &&
                                                touched.type
                                            }
                                            errorMessage={errors.type}
                                        >
                                            <Field name="type">
                                                {({ field, form }) => (
                                                    <Select
                                                        field={field}
                                                        form={form}
                                                        placeholder="Please select"
                                                        options={
                                                            typeOptions
                                                        }
                                                        value={typeOptions.filter(
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
                                        <FormItem
                                            asterisk
                                            label="Carry Rate"
                                            invalid={
                                                errors.carryRate &&
                                                touched.carryRate
                                            }
                                            errorMessage={errors.carryRate}
                                        >
                                            <Field
                                                type="text"
                                                name="carryRate"
                                                placeholder="Enter Rate (in %)"
                                                component={Input}
                                            />
                                        </FormItem>
                                        <FormItem
                                            asterisk
                                            label="Catch up"
                                            invalid={
                                                errors.catchUp &&
                                                touched.catchUp
                                            }
                                            errorMessage={errors.catchUp}
                                        >
                                            <Field name="catchUp">
                                                        {({
                                                            field,
                                                            form,
                                                        }: FieldProps) => {
                                                            return (
                                                                <NumericFormatInput
                                                                    form={form}
                                                                    field={field}
                                                                    placeholder="Enter Rate in %"
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
                                            asterisk
                                            label="Hurdle"
                                            invalid={
                                                errors.hurdle && touched.hurdle
                                            }
                                            errorMessage={errors.hurdle}
                                        >
                                            <Field
                                                type="text"
                                                name="hurdle"
                                                placeholder="Enter hurdle (in %)"
                                                component={Input}
                                            />
                                        </FormItem>
                                        <FormItem
                                            asterisk
                                            label="Hurdle Currency"
                                            invalid={
                                                errors.hurdleCurrency &&
                                                touched.hurdleCurrency
                                            }
                                            errorMessage={errors.hurdleCurrency}
                                        >
                                            <Field name="hurdleCurrency">
                                                {({ field, form }) => (
                                                    <Select
                                                        field={field}
                                                        form={form}
                                                        placeholder="Please select"
                                                        options={
                                                            currencyOptions
                                                        }
                                                        value={currencyOptions.filter(
                                                            (option) =>
                                                                option.value ===
                                                                values.hurdleCurrency
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

export default Interests
