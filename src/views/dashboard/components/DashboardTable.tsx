import { Card, Segment, Table } from '@/components/ui'
import TBody from '@/components/ui/Table/TBody'
import THead from '@/components/ui/Table/THead'
import Td from '@/components/ui/Table/Td'
import Th from '@/components/ui/Table/Th'
import Tr from '@/components/ui/Table/Tr'

const DashboardTable = () => {
    const data = [
        {
            rvpi: '962.59',
            dpi: '500.5',
            tvpi: '406.80',
            grossIrr: '976.78',
            netIrr: '748.62',
        },
        {
            rvpi: '552.92',
            dpi: '773.00',
            tvpi: '950.85',
            grossIrr: '734.47',
            netIrr: '851.38',
        },
        {
            rvpi: '683.97',
            dpi: '580.56',
            tvpi: '242.71',
            grossIrr: '680.29',
            netIrr: '816.90',
        },
        {
            rvpi: '448.10',
            dpi: '827.73',
            tvpi: '807.16',
            grossIrr: '894.09',
            netIrr: '217.99',
        },
        {
            rvpi: '707.21',
            dpi: '820.85',
            tvpi: '441.58',
            grossIrr: '823.',
            netIrr: '605.01',
        },
    ]

    return (
        <Card>
            <div className="flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4">
                <h4>Overview Table</h4>
                <Segment size="sm">
                    <Segment.Item value="monthly">Q1</Segment.Item>
                    <Segment.Item value="weekly">Q2</Segment.Item>
                    <Segment.Item value="weekly">Q3</Segment.Item>
                    <Segment.Item value="weekly">Q4</Segment.Item>
                </Segment>
            </div>
            <>
                <Table>
                    <THead>
                        <Tr>
                            <Th>RVPI</Th>
                            <Th>DPI</Th>
                            <Th>TVPI</Th>
                            <Th>Gross IRR</Th>
                            <Th>Net IRR</Th>
                        </Tr>
                    </THead>
                    <TBody>
                        {(data || [])?.map((i, index) => (
                            <Tr key={index}>
                                <Td>{i.rvpi}</Td>
                                <Td>{i.dpi}</Td>
                                <Td>{i.tvpi}</Td>
                                <Td>{i.grossIrr}</Td>
                                <Td>{i.netIrr}</Td>
                            </Tr>
                        ))}
                    </TBody>
                </Table>
            </>
        </Card>
    )
}

export default DashboardTable
