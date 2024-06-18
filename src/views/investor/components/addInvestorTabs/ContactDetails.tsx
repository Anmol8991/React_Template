import { Card, Dialog, Select, Switcher, Table } from '@/components/ui'

import { FormItem, FormContainer } from '@/components/ui/Form'
import DatePicker from '@/components/ui/DatePicker'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import CreatableSelect from 'react-select/creatable'
import { HiOutlinePlusCircle } from 'react-icons/hi'
import { useState } from 'react'
import THead from '@/components/ui/Table/THead'
import Tr from '@/components/ui/Table/Tr'
import TBody from '@/components/ui/Table/TBody'
import Td from '@/components/ui/Table/Td'
import Th from '@/components/ui/Table/Th'

type Option = {
    value: string
    label: string
}

const contactOptions: Option[] = [
    { value: 'contact1', label: 'Contact 1' },
    { value: 'contact2', label: 'Contact 2' },
    { value: 'contact3', label: 'Contact 3' },
    { value: 'contact4', label: 'Contact 4' },
]

const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required'),
    primaryContact: Yup.boolean().required('This field is required'),
    email: Yup.string().required('This field is required'),
    address: Yup.string().required('This field is required'),
})

const contactsData = [
    {
        name: 'Barbara Roberts',
        email: 'cu@ubge.lu',
        designation: 'Developer',
        address: 'Street 67, Watson, Åland Islands',
        primaryContact: false,
    },
    {
        name: 'Edward Ellis',
        email: 'jonrifniv@ug.fi',
        designation: 'Manager',
        address: 'Street 50, Townsend, Australia',
        primaryContact: true,
    },
]

const initialValues = {
    name: '',
    email: '',
    designation: '',
    address: '',
    primaryContact: false,
}

const ContactDetails = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [contactList, setContactList] = useState(contactsData)
    const [formInitialValues, setFormInitialValues] = useState(initialValues)

    const [editingIndex, setEditingIndex] = useState(null)

    const closeModal = () => {
        setModalOpen(false)
        setFormInitialValues(initialValues)
        setEditingIndex(null)
    }

    const showModal = () => {
        setModalOpen(true)
    }

    const handleFormSubmit = (values) => {
        if (editingIndex !== null) {
            setContactList((prev) => {
                const updatedContacts = [...prev]
                updatedContacts[editingIndex] = values
                return updatedContacts
            })
        } else {
            setContactList((prev) => [...prev, values])
        }
    }

    const handleView = (index) => {
        setEditingIndex(index)
        setFormInitialValues(contactList[index])
        showModal()
    }

    return (
        <Card
            id="feeBasis"
            className="flex justify-center items-center"
            bodyClass="w-full"
        >
            <div className={`flex items-center justify-between`}>
                <h5>Contacts</h5>
                <Button
                    type="button"
                    size="sm"
                    icon={<HiOutlinePlusCircle />}
                    onClick={showModal}
                >
                    Add New
                </Button>
            </div>

            <Table className="mt-5">
                <THead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Designation</Th>
                        <Th>Address</Th>
                        <Th>Primary Contact</Th>
                    </Tr>
                </THead>
                <TBody>
                    {contactList.map((i, index) => (
                        <Tr
                            key={index}
                            role="button"
                            onClick={() => handleView(index)}
                        >
                            <Td>{i.name}</Td>
                            <Td>{i.email}</Td>
                            <Td>{i.designation}</Td>
                            <Td>{i.address}</Td>
                            <Td>{i.primaryContact ? 'Yes' : 'No'}</Td>
                        </Tr>
                    ))}
                </TBody>
            </Table>

            <Dialog
                isOpen={modalOpen}
                width={window.innerWidth * 0.7}
                onClose={closeModal}
                onRequestClose={closeModal}
            >
                <div className={`max-h-100 overflow-y-auto`}>
                    <Formik
                        enableReinitialize
                        initialValues={formInitialValues ?? initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log('values', values)
                            handleFormSubmit(values)
                            closeModal()
                        }}
                    >
                        {({ values, touched, errors, resetForm }) => (
                            <Form>
                                <FormContainer className="grid lg:grid-cols-2 lg:gap-4 grid-cols-1">
                                    <FormItem
                                        label="Name"
                                        invalid={errors.name && touched.name}
                                        errorMessage={errors.name}
                                    >
                                        <Field
                                            name="name"
                                            type="text"
                                            placeholder="Enter Name"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Email"
                                        invalid={errors.email && touched.email}
                                        errorMessage={errors.email}
                                    >
                                        <Field
                                            name="email"
                                            type="email"
                                            placeholder="Enter Email"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Designation"
                                        invalid={
                                            errors.designation &&
                                            touched.designation
                                        }
                                        errorMessage={errors.designation}
                                    >
                                        <Field
                                            name="designation"
                                            type="text"
                                            placeholder="Enter Designation"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Address"
                                        invalid={
                                            errors.address && touched.address
                                        }
                                        errorMessage={errors.address}
                                    >
                                        <Field
                                            name="address"
                                            type="text"
                                            placeholder="Enter Address"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Primary Contact?"
                                        invalid={
                                            errors.primaryContact &&
                                            touched.primaryContact
                                        }
                                        errorMessage={errors.primaryContact}
                                    >
                                        <Field
                                            name="primaryContact"
                                            component={Switcher}
                                        />
                                    </FormItem>
                                    <FormItem>
                                        <div className="w-full flex justify-end gap-4">
                                            <Button
                                                type="reset"
                                                onClick={() => {
                                                    resetForm()
                                                    closeModal()
                                                }}
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                variant="solid"
                                                type="submit"
                                            >
                                                Save
                                            </Button>
                                        </div>
                                    </FormItem>
                                </FormContainer>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Dialog>
        </Card>
    )
}

export default ContactDetails
