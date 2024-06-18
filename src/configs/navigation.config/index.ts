import {
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'
import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    {
        key: 'dashboard',
        path: '/dashboard',
        title: 'Dashboard',
        translateKey: 'nav.dashboard',
        icon: 'dashboard',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'clients',
        path: '/clients',
        title: 'Clients',
        translateKey: 'nav.clients',
        icon: 'clients',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'users',
        path: '/users',
        title: 'Users',
        translateKey: 'nav.users',
        icon: 'users',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'funds',
        path: '/funds',
        title: 'Funds & Schemes',
        translateKey: 'nav.funds',
        icon: 'funds',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [
            // {
            //     key: 'funds.allFunds',
            //     path: '/funds/allFunds',
            //     title: 'All Funds',
            //     translateKey: 'nav.funds.allFunds',
            //     icon: '',
            //     type: NAV_ITEM_TYPE_ITEM,
            //     authority: [],
            //     subMenu: [],
            // },
            // {
            //     key: 'allSchemes',
            //     path: '/allSchemes',
            //     title: 'Schemes',
            //     translateKey: 'nav.schemes',
            //     icon: 'roles',
            //     type: NAV_ITEM_TYPE_ITEM,
            //     authority: [],
            //     subMenu: [],
            // },
        ],
    },
    {
        key: 'investors',
        path: '/investors',
        title: 'Investors',
        translateKey: 'nav.investors',
        icon: 'investors',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },

    {
        key: 'globalMasters',
        path: '/globalMasters',
        title: 'Global Masters',
        translateKey: 'nav.globalMasters',
        icon: 'masters',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'authorizations',
        path: '/authorizations',
        title: 'Authorizations',
        translateKey: 'nav.authorizations',
        icon: 'authorizations',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'roles',
        path: '/roles',
        title: 'Roles',
        translateKey: 'nav.roles',
        icon: 'roles',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'drawdowns',
        path: '/drawdowns',
        title: 'Drawdowns',
        translateKey: 'nav.drawdowns',
        icon: 'roles',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'investmentAssets',
        path: '/investmentAssets',
        title: 'Investment Assets',
        translateKey: 'nav.investmentAssets',
        icon: 'roles',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'pipelines',
        path: '/pipelines',
        title: 'Pipelines',
        translateKey: 'nav.pipelines',
        icon: 'roles',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },

    {
        key: 'notices',
        path: '/notices',
        title: 'Notices',
        translateKey: 'nav.notices',
        icon: 'notices',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'reports',
        path: '/reports',
        title: 'Reports',
        translateKey: 'nav.reports',
        icon: 'reports',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'transactions',
        path: '/transactions',
        title: 'Transactions',
        translateKey: 'nav.transactions',
        icon: 'transactions',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
]

export default navigationConfig
