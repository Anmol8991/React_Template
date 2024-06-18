import { useState, useEffect } from 'react'

import AuthControllerCard from './components/AuthControllerCard'
import AuthSelector from './components/AuthSelector'

const authControllerData = [
    {
        name: 'clients',
        items: {
            viewClients: true,
            editClient: false,
            addClient: true,
            deleteClient: false,
        },
    },
    {
        name: 'user',
        items: {
            viewUsers: true,
            editUser: false,
            addUser: true,
            deleteUser: false,
        },
    },
    {
        name: 'fund',
        items: {
            viewFunds: true,
            editFund: false,
            addFund: true,
            deleteFund: false,
        },
    },
    {
        name: 'investor',
        items: {
            viewInvestors: true,
            editInvestor: false,
            addInvestor: true,
            deleteInvestor: false,
        },
    },
    {
        name: 'scheme',
        items: {
            viewSchemes: true,
            editScheme: false,
            addScheme: true,
            deleteScheme: false,
        },
    },
]

const Authorizations = () => {
    const [role, setRole] = useState(null)
    const [user, setUser] = useState(null)
    const [controllerValues, setControllerValues] = useState(authControllerData)

    const updateControllerValues = (name, newItems) => {
        const updatedData = controllerValues.map((item) => {
            if (item.name === name) {
                return { ...item, items: newItems }
            }
            return item
        })

        setControllerValues(updatedData)
    }

    useEffect(() => {
        if (role?.length <= 0) {
            setUser(null)
        }
    }, [role])

    return (
        <div className="flex flex-col gap-4">
            <div>
                <h3>Authorizations</h3>
                <p>Give Authorizations to users to access specific pages</p>
            </div>
            <AuthSelector
                role={role}
                setRole={setRole}
                user={user}
                setUser={setUser}
            />

            {role?.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {controllerValues?.map((i) => (
                        <AuthControllerCard
                            key={i.name}
                            data={i}
                            updateControllerValues={updateControllerValues}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Authorizations
