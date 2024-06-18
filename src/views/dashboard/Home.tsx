import { useState } from 'react'
import { barChart } from '@/data'
import PageTitle from '@/components/ui/PageTitle'
import OverviewCards from './components/OverviewCards'
import { DatePicker } from '@/components/ui'
import DashboardTable from './components/DashboardTable'
import BarChart from './components/BarChart'

const Home = () => {
    const [date, setDate] = useState(null)
    const handleDatePickerChange = (date) => {
        console.log('Selected date', date)
        setDate(date)
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <PageTitle title="Dashboard" />
                <div>
                    <DatePicker
                        placeholder="Pick a date"
                        value={date}
                        onChange={handleDatePickerChange}
                    />
                </div>
            </div>

            <OverviewCards />
            <BarChart data={barChart} />
            {/* <ApexChart options={barChartData3.options} series={barChartData3.series} type="bar" height={350}/> */}
            {/* <DashboardBarChart data={barChartData} /> */}
            <DashboardTable />
        </div>
    )
}

export default Home
