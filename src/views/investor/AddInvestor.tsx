import Tabs from '@/components/ui/Tabs'

import InvestorDetails from './components/addInvestorTabs/InvestorDetails'

import InvestorBankDetails from './components/addInvestorTabs/InvestorBankDetails'
import CommitmentDetails from './components/addInvestorTabs/CommitmentDetails'
import ContactDetails from './components/addInvestorTabs/ContactDetails'
import KYCDetails from './components/addInvestorTabs/KYCDetails'
import CommitmentDetailsForm from './components/addInvestorTabs/CommitmentDetailsForm'

const { TabNav, TabList, TabContent } = Tabs
const addInvestorTabs = [
    {
        title: 'Investor Details',
        key: 'addInvestor',
        component: <InvestorDetails />,
    },
    {
        title: 'Commitment Details',
        key: 'commitmentDetails',
        component: <CommitmentDetails />,
    },
    {
        title: 'Contact Details',
        key: 'contactDetails',
        component: <ContactDetails />,
    },
    {
        title: 'Bank Details',
        key: 'investorBankDetails',
        component: <InvestorBankDetails />,
    },
    {
        title: 'KYC Details',
        key: 'kycDetails',
        component: <KYCDetails />,
    },
]
const AddInvestor = () => {
    return (
        <div>
            <h3 className='mb-4'>Add Investor</h3>
            <Tabs defaultValue="addInvestor" variant="pill">
                <TabList className="flex-wrap">
                    {addInvestorTabs.map((i) => (
                        <TabNav key={i.key} value={i.key}>
                            {i.title}
                        </TabNav>
                    ))}
                </TabList>
                <div className="pt-4">
                    {addInvestorTabs.map((i) => (
                        <TabContent key={i.key} value={i.key}>
                            {i.component}
                        </TabContent>
                    ))}
                </div>
            </Tabs>
        </div>
    )
}

export default AddInvestor
