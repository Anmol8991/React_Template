import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'

export type UserState = {
    id: 1
    avatar: string
    name: string
    email: string
    email_verified_at: null | boolean
    role_id: number
    role_name: string
    client_id: null | number
    status: boolean | null
    kyc: null
    created_at: string
    updated_at: string
}

const initialState: UserState = {
    id: 1,
    avatar: '',
    name: '',
    email: '',
    email_verified_at: null,
    role_id: null,
    role_name: '',
    client_id: null,
    status: null,
    kyc: null,
    created_at: '',
    updated_at: '',
}

const userSlice = createSlice({
    name: `${SLICE_BASE_NAME}/user`,
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state.id = action.payload?.id
            state.avatar = action.payload?.avatar
            state.name = action.payload?.name
            state.email = action.payload?.email
            state.email_verified_at = action.payload?.email_verified_at
            state.role_id = action.payload?.role_id
            state.role_name = action.payload?.role_name
            state.client_id = action.payload?.client_id
            state.status = action.payload?.status
            state.kyc = action.payload?.kyc
            state.created_at = action.payload?.created_at
            state.updated_at = action.payload?.updated_at
        },
    },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
