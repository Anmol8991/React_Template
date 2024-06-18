import { Card, Table } from '../ui'
import THead from '../ui/Table/THead'
import Tr from '../ui/Table/Tr'
import Th from '../ui/Table/Th'
import TBody from '../ui/Table/TBody'
import Td from '../ui/Table/Td'

const InvestorTable2 = () => {
    return (
        <Card>
            <Table>
                <THead>
                    <Tr>
                        <Th></Th>
                        <Th className="text-blue-600">Dec 17</Th>
                        <Th className="text-amber-600">Mar 18</Th>
                        <Th className="text-violet-600">Movement</Th>

                    </Tr>
                </THead>
                <TBody>
                    <Tr>
                        <Td>Drawdowns</Td>
                        <Td className="text-blue-600">290.0203</Td>
                        <Td className="text-amber-600">17.8366</Td>
                        <Td className="text-violet-600">0.7341</Td>

                    </Tr>
                    <Tr>
                        <Td>Distribution</Td>
                        <Td className="text-blue-600">881.3884</Td>
                        <Td className="text-amber-600">10.04</Td>
                        <Td className="text-violet-600">0.7919</Td>
                    </Tr>
                    <Tr>
                        <Td>Realised Gain</Td>
                        <Td className="text-blue-600">590.1125</Td>
                        <Td className="text-amber-600">7.1329</Td>
                        <Td className="text-violet-600">0.4266</Td>
                    </Tr>
                    <Tr>
                        <Td>Unrealised Gain</Td>
                        <Td className="text-blue-600">482.6982</Td>
                        <Td className="text-amber-600">12.228</Td>
                        <Td className="text-violet-600">0.8479</Td>
                    </Tr>
                    <Tr>
                        <Td>Management Fee</Td>
                        <Td className="text-blue-600">881.8281</Td>
                        <Td className="text-amber-600">13.3989</Td>
                        <Td className="text-violet-600">0.3116</Td>
                    </Tr>
                    <Tr>
                        <Td>Operating Expenses</Td>
                        <Td className="text-blue-600">345.1667</Td>
                        <Td className="text-amber-600">10.4931</Td>
                        <Td className="text-violet-600">0.1514</Td>
                    </Tr>
                    <Tr>
                        <Td>NAV</Td>
                        <Td className="text-blue-600">427.906</Td>
                        <Td className="text-amber-600">8.0076</Td>
                        <Td className="text-violet-600">0.3702</Td>
                    </Tr>
                </TBody>
            </Table>
        </Card>
    )
}

export default InvestorTable2
