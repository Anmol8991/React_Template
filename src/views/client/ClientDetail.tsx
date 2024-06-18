import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import ClientForm from './components/clientForm/ClientForm'
import { HiOutlinePencil } from 'react-icons/hi'
import { useApi } from '@/utils/hooks/useApi'
import { apiEditClient } from '@/services/admin.api'
// import Alert from '@/components/ui/Alert'
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

function ClientDetail() {
    const [isEditable, setIsEditable] = useState(false)

    const handleCancel = () => {
        setIsEditable(false)
    }

    const initialData = {
        organizationName: 'longer',
        country: 'triangle',
        subscriptionType: 'would',
        subDomain: 'theory',
        adminName: 'lake',
        description: 'card',
        panGst: 'accident',
        designation: 'fast',
        adminEmail: 'short',
        contactName: 'then',
        contactPhone: 'choice',
        contactEmail: 'peace',
        referredBy: 'peace',
        img: 'stared',
    }
    const { mutateAsync, error, isError, isLoading, reset, data } = useApi(
        apiEditClient,
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
            id: 1, //hardcoded 
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
        <div>
            <div className="flex justify-between mb-4">
                <h3>Client Details</h3>
                <Button
                    disabled={isEditable}
                    type="button"
                    icon={<HiOutlinePencil />}
                    size="sm"
                    onClick={() => setIsEditable(true)}
                >
                    Edit
                </Button>
            </div>

            <ClientForm
                type={isEditable}
                setType={handleCancel}
                initialData={initialData}
                handleSave={handleClick}
            />
        </div>
    )
}

export default ClientDetail

