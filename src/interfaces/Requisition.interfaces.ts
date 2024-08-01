import { Asset } from './Asset.interfaces'
import { Product } from './Catalogue.interface'
import { Component, SubComponent } from './Component.interface'
import { User } from './LoginState.interfaces'

export interface Requisition {
  account_code: Component
  asset: Asset
  code_reference: string
  created_by: User
  date_acct: Date
  department: string
  description: string
  document_number: string
  files: []
  id: string
  ms_ts_approval_by: User
  ms_ts_approval_date: Date
  ms_ts_approval_status: string
  ms_ts_remarks: string
  products: Product[]
  requisition_number: string
  revision_requested_by: string
  status: string
  tm_approval_by: User
  tm_approval_date: Date
  tm_approval_status: string
  tm_remarks: string
  type: string
  updated_at: Date
  work_description: string
}
