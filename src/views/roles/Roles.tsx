import React from 'react'
import AddRole from './components/AddRole'
import RolesTable from './components/RolesTable'

const Roles = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <AddRole />
            <RolesTable />
        </div>
    )
}

export default Roles
