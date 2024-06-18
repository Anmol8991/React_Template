import { Card } from '@/components/ui'
import UserForm from './UserForm'

function AddUser() {

    return (
        <Card>
            <div className='flex flex-col gap-4'>
                <h5>Add User</h5>
                <UserForm />
            </div>
        </Card>
    )
}

export default AddUser
