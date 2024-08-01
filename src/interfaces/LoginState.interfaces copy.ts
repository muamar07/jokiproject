export interface TryLogin {
  username: string
  password: string
}

export interface LoginState {
  isLoggedIn: boolean
  user: User | null
  token: string | null
}

export interface LoginCMS {
  isLoggedIn: boolean
  username: UserCMS | null
  password: string | null
}

export interface Role {
  id: string
  name: string
  department: string
  level: number
  permissions: Permission[]
}

export interface Permission {
  id: string
  module_name: string
  all: boolean
  create: boolean
  delete: boolean
  update: boolean
  read: boolean
}

export interface User {
  id: string
  name: string
  username: string
  asset_id?: string
  address?: string
  email?: string
  phone_number?: string
  pwd_first_attempt?: boolean
  status?: number
  role?: Role
}

export interface UserCMS {
  username: string
  encryptedPassword: string
}
