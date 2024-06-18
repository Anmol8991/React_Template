import { useState } from 'react'
import Swal from 'sweetalert2'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { Alert, Button, Card, Dialog, Dropdown, Table } from '@/components/ui'
import THead from '@/components/ui/Table/THead'
import Tr from '@/components/ui/Table/Tr'
import Th from '@/components/ui/Table/Th'
import TBody from '@/components/ui/Table/TBody'
import Td from '@/components/ui/Table/Td'
import { useApi, useGetApi } from '@/utils/hooks/useApi'
import { notify } from '@/utils/commonHelper'
import UpdateRole from './UpdateRole'
import { apiDeleteRole, apiRoleList } from '@/services/admin.api'
import Loading from '@/components/shared/Loading'

const RolesTable = () => {
    const [dialogIsOpen, setIsOpen] = useState({
        open: false,
        data: null,
    })
    // const [roleList, setRoleList ] = useState([])

    const { data, isLoading, isSuccess } = useGetApi('getRoles', apiRoleList, {
        onError: (err) => {
            console.log(err)
            notify(err.response.data.message, false)
        },
    })

    const deleteApi = useApi(apiDeleteRole, {
        onSuccess: (response) => {
            console.log('Data: ', response)
            notify(response.data?.message, true)
        },
        onError: (err) => {
            console.log(err)
            notify(err.response.data.message, false)
        },
    })
    const Toggle = (
        <Button size="xs" variant="twoTone">
            <HiOutlineMenuAlt4 />
        </Button>
    )

    const handleDelete = (id, role) => {
        console.log('delete')
        Swal.fire({
            title: 'Delete',
            text: `Are you sure you want to delete ${role} role?`,
            icon: 'warning',
            confirmButtonText: 'Delete',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                const formData = new FormData()
                formData.append('role_id', id)
                deleteApi.mutate(formData)
            }
        })
    }

    const openDialog = (data) => {
        setIsOpen({
            open: true,
            data,
        })
    }

    const onDialogClose = () => {
        setIsOpen({
            open: false,
            data: null,
        })
    }

    return (
        <>
            <Dialog
                isOpen={dialogIsOpen.open}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
            >
                <UpdateRole
                    close={onDialogClose}
                    roleData={dialogIsOpen.data}
                />
            </Dialog>
            <Card>
                <div className="flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4">
                    <h4>Roles</h4>
                </div>
                <>
                    <Loading loading={isLoading} />
                    {isSuccess && (
                        <Table>
                        <THead>
                            <Tr>
                                <Th>S.No</Th>
                                <Th>Role Name</Th>
                                <Th>Action</Th>
                            </Tr>
                        </THead>
                        <TBody>
                            {(data?.data?.data || [])?.map((i, index) => (
                                <Tr key={i.id}>
                                    <Td>{index + 1}</Td>
                                    <Td>{i.name}</Td>

                                    <Td>
                                        {' '}
                                        <Dropdown
                                            placement="bottom-end"
                                            renderTitle={Toggle}
                                        >
                                            <Dropdown.Item
                                                eventKey="a"
                                                onClick={() => openDialog(i)}
                                            >
                                                Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                eventKey="b"
                                                onClick={() =>
                                                    handleDelete(i.id, i.role)
                                                }
                                            >
                                                Delete
                                            </Dropdown.Item>
                                        </Dropdown>
                                    </Td>
                                </Tr>
                            ))}
                        </TBody>
                    </Table>
                    )}
                </>
            </Card>
        </>
    )
}

export default RolesTable
