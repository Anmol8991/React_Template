import { useState } from 'react'
import Swal from 'sweetalert2'
import { notify } from '@/utils/commonHelper'
import { Button, Card, Table, Dropdown, FormItem, FormContainer} from '@/components/ui'
import { HiOutlineMenuAlt4, HiOutlinePlusCircle } from 'react-icons/hi'
import type { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Dialog from '@/components/ui/Dialog'
import THead from '@/components/ui/Table/THead'
import Tr from '@/components/ui/Table/Tr'
import Th from '@/components/ui/Table/Th'
import TBody from '@/components/ui/Table/TBody'
import Td from '@/components/ui/Table/Td'
import { Form, Field, FieldProps, Formik } from 'formik'
import BankDetailsForm from '@/components/custom/BankDetailsForm'
import CountryForm from './investmentRestrictionsForms/CountryForm'
import RegionForm from './investmentRestrictionsForms/RegionForm'
import SectorForm from './investmentRestrictionsForms/SectorForm'


type CountryFormModel = {
    country: string
    minLimit: number | null
    maxLimit: number | null
    remarks: string
}

type RegionFormModel = {
    region: string
    minLimit: number | null
    maxLimit: number | null
    remarks: string
}

type SectorFormModel = {
    sector: string
    minLimit: number | null
    maxLimit: number | null
    remarks: string
}


const BankDetailsTable = () => {
    const navigate = useNavigate()
    // const [searchValue, setSetSearchValue] = useState('')
    const [countryDetailsValues, setCountryDetailsValues] = useState<CountryFormModel[]>([])
    const [regionDetailsValues, setRegionDetailsValues] = useState<RegionFormModel[]>([])
    const [sectorDetailsValues,setSectorDetailsValues] = useState<SectorFormModel[]>([])

    const [dialogIsOpen, setIsOpen] = useState({
            country: false,
            region: false,
            sector: false
    })

    const [currentIndex, setCurrentIndex] = useState<number | null>()
    const [currentValue, setCurrentValue] = useState<CountryFormModel | RegionFormModel | SectorFormModel>({})

    const handleAddNew = (e) => {

        setCurrentIndex(null)
        if (e.currentTarget.id === 'country'){
            setCurrentValue({
                country: "",
                minLimit: null,
                maxLimit: null,
                remarks: "",})
        }else if (e.currentTarget.id === 'region'){
            setCurrentValue({
                region: "",
                minLimit: null,
                maxLimit: null,
                remarks: "",})
            }
            else {
                setCurrentValue({
                    sector: "",
                    minLimit: null,
                    maxLimit: null,
                    remarks: "",})
        }
        

        openDialog(e)
    }

    const handleEdit = (e: MouseEvent, index: number) => {

        setCurrentIndex(index)
        if(e.currentTarget.id === 'country'){
            setCurrentValue(countryDetailsValues[index])
        }else if(e.currentTarget.id === 'region'){
            setCurrentValue(regionDetailsValues[index])
        }else if(e.currentTarget.id === 'sector'){
            setCurrentValue(sectorDetailsValues[index])
        }
        
        openDialog(e)
    }
    const openDialog = (e: MouseEvent) => {

        if (e.currentTarget.id === 'country'){
            setIsOpen((prev) => {
                const newObj = {...prev}
                newObj.country = true
                return newObj
            })
        }else if (e.currentTarget.id === 'region'){
                    setIsOpen((prev) => {
                        const newObj = {...prev}
                        newObj.region = true
                        return newObj
                    })
            }
            else {
                setIsOpen((prev) => {
                    const newObj = {...prev}
                    newObj.sector = true
                    return newObj
                })
        }
             
    }
    const onDialogClose = () => {
        setIsOpen((prev) => {
            const newObj = {...prev}
            newObj.country = false
            newObj.region = false
            newObj.sector = false
            return newObj
        })
    }

    const openDialogSaveCountry = (formValues) => {
        console.log('FormValues: ', formValues)

        onDialogClose()

        if (typeof currentIndex === 'number') {
            setCountryDetailsValues((prevState) => {
                const updatedArray = [...prevState]
                updatedArray[currentIndex] = formValues
                return updatedArray
            })
        } else {
            const newArray = [...countryDetailsValues, formValues]
            setCountryDetailsValues(newArray)
        }
    }
    const openDialogSaveRegion = (formValues) => {
        console.log('FormValues: ', formValues)

        onDialogClose()

        if (typeof currentIndex === 'number') {
            setRegionDetailsValues((prevState) => {
                const updatedArray = [...prevState]
                updatedArray[currentIndex] = formValues
                return updatedArray
            })
        } else {
            const newArray = [...regionDetailsValues, formValues]
            setRegionDetailsValues(newArray)
        }
    }
    const openDialogSaveSector = (formValues) => {
        console.log('FormValues: ', formValues)

        onDialogClose()

        if (typeof currentIndex === 'number') {
            setSectorDetailsValues((prevState) => {
                const updatedArray = [...prevState]
                updatedArray[currentIndex] = formValues
                return updatedArray
            })
        } else {
            const newArray = [...sectorDetailsValues, formValues]
            setSectorDetailsValues(newArray)
        }
    }


    

    const handleSave = () => {
        console.log('All forms to be submitted: ', countryDetailsValues)
        
    }
    const Toggle = (
        <Button size="xs" variant="twoTone">
            <HiOutlineMenuAlt4 />
        </Button>
    )
    const validationSchema = Yup.object().shape({
        countryDetails: Yup.array()
            .min(1, 'Array must have at least one element')
            .required('Array field is required'),
        regionDetails: Yup.array()
        .min(1, 'Array must have at least one element')
        .required('Array field is required'),
        sectorDetails: Yup.array()
        .min(1, 'Array must have at least one element')
        .required('Array field is required'),
    })

    return (
        <div className="w-full">
            <Formik
                enableReinitialize
                initialValues={{
                    countryDetails: countryDetailsValues,
                    regionDetails: regionDetailsValues,
                    sectorDetails: sectorDetailsValues
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    // console.log('values', values)
                    handleSave()
                    notify('Investment Restrictions added succesfully!', true)
                    
                }}
            >
                {({ values, touched, errors, resetForm }) => (
                    <Form>
                        <FormContainer>
                            {/* Country Table  */}
                            <FormItem
                                    invalid={
                                        errors.countryDetails &&
                                        touched.countryDetails
                                    }
                                    errorMessage={errors.countryDetails}
                                >
                                    <Card>
                                        <div
                                            className={`flex items-center justify-between ${
                                                countryDetailsValues?.length > 0 &&
                                                'mb-4'
                                            }`}
                                        >
                                            <h5>Country Details</h5>
                                            {countryDetailsValues?.length === 0 && (
                                                <p>There are no Country Details</p>
                                            )}
                                            <Button
                                                type="button"
                                                size="sm"
                                                id="country"
                                                icon={<HiOutlinePlusCircle />}
                                                onClick={handleAddNew}
                                            >
                                                Add New
                                            </Button>
                                        </div>
                                        <Dialog
                                            isOpen={dialogIsOpen.country}
                                            width={window.innerWidth}
                                            onClose={onDialogClose}
                                            onRequestClose={onDialogClose}
                                        >
                                            <div className="flex flex-col h-full justify-between">
                                            <div className={`overflow-y-auto`}>
                                                <CountryForm
                                                    currentValue={currentValue}
                                                    handleSave={openDialogSaveCountry}
                                                    handleCancel={onDialogClose}
                                                />
                                            </div>
                                            </div>
                                            
                                        </Dialog>

                                        {countryDetailsValues?.length > 0 && (
                                            <Table className="mb-20">
                                                <THead>
                                                    <Tr>
                                                        <Th>Country</Th>
                                                        <Th>Maximum Limit</Th>
                                                        <Th>Minimum Limit</Th>
                                                        <Th>Remarks</Th>
                                                        <Th>Action</Th>
                                                    </Tr>
                                                </THead>
                                                <TBody>
                                                    {countryDetailsValues.length >
                                                    0 ? (
                                                        countryDetailsValues.map(
                                                            (i, index) => (
                                                                <Tr key={index}>
                                                                    <Td>{i?.country}</Td>
                                                                    <Td>{i?.minLimit}</Td>
                                                                    <Td>{i?.maxLimit}</Td>
                                                                    <Td>{i?.remarks}</Td>
                                                                    <Td>
                                                                        <Dropdown
                                                                            placement="bottom-end"
                                                                            renderTitle={Toggle}
                                                                        >
                                                                            <Dropdown.Item
                                                                                eventKey="a"
                                                                                id="country"
                                                                                onClick={(e: MouseEvent) => {
                                                                                    setCurrentIndex(index)
                                                                                    handleEdit(e,index)
                                                                                }}
                                                                            >
                                                                                Edit
                                                                            </Dropdown.Item>
                                                                            <Dropdown.Item
                                                                                eventKey="a"
                                                                                onClick={() => {
                                                                                    Swal.fire(
                                                                                        {
                                                                                            title: 'Delete',
                                                                                            text: `Are you sure you want to delete?`,
                                                                                            icon: 'warning',
                                                                                            confirmButtonText:
                                                                                                'Delete',
                                                                                            showCancelButton:
                                                                                                true,
                                                                                        }
                                                                                    ).then(
                                                                                        (result) => {
                                                                                            if (result.isConfirmed) {
                                                                                                const newArray =
                                                                                                    [
                                                                                                        ...countryDetailsValues.slice(0,index),
                                                                                                        ...countryDetailsValues.slice(index + 1),
                                                                                                    ]
                                                                                                    setCountryDetailsValues(newArray)
                                                                                                setCurrentValue({})
                                                                                            }
                                                                                        }
                                                                                    )
                                                                                }}
                                                                            >
                                                                                Delete
                                                                            </Dropdown.Item>
                                                                        </Dropdown>
                                                                    </Td>
                                                                </Tr>
                                                            )
                                                        )
                                                    ) : (
                                                        <div className="d-flex justify-center mt-2">
                                                            <p className="text-center">
                                                                No Commitments
                                                            </p>
                                                        </div>
                                                    )}
                                                </TBody>
                                            </Table>
                                        )}
                                    </Card>
                            </FormItem>
                            {/* Region Table  */}
                            <FormItem
                                invalid={
                                    errors.regionDetails &&
                                    touched.regionDetails
                                }
                                errorMessage={errors.regionDetails}
                            >
                                <Card>
                                    <div
                                        className={`flex items-center justify-between ${
                                            regionDetailsValues?.length > 0 &&
                                            'mb-4'
                                        }`}
                                    >
                                        <h5>Region Details</h5>
                                        {regionDetailsValues?.length === 0 && (
                                            <p>There are no Sector Details</p>
                                        )}
                                        <Button
                                            type="button"
                                            size="sm"
                                            id="region"
                                            icon={<HiOutlinePlusCircle />}
                                            onClick={handleAddNew}
                                        >
                                            Add New
                                        </Button>
                                    </div>
                                    <Dialog
                                        isOpen={dialogIsOpen.region}
                                        width={window.innerWidth}
                                        onClose={onDialogClose}
                                        onRequestClose={onDialogClose}
                                    >
                                        <div className="flex flex-col h-full justify-between">
                                        <div className={`overflow-y-auto`}>
                                            <RegionForm
                                                currentValue={currentValue}
                                                handleSave={openDialogSaveRegion}
                                                handleCancel={onDialogClose}
                                            />
                                        </div>
                                        </div>
                                        
                                    </Dialog>

                                    {regionDetailsValues?.length > 0 && (
                                        <Table className="mb-20">
                                            <THead>
                                                <Tr>
                                                    <Th>Region</Th>
                                                    <Th>Maximum Limit</Th>
                                                    <Th>Minimum Limit</Th>
                                                    <Th>Remarks</Th>
                                                    <Th>Action</Th>
                                                </Tr>
                                            </THead>
                                            <TBody>
                                                {regionDetailsValues.length >
                                                0 ? (
                                                    regionDetailsValues.map(
                                                        (i, index) => (
                                                            <Tr key={index}>
                                                                <Td>{i.region}</Td>
                                                                <Td>{i.minLimit}</Td>
                                                                <Td>{i.maxLimit}</Td>
                                                                <Td>{i.remarks}</Td>
                                                                <Td>
                                                                    <Dropdown
                                                                        placement="bottom-end"
                                                                        renderTitle={Toggle}
                                                                    >
                                                                        <Dropdown.Item
                                                                            eventKey="a"
                                                                            id="region"
                                                                            onClick={(e: MouseEvent) => {
                                                                                setCurrentIndex(index)
                                                                                handleEdit(e,index)
                                                                            }}
                                                                        >
                                                                            Edit
                                                                        </Dropdown.Item>
                                                                        <Dropdown.Item
                                                                            eventKey="a"
                                                                            onClick={() => {
                                                                                Swal.fire(
                                                                                    {
                                                                                        title: 'Delete',
                                                                                        text: `Are you sure you want to delete?`,
                                                                                        icon: 'warning',
                                                                                        confirmButtonText:
                                                                                            'Delete',
                                                                                        showCancelButton:
                                                                                            true,
                                                                                    }
                                                                                ).then(
                                                                                    (result) => {
                                                                                        if (result.isConfirmed) {
                                                                                            const newArray =
                                                                                                [
                                                                                                    ...regionDetailsValues.slice(0,index),
                                                                                                    ...regionDetailsValues.slice(index + 1),
                                                                                                ]
                                                                                                setRegionDetailsValues(newArray)
                                                                                            setCurrentValue({})
                                                                                        }
                                                                                    }
                                                                                )
                                                                            }}
                                                                        >
                                                                            Delete
                                                                        </Dropdown.Item>
                                                                    </Dropdown>
                                                                </Td>
                                                            </Tr>
                                                        )
                                                    )
                                                ) : (
                                                    <div className="d-flex justify-center mt-2">
                                                        <p className="text-center">
                                                            No Commitments
                                                        </p>
                                                    </div>
                                                )}
                                            </TBody>
                                        </Table>
                                    )}
                                </Card>
                            </FormItem>
                            {/* Sector Table  */}
                            <FormItem
                                invalid={
                                    errors.sectorDetails &&
                                    touched.sectorDetails
                                }
                                errorMessage={errors.sectorDetails}
                            >
                                <Card>
                                    <div
                                        className={`flex items-center justify-between ${
                                            sectorDetailsValues?.length > 0 &&
                                            'mb-4'
                                        }`}
                                    >
                                        <h5>Sector Details</h5>
                                        {sectorDetailsValues?.length === 0 && (
                                            <p>There are no Region Details</p>
                                        )}
                                        <Button
                                            type="button"
                                            size="sm"
                                            id="sector"
                                            icon={<HiOutlinePlusCircle />}
                                            onClick={handleAddNew}
                                        >
                                            Add New
                                        </Button>
                                    </div>
                                    <Dialog
                                        isOpen={dialogIsOpen.sector}
                                        width={window.innerWidth}
                                        onClose={onDialogClose}
                                        onRequestClose={onDialogClose}
                                    >
                                        <div className="flex flex-col h-full justify-between">
                                        <div className={`overflow-y-auto`}>
                                            <SectorForm
                                                currentValue={currentValue}
                                                handleSave={openDialogSaveSector}
                                                handleCancel={onDialogClose}
                                            />
                                        </div>
                                        </div>
                                        
                                    </Dialog>

                                    {sectorDetailsValues?.length > 0 && (
                                        <Table className="mb-20">
                                            <THead>
                                                <Tr>
                                                    <Th>Sector</Th>
                                                    <Th>Maximum Limit</Th>
                                                    <Th>Minimum Limit</Th>
                                                    <Th>Remarks</Th>
                                                    <Th>Action</Th>
                                                </Tr>
                                            </THead>
                                            <TBody>
                                                {sectorDetailsValues.length >
                                                0 ? (
                                                    sectorDetailsValues.map(
                                                        (i, index) => (
                                                            <Tr key={index+i.sector}>
                                                                <Td>{i.sector}</Td>
                                                                <Td>{i.minLimit}</Td>
                                                                <Td>{i.maxLimit}</Td>
                                                                <Td>{i.remarks}</Td>
                                                                <Td>
                                                                    <Dropdown
                                                                        placement="bottom-end"
                                                                        renderTitle={Toggle}
                                                                    >
                                                                        <Dropdown.Item
                                                                            eventKey="a"
                                                                            id="sector"
                                                                            onClick={(e: MouseEvent) => {
                                                                                setCurrentIndex(index)
                                                                                handleEdit(e,index)
                                                                            }}
                                                                        >
                                                                            Edit
                                                                        </Dropdown.Item>
                                                                        <Dropdown.Item
                                                                            eventKey="a"
                                                                            onClick={() => {
                                                                                Swal.fire(
                                                                                    {
                                                                                        title: 'Delete',
                                                                                        text: `Are you sure you want to delete?`,
                                                                                        icon: 'warning',
                                                                                        confirmButtonText:
                                                                                            'Delete',
                                                                                        showCancelButton:
                                                                                            true,
                                                                                    }
                                                                                ).then(
                                                                                    (result) => {
                                                                                        if (result.isConfirmed) {
                                                                                            const newArray =
                                                                                                [
                                                                                                    ...sectorDetailsValues.slice(0,index),
                                                                                                    ...sectorDetailsValues.slice(index + 1),
                                                                                                ]
                                                                                                setSectorDetailsValues(newArray)
                                                                                            setCurrentValue({})
                                                                                        }
                                                                                    }
                                                                                )
                                                                            }}
                                                                        >
                                                                            Delete
                                                                        </Dropdown.Item>
                                                                    </Dropdown>
                                                                </Td>
                                                            </Tr>
                                                        )
                                                    )
                                                ) : (
                                                    <div className="d-flex justify-center mt-2">
                                                        <p className="text-center">
                                                            No Commitments
                                                        </p>
                                                    </div>
                                                )}
                                            </TBody>
                                        </Table>
                                    )}
                                </Card>
                            </FormItem>
                            
                            <FormItem>
                                <div className="w-full flex justify-end gap-4">
                                    <Button
                                        type="reset"
                                        onClick={() => {
                                            resetForm()
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button variant="solid" type="submit">
                                        Save
                                    </Button>
                                </div>
                            </FormItem>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default BankDetailsTable