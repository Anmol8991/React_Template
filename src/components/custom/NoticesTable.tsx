import { useState } from 'react'

import { HiOutlineSearch } from 'react-icons/hi'

import { notices } from '@/data'
import { Card, Input, Table } from '../ui'
import TBody from '../ui/Table/TBody'
import THead from '../ui/Table/THead'
import Td from '../ui/Table/Td'
import Th from '../ui/Table/Th'
import Tr from '../ui/Table/Tr'

const NoticesTable = () => {
    const [searchValue, setSetSearchValue] = useState('')

    const filteredData = notices.filter(
        (item) =>
            item.id.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.status.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.noticeType.toLowerCase().includes(searchValue.toLowerCase())
    )

    return (
        <Card>
            <div className="flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4">
                <h5>Issued Notices</h5>
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
                            <Th>Notice ID</Th>
                            <Th>Notice Type</Th>
                            <Th>Status</Th>
                            <Th>Amount</Th>
                            <Th>Creation Date</Th>
                            <Th>Attachment</Th>
                        </Tr>
                    </THead>
                    <TBody>
                        {(filteredData || [])?.map((i) => (
                            <Tr key={i.id}>
                                <Td>{i.id}</Td>
                                <Td>
                                    <span
                                        className={
                                            i.noticeType === 'Distribution'
                                                ? 'tag rounded bg-violet-100 text-violet-600'
                                                : 'tag rounded bg-amber-100 text-amber-600'
                                        }
                                    >
                                        {i.noticeType}
                                    </span>
                                </Td>
                                <Td>
                                    <span
                                        className={
                                            i.status === 'Inprogress'
                                                ? 'tag rounded bg-emerald-100 text-emerald-600'
                                                : i.status === 'Finished'
                                                ? 'tag rounded bg-blue-100 text-blue-600'
                                                : 'tag rounded bg-stone-100 text-stone-600'
                                        }
                                    >
                                        {i.status}
                                    </span>
                                </Td>
                                <Td>{i.amount}</Td>
                                <Td>{i.creationDate}</Td>
                                <Td>
                                    <span className="text-indigo-600 cursor-pointer select-none font-semibold">
                                        View
                                    </span>
                                </Td>
                            </Tr>
                        ))}
                    </TBody>
                </Table>
            </>
        </Card>
    )
}

export default NoticesTable
