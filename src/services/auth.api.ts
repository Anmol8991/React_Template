import fetchApi from './api.config'
import { AxiosRequestConfig } from 'axios'

interface CustomAxiosRequestConfig<T = unknown> extends AxiosRequestConfig<T> {
    contentType?: string
}

const formdataConfig: CustomAxiosRequestConfig = {
    contentType: 'formdata',
}

interface loginCredentialsInterface {
    username: string
    password: string
}

export const apiLogin = async (credentials: loginCredentialsInterface) => {
    return fetchApi.post('/sign-in', {}, { auth: credentials })
}

export const apiSignOut = async () => {
    return fetchApi.post('/sign-out')
}

export const apiForgotPassword = async (payload) => {
    return fetchApi.post('/forgot-password', payload, formdataConfig)
}

export const apiVerifyResetPasswordToken = async (payload) => {
    return fetchApi.post('/verify-token', payload, formdataConfig)
}

export const apiResetPassword = async (payload) => {
    return fetchApi.post('/reset-password', payload, formdataConfig)
}

export const apiGoogleLogin = async (payload) => {
    return fetchApi.post('/auth/google', payload, formdataConfig)
}