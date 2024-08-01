import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginState } from 'interfaces/LoginState.interfaces'
const initialState: LoginState = {
  isLoggedIn: false,
  user: null,
  token: null,
  role: ''
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<LoginState>) => {
      state.isLoggedIn = action.payload.isLoggedIn
      state.user = action.payload.user
      state.token = action.payload.token
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = false
      state.user = null
      state.token = action.payload
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.user = null
      state.token = null
      localStorage.removeItem('manadong_login');
    },
  },
})

export const { loginSuccess, loginFailure, logout } = loginSlice.actions
export const loginReducer = loginSlice.reducer
