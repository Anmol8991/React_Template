import React, { useState } from 'react'
import { Card, Select, Table, Dropdown } from '@/components/ui'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import TBody from '../../../../components/ui/Table/TBody'
import THead from '../../../../components/ui/Table/THead'
import Td from '../../../../components/ui/Table/Td'
import Th from '../../../../components/ui/Table/Th'
import Tr from '../../../../components/ui/Table/Tr'
import { allFunds } from '@/data'
import {
    HiOutlineEye,
    HiOutlineMenuAlt4,
    HiOutlineMinusCircle,
    HiOutlineSearch,
} from 'react-icons/hi'

type Option = {
    value: string
    label: string
}
const feeBasisOptions: Option[] = [
    { value: 'commitment', label: 'Commitment' },
    { value: 'computed amount', label: 'Computed Amount' },
    { value: 'undrawn commitment', label: 'Undrawn Commitment' },
    // { value: 'fixedFee', label: 'Fixed Fee' },
]

const FeeBasisTable = ({ handleEdit }) => {
    const [searchValue, setSetSearchValue] = useState('')

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
        <Card className="mt-4">
            <div className="flex sm:flex-row flex-col md:items-center justify-between mb-4 gap-4">
                <h5>Fee Basis</h5>
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
                        <Th>Name</Th>
                        <Th>Formula</Th>
                    </Tr>
                </THead>
                <TBody>
                    {(filteredData || [])?.map((i, index) => (
                        <Tr key={index} role='button' onClick={() => handleEdit(i)}>
                            <Td>{i.fundName}</Td>
                            <Td>{feeBasisOptions.filter((item) => item.value === i.type)[0].label }</Td>
                        </Tr>
                    ))}
                </TBody>
            </Table>
        </Card>
    )
}

export default FeeBasisTable
