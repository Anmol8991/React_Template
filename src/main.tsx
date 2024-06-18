/* eslint-disable import/default */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_G00GLE_CLIENT_ID}>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </GoogleOAuthProvider>
    </React.StrictMode>
)
