import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Asset } from 'interfaces/Asset.interfaces'
import { Product } from 'interfaces/Catalogue.interface'
import { Component } from 'interfaces/Component.interface'
import { Drawings } from 'interfaces/Drawings.interface'
import { User } from 'interfaces/LoginState.interfaces'
import { Requisition } from 'interfaces/Requisition.interfaces'

export interface AddRequisition {
  requisition_type: string
  vessel: Asset
  account_code: Component
  department: string
  requisition_number: string
  requisition_desc: string
  work_desc: string
  requisition_date: Date
  product: Product[]
  drawings?: Drawings[]
  ms_ts_approval_by: User
  ms_ts_approval_date: Date
  ms_ts_approval_status: string
  ms_ts_remarks: string
  status: string
  tm_approval_by: User
  tm_approval_date: Date
  tm_approval_status: string
  tm_remarks: string
  updated_at: Date
  created_by: User
}

const initialState: AddRequisition = {
  requisition_type: '',
  requisition_desc: '',
  work_desc: '',
  department: '',
  requisition_number: '',
  account_code: {
    id: '',
    account_code: '',
    name: '',
    components: [],
  },
  vessel: {
    id: '',
    code: '',
    name: '',
    type: '',
    asset_ref_id: 0,
  },
  requisition_date: new Date(),
  product: [],
  drawings: [],
  ms_ts_approval_by: {
    id: '',
    name: '',
    username: '',
  },
  ms_ts_approval_date: new Date(),
  ms_ts_approval_status: '',
  ms_ts_remarks: '',
  status: '',
  tm_approval_by: {
    id: '',
    name: '',
    username: '',
  },
  tm_approval_date: new Date(),
  tm_approval_status: '',
  tm_remarks: '',
  updated_at: new Date(),
  created_by: {
    id: '',
    name: '',
    username: '',
  },
}

export const addRequisitionSlice = createSlice({
  name: 'addRequisitionArray',
  initialState,
  reducers: {
    setRequisitionInput: (state, action: PayloadAction<Requisition>) => {
      console.log(action.payload)
      state.requisition_type = action.payload.type
      state.requisition_desc = action.payload.description
      state.work_desc = action.payload.work_description
      state.department = action.payload.department
      state.requisition_number = action.payload.requisition_number
      state.account_code = action.payload.account_code
      state.vessel = action.payload.asset
        ? action.payload.asset
        : {
            id: '',
            code: '',
            name: '',
            type: '',
            asset_ref_id: 0,
          }
      state.requisition_date = new Date(action.payload.date_acct)
      state.product = action.payload.products
      state.ms_ts_approval_by = action.payload.ms_ts_approval_by
      state.ms_ts_approval_date = new Date(action.payload.ms_ts_approval_date)
      state.ms_ts_approval_status = action.payload.ms_ts_approval_status
      state.ms_ts_remarks = action.payload.ms_ts_remarks
      state.status = action.payload.status
      state.tm_approval_by = action.payload.tm_approval_by
      state.tm_approval_date = new Date(action.payload.tm_approval_date)
      state.tm_approval_status = action.payload.tm_approval_status
      state.tm_remarks = action.payload.tm_remarks
      state.updated_at = new Date(action.payload.updated_at)
      state.drawings = action.payload.files
      state.created_by = action.payload.created_by
    },
    changeReqType: (state, action: PayloadAction<string>) => {
      state.requisition_type = action.payload
    },
    changeReqDesc: (state, action: PayloadAction<string>) => {
      state.requisition_desc = action.payload
    },
    changeWorkDesc: (state, action: PayloadAction<string>) => {
      state.work_desc = action.payload
    },
    changeDepartment: (state, action: PayloadAction<string>) => {
      state.department = action.payload
    },
    changeReqNumber: (state, action: PayloadAction<string>) => {
      state.requisition_number = action.payload
    },
    changeAccCode: (state, action: PayloadAction<Component>) => {
      state.account_code = action.payload
    },
    changeVessel: (state, action: PayloadAction<Asset>) => {
      state.vessel = action.payload
    },
    changeReqDate: (state, action: PayloadAction<Date>) => {
      state.requisition_date = action.payload
    },
    changeSubComp: (state, action: PayloadAction<Product[]>) => {
      state.product = action.payload
    },
    changeDrawing: (state, action: PayloadAction<Drawings[]>) => {
      state.drawings = action.payload
    },
    resetData: (state) => {
      state.requisition_type = ''
      state.requisition_desc = ''
      state.work_desc = ''
      state.department = ''
      state.requisition_number = ''
      state.account_code = {
        id: '',
        account_code: '',
        name: '',
        components: [],
      }
      state.vessel = {
        id: '',
        code: '',
        name: '',
        type: '',
        asset_ref_id: 0,
      }
      state.requisition_date = new Date()
      state.product = []
      state.drawings = []
      state.ms_ts_approval_by = {
        id: '',
        name: '',
        username: '',
      },
      state.ms_ts_approval_date = new Date()
      state.ms_ts_approval_status = ''
      state.ms_ts_remarks = ''
      state.tm_approval_by = {
        id: '',
        name: '',
        username: '',
      },
      state.tm_approval_date = new Date()
      state.tm_approval_status = ''
      state.tm_remarks = ''
      state.updated_at = new Date()
      state.created_by = {
        id: '',
        name: '',
        username: '',
      }
    },
    resetAccCode: (state) => {
      state.account_code = {
        id: '',
        account_code: '',
        name: '',
        components: [],
      }
    },
    resetVessel: (state) => {
      state.vessel = {
        id: '',
        code: '',
        name: '',
        type: '',
        asset_ref_id: 0,
      }
    },
  },
})

export const {
  setRequisitionInput,
  changeReqType,
  changeReqDesc,
  changeWorkDesc,
  changeDepartment,
  changeReqNumber,
  changeAccCode,
  changeVessel,
  changeReqDate,
  changeSubComp,
  changeDrawing,
  resetData,
  resetAccCode,
  resetVessel,
} = addRequisitionSlice.actions
export const addRequisitionReducer = addRequisitionSlice.reducer
