import { Button, Card, Input, Table, Dropdown } from '../../../components/ui'
import THead from '../../../components/ui/Table/THead'
import Tr from '../../../components/ui/Table/Tr'
import Th from '../../../components/ui/Table/Th'
import TBody from '../../../components/ui/Table/TBody'
import Td from '../../../components/ui/Table/Td'
import { investors } from '@/data'
import { useState } from 'react'
import { HiOutlineMenuAlt4, HiOutlineSearch } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const InvestorsTable = () => {
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()

    const filteredData = investors.filter(
        (item) =>
            item.scheme.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.folio.toLowerCase().includes(searchValue.toLowerCase())
    )
    const Toggle = (
        <Button size="xs" variant="twoTone">
            <HiOutlineMenuAlt4 />
        </Button>
    )
    return (
        <Card>
            <div className="flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4">
                <Input
                    className="max-w-md md:w-52"
                    size="sm"
                    placeholder="Search"
                    prefix={<HiOutlineSearch className="text-lg" />}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
            <Table>
                <THead>
                    <Tr>
                        <Th>Scheme</Th>
                        <Th>Investor Folio</Th>
                        <Th>Start Date</Th>
                        <Th>End Date</Th>
                        <Th>Country</Th>
                        <Th>Ratio</Th>
                        <Th>Type</Th>
                        {/* <Th>Action</Th> */}

                    </Tr>
                </THead>
                <TBody>
                    {(filteredData || [])?.map((i, index) => (
                        <Tr key={index} role='button' onClick={() =>
                            navigate(`/investors/${index}`)
                        }>
                            <Td>{i.scheme}</Td>
                            <Td>{i.folio}</Td>
                            <Td>{i.startDate}</Td>
                            <Td>{i.endDate}</Td>
                            <Td>{i.country}</Td>
                            <Td>{i.ratio}</Td>
                            <Td>{i.type}</Td>
                            {/* <Td>
                                <Dropdown
                                    placement="bottom-end"
                                    renderTitle={Toggle}
                                >
                                    <Dropdown.Item
                                        eventKey="a"
                                        onClick={() =>
                                            navigate('/investors/123')
                                        }
                                    >
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
        </Card>
    )
}

export default InvestorsTable
