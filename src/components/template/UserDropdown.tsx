import Avatar from '@/components/ui/Avatar'
import Dropdown from '@/components/ui/Dropdown'
import withHeaderItem from '@/utils/hoc/withHeaderItem'
import useAuth from '@/utils/hooks/useAuth'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import {
    HiOutlineLogout,
    HiOutlineUser,
    HiOutlineUserCircle,
} from 'react-icons/hi'
import type { CommonProps } from '@/@types/common'
import { useAppSelector } from '@/store'
import { useApi, useSignOut } from '@/utils/hooks/useApi'
import { notify } from '@/utils/commonHelper'
import { apiSignOut } from '@/services/auth.api'

type DropdownList = {
    label: string
    path: string
    icon: JSX.Element
}

const dropdownItemList: DropdownList[] = [
    {
        label: 'Profile',
        path: '/profile',
        icon: <HiOutlineUserCircle />,
    },
]

const _UserDropdown = ({ className }: CommonProps) => {
    const { signOut } = useAuth()
    const { name, email } = useAppSelector((state) => state.auth.user)

    const { mutate, isLoading } = useApi(apiSignOut, {
        onSuccess: () => {
            signOut()
        },
        onError: (error) => {
            notify(error?.response?.data?.message, false)
        },
    })

    const UserAvatar = (
        <div className={classNames(className, 'flex items-center gap-2')}>
            <Avatar size={32} shape="circle" icon={<HiOutlineUser />} />
            <div className="hidden md:block">
                <div className="text-xs capitalize">{email}</div>
                <div className="font-bold">{name}</div>
            </div>
        </div>
    )

    return (
        <div>
            <Dropdown
                menuStyle={{ minWidth: 240 }}
                renderTitle={UserAvatar}
                placement="bottom-end"
            >
                <Dropdown.Item variant="header">
                    <div
                        className="py-2 px-3 flex items-center gap-2"
                        onClick={() => console.log()}
                    >
                        <Avatar shape="circle" icon={<HiOutlineUser />} />
                        <div>
                            <div className="font-bold text-gray-900 dark:text-gray-100">
                                {name}
                            </div>
                            <div className="text-xs">{email}</div>
                        </div>
                    </div>
                </Dropdown.Item>
                <Dropdown.Item variant="divider" />
                {dropdownItemList.map((item) => (
                    <Dropdown.Item
                        key={item.label}
                        eventKey={item.label}
                        className="mb-1 px-0"
                    >
                        <Link
                            className="flex h-full w-full px-2"
                            to={item.path}
                        >
                            <span className="flex gap-2 items-center w-full">
                                <span className="text-xl opacity-50">
                                    {item.icon}
                                </span>
                                <span>{item.label}</span>
                            </span>
                        </Link>
                    </Dropdown.Item>
                ))}
                {/* <Dropdown.Item variant="divider" /> */}
                <Dropdown.Item
                    eventKey="Sign Out"
                    className="gap-2 px-2"
                    onClick={mutate}
                >
                    <span className="text-xl opacity-50">
                        <HiOutlineLogout />
                    </span>
                    <span>{isLoading ? 'Signing out...' : 'Sign Out'}</span>
                </Dropdown.Item>
            </Dropdown>
            {}
        </div>
    )
}

const UserDropdown = withHeaderItem(_UserDropdown)

export default UserDropdown
