import { Component } from './Component.interface';


export interface Drawings {
  component?: Component
  component_id?: string
  created_at?: Date
  id?: string
  name: string
  type: string
  url?: string
  status? : boolean
  account_code_id?: string
  file?: Blob
  is_active?: boolean
}
