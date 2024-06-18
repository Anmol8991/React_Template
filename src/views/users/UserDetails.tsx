import React, { useState } from 'react'
import { Card } from '@/components/ui'
import Button from '@/components/ui/Button'
import { HiOutlinePencil } from 'react-icons/hi'
import { usersData } from '@/data'
import UserForm from './UserForm'


const UserDetails = () => {
    const [isEditable, setIsEditable] = useState(false)


  const currentValue = usersData[0];
 const initialData = {
    
    name: currentValue.name,
    email: currentValue.email,
    role: currentValue.role,
    client: "client1"
}
const handleCancel = () => {
    setIsEditable(false)
}
    return (
        <Card>
            <div className="flex justify-between mb-4">
                <h5>User Details</h5>
                <Button
                    disabled={isEditable}
                    size="sm"
                    icon={<HiOutlinePencil />}
                    onClick={() => setIsEditable(!isEditable)}
                    >
                        <span>Edit</span>
                    </Button>
            </div>
            <UserForm
                type={isEditable}
                setType={handleCancel}
                initialData={initialData}
            />
        </Card>
    )
}

export default UserDetails
