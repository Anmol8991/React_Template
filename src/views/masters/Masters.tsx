import { Tabs } from '@/components/ui'

import FeeBasis from './components/FeeBasis'
import FeeFrequency from './components/FeeFrequency'
import CalenderType from './components/CalenderType'
import CommitmentType from './components/CommitmentType'
import Currencies from './components/Currencies'
import DrawdownBasis from './components/DrawdownBasis'
import AssetInvestmentType from './components/AssetInvestmentType'
import Countries from './components/Countries'


import ChartOfAccounts from './components/ChartOfAccounts'
import CarriedInterest from './components/CarriedInterest'
import Equalisation from './components/Equalisation'
import AccountGroup from './components/AccountGroup'

const { TabNav, TabList, TabContent } = Tabs
const masterTabs = [
    {
        title: 'Fee Basis',
        key: 'feeBasis',
        component: <FeeBasis />,
    },
    {
        title: 'Fee Frequency',
        key: 'feeFrequency',
        component: <FeeFrequency />,
    },
    {
        title: 'Calender Type',
        key: 'calenderType',
        component: <CalenderType />,
    },
    {
        title: 'Equalization',
        key: 'Equalization',
        component: <Equalisation />,
    },
    // {
    //     title: 'Commitment Type',
    //     key: 'commitmentType',
    //     component: <CommitmentType />,
    // },
    {
        title: 'Countries',
        key: 'countries',
        component: <Countries />,
    },
    {
        title: 'Currencies',
        key: 'currencies',
        component: <Currencies />,
    },
    {
        title: 'Drawdown Basis',
        key: 'drawdownBasis',
        component: <DrawdownBasis />,
    },
    {
        title: 'Investment Instrument Type',
        key: 'assetInvestmentType',
        component: <AssetInvestmentType />,
    },
   
    {
        title: 'Account Group',
        key: 'accountGroup',
        component: <AccountGroup />,
    },
    {
        title: 'Chart of Accounts',
        key: 'chartOfAccounts',
        component: <ChartOfAccounts />,
    },
    {
        title: 'Carried Interest',
        key: 'carriedInterest',
        component: <CarriedInterest />,
    },
    // {
    //     title: 'Compensation Details',
    //     key: 'compensationDetails',
    //     component: <CompensationDetails />,
    // },
    // {
    //     title: 'KYC Details',
    //     key: 'kycDetails',
    //     component: <KycDetails />,
    // },
]

const Masters = () => {
    return (
        <>
            <h3 className="mb-3">Masters</h3>
            <div>
                <Tabs defaultValue="feeBasis" variant="pill">
                    <TabList
                        className="flex-wrap "
                        // className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
                    >
                        {masterTabs.map((i) => (
                            <TabNav key={i.key} value={i.key}>
                                {i.title}
                            </TabNav>
                        ))}
                    </TabList>

                    <div className="py-4">
                        {masterTabs.map((i) => (
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

export default Masters
