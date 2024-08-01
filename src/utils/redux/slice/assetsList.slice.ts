import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Asset } from 'interfaces/Asset.interfaces'
import { ISelectOption } from 'interfaces/Select.interface'

interface assetsArray {
  data: Asset[]
  original: Asset[]
  dropdown: ISelectOption[]
}

const initialState: assetsArray = {
  data: [],
  original: [],
  dropdown: [],
}

export const assetsSlice = createSlice({
  name: 'assetsArray',
  initialState,
  reducers: {
    setAllAssetData: (state, action: PayloadAction<Asset[]>) => {
      state.data = action.payload
      state.original = action.payload
      const selectOptions = action.payload.map((vessel) => {
      return {
        label: vessel.code,
        value: vessel.id,
      }
    })
      selectOptions.unshift({ label: 'Select an option', value: '' }) // add default option
      state.dropdown = selectOptions
    },
  },
})

export const {
    setAllAssetData,
} = assetsSlice.actions
export const assetsReducer = assetsSlice.reducer
