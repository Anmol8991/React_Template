import { useState } from 'react'
import { allFunds } from '@/data'
import { useNavigate } from 'react-router-dom'
import { HiOutlineMenuAlt4, HiOutlineSearch } from 'react-icons/hi'
import { Button, Card, Dropdown, Input, Table } from '@/components/ui'
import THead from '@/components/ui/Table/THead'
import Tr from '@/components/ui/Table/Tr'
import Th from '@/components/ui/Table/Th'
import TBody from '@/components/ui/Table/TBody'
import Td from '@/components/ui/Table/Td'

const AllSchemesTable = () => {
    const [searchValue, setSetSearchValue] = useState('')
    const navigate = useNavigate()

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
        <Card>
            <div className="flex sm:flex-row flex-col md:items-center justify-between mb-4 gap-4">
                <h5>Schemes</h5>
                <div className="flex gap-4">
                    <Input
                        className="max-w-md md:w-52"
                        size="sm"
                        placeholder="Search"
                        prefix={<HiOutlineSearch className="text-lg" />}
                        onChange={(e) => setSetSearchValue(e.target.value)}
                    />
                    <Button
                        variant="solid"
                        size="sm"
                        onClick={() => navigate('/fund/scheme')}
                    >
                        Add Scheme
                    </Button>
                </div>
            </div>
            <>
                <Table>
                    <THead>
                        <Tr>
                            <Th>Legal Entity Name</Th>
                            <Th>Start Date</Th>
                            <Th>End Date</Th>
                            <Th>Extended Date</Th>
                            <Th>Equalization Effective Date</Th>
                            <Th>Fund Life</Th>
                            <Th>Launch Date</Th>
                            <Th>Transaction Currency</Th>
                            <Th>Reporting Currency</Th>
                            <Th>Fund Size</Th>
                            <Th>Hurdle Rate</Th>
                            <Th>Carry Rate</Th>
                            <Th>Catch Up</Th>
                            <Th>Fee Rate</Th>
                            <Th>Commitment Period</Th>
                            <Th>Reporting Period</Th>
                            {/* <Th>Action</Th> */}
                        </Tr>
                    </THead>
                    <TBody>
                        {(filteredData || [])?.map((i, index) => (
                            <Tr key={index} onClick={() => navigate(`/fund/scheme/${index}`)}>
                                <Td>{i.legalEntityName}</Td>
                                <Td>{i.startDate}</Td>
                                <Td>{i.endDate}</Td>
                                <Td>{i.endDate}</Td>
                                <Td>{i.endDate}</Td>
                                <Td>{i.fundLife}</Td>
                                <Td>{i.launchDate}</Td>
                                <Td>{i.fundSize}</Td>
                                <Td>{i.fundSize}</Td>
                                <Td>{i.fundSize}</Td>
                                <Td>{i.fundSize}</Td>
                                <Td>{i.fundSize}</Td>
                                <Td>{i.fundSize}</Td>
                                <Td>{i.fundSize}</Td>
                                <Td>{i.fundLife}</Td>
                                <Td>{i.fundLife}</Td>
                                {/* <Td>
                                    <Dropdown
                                        placement="bottom-end"
                                        renderTitle={Toggle}
                                    >
                                        <Dropdown.Item eventKey="a">
                                            View
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="a">
                                            Edit
                                        </Dropdown.Item>
                                    </Dropdown>
                                </Td> */}
                            </Tr>
                        ))}
                    </TBody>
                </Table>
            </>
        </Card>
    )
}

export default AllSchemesTable
