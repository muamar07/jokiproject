import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Requisition } from 'interfaces/Requisition.interfaces'

interface requisitionArray {
  data: Requisition[]
  original: Requisition[]
}

const initialState: requisitionArray = {
  data: [],
  original: [],
}

export const requisitionSlice = createSlice({
  name: 'requisitionArray',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload)
      state.original.push(action.payload)
    },
    setAllData: (state, action: PayloadAction<Requisition[]>) => {
      state.data = action.payload
    },
    setOriginData: (state, action: PayloadAction<Requisition[]>) => {
      state.original = action.payload
    },
  },
})

export const { addData, setAllData, setOriginData } = requisitionSlice.actions
export const requisitionReducer = requisitionSlice.reducer
