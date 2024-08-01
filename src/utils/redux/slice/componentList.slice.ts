import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Asset } from 'interfaces/Asset.interfaces'
import { Component } from 'interfaces/Component.interface'

export interface ComponentList {
  selectedAsset: Asset
  selectedAccountCode: Component
  componentList: []
}

const initialState: ComponentList = {
  selectedAsset: {
    id: '',
    code: '',
    name: '',
    type: '',
    asset_ref_id: 0,
  },
  selectedAccountCode: {
    id: '',
    account_code: '',
    name: '',
    components: [],
  },
  componentList: [],
}

export const componentListSlice = createSlice({
  name: 'componentListData',
  initialState,
  reducers: {
    setComponentList: (state, action: PayloadAction<[]>) => {
      state.componentList = action.payload
    },
    setComponentAccountCode: (state, action: PayloadAction<Component>) => {
      state.selectedAccountCode = action.payload
    },
    setComponentAsset: (state, action: PayloadAction<Asset>) => {
      state.selectedAsset = action.payload
    },
    resetComponentAccountCode: (state) => {
      state.selectedAccountCode = {
        id: '',
        account_code: '',
        name: '',
        components: [],
      }
    },
    resetComponentAsset: (state) => {
      state.selectedAsset = {
        id: '',
        code: '',
        name: '',
        type: '',
        asset_ref_id: 0,
      }
    },
    resetComponentList: (state) => {
      state.selectedAsset = {
        id: '',
        code: '',
        name: '',
        type: '',
        asset_ref_id: 0,
      }
      state.selectedAccountCode = {
        id: '',
        account_code: '',
        name: '',
        components: [],
      }
      state.componentList = []
    },
  },
})

export const {
  setComponentList,
  setComponentAccountCode,
  setComponentAsset,
  resetComponentAccountCode,
  resetComponentAsset,
  resetComponentList,
} = componentListSlice.actions
export const componentListReducer = componentListSlice.reducer
