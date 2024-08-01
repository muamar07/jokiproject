import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface expandableTable {
  data: number,
  currentSize: number
}

const initialState: expandableTable = {
  data: 10,
  currentSize: 10,
}

export const ExpandableTableSlice = createSlice({
  name: 'expandableTableData',
  initialState,
  reducers: {
    setExpandableTableData: (state, action: PayloadAction<number>) => {
      state.data = action.payload
    },
    setCurrentDataTableSize: (state, action: PayloadAction<number>) => {
      state.currentSize = action.payload

    }
  },
})

export const {
    setExpandableTableData,
    setCurrentDataTableSize
} = ExpandableTableSlice.actions
export const expandableTableSliceReducer = ExpandableTableSlice.reducer