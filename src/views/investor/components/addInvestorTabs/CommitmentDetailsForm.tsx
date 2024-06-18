import React, { useState} from 'react'
import { Form, Field, FieldProps, Formik } from 'formik'
import {
    Button,
    Card,
    DatePicker,
    FormContainer,
    FormItem,
    Input,
    Select,
    Table,
    Dropdown,
} from '@/components/ui'
import Swal from 'sweetalert2'
import { HiOutlineMenuAlt4, HiOutlinePlusCircle } from 'react-icons/hi'
import type { MouseEvent } from 'react'
import * as Yup from 'yup'
import Switcher from '@/components/ui/Switcher'
import Dialog from '@/components/ui/Dialog'
import THead from '@/components/ui/Table/THead'
import Tr from '@/components/ui/Table/Tr'
import Th from '@/components/ui/Table/Th'
import TBody from '@/components/ui/Table/TBody'
import Td from '@/components/ui/Table/Td'
import AddMgmtFee from '@/components/custom/AddMgmtFee'

type Option = {
    value: string
    label: string
}
const currencyOptions: Option[] = [
    { value: 'rupees', label: 'Rupees' },
    { value: 'dollar', label: 'Dollar' },
]
const options: Option[] = [
    {
        value: 'option1',
        label: 'From day of original draw from old Investor',
    },
    { value: 'option2', label: 'From day of first draw from new Investor' },
]

type MgmtFormModel = {
    startDate: Date | null
    endDate: Date | null
    rate: number | null
    taxRate: number | null
    fixedFee: number | null
    feeBasis: string
    feeFrequency: string
    calendarType: string
}
type FormModel = {
    date: Date | null
    amount: number | null
    mgmtValues: MgmtFormModel[],
    hurdle: '',
    hurdleCurrency: '',
    carryRate: 15,
    catchUp: '',
    contriOnFees: boolean,
    contriOnInvestment: boolean,
    contriOnOthers: boolean,
    contriOnFeesRemarks: '',
    contriOnInvestmentRemarks: '',
    contriOnOthersRemarks: '',
    effectiveDate: '',
}

interface Props {
    currentValue: FormModel,
    handleSave: (values: FormModel) => void,
    handleCancel: () => void
}

const CommitmentDetailsForm = ({ currentValue, handleSave, handleCancel }: Props) => {

    // console.log("CurrentValue in Detail Form: ",currentValue)
    
    const [mgmtFeeValues, setMgmtFeeValues] = useState<MgmtFormModel[]>(currentValue.mgmtValues)
    const [dialogIsOpen, setIsOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState<number | null>()
    const [currentMgmtFeeValue, setCurrentMgmtFeeValue] = useState<MgmtFormModel>({
        startDate: null,
        endDate: null,
        rate: null,
        taxRate: null,
        fixedFee: null,
        feeBasis: '',
        feeFrequency: '',
        calendarType: '',
    })

    const openDialog = (e: MouseEvent) => {
        setIsOpen(true)
    }
    const onDialogClose = (e: MouseEvent) => {
        // console.log('onDialogClose', e)
        setIsOpen(false)
    }

    const openDialogSave = (formValues: MgmtFormModel, field, form) => {
        
        console.log('FormValues: ', formValues)
        setIsOpen(false)

        if (typeof currentIndex === 'number') {
            const updatedArray = [...mgmtFeeValues]
            updatedArray[currentIndex] = formValues
            setMgmtFeeValues(updatedArray)
            form.setFieldValue(
                field.name,
                updatedArray
            )
        } else {
            const newArray = [...mgmtFeeValues, formValues]
            setMgmtFeeValues(newArray)
            form.setFieldValue(
                field.name,
                newArray
            )

        }
    }


    const handleAddNew = (e: MouseEvent) => {
        setCurrentIndex(null)
        setCurrentMgmtFeeValue({
            startDate: null,
            endDate: null,
            rate: null,
            taxRate: null,
            fixedFee: null,
            feeBasis: '',
            feeFrequency: '',
            calendarType: '',
        })
        openDialog(e)
    }

    const handleEdit = (e: MouseEvent, index: number) => {
        setCurrentIndex(index)
        setCurrentMgmtFeeValue(mgmtFeeValues[index])
        openDialog(e)
    }

    const Toggle = (
        <Button size="xs" variant="twoTone">
            <HiOutlineMenuAlt4 />
        </Button>
    )

    const formatDateToString = (date) => {
        const day = date.getDate().toString().padStart(2, '0')
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const year = date.getFullYear().toString()
        return `${month}/${day}/${year}`
    }


    const validationSchema = Yup.object().shape({
        date: Yup.date().required('Date is required'),
        amount: Yup.number().required('This field is required!'),
        mgmtValues: Yup.array()
            .min(1, 'Array must have at least one element')
            .required('Array field is required'),
        hurdle: Yup.number().required('This field is required!'),
        hurdleCurrency: Yup.string().required('This field is required!'),
        carryRate: Yup.number().required('This field is required!'),
        catchUp: Yup.number().required('This field is required!'),
        contriOnFees: Yup.bool(),
        contriOnInvestment: Yup.bool(),
        contriOnOthers: Yup.bool(),
        contriOnFeesRemarks: Yup.string().nullable(),
        contriOnInvestmentRemarks: Yup.string().nullable(),
        contriOnOthersRemarks: Yup.string().nullable(),
        effectiveDate: Yup.string().required('This field is required!'),
    })
  return (
    <div className="w-full">
    <h5 className="mb-4">Add Commitments</h5>

<Formik
    enableReinitialize
    initialValues={currentValue}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting, resetForm }) => {
        handleSave(values)
        resetForm()
    }}
