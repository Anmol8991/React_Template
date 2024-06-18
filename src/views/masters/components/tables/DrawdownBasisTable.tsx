import React, { useState } from 'react'
import { Card, Select, Table, Dropdown } from '@/components/ui'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import TBody from '../../../../components/ui/Table/TBody'
import THead from '../../../../components/ui/Table/THead'
import Td from '../../../../components/ui/Table/Td'
import Th from '../../../../components/ui/Table/Th'
import Tr from '../../../../components/ui/Table/Tr'
import { drawdownBasisData } from '@/data'
import {
    HiOutlineEye,
    HiOutlineMenuAlt4,
    HiOutlineMinusCircle,
    HiOutlineSearch,
} from 'react-icons/hi'

const DrawdownBasisTable = ({ handleEdit }) => {
    const [searchValue, setSetSearchValue] = useState('')

    const filteredData = drawdownBasisData.filter(
        (item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.type
                .toLowerCase()
                .includes(searchValue.toLowerCase())
    )
    const commitmentTypeOptions = [
        { value: 'commitment', label: 'Commitment' },
        { value: 'undrawnCommitment', label: 'Undrawn Commitment' },
    ]

    const Toggle = (
        <Button size="xs" variant="twoTone">
            <HiOutlineMenuAlt4 />
        </Button>
    )
    return (
        <Card className="mt-4">
            <div className="flex sm:flex-row flex-col md:items-center justify-between mb-4 gap-4">
                <h5>Drawdown Basis</h5>
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
                        <Th>Type</Th>
                        {/* <Th>Action</Th> */}
                    </Tr>
                </THead>
                <TBody>
                    {(filteredData || [])?.map((i, index) => (
                        <Tr key={index}>
                            <Td>{i.name}</Td>
                            <Td>{commitmentTypeOptions.filter((item) => item.value === i.type)[0]?.label}</Td>
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

export default DrawdownBasisTable
