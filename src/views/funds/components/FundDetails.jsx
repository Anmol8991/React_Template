import React, { useState } from 'react'
import { Card, Select } from '@/components/ui'
import Button from '@/components/ui/Button'
import { useLocation, useNavigate } from 'react-router-dom'
import Details from './details/Details'
import AllSchemesTable from './details/AllSchemesTable'
import { HiOutlinePencil } from 'react-icons/hi'
import { allFunds } from '@/data'

const FundDetails = () => {
    const [isEditable, setIsEditable] = useState(false)
    const location = useLocation()
    const index = parseInt(
        location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
    )

    const currentFund = allFunds.filter((item, i) => i === index)

    return (
        <div>
            <Card
                id="feeBasis"
                bodyClass="w-full"
                className="mb-4"
            >
                <div >
                    <div className="flex justify-between mb-4">
                        <h5>Fund Details</h5>
                        <Button
                                disabled={isEditable}
                                size="sm"
                                icon={<HiOutlinePencil />}
                                onClick={() => setIsEditable(!isEditable)}
                            >
                                <span>Edit</span>
                            </Button>
                    </div>
                    <Details
                        data={currentFund[0]}
                        editable={isEditable}
                        setEditable={setIsEditable}
                    ></Details>
                </div>
            </Card>

            <div className="flex flex-col gap-4">
                {/* <div className="flex items-center justify-between">
                    <h5>Schemes</h5>
                    <Button
                        variant="solid"
                        size="sm"
                        onClick={() => navigate('/fund/scheme')}
                    >
                        Add Scheme
                    </Button>
                </div> */}
                <AllSchemesTable />
            </div>
        </div>
    )
}

export default FundDetails
