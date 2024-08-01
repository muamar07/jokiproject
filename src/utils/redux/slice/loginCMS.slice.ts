import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginCMS, LoginState } from 'interfaces/LoginState.interfaces'
const initialState: LoginCMS = {
  isLoggedIn: false,
  username: null,
  password: null,
}

export const loginCMSSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginCMSSuccess: (state, action: PayloadAction<LoginCMS>) => {
      state.isLoggedIn = action.payload.isLoggedIn
      state.username = action.payload.username
      state.password = action.payload.password
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = false
      state.username = null
      state.password = action.payload
    },
    loginStill: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = true
      // state.username = action.payload.username
      // state.password = action.payload
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.username = null
      state.password = null
      localStorage.removeItem('manadong_login');
    },
  },
})

export const { loginCMSSuccess, loginFailure, loginStill,  logout } = loginCMSSlice.actions
export const loginCmsReducer = loginCMSSlice.reducer
