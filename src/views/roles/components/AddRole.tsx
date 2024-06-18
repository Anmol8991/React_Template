import { Button, Card, Input } from '@/components/ui'
import React, { useState } from 'react'
import { useApi } from '@/utils/hooks/useApi'

import Alert from '@/components/ui/Alert'
import { notify } from '@/utils/commonHelper'
import { apiAddRole } from '@/services/admin.api'

const AddRole = () => {
    const [inputValue, setInputValue] = useState('')

    const { mutateAsync, error, isError, isLoading, reset, data } = useApi(
        apiAddRole,
        {
            onSuccess: (data) => {
                notify(data?.response?.data?.message, true)
            },
            onError: (error) => {
                notify(error?.response?.data?.message, false)
            },
        }
    )

    const handleClick = async (e: React.FormEvent) => {
        e.preventDefault()

        await mutateAsync({ role_name: inputValue })
    }
    return (
        <Card>
            <h4 className="mb-6">Add Role</h4>
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
                            setInputValue('')
                            reset()
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
                        {isLoading ? 'Submitting.....' : 'Submit'}
                    </Button>
                </div>
                {isError && (
                    <Alert showIcon className="mb-4" type="danger">
                        <>
                            {
                                (error as any)?.response?.data?.data
                                    ?.role_name?.[0]
                            }
                        </>
                    </Alert>
                )}
                {data?.data?.success && (
                    <Alert showIcon className="mb-4" type="success">
                        <>{data?.data?.message}</>
                    </Alert>
                )}
            </form>
        </Card>
    )
}

export default AddRole
