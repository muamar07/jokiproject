import { Asset } from './Asset.interfaces'
import { Catalogues } from './Catalogue.interface'
import { Drawings } from './Drawings.interface'

export interface Component {
  id: string
  account_code: string
  name: string
  category?: string
  components: SubComponent[]
  types?: string
}

export interface SubComponent {
  assets?: Asset[]
  account_code?: Component
  account_code_id: string
  subRows: SubComponent[]
  class_reference?: string
  component_code: string
  criticality?: string
  description?: string
  files?: Drawings[]
  id: string
  level: number
  maker?: string
  model?: string
  name: string
  parent_id?: string
  serial_number?: string
  deleted_at?: Date
  catalogues?: Catalogues[]
  requisition_component?: requisition_component
}

export interface requisition_component {
  quantity?: number
  ref_id?: string
  remarks?: string
}
