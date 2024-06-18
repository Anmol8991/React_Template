import { Avatar, Card } from '@/components/ui'
import React from 'react'
import {
    HiOutlineCash,
    HiOutlineChartBar,
    HiOutlineChartPie,
    HiOutlineClipboardCheck,
} from 'react-icons/hi'

const OverviewCards = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <Card className="shadow">
                <div className="flex items-center justify-between">
                    <div>
                        <h6 className="font-semibold mb-4 text-sm">
                            Commitments
                        </h6>
                        <h3 className="font-bold">27.7M</h3>
                    </div>

                    <Avatar
                        size={55}
                        className="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100"
                        icon={<HiOutlineCash />}
                    />
                </div>
            </Card>
            <Card className="shadow">
                <div className="flex items-center justify-between">
                    <div>
                        <h6 className="font-semibold mb-4 text-sm">
                            Drawdowns
                        </h6>
                        <h3 className="font-bold">4.2M</h3>
                    </div>

                    <Avatar
                        size={55}
                        className="bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-100"
                        icon={<HiOutlineClipboardCheck />}
                    />
                </div>
            </Card>
            <Card className="shadow">
                <div className="flex items-center justify-between">
                    <div>
                        <h6 className="font-semibold mb-4 text-sm">
                            Distribution
                        </h6>
                        <h3 className="font-bold">76K</h3>
                    </div>

                    <Avatar
                        size={55}
                        className="bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-100"
                        icon={<HiOutlineChartPie />}
                    />
                </div>
            </Card>
            <Card className="shadow">
                <div className="flex items-center justify-between">
                    <div>
                        <h6 className="font-semibold mb-4 text-sm">NAV</h6>
                        <h3 className="font-bold">23K</h3>
                    </div>

                    <Avatar
                        size={55}
                        className="bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100"
                        icon={<HiOutlineChartBar />}
                    />
                </div>
            </Card>
        </div>
    )
}

export default OverviewCards
