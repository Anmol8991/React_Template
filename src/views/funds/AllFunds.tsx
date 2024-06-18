import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { allFunds } from '@/data'
import type { MouseEvent } from 'react'
import CreateFund from './components/CreateFund'
import { notify } from '@/utils/commonHelper'
import { HiOutlineMenuAlt4, HiOutlineSearch } from 'react-icons/hi'
import { Button, Card, Dropdown, Input, Table } from '@/components/ui'
import Dialog from '@/components/ui/Dialog'
import THead from '@/components/ui/Table/THead'
import Tr from '@/components/ui/Table/Tr'
import Th from '@/components/ui/Table/Th'
import TBody from '@/components/ui/Table/TBody'
import Td from '@/components/ui/Table/Td'

interface FormModel {
    fundName: string
    legalEntityName: string
    startDate: Date | null
    endDate: Date | null
    fundLife: number
    launchDate: Date | null
    fundSize: number
}

const AllFunds = () => {
    const [searchValue, setSetSearchValue] = useState('')
    const [dialogIsOpen, setIsOpen] = useState(false)
    const [addFormValues, setAddFormValues] = useState<FormModel>({
        fundName: '',
        legalEntityName: '',
        startDate: null,
        endDate: null,
        fundLife: 0,
        launchDate: null,
        fundSize: 0,
    })
    const navigate = useNavigate()

    const openDialog = (e: MouseEvent) => {
        setIsOpen(true)
    }

    const onDialogClose = (e: MouseEvent) => {
        // console.log('onDialogClose', e)
        setIsOpen(false)
    }

    const handleAddFund = (e: MouseEvent) => {
        setAddFormValues({
            fundName: '',
            legalEntityName: '',
            startDate: null,
            endDate: null,
            fundLife: 0,
            launchDate: null,
            fundSize: 0,
        })
        openDialog(e)
    }

    const openDialogSave = (formValues: FormModel) => {
        setAddFormValues(formValues)
        console.log('FormValues: ', formValues)
        setIsOpen(false)
        notify('Funds Added Successfully!', true)
    }

    const filteredData = allFunds.filter(
        (item) =>
            item.fundName.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.legalEntityName
                .toLowerCase()
                .includes(searchValue.toLowerCase())
    )

    const Toggle = (
        <Button size="xs" variant="twoTone">
            <HiOutlineMenuAlt4 />
        </Button>
    )
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h3>Funds</h3>
                <Button variant="solid" onClick={handleAddFund}>
                    Add Fund
                </Button>
            </div>
            <Dialog
                isOpen={dialogIsOpen}
                width={window.innerWidth * 0.5}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
            >
                <div className={`max-h-100 overflow-y-auto`}>
                    <CreateFund
                        initialValues={addFormValues}
                        onHandleSave={openDialogSave}
                        onHandleCancel={onDialogClose}
                    />
                </div>
            </Dialog>
            <Card>
                <div className="flex sm:flex-row flex-col md:items-center justify-between mb-4 gap-4">
                    <h5>All Funds</h5>
                    <Input
                        className="max-w-md md:w-52"
                        size="sm"
                        placeholder="Search"
                        prefix={<HiOutlineSearch className="text-lg" />}
                        onChange={(e) => setSetSearchValue(e.target.value)}
                    />
                </div>              
                <Table>
                    <THead>
                        <Tr>
                            <Th>Fund Name</Th>
                            <Th>Legal Entity Name</Th>
                            <Th>Start Date</Th>
                            <Th>End Date</Th>
                            <Th>Fund Term</Th>
                            <Th>Launch Date</Th>
                            <Th>Fund Size</Th>
                            {/* <Th>Action</Th> */}
                        </Tr>
                    </THead>
                    <TBody>
                        {(filteredData || [])?.map((i, index) => (
                            <Tr key={index} 
                            role='button'
                            onClick={() =>navigate( `/funds/fundDetails/${index}`)}
                            >
                                <Td>{i.fundName}</Td>
                                <Td>{i.legalEntityName}</Td>
                                <Td>{i.startDate}</Td>
                                <Td>{i.endDate}</Td>
                                <Td>{i.fundLife}</Td>
                                <Td>{i.launchDate}</Td>
                                <Td>{i.fundSize}</Td>
                                {/* <Td>
                                   <Button size='xs' onClick={() =>navigate( `/funds/fundDetails/${index}`)}>View</Button>
                                </Td> */}
                            </Tr>
                        ))}
                    </TBody>
                </Table>
                
            </Card>
        </div>
    )
}

export default AllFunds
