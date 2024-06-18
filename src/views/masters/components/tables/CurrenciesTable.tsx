import React, { useState } from 'react'
import { Card, Select, Table, Dropdown } from '@/components/ui'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import TBody from '../../../../components/ui/Table/TBody'
import THead from '../../../../components/ui/Table/THead'
import Td from '../../../../components/ui/Table/Td'
import Th from '../../../../components/ui/Table/Th'
import Tr from '../../../../components/ui/Table/Tr'
import { currenciesData } from '@/data'
import {
    HiOutlineEye,
    HiOutlineMenuAlt4,
    HiOutlineMinusCircle,
    HiOutlineSearch,
} from 'react-icons/hi'

const options = [
    { value: 'rupees', label: 'Rupees' },
    { value: 'dollar', label: 'Dollar' },
    { value: 'pounds', label: 'Pounds' },
]

const options2 = [
    { value: 'code1', label: 'Code 1' },
    { value: 'code2', label: 'Code 2' },
    { value: 'code3', label: 'Code 3' },

]
const CurrenciesTable = ({ handleEdit }) => {
    const [searchValue, setSetSearchValue] = useState('')

    const filteredData = currenciesData.filter(
        (item) =>
            item.code.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.name
                .toLowerCase()
                .includes(searchValue.toLowerCase())
    )

    const Toggle = (
        <Button size="xs" variant="twoTone">
            <HiOutlineMenuAlt4 />
        </Button>
    )
    return (
        <Card className="mt-4">
            <div className="flex sm:flex-row flex-col md:items-center justify-between mb-4 gap-4">
                <h5>Currencies</h5>
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
                        <Th>Code</Th>
                        <Th>Name</Th>
                        <Th>Action</Th>
                    </Tr>
                </THead>
                <TBody>
                    {(filteredData || [])?.map((i, index) => (
                        <Tr key={index}>
                            <Td>{options2.filter((item)=>item.value === i.code)[0]?.label}</Td>
                            <Td>{options.filter((item)=>item.value === i.name)[0]?.label}</Td>
                            <Td>
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
                            </Td>
                        </Tr>
                    ))}
                </TBody>
            </Table>
        </Card>
    )
}

export default CurrenciesTable
