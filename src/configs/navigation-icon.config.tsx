import {
    HiOutlineCash,
    HiOutlineClipboard,
    HiOutlineDocumentReport,
    HiOutlineFingerPrint,
    HiOutlineHome,
    HiOutlineShieldCheck,
    HiOutlineStar,
    HiOutlineSwitchHorizontal,
    HiOutlineTemplate,
    HiOutlineUser,
    HiOutlineUserGroup,
    HiOutlineUsers,
} from 'react-icons/hi'

export type NavigationIcons = Record<string, JSX.Element>

const navigationIcon: NavigationIcons = {
    dashboard: <HiOutlineHome />,
    investors: <HiOutlineUsers />,
    clients: <HiOutlineUser />,
    users: <HiOutlineUserGroup />,
    masters: <HiOutlineTemplate />,
    funds: <HiOutlineCash />,
    notices: <HiOutlineClipboard />,
    reports: <HiOutlineDocumentReport />,
    transactions: <HiOutlineSwitchHorizontal />,
    roles:<HiOutlineShieldCheck/>,
    irr:<HiOutlineStar/>,
    allocationKey:<HiOutlineStar/>,
    authorizations:<HiOutlineFingerPrint/>
}

export default navigationIcon
