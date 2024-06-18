import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Chart from '@/components/shared/Chart'
import { COLORS } from '@/constants/chart.constant'

type PieChartProps = {
    data?: {
        labels: string[]
        data: number[]
    }
}

const PieChart = () => {
    const data = {
        labels: ['LIC', 'Govt of India', 'HDFC Group'],
        data: [374, 834, 427],
    }
    return (
        <Card>
            <h4>Overview</h4>
            <div className="mt-6">
                {data.data.length > 0 && (
                    <>
                        <Chart
                            donutTitle={`${data.data.reduce(
                                (a, b) => a + b,
                                0
                            )}`}
                            donutText="Investors"
                            series={data.data}
                            customOptions={{
                                labels: data.labels,
                            }}
                            type="donut"
                        />
                        {data.data.length === data.labels.length && (
                            <div className="mt-6 grid grid-cols-3 gap-4 max-w-[480px] mx-auto">
                                {data.labels.map((value, index) => (
                                    <div
                                        key={value}
                                        className="flex items-center gap-1"
                                    >
                                        <Badge
                                            badgeStyle={{
                                                backgroundColor: COLORS[index],
                                            }}
                                        />
                                        <span className="font-semibold">
                                            {value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </Card>
    )
}

export default PieChart
