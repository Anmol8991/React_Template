import InvestorsTable from '@/views/investor/components/InvestorsTable'
import PageTitle from '@/components/ui/PageTitle'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui'

import React from 'react'

const Investors = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h3>Investors</h3>
                <Button
                    variant="solid"
                    onClick={() => navigate('/investors/addInvestors')}
                >
                    Add Investor
                </Button>
            </div>

            <InvestorsTable />
        </div>
    )
}

export default Investors
