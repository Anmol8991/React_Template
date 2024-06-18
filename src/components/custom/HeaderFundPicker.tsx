import { Select } from '../ui'

const HeaderFundPicker = () => {
    const fundOptions = [
        { value: 'fund1', label: 'Fund 1' },
        { value: 'fund2', label: 'Fund 2' },
        { value: 'fund3', label: 'Fund 3' },
        { value: 'fund4', label: 'Fund 4' },
        { value: 'fund5', label: 'Fund 5' },
        { value: 'fund6', label: 'Fund 6' },
        { value: 'fund7', label: 'Fund 7' },
        { value: 'fund8', label: 'Fund 8' },
        { value: 'fund9', label: 'Fund 19' },
        { value: 'fund10', label: 'Fund 10' },
    ]
    const schemeOptions = [
        { value: 'scheme1', label: 'Scheme 1' },
        { value: 'scheme2', label: 'Scheme 2' },
        { value: 'scheme3', label: 'Scheme 3' },
        { value: 'scheme4', label: 'Scheme 4' },
        { value: 'scheme5', label: 'Scheme 5' },
        { value: 'scheme6', label: 'Scheme 6' },
        { value: 'scheme7', label: 'Scheme 7' },
        { value: 'scheme8', label: 'Scheme 8' },
        { value: 'scheme9', label: 'Scheme 9' },
        { value: 'scheme910', label: 'Scheme 10' },
    ]
    return (
        <div className="flex items-center gap-4">
            <Select
                placeholder="Please Select Fund"
                defaultValue={fundOptions[Math.floor(Math.random()*11)]}
                options={fundOptions}
                size="sm"
            />
            <Select
                placeholder="Please Select Scheme"
                defaultValue={schemeOptions[Math.floor(Math.random()*11)]}
                options={schemeOptions}
                size="sm"
            />
        </div>
    )
}

export default HeaderFundPicker
