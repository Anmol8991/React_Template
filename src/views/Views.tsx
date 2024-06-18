import { Suspense } from 'react'
import Loading from '@/components/shared/Loading'
import { protectedRoutes, publicRoutes } from '@/configs/routes.config'
import appConfig from '@/configs/app.config'
import PageContainer from '@/components/template/PageContainer'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from '@/store'
import ProtectedRoute from '@/components/route/ProtectedRoute'
import PublicRoute from '@/components/route/PublicRoute'
import AuthorityGuard from '@/components/route/AuthorityGuard'
import AppRoute from '@/components/route/AppRoute'
import type { LayoutType } from '@/@types/theme'
import InactivityDetector from '@/components/layouts/InactiveTracker'
import useAuth from '@/utils/hooks/useAuth'
import { ToastContainer } from 'react-toastify'

interface ViewsProps {
    pageContainerType?: 'default' | 'gutterless' | 'contained'
    layout?: LayoutType
}

type AllRoutesProps = ViewsProps

const { authenticatedEntryPath } = appConfig

const AllRoutes = (props: AllRoutesProps) => {
    const userAuthority = useAppSelector((state) => state.auth.user.authority)

    return (
        <>
            <Routes>
                <Route path="/" element={<ProtectedRoute />}>
                    <Route
                        path="/"
                        element={
                            <Navigate replace to={authenticatedEntryPath} />
                        }
                    />
                    {protectedRoutes.map((route, index) => (
                        <Route
                            key={route.key + index}
                            path={route.path}
                            Component={() => {
                                document.title = route.title
                                    ? `${route.title} | FundPe.org`
                                    : 'FundPe.org'
                                return (
                                    <AuthorityGuard
                                        userAuthority={userAuthority}
                                        authority={route.authority}
                                    >
                                        <PageContainer {...props}>
                                            <AppRoute
                                                routeKey={route.key}
                                                component={route.component}
                                            />
                                        </PageContainer>
                                    </AuthorityGuard>
                                )
                            }}
                        />
                    ))}
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Route>
                <Route path="/" element={<PublicRoute />}>
                    {publicRoutes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            Component={() => {
                                document.title = route.title
                                    ? `${route.title} | FundPe.org`
                                    : 'FundPe.org'
                                return (
                                    <AppRoute
                                        routeKey={route.key}
                                        component={route.component}
                                    />
                                )
                            }}
                        />
                    ))}
                </Route>
            </Routes>
        </>
    )
}

const Views = (props: ViewsProps) => {
    const { authenticated } = useAuth()
    return (
        <>
            {/* Component to logout user automatically after 15 Mins */}
            {authenticated && (
                <InactivityDetector logoutThresholdInMinutes={15} />
            )}

            {/* Toast notification component */}
            <ToastContainer
                hideProgressBar
                newestOnTop
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                position="top-right"
                autoClose={3000}
                rtl={false}
                theme="light"
            />
            <Suspense fallback={<Loading loading={true} />}>
                <AllRoutes {...props} />
            </Suspense>
        </>
    )
}

export default Views
