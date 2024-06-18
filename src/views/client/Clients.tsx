import ClientsTable from '@/views/client/components/ClientsTable'
import { Button } from '@/components/ui'
import { useNavigate } from "react-router-dom";
import React from 'react'

const Clients = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
                <h3>Clients</h3>
                <Button variant='solid' onClick={()=> navigate("/clients/addClient")} >Add Client</Button>
            </div>
            <ClientsTable />
        </div>
    )
}

export default Clients
