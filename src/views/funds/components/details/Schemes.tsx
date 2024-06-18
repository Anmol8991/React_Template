import { Tabs } from '@/components/ui'
import React, { useState } from 'react'
import SchemeInfo from './schemes/SchemeInfo'
import SchemeDetails from './schemes/SchemeDetails'
import ManagementFee from './schemes/ManagementFee'
import Interests from './schemes/Interests'
import Equalisation from './schemes/Equalisation'
import DrawdownBasis from './schemes/DrawdownBasis'
import InvestorFundingType from './schemes/InvestorFundingType'
import BankDetails from './schemes/BankDetails'
import InvestmentRestrictions from './schemes/InvestmentRestrictions'
import AllocationKey from './schemes/AllocationKey'
import Units from './schemes/Units'
import ChartOfAccounts from './schemes/ChartOfAccounts'

const { TabNav, TabList, TabContent } = Tabs

const Schemes = () => {

    const addSchemesTabs = [
        {
            title: 'Scheme Info',
            key: 'schemeInfo',
            component: <SchemeInfo />,
        },
        {
            title: 'Scheme Details',
            key: 'schemeDetails',
            component: <SchemeDetails />,
        },
        {
            title: 'Management Fees',
            key: 'managementFees',
            component: <ManagementFee />,
        },
        {
            title: 'Carried Interests',
            key: 'carriedInterest',
            component: <Interests />,
        },
        {
            title: 'Equalisation',
            key: 'equalisation',
            component: <Equalisation />,
        },
        {
            title: 'Drawdown Basis',
            key: 'drawdownBasis',
            component: <DrawdownBasis />,
        },
        {
            title: 'Bank Details',
            key: 'bankDetails',
            component: <BankDetails />,
        },
        {
            title: 'Investment Restrictions',
            key: 'investmentRestrictions',
            component: <InvestmentRestrictions />,
        },
        {
            title: 'Units',
            key: 'units',
            component: <Units />,
        },
        {
            title: 'Chart of Accounts',
            key: 'chartOfAccounts',
            component: <ChartOfAccounts />,
        },
    ]

    return (
        <>
            <h3 className="mb-3">Fund ABC Schemes</h3>
            <div>
                <Tabs
                    defaultValue='schemeInfo'
                    variant="pill"
                    // value={addSchemesTabs[activeTab].key}
                >
                    <TabList className="flex-wrap ">
                        {addSchemesTabs.map((i) => (
                            <TabNav key={i.key} value={i.key}>
                                {i.title}
                            </TabNav>
                        ))}
                    </TabList>

                    <div className="py-4">
                        {addSchemesTabs.map((i) => (
                            <TabContent key={i.key} value={i.key}>
                                {i.component}
                            </TabContent>
                        ))}
                    </div>
                </Tabs>
            </div>
        </>
    )
}

export default Schemes
