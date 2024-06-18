import { useState, useEffect } from 'react'
import Card from '@/components/ui/Card'
import Segment from '@/components/ui/Segment'
import Badge from '@/components/ui/Badge'
import Loading from '@/components/shared/Loading'
import Chart from '@/components/shared/Chart'
import { COLORS } from '@/constants/chart.constant'
import isEmpty from 'lodash/isEmpty'
import { useAppSelector } from '@/store'

type ProjectOverviewChart = {
    commitments: number
    drawdowns: number
    total: number
    series: {
        name: string
        data: number[]
    }[]
    range: string[]
}

type BarChartProps = {
    data?: {
        chart?: Record<string, ProjectOverviewChart>
    }
    className?: string
}

type ChartLegendProps = {
    label: string
    value: string
    badgeClass?: string
    showBadge?: boolean
}

const ChartLegend = ({
    label,
    value,
    badgeClass,
    showBadge = true,
}: ChartLegendProps) => {
    return (
        <div className="flex gap-2">
            {showBadge && <Badge className="mt-2.5" innerClass={badgeClass} />}
            <div>
                <h5 className="font-bold">{value}</h5>
                <p>{label}</p>
            </div>
        </div>
    )
}

const DashboardBarChart = ({ data = {}, className }: BarChartProps) => {
    const [timeRange, setTimeRange] = useState(['monthly'])

    const [repaint, setRepaint] = useState(false)

    const sideNavCollapse = useAppSelector(
        (state) => state.theme.layout.sideNavCollapse
    )

    useEffect(() => {
        setRepaint(true)
        const timer1 = setTimeout(() => setRepaint(false), 300)

        return () => {
            clearTimeout(timer1)
        }
    }, [data, sideNavCollapse])

    return (
        <Card className={className}>
            <div className="flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4">
                <h4>Overview</h4>
                <Segment
                    value={timeRange}
                    size="sm"
                    onChange={(val: string | string[] | number | number[]) =>
                        setTimeRange(val as string[] )
                    }
                >
                    <Segment.Item value="monthly">Monthly</Segment.Item>
                    <Segment.Item value="quarterly">Quarterly</Segment.Item>
                </Segment>
            </div>
            {!isEmpty(data) && !repaint && data.chart && (
                <>
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <ChartLegend
                                showBadge={false}
                                label="Total"
                                value={'31.9M'}
                            />
                        </div>
                        <div className="flex gap-x-6">
                            <ChartLegend
                                badgeClass="bg-emerald-600"
                                label={data.chart[timeRange[0]].series[0].name}
                                value={eval(data.chart[timeRange[0]].series[0].data.join('+'))+"M"}
                            />
                            <ChartLegend
                                badgeClass="bg-amber-500"
                                label={data.chart[timeRange[0]].series[1].name}
                                value={eval(data.chart[timeRange[0]].series[1].data.join('+'))+"M"}
                            />
                            <ChartLegend
                                badgeClass="bg-cyan-500"
                                label={data.chart[timeRange[0]].series[2].name}
                                value={eval(data.chart[timeRange[0]].series[2].data.join('+'))+"M"}
                            />
                            <ChartLegend
                                badgeClass="bg-indigo-500"
                                label={data.chart[timeRange[0]].series[3].name}
                                value={eval(data.chart[timeRange[0]].series[3].data.join('+'))+"M"}
                            />
                        </div>
                    </div>
                    <div>
                        {/* <Chart
                            series={data.chart[timeRange[0]].series}
                            xAxis={data.chart[timeRange[0]].range}
                            type="bar"
                            customOptions={{
                                colors: [COLORS[0], COLORS[2]],
                                legend: { show: false },
                            }}
                        /> */}
                        <Chart
                            customOptions={{
                                chart: {
                                    type: 'bar',
                                    stacked: true,
                                    toolbar: {
                                        show: false,
                                    },
                                    zoom: {
                                        enabled: false,
                                    },
                                },
                                
                                colors: [COLORS[2],COLORS[3],COLORS[6],COLORS[0]],
                                
                                responsive: [
                                    {
                                        breakpoint: 480,
                                        options: {
                                            legend: {
                                                position: 'bottom',
                                                offsetX: -10,
                                                offsetY: 0,
                                            },
                                        },
                                    },
                                ],
                                plotOptions: {
                                    bar: {
                                        horizontal: false,
                                    },
                                },
                                xaxis: {
                                    categories: data.chart[timeRange[0]].range,
                                },
                                legend: {
                                    show:false,
                                    position: 'right',
                                    offsetY: 40,
                                },
                                fill: {
                                    opacity: 1,
                                },
                            }}
                            series={data.chart[timeRange[0]].series}
                            type="bar"
                            height={300}
                        />
                    </div>
                </>
            )}
            <Loading loading={repaint} type="cover">
                {repaint && <div className="h-[300px]" />}
            </Loading>
        </Card>
    )
}

export default DashboardBarChart
