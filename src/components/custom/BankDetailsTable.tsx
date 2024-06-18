import { useState } from 'react'
import Swal from 'sweetalert2'
import { notify } from '@/utils/commonHelper'
import { Button, Card, Table, Dropdown, FormItem, FormContainer} from '@/components/ui'
import { HiOutlineMenuAlt4, HiOutlinePlusCircle } from 'react-icons/hi'
import type { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Dialog from '@/components/ui/Dialog'
import THead from '@/components/ui/Table/THead'
import Tr from '@/components/ui/Table/Tr'
import Th from '@/components/ui/Table/Th'
import TBody from '@/components/ui/Table/TBody'
import Td from '@/components/ui/Table/Td'
import { Form, Field, FieldProps, Formik } from 'formik'
import BankDetailsForm from '@/components/custom/BankDetailsForm'

type FormModel = {
    beneficiaryName: string
    bank: string
    bankBranch: string
    accountNumber: number
    iban: string
    beneficiarySwiftCode: string
    beneficiaryIfscCode: string
    correspondentBank: string
    correspondentBankBranch: string
    correspondentAccountNumber: number
    correspondentIban: string
    correspondentSwiftCode: string
    correspondentIfscCode: string
    defaultForNotices: boolean
}

const BankDetailsTable = () => {
    const navigate = useNavigate()
    // const [searchValue, setSetSearchValue] = useState('')
    const [bankDetailsValues, setBankDetailsValues] = useState<FormModel[]>([])
    const [dialogIsOpen, setIsOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState<number | null>()

    const [currentValue, setCurrentValue] = useState<FormModel>({
        beneficiaryName: '',
        bank: '',
        bankBranch: '',
        accountNumber: null,
        iban: '',
        beneficiarySwiftCode: '',
        beneficiaryIfscCode: '',
        correspondentBank: '',
        correspondentBankBranch: '',
        correspondentAccountNumber: null,
        correspondentIban: '',
        correspondentSwiftCode: '',
        correspondentIfscCode: '',
        defaultForNotices: false,
    })

    const openDialog = (e: MouseEvent) => {
        setIsOpen(true)
    }

    const onDialogClose = (e: MouseEvent) => {
        // console.log('onDialogClose', e)
        setIsOpen(false)
    }
    const openDialogSave = (formValues: FormModel) => {
        console.log('FormValues: ', formValues)
        setIsOpen(false)

        if (typeof currentIndex === 'number') {
            updateObjectAtIndex(currentIndex, formValues)
        } else {
            const newArray = [...bankDetailsValues, formValues]
            setBankDetailsValues(newArray)
        }
    }
    // Function to update an object at a specific index in the array
    const updateObjectAtIndex = (index: number, newObject: FormModel) => {
        setBankDetailsValues((prevState) => {
            const updatedArray = [...prevState]
            updatedArray[index] = newObject
            return updatedArray
        })
    }

    const handleAddNew = (e: MouseEvent) => {
        setCurrentIndex(null)
        setCurrentValue({
            beneficiaryName: '',
            bank: '',
            bankBranch: '',
            accountNumber: null,
            iban: '',
            beneficiarySwiftCode: '',
            beneficiaryIfscCode: '',
            correspondentBank: '',
            correspondentBankBranch: '',
            correspondentAccountNumber: null,
            correspondentIban: '',
            correspondentSwiftCode: '',
            correspondentIfscCode: '',
            defaultForNotices: false
        })
        openDialog(e)
    }

    const handleEdit = (e: MouseEvent, index: number) => {
        setCurrentIndex(index)
        setCurrentValue(bankDetailsValues[index])
        openDialog(e)
    }

    const handleSave = () => {
        console.log('All forms to be submitted: ', bankDetailsValues)
        
    }
    const Toggle = (
        <Button size="xs" variant="twoTone">
            <HiOutlineMenuAlt4 />
        </Button>
    )
    const validationSchema = Yup.object().shape({
        bankDetails: Yup.array()
            .min(1, 'Array must have at least one element')
            .required('Array field is required'),
    })

    return (
        <div className="w-full">
            <Formik
                enableReinitialize
                initialValues={{
                    bankDetails: []
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('values', values)
                    notify('Bank Details added succesfully', true)
                    
                }}
            >
                {({ values, touched, errors, resetForm }) => (
                    <Form>
                        <FormContainer>
                            <FormItem
                                    invalid={
                                        errors.bankDetails &&
                                        touched.bankDetails
                                    }
                                    errorMessage={errors.bankDetails}
                                >
                                    <Card>
                                        <div
                                            className={`flex items-center justify-between ${
                                                bankDetailsValues?.length > 0 &&
                                                'mb-4'
                                            }`}
                                        >
                                            <h5>Bank Details</h5>
                                            {bankDetailsValues?.length === 0 && (
                                                <p>There are no Bank Details</p>
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
                                            width={window.innerWidth}
                                            height={window.innerHeight*0.8}
                                            onClose={onDialogClose}
                                            onRequestClose={onDialogClose}
                                        >
                                            <div className="flex flex-col h-full justify-between">
                                            <div className={`overflow-y-auto`}>
                                                <BankDetailsForm
                                                    currentValue={currentValue}
                                                    handleSave={openDialogSave}
                                                    handleCancel={onDialogClose}
                                                />
                                            </div>
                                            </div>
                                            
                                        </Dialog>

                                        {bankDetailsValues?.length > 0 && (
                                            <Table className="mb-20">
                                                <THead>
                                                    <Tr>
                                                        <Th>Beneficiary Name</Th>
                                                        <Th>Beneficiary Bank</Th>
                                                        <Th>Beneficiary Account Number</Th>
                                                        <Th>Correspondent Bank</Th>
                                                        <Th>Correspondent Account Number</Th>

                                                        <Th>Action</Th>
                                                    </Tr>
                                                </THead>
                                                <TBody>
                                                    {bankDetailsValues.length >
                                                    0 ? (
                                                        bankDetailsValues.map(
                                                            (i, index) => (
                                                                <Tr key={index}>
                                                                    <Td>{i.beneficiaryName}</Td>
                                                                    <Td>{i.bank}</Td>
                                                                    <Td>{i.accountNumber}</Td>
                                                                    <Td>{i.correspondentBank}</Td>
                                                                    <Td>{i.correspondentAccountNumber}</Td>
                                                                    <Td>
                                                                        <Dropdown
                                                                            placement="bottom-end"
                                                                            renderTitle={Toggle}
                                                                        >
                                                                            <Dropdown.Item
                                                                                eventKey="a"
                                                                                onClick={(e: MouseEvent) => {
                                                                                    setCurrentIndex(index)
                                                                                    handleEdit(e,index)
                                                                                }}
                                                                            >
                                                                                Edit
                                                                            </Dropdown.Item>
                                                                            <Dropdown.Item
                                                                                eventKey="a"
                                                                                onClick={() => {
                                                                                    Swal.fire(
                                                                                        {
                                                                                            title: 'Delete',
                                                                                            text: `Are you sure you want to delete?`,
                                                                                            icon: 'warning',
                                                                                            confirmButtonText:
                                                                                                'Delete',
                                                                                            showCancelButton:
                                                                                                true,
                                                                                        }
                                                                                    ).then(
                                                                                        (result) => {
                                                                                            if (result.isConfirmed) {
                                                                                                const newArray =
                                                                                                    [
                                                                                                        ...bankDetailsValues.slice(0,index),
                                                                                                        ...bankDetailsValues.slice(index + 1),
                                                                                                    ]
                                                                                                    setBankDetailsValues(newArray)
                                                                                                setCurrentValue(
                                                                                                    {
                                                                                                        beneficiaryName: '',
                                                                                                        bank: '',
                                                                                                        bankBranch: '',
                                                                                                        accountNumber: null,
                                                                                                        iban: '',
                                                                                                        beneficiarySwiftCode: '',
                                                                                                        beneficiaryIfscCode: '',
                                                                                                        correspondentBank: '',
                                                                                                        correspondentBankBranch: '',
                                                                                                        correspondentAccountNumber: null,
                                                                                                        correspondentIban: '',
                                                                                                        correspondentSwiftCode: '',
                                                                                                        correspondentIfscCode: '',
                                                                                                        defaultForNotices: false,
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
                                                            )
                                                        )
                                                    ) : (
                                                        <div className="d-flex justify-center mt-2">
                                                            <p className="text-center">
                                                                No Commitments
                                                            </p>
                                                        </div>
                                                    )}
                                                </TBody>
                                            </Table>
                                        )}
                                    </Card>
                                </FormItem>
                           
                            <FormItem>
                                <div className="w-full flex justify-end gap-4">
                                    <Button
                                        type="reset"
                                        onClick={() => {
                                            resetForm()
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

export default BankDetailsTable