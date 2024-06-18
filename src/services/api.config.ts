import axios, { AxiosInstance } from 'axios'
// Define a custom type that extends AxiosRequestConfig with 'contentType' property

const baseURL = import.meta.env.VITE_API_BASE_URL

const fetchApi: AxiosInstance = axios.create({
    baseURL,
})

const addContentType = (config) => {
    if (config.contentType === 'json') {
        // Set the 'Content-Type' header to 'application/json' for plain JSON data.
        config.headers['Content-Type'] = 'application/json'
    } else if (config.contentType === 'formdata') {
        // Set the 'Content-Type' header to 'multipart/form-data' for FormData.
        const formData = new FormData()
        if (config.data instanceof FormData) {
            for (const [key, value] of config.data) {
                formData.append(key, value)
            }
        } else {
            Object.entries(config.data || {}).forEach(([key, value]) => {
                formData.append(key, value)
            })
        }
        config.data = formData
        config.headers['Content-Type'] = 'multipart/form-data'
    } else if (config.contentType === 'query') {
        // For query parameters, append them to the URL directly.
        const params = new URLSearchParams(config.params).toString()
        config.url += `?${params}`
        delete config.params
    }

    return config
}

fetchApi.interceptors.request.use(
    (config) => {
        const token =
            JSON.parse(
                JSON.parse(localStorage.getItem('admin') ?? '')?.auth ?? ''
            )?.session?.token ?? ''
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        // Add the appropriate content type headers.
        return addContentType(config)
    },
    (error) => {
        return Promise.reject(error)
    }
)

fetchApi.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            console.log('')
        }
        return Promise.reject(error)
    }
)

export default fetchApi
