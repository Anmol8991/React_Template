import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'dashboard',
        path: '/dashboard',
        title: 'Dashboard',
        component: lazy(() => import('@/views/dashboard/Home')),
        authority: [],
    },
    {
        key: 'clients',
        path: '/clients',
        title: 'All Clients ~ Clients',
        component: lazy(() => import('@/views/client/Clients')),
        authority: [],
    },
    {
        key: 'clients',
        path: '/clients/addClient',
        title: 'Add Client ~ Clients',
        component: lazy(() => import('@/views/client/AddClient')),
        authority: [],
    },
    {
        key: 'clients',
        path: '/clients/clientDetail/:clientId',
        title: 'Client Details',
        component: lazy(() => import('@/views/client/ClientDetail')),
        authority: [],
    },
    {
        key: 'investors',
        path: '/investors',
        title: 'Investors ~ Investors',
        component: lazy(() => import('@/views/investor/Investors')),
        authority: [],
    },
    {
        key: 'investors',
        path: '/investors/:investorId',
        title: 'Investor Details ~ Investors',
        component: lazy(
            () => import('@/views/investor/AddInvestor')
        ),
        authority: [],
    },

    {
        key: 'investors',
        path: 'investors/addInvestors',
        title: 'Add Investor ~ Investors',
        component: lazy(() => import('@/views/investor/AddInvestor')),
        authority: [],
    },
    {
        key: 'users',
        path: '/users',
        title: 'All Users ~ Users',
        component: lazy(() => import('@/views/users/Users')),
        authority: [],
    },
    {
        key: 'users',
        path: '/users/userDetails/:userId',
        title: 'User Details ~ Users',
        component: lazy(() => import('@/views/users/UserDetails')),
        authority: [],
    },
    {
        key: 'users',
        path: '/users/addUser',
        title: 'Add User ~ Users',
        component: lazy(() => import('@/views/users/AddUser')),
        authority: [],
    },
    {
        key: 'globalMasters',
        path: '/globalMasters',
        title: 'Global Masters',
        component: lazy(() => import('@/views/masters/Masters')),
        authority: [],
    },
    {
        key: 'roles',
        path: '/roles',
        title: 'Roles',
        component: lazy(() => import('@/views/roles/Roles')),
        authority: [],
    },
    {
        key: 'drawdowns',
        path: '/drawdowns',
        title: 'Drawdowns',
        component: lazy(() => import('@/views/Drawdowns')),
        authority: [],
    },
    {
        key: 'investmentAssets',
        path: '/investmentAssets',
        title: 'Investment Assets',
        component: lazy(() => import('@/views/InvestmentAssets')),
        authority: [],
    },
    {
        key: 'pipelines',
        path: '/pipelines',
        title: 'Pipelines',
        component: lazy(() => import('@/views/Pipelines')),
        authority: [],
    },
    {
        key: 'funds',
        path: '/funds',
        title: 'All Funds ~ Funds',
        component: lazy(() => import('@/views/funds/AllFunds')),
        authority: [],
    },
    {
        key: 'fund.details',
        path: '/funds/fundDetails/:index',
        title: 'Fund Details',
        component: lazy(() => import('@/views/funds/components/FundDetails')),
        authority: [],
    },
    {
        key: 'fund.scheme',
        path: '/fund/scheme',
        title: 'Add Schemes',
        component: lazy(
            () => import('@/views/funds/components/details/Schemes')
        ),
        authority: [],
    },
    {
        key: 'fund.scheme',
        path: '/fund/scheme/:id',
        title: 'Add Schemes',
        component: lazy(
            () => import('@/views/funds/components/details/Schemes')
        ),
        authority: [],
    },
    {
        key: 'funds.createFund',
        path: '/funds/createFund',
        title: 'Create Fund ~ Funds',
        component: lazy(() => import('@/views/funds/components/CreateFund')),
        authority: [],
    },
    {
        key: 'allSchemes',
        path: '/allSchemes',
        title: '',
        component: lazy(
            () => import('@/views/funds/components/details/AllSchemesTable')
        ),
        authority: [],
    },

    {
        key: 'notices',
        path: '/notices',
        title: 'Notices',
        component: lazy(() => import('@/views/Notices')),
        authority: [],
    },
    {
        key: 'newNotices',
        path: '/newNotices',
        title: 'New Notice ~ Notices',
        component: lazy(() => import('@/views/NewNotice')),
        authority: [],
    },
    {
        key: 'reports',
        path: '/reports',
        title: 'Reports',
        component: lazy(() => import('@/views/Reports')),
        authority: [],
    },
    {
        key: 'transactions',
        path: '/transactions',
        title: 'Transactions',
        component: lazy(() => import('@/views/Transactions')),
        authority: [],
    },
    {
        key: 'profile',
        path: '/profile',
        title: 'Profile',
        component: lazy(() => import('@/views/profile/Profile')),
        authority: [],
    },
    {
        key: 'authorizations',
        path: '/authorizations',
        title: 'Authorizations',
        component: lazy(() => import('@/views/authorizations/Authorizations')),
        authority: [],
    },
]
