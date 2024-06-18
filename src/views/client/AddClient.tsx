// import AddClientsForm from '@/components/custom/ClientForm/AddClientForm'
import ClientForm from '@/views/client/components/clientForm'
import { useApi } from '@/utils/hooks/useApi'
import { apiAddClient } from '@/services/admin.api'
import Alert from '@/components/ui/Alert'
import { notify } from '@/utils/commonHelper'


type FormModel = {
    organizationName: string
    country: string
    subscriptionType: string
    subDomain: string
    adminName: string
    description: string
    panGst: string
    designation: string
    adminEmail: string
    contactName: string
    contactPhone: string
    contactEmail: string
    referredBy: string
    img?: string
    imgList?: {
        id: string
        name: string
        img: string
    }[]
}

function AddClient() {
    const { mutateAsync, error, isError, isLoading, reset, data } = useApi(
        apiAddClient,
        {
            onSuccess: (data) => {
                // console.log("Data on Success: ",data);
                notify(data?.data?.message, true)
            },
            onError: (error) => {
                // console.log("Error: ", error)
                notify(error?.response?.data?.message, false)
            },
        }
    )

    const handleClick = async (values: FormModel) => {
        await mutateAsync({
            name: values.organizationName,
            country_id: values.country,
            subscription_type: values.subscriptionType,
            subdomain: values.subDomain,
            description: values.description,
            pancard: values.panGst,
            contact_person_name: values.contactName,
            contact_email: values.contactEmail,
            mobile_number: values.contactPhone,
            admin_name: values.adminName,
            admin_email: values.adminEmail
        })
    }

    return (
        <div className='flex flex-col gap-4'>
            <h3>Add New Client</h3>
            <ClientForm handleSave={handleClick}/>
        </div>
    )
}

export default AddClient
