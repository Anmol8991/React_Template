import fetchApi from './api.config'
import { AxiosRequestConfig } from 'axios'

interface CustomAxiosRequestConfig<T = unknown> extends AxiosRequestConfig<T> {
    contentType?: string
}

const formdataConfig: CustomAxiosRequestConfig = {
    contentType: 'formdata',
}

export const apiCheckPassword = async (payload) => {
    return fetchApi.post('/check-password', payload, formdataConfig)
}

export const apiRoleList = async () => {
    return fetchApi.get('/roles')
}

export const apiAddRole = async (payload) => {
    return fetchApi.post('/create-role', payload, formdataConfig)
}

export const apiUpdateRole = async (payload) => {
    return fetchApi.post('/update-role', payload, formdataConfig)
}

export const apiDeleteRole = async (payload) => {
    return fetchApi.post('/delete-role', payload, formdataConfig)
}

export const apiAddUser = async (payload) => {
    return fetchApi.post('/add-user', payload, formdataConfig)
}

export const apiUpdateProfile = async (payload) => {
    return fetchApi.post('/update-profile', payload, formdataConfig)
}
export const apiEditUser = async (payload) => {
    return fetchApi.post('/add-user', payload, formdataConfig)
}

export const apiAddClient = async (payload) => {
    return fetchApi.post('/add-client', payload, formdataConfig)
}

export const apiEditClient = async (payload) => {
    return fetchApi.post('/edit-client', payload, formdataConfig)
}
