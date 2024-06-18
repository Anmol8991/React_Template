import { useState } from 'react'
import { Card, FormContainer, FormItem, Switcher } from '@/components/ui'
import { capitalizeString } from '@/utils/commonHelper'

const AuthControllerCard = ({
    data,
    updateControllerValues,
}) => {
    const [newValues, setNewValues] = useState(data?.items)

    const handleOnChange = (i: string) => {
        const updatedValues = { ...newValues, [i]: !newValues[i] }
        setNewValues(updatedValues)
        updateControllerValues(data?.name, updatedValues)
    }

    return (
        <Card header={capitalizeString(data?.name)}>
            <FormContainer className="flex flex-wrap justify-between items-center">
                {Object.keys(data?.items ?? {}).map((i) => (
                    <FormItem
                        key={i}
                        layout="inline"
                        className="flex items-center"
                        label={capitalizeString(i)}
                    >
                        <Switcher
                            className="w-min"
                            checked={newValues[i]}
                            onChange={() => handleOnChange(i)}
                        />
                    </FormItem>
                ))}
            </FormContainer>
        </Card>
    )
}

export default AuthControllerCard
