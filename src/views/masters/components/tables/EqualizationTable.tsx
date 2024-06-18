import React, { useState } from 'react'
import { Card, Select, Table, Dropdown } from '@/components/ui'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import TBody from '../../../../components/ui/Table/TBody'
import THead from '../../../../components/ui/Table/THead'
import Td from '../../../../components/ui/Table/Td'
import Th from '../../../../components/ui/Table/Th'
import Tr from '../../../../components/ui/Table/Tr'
import { equalizationData } from '@/data'
import {
    HiOutlineEye,
    HiOutlineMenuAlt4,
    HiOutlineMinusCircle,
    HiOutlineSearch,
} from 'react-icons/hi'

const EqualizationTable = ({ handleEdit }) => {
    const [searchValue, setSetSearchValue] = useState('')

    const filteredData = equalizationData.filter(
        (item) =>
            item.equalizationBasis.toLowerCase().includes(searchValue.toLowerCase()) 
    )
    const equalisationBasisOptions = [
        { value: 'annual', label: 'Annual Compounding' },
        { value: 'quarterly', label: 'Quarterly Compounding' },
        { value: 'halfYearly', label: 'Half Yearly Compounding' },
        { value: 'irr', label: 'IRR' },
        { value: 'simpleInterest', label: 'Simple Interest' },
    ]
    const equalisationCalenderDaysOptions = [
        { value: 360, label: '360 Days (Each month is of 30 days)' },
        { value: 365, label: '365 Days (Each month has actual days)' },
    ]

    const Toggle = (
        <Button size="xs" variant="twoTone">
            <HiOutlineMenuAlt4 />
        </Button>
    )
    return (
        <Card className="mt-4">
            <div className="flex sm:flex-row flex-col md:items-center justify-between mb-4 gap-4">
                <h5>Equalization</h5>
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
                        <Th>Equalization Basis</Th>
                        <Th>Equalization Calendar Days</Th>
                        {/* <Th>Action</Th> */}
                    </Tr>
                </THead>
                <TBody>
                    {(filteredData || [])?.map((i, index) => (
                        <Tr key={index}>
                            <Td>{equalisationBasisOptions.filter((item)=> item.value === i.equalizationBasis)[0].label}</Td>
                            <Td>{equalisationCalenderDaysOptions.filter((item)=> item.value === i.equalisationCalenderDays)[0].label}</Td>
                            {/* <Td>
                                <Dropdown
                                    placement="bottom-end"
                                    renderTitle={Toggle}
                                >
                                    <Dropdown.Item
                                        eventKey="a"
                                        onClick={() => handleEdit(i)}
                                    >
                                        Edit
                                    </Dropdown.Item>
                                </Dropdown>
                            </Td> */}
                        </Tr>
                    ))}
                </TBody>
            </Table>
        </Card>
    )
}

export default EqualizationTable
