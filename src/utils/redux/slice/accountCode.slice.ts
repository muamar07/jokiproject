import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Component } from 'interfaces/Component.interface'
import { ISelectOption } from 'interfaces/Select.interface'

interface accountCodeArray {
  data: Component[]
  original: Component[]
  dropdown: ISelectOption[]
}

const initialState: accountCodeArray = {
  data: [],
  original: [],
  dropdown: [],
}

export const accountCodeSlice = createSlice({
  name: 'accountCodeArray',
  initialState,
  reducers: {
    setAllAccountCodeData: (state, action: PayloadAction<Component[]>) => {
      state.data = action.payload
      state.original = action.payload
      const selectOptions = action.payload.map((comp) => {
        return {
          label: comp.account_code + ' - ' + comp.name + ' - ' + comp.category,
          value: comp.account_code,
        }
      })
      selectOptions.unshift({ label: 'Select an option', value: '' }) // add default option
      state.dropdown = selectOptions
    },
  },
})

export const {
    setAllAccountCodeData,
} = accountCodeSlice.actions
export const accountCodeReducer = accountCodeSlice.reducer