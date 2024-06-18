import {
  Button,
  Card,
  DatePicker,
  FormContainer,
  FormItem,
  Input,
  Select,
} from '@/components/ui'
import { Form, Field, FieldProps, FieldInputProps, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Switcher from '@/components/ui/Switcher'


type Option = {
value: string
label: string
}
type FormModel = {
investorAdmissionDate: Date | null,
actualEqInterestRate: number,
equationBasis: string,
equalisationCalendarDays: string,
contriOnFees: boolean,
contriOnInvestment: boolean,
contriOnOthers: boolean,
contriOnFeesDate: Date | null,
contriOnInvestmentDate: Date | null,
contriOnOthersDate: Date | null,
contriOnFeesRemarks: string,
contriOnInvestmentRemarks: string,
contriOnOthersRemarks: string,
effectiveDate: string,
}

const Equalisation = () => {
  const navigate = useNavigate()

  const equalisationBasisOptions: Option[] = [
      { value: 'basis1', label: 'Basis 1' },
      { value: 'basis2', label: 'Basis 2' },
  ]
  const options: Option[] = [
    {
        value: 'option1',
        label: 'From day of original draw from old Investor',
    },
    { value: 'option2', label: 'From day of first draw from new Investor' },
]

const calendarOptions: Option[] = [
  { value: '360', label: '360 days (each month is of 30 days)' },
  { value: '365', label: '365 days (each month has actual days)' },
]
  const validationSchema = Yup.object().shape({
    investorAdmissionDate:  Yup.date().required('Date is Required!'),
    actualEqInterestRate:  Yup.number().required('This field is required!'),
    equationBasis:  Yup.string().required('This field is required!'),
    equalisationCalendarDays: Yup.string().required('This field is required!'),
    contriOnFees: Yup.bool(),
    contriOnInvestment: Yup.bool(),
    contriOnOthers: Yup.bool(),
    contriOnFeesDate: Yup.date().nullable(),
    contriOnInvestmentDate: Yup.date().nullable(),
    contriOnOthersDate: Yup.date().nullable(),
    contriOnFeesRemarks: Yup.string().nullable(),
    contriOnInvestmentRemarks: Yup.string().nullable(),
    contriOnOthersRemarks: Yup.string().nullable(),
    effectiveDate: Yup.string().required('This field is required!'),
  })

  return (
      <Card
          id="feeFrequency"
          className="flex justify-center items-center"
          bodyClass="w-full"
      >
          <div className="w-full">
          <h5 className="mb-4">Equalisation</h5>
              <Formik
                  enableReinitialize
                  initialValues={{
                    investorAdmissionDate: null,
                    actualEqInterestRate: '',
                    equationBasis: '',
                    equalisationCalendarDays: '',
                    contriOnFees: false,
                    contriOnInvestment: false,
                    contriOnOthers: false,
                    contriOnFeesDate: null,
                    contriOnInvestmentDate: null,
                    contriOnOthersDate: null,
                    contriOnFeesRemarks: '',
                    contriOnInvestmentRemarks: '',
                    contriOnOthersRemarks: '',
                    effectiveDate: '',
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
                                          label="Compensating Contribution effective date"
                                          invalid={
                                              errors.investorAdmissionDate &&
                                              touched.investorAdmissionDate
                                          }
                                          errorMessage={errors.investorAdmissionDate}
                                      >
                                          <Field
                                                  name="investorAdmissionDate"
                                                  placeholder="Enter Date"
                                              >
                                                  {({ field, form }: FieldProps<FormModel>) => (
                                                      <DatePicker
                                                          field={field}
                                                          placeholder="Enter  Date"
                                                          form={form}
                                                          value={
                                                              values.investorAdmissionDate
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
                                              label="Actual Eq. Interest Rate"
                                              invalid={
                                                  errors.actualEqInterestRate &&
                                                  touched.actualEqInterestRate
                                              }
                                              errorMessage={errors.actualEqInterestRate}
                                          >
                                            <Field
                                                  type="text"
                                                  name="actualEqInterestRate"
                                                  placeholder="Enter Rate (in %)"
                                                  component={Input}
                                              />
                                          
                                      </FormItem>
                                  </FormContainer>
                                  <FormContainer>
                                          <FormItem
                                              asterisk
                                              label="Equalisation Basis"
                                              invalid={
                                                  errors.equationBasis &&
                                                  touched.equationBasis
                                              }
                                              errorMessage={errors.equationBasis}
                                          >
                                              <Field name="equationBasis">
                                                  {({ field, form }) => (
                                                      <Select
                                                          field={field}
                                                          form={form}
                                                          placeholder="Please select"
                                                          options={
                                                              equalisationBasisOptions
                                                          }
                                                          value={equalisationBasisOptions.filter(
                                                              (option) =>
                                                                  option.value ===
                                                                  values.equationBasis
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
                                              label="Equalisation Calendar Days"
                                              invalid={
                                                  errors.equalisationCalendarDays &&
                                                  touched.equalisationCalendarDays
                                              }
                                              errorMessage={
                                                  errors.equalisationCalendarDays
                                              }
                                          >
                                              <Field name="equalisationCalendarDays">
                                                  {({ field, form }) => (
                                                      <Select
                                                          field={field}
                                                          form={form}
                                                          placeholder="Please Select"
                                                          options={
                                                              calendarOptions
                                                          }
                                                          value={calendarOptions.filter(
                                                              (option) =>
                                                                  option.value ===
                                                                  values.equalisationCalendarDays
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
                                  </FormContainer>
                              </div>
                              {/* <h5 className='mb-4'>Equalisation Interest</h5>
                              <div className="grid lg:grid-cols-12 lg:gap-6 grid-cols-1 mt-2">
                                <div className="col-span-2 flex justify-start items-center">
                                    <FormItem label="Contribution on Fees: " />
                                </div>
                                <div className="col-span-10 gap-6 flex">
                                                <FormItem
                                                    className="w-1/10"
                                                    label="No/Yes"
                                                    invalid={
                                                        errors.contriOnFees &&
                                                        touched.contriOnFees
                                                    }
                                                    errorMessage={
                                                        errors.contriOnFees
                                                    }
                                                >
                                                    <Field name="contriOnFees">
                                                        {({
                                                            field,
                                                            form,
                                                        }: FieldProps<FormModel>) => (
                                                            <Switcher
                                                                onChange={(
                                                                    val: boolean,
                                                                    e: ChangeEvent
                                                                ) => {
                                                                    // console.log(val, e)
                                                                    form.setFieldValue(
                                                                        field.name,
                                                                        val
                                                                    )
                                                                }}
                                                            />
                                                        )}
                                                    </Field>
                                                </FormItem>
                                                <FormItem
                                                    className="w-1/2"
                                                    label="Date"
                                                    invalid={
                                                        errors.contriOnFeesDate &&
                                                        touched.contriOnFeesDate
                                                    }
                                                    errorMessage={
                                                        errors.contriOnFeesDate
                                                    }
                                                >
                                                    <Field name="contriOnFeesDate">
                                                        {({
                                                            field,
                                                            form,
                                                        }: FieldProps<FormModel>) => (
                                                            <DatePicker
                                                                disabled={
                                                                    !values.contriOnFees
                                                                }
                                                                field={field}
                                                                form={form}
                                                                placeholder="Enter Date"
                                                                value={
                                                                    values.contriOnFeesDate
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
                                                    className="w-full"
                                                    label="Remarks"
                                                    invalid={
                                                        errors.contriOnFeesRemarks &&
                                                        touched.contriOnFeesRemarks
                                                    }
                                                    errorMessage={
                                                        errors.contriOnFeesRemarks
                                                    }
                                                >
                                                    <Field
                                                        type="text"
                                                        name="contriOnFeesRemarks"
                                                        placeholder="Enter Remarks"
                                                        component={Input}
                                                    />
                                                </FormItem>
                                </div>

                              </div> */}
                              {/* Equalisation Interest */}
                              <div className="flex flex-col gap-4 mb-2">
                                    <Card id="feeFrequency" className="mb-4">
                                        <h5 className='mb-4'>Equalisation Interest</h5>
                                        <div className="grid lg:grid-cols-12 lg:gap-6 grid-cols-1 mt-2">
                                            <div className="col-span-2 flex justify-start items-center">
                                                <FormItem label="Contribution on Fees: " />
                                            </div>
                                            <div className="col-span-10 gap-6 flex">
                                                <FormItem
                                                    className="w-1/10"
                                                    label="No/Yes"
                                                    invalid={
                                                        errors.contriOnFees &&
                                                        touched.contriOnFees
                                                    }
                                                    errorMessage={
                                                        errors.contriOnFees
                                                    }
                                                >
                                                    <Field name="contriOnFees">
                                                        {({
                                                            field,
                                                            form,
                                                        }: FieldProps<FormModel>) => (
                                                            <Switcher
                                                                onChange={(
                                                                    val: boolean,
                                                                    e: ChangeEvent
                                                                ) => {
                                                                    // console.log(val, e)
                                                                    form.setFieldValue(
                                                                        field.name,
                                                                        val
                                                                    )
                                                                }}
                                                            />
                                                        )}
                                                    </Field>
                                                </FormItem>
                                                <FormItem
                                                    className="w-1/2"
                                                    label="Date"
                                                    invalid={
                                                        errors.contriOnFeesDate &&
                                                        touched.contriOnFeesDate
                                                    }
                                                    errorMessage={
                                                        errors.contriOnFeesDate
                                                    }
                                                >
                                                    <Field name="contriOnFeesDate">
                                                        {({
                                                            field,
                                                            form,
                                                        }: FieldProps<FormModel>) => (
                                                            <DatePicker
                                                                disabled={
                                                                    !values.contriOnFees
                                                                }
                                                                field={field}
                                                                form={form}
                                                                placeholder="Enter Date"
                                                                value={
                                                                    values.contriOnFeesDate
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
                                                    className="w-full"
                                                    label="Remarks"
                                                    invalid={
                                                        errors.contriOnFeesRemarks &&
                                                        touched.contriOnFeesRemarks
                                                    }
                                                    errorMessage={
                                                        errors.contriOnFeesRemarks
                                                    }
                                                >
                                                    <Field
                                                        type="text"
                                                        name="contriOnFeesRemarks"
                                                        placeholder="Enter Remarks"
                                                        component={Input}
                                                    />
                                                </FormItem>
                                            </div>
                                        </div>
                                        <div className="grid lg:grid-cols-12 lg:gap-6 grid-cols-1 mt-2">
                                            <div className="col-span-2 flex justify-start items-center">
                                                <FormItem label="Contribution on Investments: " />
                                            </div>
                                            <div className="col-span-10 gap-6 flex">
                                                <FormItem
                                                    className="w-1/10"
                                                    label="No/Yes"
                                                    invalid={
                                                        errors.contriOnInvestment &&
                                                        touched.contriOnInvestment
                                                    }
                                                    errorMessage={
                                                        errors.contriOnInvestment
                                                    }
                                                >
                                                    <Field name="contriOnInvestment">
                                                        {({
                                                            field,
                                                            form,
                                                        }: FieldProps<FormModel>) => (
                                                            <Switcher
                                                                onChange={(
                                                                    val: boolean,
                                                                    e: ChangeEvent
                                                                ) => {
                                                                    // console.log(val, e)
                                                                    form.setFieldValue(
                                                                        field.name,
                                                                        val
                                                                    )
                                                                }}
                                                            />
                                                        )}
                                                    </Field>
                                                </FormItem>
                                                <FormItem
                                                    className="w-1/2"
                                                    label="Date"
                                                    invalid={
                                                        errors.contriOnInvestmentDate &&
                                                        touched.contriOnInvestmentDate
                                                    }
                                                    errorMessage={
                                                        errors.contriOnInvestmentDate
                                                    }
                                                >
                                                    <Field name="contriOnInvestmentDate">
                                                        {({
                                                            field,
                                                            form,
                                                        }: FieldProps<FormModel>) => (
                                                            <DatePicker
                                                                disabled={
                                                                    !values.contriOnInvestment
                                                                }
                                                                field={field}
                                                                form={form}
                                                                placeholder="Enter Date"
                                                                value={
                                                                    values.contriOnInvestmentDate
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
                                                    className="w-full"
                                                    label="Remarks"
                                                    invalid={
                                                        errors.contriOnInvestmentRemarks &&
                                                        touched.contriOnInvestmentRemarks
                                                    }
                                                    errorMessage={
                                                        errors.contriOnInvestmentRemarks
                                                    }
                                                >
                                                    <Field
                                                        type="text"
                                                        name="contriOnInvestmentRemarks"
                                                        placeholder="Enter Remarks"
                                                        component={Input}
                                                    />
                                                </FormItem>
                                            </div>
                                        </div>
                                        <div className="grid lg:grid-cols-12 lg:gap-6 grid-cols-1 mt-2">
                                            <div className="col-span-2 flex justify-start items-center">
                                                <FormItem label="Contribution on Others: " />
                                            </div>
                                            <div className="col-span-10 gap-6 flex">
                                                <FormItem
                                                    className="w-1/10"
                                                    label="No/Yes"
                                                    invalid={
                                                        errors.contriOnOthers &&
                                                        touched.contriOnOthers
                                                    }
                                                    errorMessage={
                                                        errors.contriOnOthers
                                                    }
                                                >
                                                    <Field name="contriOnOthers">
                                                        {({
                                                            field,
                                                            form,
                                                        }: FieldProps<FormModel>) => (
                                                            <Switcher
                                                                onChange={(
                                                                    val: boolean,
                                                                    e: ChangeEvent
                                                                ) => {
                                                                    // console.log(val, e)
                                                                    form.setFieldValue(
                                                                        field.name,
                                                                        val
                                                                    )
                                                                }}
                                                            />
                                                        )}
                                                    </Field>
                                                </FormItem>
                                                <FormItem
                                                    className="w-1/2"
                                                    label="Date"
                                                    invalid={
                                                        errors.contriOnOthersDate &&
                                                        touched.contriOnOthersDate
                                                    }
                                                    errorMessage={
                                                        errors.contriOnOthersDate
                                                    }
                                                >
                                                    <Field name="contriOnOthersDate">
                                                        {({
                                                            field,
                                                            form,
                                                        }: FieldProps<FormModel>) => (
                                                            <DatePicker
                                                                disabled={!values.contriOnOthers}
                                                                field={field}
                                                                form={form}
                                                                placeholder="Enter Date"
                                                                value={
                                                                    values.contriOnOthersDate
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
                                                    className="w-full"
                                                    label="Remarks"
                                                    invalid={
                                                        errors.contriOnOthersRemarks &&
                                                        touched.contriOnOthersRemarks
                                                    }
                                                    errorMessage={
                                                        errors.contriOnOthersRemarks
                                                    }
                                                >
                                                    <Field
                                                        type="text"
                                                        name="contriOnOthersRemarks"
                                                        placeholder="Enter Remarks"
                                                        component={Input}
                                                    />
                                                </FormItem>
                                            </div>
                                        </div>
                                        <div className="grid lg:grid-cols-2 lg:gap-6 grid-cols-1">
                                            <FormItem
                                                asterisk
                                                label="Commencement of Hurdle Computation"
                                                invalid={
                                                    errors.effectiveDate &&
                                                    touched.effectiveDate
                                                }
                                                errorMessage={
                                                    errors.effectiveDate
                                                }
                                            >
                                                <Field name="effectiveDate">
                                                    {({
                                                        field,
                                                        form,
                                                    }: FieldProps<FormModel>) => (
                                                        <Select
                                                            field={field}
                                                            form={form}
                                                            placeholder="Select Option"
                                                            options={options}
                                                            value={options.filter(
                                                                (option) =>
                                                                    option.value ===
                                                                    values.effectiveDate
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
                                        </div>
                                    </Card>
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

export default Equalisation
