import { createSlice } from '@reduxjs/toolkit'

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
    },
    reducers: {
        signin: (state, action) => {
            state.user = action.payload
        },
        signout: (state) => {
            state.user = {}
        },
    },
})

export const { signin, signout } = AuthSlice.actions

export default AuthSlice.reducer
