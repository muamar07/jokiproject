export interface Catalogues {
  id: string
  name: string
  products: Product[]
  status?: boolean
  created_at?: Date
  updated_at?: Date
}
export interface Product {
  component_code?: string
  description?: string
  id: string
  name: string
  product_code: string
  product_ref_id?: number
  quantity?: number
  remarks?: string
  stock?: number
  uom_name: string
  uom_symbol: string
  updated_at?: Date
  created_at?: Date
  status?: boolean
}
