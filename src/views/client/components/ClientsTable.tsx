import { useState } from 'react'
import { clients } from '@/data'
import { Button, Card, Dropdown, Input, Table } from '../../../components/ui'
import TBody from '../../../components/ui/Table/TBody'
import THead from '../../../components/ui/Table/THead'
import Td from '../../../components/ui/Table/Td'
import Th from '../../../components/ui/Table/Th'
import Tr from '../../../components/ui/Table/Tr'
import {
    HiOutlineEye,
    HiOutlineMenuAlt4,
    HiOutlineMinusCircle,
    HiOutlineSearch,
} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const ClientsTable = () => {
    const [searchValue, setSetSearchValue] = useState('')
    const navigate = useNavigate()

    const filteredData = clients.filter(
        (item) =>
            item.clientId.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.organization.name
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
                <h5>Existing Clients</h5>
                <Input
                    className="max-w-md md:w-52"
                    size="sm"
                    placeholder="Search"
                    prefix={<HiOutlineSearch className="text-lg" />}
                    onChange={(e) => setSetSearchValue(e.target.value)}
                />
            </div>
            <>
                <Table>
                    <THead>
                        <Tr>
                            <Th>Client ID</Th>
                            <Th>Organization Name</Th>
                            <Th>Country</Th>
                            <Th>Subscription Type</Th>
                            <Th>Sub domain</Th>
                            <Th>AUM</Th>
                            <Th>Description</Th>
                            <Th>Action</Th>
                        </Tr>
                    </THead>
                    <TBody>
                        {(filteredData || [])?.map((i, index) => (
                            <Tr key={i.clientId}>
                                <Td>
                                    <span className="text-blue-600">#</span>
                                    {i.clientId}
                                </Td>
                                <Td>
                                    <span className="flex items-center gap-2">
                                        <img
                                            src={i.organization.img}
                                            className="w-6"
                                            alt=""
                                        />
                                        <span>{i.organization.name}</span>
                                    </span>
                                </Td>
                                <Td>{i.country}</Td>
                                <Td>
                                    <span
                                        className={`tag rounded ${
                                            i.subscriptionType === 'Plan-A'
                                                ? 'bg-emerald-100 text-emerald-600'
                                                : i.subscriptionType ===
                                                  'Plan-B'
                                                ? 'bg-violet-100 text-violet-600'
                                                : 'bg-amber-100 text-amber-600'
                                        }`}
                                    >
                                        {i.subscriptionType}
                                    </span>
                                </Td>
                                <Td>{i.subDomain}</Td>
                                <Td>{i.aum}</Td>
                                <Td className=" mx-auto max-w-xs text-ellipsis overflow-hidden truncate">
                                    {i.description}
                                </Td>
                                <Td>
                                    {' '}
                                    <Dropdown
                                        placement="bottom-end"
                                        renderTitle={Toggle}
                                    >
                                        <Dropdown.Item
                                            onClick={() =>
                                                navigate(
                                                    `/clients/clientDetail/${i.clientId}`
                                                )
                                            }
                                        >
                                            <span className="flex items-center gap-1 text-blue-600">
                                                <HiOutlineEye className="text-xl" />
                                                View
                                            </span>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <span className="flex items-center gap-1 text-amber-600">
                                                <HiOutlineMinusCircle className="text-xl" />
                                                Deactivate
                                            </span>
                                        </Dropdown.Item>
                                    </Dropdown>
                                </Td>
                            </Tr>
                        ))}
                    </TBody>
                </Table>
            </>
        </Card>
    )
}

export default ClientsTable