>
    {({ values, touched, errors, resetForm }) => (
        <Form>
            <FormContainer>
                <div className="grid lg:grid-cols-2 lg:gap-6 grid-cols-1">
                    <FormContainer>
                        <FormItem
                            asterisk
                            label="Date"
                            invalid={errors.date && touched.date}
                            errorMessage={errors.date}
                        >
                            <Field name="date">
                                {({
                                    field,
                                    form,
                                }: FieldProps<FormModel>) => (
                                    <DatePicker
                                        field={field}
                                        form={form}
                                        placeholder="Enter Date"
                                        value={values.date}
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
                    </FormContainer>
                    <FormContainer>
                        <FormItem
                            asterisk
                            label="Amount "
                            invalid={
                                errors.amount && touched.amount
                            }
                            errorMessage={errors.amount}
                        >
                            <Field
                                type="number"
                                name="amount"
                                placeholder="Enter Amount"
                                value={values.amount}
                                component={Input}
                            />
                        </FormItem>
                    </FormContainer>
                </div>
                {/* Management Fees */}
                <FormItem
                    invalid={
                        errors.mgmtValues && touched.mgmtValues
                    }
                    errorMessage={errors.mgmtValues}
                >
                    <Field name="mgmtValues">
                        {({ field, form }) => (
                            <Card>
                        <div
                        className={`flex items-center justify-between ${
                            mgmtFeeValues?.length > 0 && 'mb-4'
                        }`}
                        >
                        <h5>Management Fee</h5>
                        {mgmtFeeValues?.length === 0 && (
                            <p>There is no Mangement Fee</p>
                        )}
                        <Button
                            type="button"
                            size="sm"
                            icon={<HiOutlinePlusCircle />}
                            onClick={handleAddNew}
                        >
                            Add New
                        </Button>
                    </div>
                    <Dialog
                        isOpen={dialogIsOpen}
                        width={window.innerWidth * 0.7}
                        onClose={onDialogClose}
                        onRequestClose={onDialogClose}
                    >
                        <div className={`max-h-100 overflow-y-auto`}>
                            <AddMgmtFee
                                currentValue={currentMgmtFeeValue}
                                handleSave={(values) => openDialogSave(values, field, form)}
                                handleCancel={onDialogClose}
                            />
                        </div>
                    </Dialog>
                    {mgmtFeeValues?.length > 0 && (
                        <Table className="mb-20">
                            <THead>
                                <Tr>
                                    <Th>Start Date</Th>
                                    <Th>End Date</Th>
                                    <Th>Rate</Th>
                                    <Th>Tax Rate</Th>
                                    <Th>Fixed Fee</Th>
                                    <Th>Calendar Type</Th>
                                    <Th>Fee Basis</Th>
                                    <Th>Fee Frequency</Th>
                                    <Th>Action</Th>
                                </Tr>
                            </THead>
                            <TBody>
                                {mgmtFeeValues.length > 0 ? (
                                    mgmtFeeValues.map((i, index) => (
                                        <Tr key={index}>
                                            <Td>{formatDateToString(i.startDate)}</Td>
                                            <Td>{formatDateToString(i.endDate)}</Td>
                                            <Td>{i.rate}</Td>
                                            <Td>{i.taxRate}</Td>
                                            <Td>{i.fixedFee}</Td>
                                            <Td>{i.calendarType}</Td>
                                            <Td>{i.feeBasis}</Td>
                                            <Td>{i.feeFrequency}</Td>
                                            <Td>
                                                <Dropdown
                                                    placement="bottom-end"
                                                    renderTitle={Toggle}
                                                >
                                                    <Dropdown.Item
                                                        eventKey="a"
                                                        onClick={(
                                                            e: MouseEvent
                                                        ) => {
                                                            setCurrentIndex(
                                                                index
                                                            )
                                                            handleEdit(e, index)
                                                        }}
                                                    >
                                                        Edit
                                                    </Dropdown.Item>
                                                    <Dropdown.Item
                                                        eventKey="a"
                                                        onClick={() => {
                                                            Swal.fire({
                                                                title: 'Delete',
                                                                text: `Are you sure you want to delete?`,
                                                                icon: 'warning',
                                                                confirmButtonText:
                                                                    'Delete',
                                                                showCancelButton:
                                                                    true,
                                                            }).then(
                                                                (result) => {
                                                                    if (
                                                                        result.isConfirmed
                                                                    ) {
                                                                        const newArray =
                                                                            [
                                                                                ...mgmtFeeValues.slice(
                                                                                    0,
                                                                                    index
                                                                                ),
                                                                                ...mgmtFeeValues.slice(
                                                                                    index +
                                                                                        1
                                                                                ),
                                                                            ]
                                                                        setMgmtFeeValues(
                                                                            newArray
                                                                        )
                                                                        form.setFieldValue(
                                                                            field.name,
                                                                            newArray
                                                                        )
                                                                        setCurrentMgmtFeeValue(
                                                                            {
                                                                                startDate: null,
                                                                                endDate: null,
                                                                                rate: null,
                                                                                taxRate:null,
                                                                                fixedFee: null,
                                                                                feeBasis:
                                                                                    '',
                                                                                feeFrequency:
                                                                                    '',
                                                                                calendarType:
                                                                                    '',
                                                                            }
                                                                        )
                                                                    }
                                                                }
                                                            )
                                                        }}
                                                    >
                                                        Delete
                                                    </Dropdown.Item>
                                                </Dropdown>
                                            </Td>
                                        </Tr>
                                    ))
                                ) : (
                                    <div className="d-flex justify-center">
                                        <p className="text-center">No fees</p>
                                    </div>
                                )}
                            </TBody>
                        </Table>
                    )}
                            </Card> 
                        )}
                    </Field>
                      

                </FormItem>
                {/* Rest of the Form */}
                <FormContainer>
                    <Card>
                        <div className="grid lg:grid-cols-2 lg:gap-4 grid-cols-1">
                            <FormContainer>
                                <FormItem
                                    asterisk
                                    label="Hurdle %"
                                    invalid={
                                        errors.hurdle &&
                                        touched.hurdle
                                    }
                                    errorMessage={errors.hurdle}
                                >
                                    <Field
                                        type="number"
                                        name="hurdle"
                                        placeholder="Enter hurdle (in %)"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem
                                    asterisk
                                    label="Carry Rate"
                                    invalid={
                                        errors.carryRate &&
                                        touched.carryRate
                                    }
                                    errorMessage={
                                        errors.carryRate
                                    }
                                >
                                    <Field
                                        type="number"
                                        name="carryRate"
                                        placeholder="Enter Rate (in %)"
                                        component={Input}
                                    />
                                </FormItem>
                            </FormContainer>
                            <FormContainer>
                                <FormItem
                                    asterisk
                                    label="Hurdle Currency"
                                    invalid={
                                        errors.hurdleCurrency &&
                                        touched.hurdleCurrency
                                    }
                                    errorMessage={
                                        errors.hurdleCurrency
                                    }
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
                                    label="Catch Up"
                                    invalid={
                                        errors.catchUp &&
                                        touched.catchUp
                                    }
                                    errorMessage={
                                        errors.catchUp
                                    }
                                >
                                    <Field
                                        type="number"
                                        name="catchUp"
                                        placeholder="Enter Rate (in %)"
                                        component={Input}
                                    />
                                </FormItem>
                            </FormContainer>
                        </div>
                    </Card>
                </FormContainer>

                {/* Equalisation Interest */}
                <div className="flex flex-col gap-4 mb-2 mt-4">
                                    <Card id="feeFrequency" className="mb-4">
                                        <h5 className="mb-4">
                                            Equalisation Interest
                                        </h5>
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
                            onClick={(e: MouseEvent) => {
                                resetForm()
                                handleCancel()
                            }}
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
  )
}

CommitmentDetailsForm.defaultProps = {
    currentValue: {
        date: null,
        amount: null,
        mgmtValues: [],
        hurdle: '',
        hurdleCurrency: '',
        carryRate: 15,
        catchUp: '',
        contriOnFees: false,
        contriOnInvestment: false,
        contriOnOthers: false,
        contriOnFeesRemarks: '',
        contriOnInvestmentRemarks: '',
        contriOnOthersRemarks: '',
        effectiveDate: '',
    },
    handleSave: ()=> {console.log("Save Values")},
    handleCancel: ()=> {console.log("reset Form")}
}
export default CommitmentDetailsForm
