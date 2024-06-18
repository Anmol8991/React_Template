import NoticesTable from '@/components/custom/NoticesTable'
import { Button } from '@/components/ui'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const Notices = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-4'>
    <div className='flex items-center justify-between'>
        <h3>Notices</h3>
        <Button variant='solid' onClick={()=> navigate('/newNotices')} >Create New</Button>
    </div>
    <NoticesTable />
</div>
  )
}

export default Notices