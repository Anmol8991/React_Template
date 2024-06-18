import { Button, Card, FormContainer, FormItem, Select } from '@/components/ui'
const roleOptions = [
    { value: 'manager', label: 'Manager' },
    { value: 'initiator', label: 'Initiator' },
    { value: 'approver', label: 'Approver' },
    { value: 'investor', label: 'Investor' },
]
const usersOptions = [
    { value: 'user1', label: 'Cory Lewis' },
    { value: 'user2', label: 'Sophie Copeland' },
    { value: 'user3', label: 'Minnie Mitchell' },
    { value: 'user4', label: 'Louise Love' },
]
const AuthSelector = ({ role, setRole, user, setUser }) => {
  
    return (
        <Card>
            <FormContainer className="w-full flex items-center justify-evenly lg:gap-4 flex-col lg:flex-row">
                <FormItem label="Role" className="flex-1 w-full">
                    <Select
                        isMulti
                        placeholder="Please select a role"
                        className="w-full flex-1"
                        options={roleOptions}
                        value={role}
                        onChange={(e) => setRole(e)}
                    />
                </FormItem>
                <FormItem label="User" className="flex-1 w-full">
                    <Select
                        isMulti
                        isDisabled={role?.length <= 0}
                        placeholder="Please select a user"
                        className="w-full flex-1"
                        options={usersOptions}
                        value={user}
                        onChange={(e) => setUser(e)}
                    />
                </FormItem>
                <Button variant="solid">Save Changes</Button>
            </FormContainer>
        </Card>
    )
}

export default AuthSelector
