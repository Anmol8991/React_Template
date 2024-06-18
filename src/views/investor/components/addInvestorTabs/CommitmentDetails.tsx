import { useState, ChangeEvent } from 'react'
import Swal from 'sweetalert2'
import { notify } from '@/utils/commonHelper'
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
import {
    HiOutlineMenuAlt4,
    HiOutlineSearch,
    HiOutlinePlusCircle,
} from 'react-icons/hi'
import { Form, Field, FieldProps, Formik } from 'formik'
import type { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Dialog from '@/components/ui/Dialog'
import THead from '@/components/ui/Table/THead'
import Tr from '@/components/ui/Table/Tr'
import Th from '@/components/ui/Table/Th'
import TBody from '@/components/ui/Table/TBody'
import Td from '@/components/ui/Table/Td'
import AddCommitments from './AddCommitments'
import CommitmentDetailsForm from './CommitmentDetailsForm'
import Switcher from '@/components/ui/Switcher'

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

type CommitmentModel = {
    date: Date | null
    amount: number | null
    mgmtValues: MgmtFormModel[]
    hurdle: ''
    hurdleCurrency: ''
    carryRate: 15
    catchUp: ''
    contriOnFees: boolean
    contriOnInvestment: boolean
    contriOnOthers: boolean
    contriOnFeesRemarks: ''
    contriOnInvestmentRemarks: ''
    contriOnOthersRemarks: ''
    effectiveDate: ''
}

type Option = {
    value: string
    label: string
}

const CommitmentDetails = () => {
    const navigate = useNavigate()
    const [dialogIsOpenCommit, setIsOpenCommit] = useState(false)
    const [currentIndex, setCurrentIndex] = useState<number | null>()
    const [currentValue, setCurrentValue] = useState<CommitmentModel>({
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
    })

    const [commitmentValues, setCommitmentValues] = useState<CommitmentModel[]>([])

    const openDialogSaveCommit = (formValues: CommitmentModel) => {
        console.log('CommitmentDetailsForm Values: ', formValues)
        setIsOpenCommit(false)

        if (typeof currentIndex === 'number') {
            updateObjectAtIndexCommit(currentIndex, formValues)
        } else {
            const newArray = [...commitmentValues, formValues]
            setCommitmentValues(newArray)
        }
    }
    // Function to update an object at a specific index in the array
    const updateObjectAtIndexCommit = (
        index: number,
        newObject: CommitmentModel
    ) => {
        setCommitmentValues((prevState) => {
            const updatedArray = [...prevState]
            updatedArray[index] = newObject
            return updatedArray
        })
    }
    const handleAddNewCommit = (e: MouseEvent) => {
        setCurrentIndex(null)
        setCurrentValue({
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
        })
        setIsOpenCommit(true)
    }
    const handleEditCommit = (e: MouseEvent, index: number) => {
        setCurrentIndex(index)
        setCurrentValue(commitmentValues[index])
        setIsOpenCommit(true)
    }

    // // Function to update an object at a specific index in the array
    // const updateObjectAtIndex = (index: number, newObject: FormModel) => {
    //     setMgmtFeeValues((prevState) => {
    //         const updatedArray = [...prevState]
    //         updatedArray[index] = newObject
    //         return updatedArray
    //     })
    // }

    const handleSave = (values) => {
        // Send form values to backend
        console.log('values', values)
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


    const onSwitcherToggle = (val: boolean, e: ChangeEvent) => {
        console.log(val, e)
    }

    return (
        <>
            <div className="w-full">
            <Card className="mb-4">
                                        <div
                                            className={`flex items-center justify-between ${
                                                commitmentValues?.length > 0 &&
                                                'mb-4'
                                            }`}
                                        >
                                            <h5>Commitments</h5>
                                            {commitmentValues?.length === 0 && (
                                                <p>There is no Commitments</p>
                                            )}
                                            {dialogIsOpenCommit ? (
                                                <Button
                                                    type="button"
                                                    size="sm"
                                                    onClick={() =>
                                                        setIsOpenCommit(false)
                                                    }
                                                >
                                                    Cancel
                                                </Button>
                                            ) : (
                                                <Button
                                                    type="button"
                                                    size="sm"
                                                    icon={
                                                        <HiOutlinePlusCircle />
                                                    }
                                                    onClick={handleAddNewCommit}
                                                >
                                                    Add New
                                                </Button>
                                            )}
                                        </div>
                                        {dialogIsOpenCommit && (
                                            <Card className="mb-4 mt-4">
                                                <CommitmentDetailsForm
                                                    currentValue={currentValue}
                                                    handleSave={openDialogSaveCommit}
                                                    handleCancel={() =>setIsOpenCommit(false)}
                                                />
                                            </Card>
                                        )}

                                        {commitmentValues?.length > 0 && (
                                            <Table className="mb-20">
                                                <THead>
                                                    <Tr>
                                                        <Th>Sr. No.</Th>
                                                        <Th>Date</Th>
                                                        <Th>Amount</Th>
                                                        <Th>Action</Th>
                                                    </Tr>
                                                </THead>
                                                <TBody>
                                                    {commitmentValues.length >
                                                    0 ? (
                                                        commitmentValues.map(
                                                            (i, index) => (
                                                                <Tr key={index}>
                                                                    <Td>
                                                                        {index + 1}
                                                                    </Td>
                                                                    <Td>{`${formatDateToString(i.date)}`}</Td>
                                                                    <Td>
                                                                        {i.amount}
                                                                    </Td>
                                                                    <Td>
                                                                        <Dropdown
                                                                            placement="bottom-end"
                                                                            renderTitle={
                                                                                Toggle
                                                                            }
                                                                        >
                                                                            <Dropdown.Item
                                                                                eventKey="a"
                                                                                onClick={(
                                                                                    e: MouseEvent
                                                                                ) => {
                                                                                    setCurrentIndex(index)
                                                                                    handleEditCommit( e,index
                                                                                    )
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
                                                                                        (
                                                                                            result
                                                                                        ) => {
                                                                                            if (
                                                                                                result.isConfirmed
                                                                                            ) {
                                                                                                const newArray =
                                                                                                    [
                                                                                                        ...commitmentValues.slice(
                                                                                                            0,
                                                                                                            index
                                                                                                        ),
                                                                                                        ...commitmentValues.slice(
                                                                                                            index +
                                                                                                                1
                                                                                                        ),
                                                                                                    ]
                                                                                                setCommitmentValues(
                                                                                                    newArray
                                                                                                )
                                                                                                setCurrentValue(
                                                                                                    {
                                                                                                        date: null,
                                                                                                        amount: null,
                                                                                                        mgmtValues:
                                                                                                            [],
                                                                                                        hurdle: '',
                                                                                                        hurdleCurrency:
                                                                                                            '',
                                                                                                        carryRate: 15,
                                                                                                        catchUp:
                                                                                                            '',
                                                                                                        contriOnFees:
                                                                                                            false,
                                                                                                        contriOnInvestment:
                                                                                                            false,
                                                                                                        contriOnOthers:
                                                                                                            false,
                                                                                                        contriOnFeesRemarks:
                                                                                                            '',
                                                                                                        contriOnInvestmentRemarks:
                                                                                                            '',
                                                                                                        contriOnOthersRemarks:
                                                                                                            '',
                                                                                                        effectiveDate:
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
            <div className="w-full flex justify-end gap-4">
            <Button
                type="reset"
            >
                Cancel
            </Button>
            <Button variant="solid" type="submit">
                Save
            </Button>
        </div>
            </div>
        </>
    )
}

export default CommitmentDetails
