import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface loaderInterface {
  loading: boolean
}

const initialState: loaderInterface = {
  loading: false,
}

export const loaderSlice = createSlice({
  name: 'loaderSlice',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const { setLoading } = loaderSlice.actions
export const loaderReducer = loaderSlice.reducer
