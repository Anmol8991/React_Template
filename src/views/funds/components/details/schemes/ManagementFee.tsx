import { useState } from 'react'
import Swal from 'sweetalert2'
import { notify } from '@/utils/commonHelper'
import { Button, Card, Table, Dropdown } from '@/components/ui'
import { HiOutlineMenuAlt4, HiOutlinePlusCircle } from 'react-icons/hi'
import type { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import Dialog from '@/components/ui/Dialog'
import THead from '@/components/ui/Table/THead'
import Tr from '@/components/ui/Table/Tr'
import Th from '@/components/ui/Table/Th'
import TBody from '@/components/ui/Table/TBody'
import Td from '@/components/ui/Table/Td'
import AddMgmtFee from '../../../../../components/custom/AddMgmtFee'

type FormModel = {
    startDate: Date | null
    endDate: Date | null
    rate: number | null
    taxRate: number | null
    fixedFee: null
    feeBasis: string
    feeFrequency: string
    calendarType: string
}

const ManagementFee = () => {
    const navigate = useNavigate()
    // const [searchValue, setSetSearchValue] = useState('')
    const [mgmtFeeValues, setMgmtFeeValues] = useState<FormModel[]>([])
    const [dialogIsOpen, setIsOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState<number | null>()

    const [currentValue, setCurrentValue] = useState<FormModel>({
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
    const openDialogSave = (formValues: FormModel) => {
        console.log('FormValues: ', formValues)
        setIsOpen(false)

        if (typeof currentIndex === 'number') {
            updateObjectAtIndex(currentIndex, formValues)
        } else {
            const newArray = [...mgmtFeeValues, formValues]
            setMgmtFeeValues(newArray)
        }
    }
    // Function to update an object at a specific index in the array
    const updateObjectAtIndex = (index: number, newObject: FormModel) => {
        setMgmtFeeValues((prevState) => {
            const updatedArray = [...prevState]
            updatedArray[index] = newObject
            return updatedArray
        })
    }

    const handleAddNew = (e: MouseEvent) => {
        setCurrentIndex(null)
        setCurrentValue({
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
        setCurrentValue(mgmtFeeValues[index])
        openDialog(e)
    }

    const handleSave = () => {
        console.log('All forms to be submitted: ', mgmtFeeValues)
        
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

    return (
        <>
            <div className="flex flex-col gap-4">
                <Card className="min-h-52">
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
                                currentValue={currentValue}
                                handleSave={openDialogSave}
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
                                                                        setCurrentValue(
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
            </div>
            <div className="w-full flex justify-end gap-4 mt-2">
                <Button variant="solid" type="submit" onClick={handleSave}>
                    Save
                </Button>
            </div>
        </>
    )
}

export default ManagementFee
