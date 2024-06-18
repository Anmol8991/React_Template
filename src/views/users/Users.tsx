import { useState } from 'react'
import { usersData } from '@/data'
import { useNavigate } from 'react-router-dom'
import {
    HiOutlineEye,
    HiOutlineMenuAlt4,
    HiOutlineMinusCircle,
    HiOutlineSearch,
} from 'react-icons/hi'
import { Button, Card, Dropdown, Input, Table } from '@/components/ui'
import THead from '@/components/ui/Table/THead'
import Tr from '@/components/ui/Table/Tr'
import Th from '@/components/ui/Table/Th'
import TBody from '@/components/ui/Table/TBody'
import Td from '@/components/ui/Table/Td'

const Users = () => {
    const [searchValue, setSetSearchValue] = useState('')
    const navigate = useNavigate()

    const filteredData = usersData.filter(
        (item) =>
            item.id.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.email.toLowerCase().includes(searchValue.toLowerCase())
    )

    const Toggle = (
        <Button size="xs" variant="twoTone">
            <HiOutlineMenuAlt4 />
        </Button>
    )
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h3>Users</h3>
                <Button
                    variant="solid"
                    onClick={() => navigate('/users/addUser')}
                >
                    Add User
                </Button>
            </div>
            <Card>
                <div className="flex sm:flex-row flex-col md:items-center justify-between mb-4 gap-4">
                    <h5>Existing Users</h5>
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
                                <Th>User ID</Th>
                                <Th>Name</Th>
                                <Th>E-Mail</Th>
                                <Th>Role</Th>
                                <Th>Status</Th>
                                <Th>Action</Th>
                            </Tr>
                        </THead>
                        <TBody>
                            {(filteredData || [])?.map((i) => (
                                <Tr key={i.id}>
                                    <Td>
                                        <span className="text-blue-600">#</span>
                                        {i.id}
                                    </Td>
                                    <Td>
                                        <span className="flex items-center gap-2">
                                            {/* <img
                                            src={i.img}
                                            className="w-6"
                                            alt=""
                                        /> */}
                                            <span>{i.name}</span>
                                        </span>
                                    </Td>
                                    <Td>{i.email}</Td>
                                    <Td>
                                        <span
                                            className={`tag rounded ${
                                                i.role === 'ADMIN'
                                                    ? 'bg-emerald-100 text-emerald-600'
                                                    : i.role === 'INITIATOR'
                                                    ? 'bg-violet-100 text-violet-600'
                                                    : i.role === 'APPROVER'
                                                    ? 'bg-blue-100 text-blue-600'
                                                    : 'bg-amber-100 text-amber-600'
                                            }`}
                                        >
                                            {i.role}
                                        </span>
                                    </Td>
                                    <Td>
                                        {' '}
                                        <span
                                            className={`tag rounded ${
                                                i.status === 'ACTIVE'
                                                    ? 'bg-blue-100 text-blue-600'
                                                    : 'bg-stone-100 text-stone-600'
                                            }`}
                                        >
                                            {i.status}
                                        </span>
                                    </Td>

                                    <Td>
                                        <Dropdown
                                            placement="bottom-end"
                                            renderTitle={Toggle}
                                        >
                                            <Dropdown.Item
                                                onClick={() =>
                                                    navigate(
                                                        `/users/userDetails/${i.id}`
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
        </div>
    )
}

export default Users
