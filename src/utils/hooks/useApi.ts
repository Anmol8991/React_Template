/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from 'react-query'


interface ApiFunctions {
    (payload: any): Promise<any>
}
interface getApiFunctions {
    (): Promise<any>
}

interface OtherFunctions {
    onSuccess?: (response: any) => void
    onError?: (err: any) => void
}

export const useApi = (apiFun: ApiFunctions, otherFun?: OtherFunctions) => {
    return useMutation(apiFun, otherFun)
}

export const useGetApi = (key: string , apiFun: getApiFunctions, otherFun?: OtherFunctions) => {
    return useQuery(key, apiFun, otherFun)
}

