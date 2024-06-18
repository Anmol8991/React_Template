import { Alert, Button, Input } from '@/components/ui'
import { apiUpdateRole } from '@/services/admin.api'
import { notify } from '@/utils/commonHelper'
import { useApi } from '@/utils/hooks/useApi'
import React, { useState } from 'react'

const UpdateRole = ({ close, roleData }) => {
    const [inputValue, setInputValue] = useState(roleData ? roleData?.name : '')

    const { mutate, error, isError, isLoading } = useApi(apiUpdateRole, {
        onSuccess: (response) => {
            console.log('Response: ', response)
            if (response?.data?.success) {
                notify(response?.data?.message, true)
            } else {
                notify(response?.data?.message, false)
            }

            close()
        },
        onError: (error) => {
            notify(error?.response?.data?.message, false)
        },
    })

    const handleClick = (e: React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('role_id', roleData.id)
        formData.append('role_name', inputValue)
        const payload = {
            role_id: roleData.id,
            role_name: inputValue,
        }
        mutate(payload)
    }
    return (
        <div>
            <h4 className="mb-6">Update Role</h4>
            {isError && (
                <Alert showIcon className="mb-4" type="danger">
                    <>{(error as any)?.response?.data?.data?.role_name?.[0]}</>
                </Alert>
            )}
            <form action="" className="flex flex-col gap-4">
                <Input
                    type="text"
                    name="role"
                    value={inputValue}
                    placeholder="Enter Role Name"
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <div className="w-full flex justify-end gap-4">
                    <Button
                        size="sm"
                        onClick={(e) => {
                            e.preventDefault()
                            close()
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        size="sm"
                        variant="solid"
                        loading={isLoading}
                        onClick={handleClick}
                    >
                        {isLoading ? 'Updating' : 'Update'}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default UpdateRole
