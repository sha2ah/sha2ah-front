export interface ICategory {
  id: string
  title: string
}
export interface IPost {
  id: string
  title: string
  content: string
  status: 'published' | 'draft' | 'rejected'
  createdAt: string
  category: ICategory
}

export interface IRenter {
  id: string
  name: string
  phone: string
  status: string
  email?: string
  bio?: string
  createdAt: string
  birth_date?: string
}

export interface IEstate {
  id?: string
  name: string
  estate_type: string
  number_of_floors: number
  units_per_floor: number
}

export interface IUnit {
  id?: string
  name: string
  phone: string
  floor: string
  number: string
  estate: string
}

export interface IContract {
  id?: string
  beneficiary_name: string
  type: string
  rent_cost: Number
  rent_frequency: string
  contract_holder_name?: string
  date_from: string
  date_to: string
  first_rent_due_date: string
  user: string
  unit: string
  notes: string
}

export interface IInvoice {
  id?: string
  issue_date: string
  due_date: string
  payment_method: string
  status: string
  unit: string
  total: string
  created: string
  modified: string
  details?: string
}

export interface IRepairRequest {
  id?: string
  status: string
  date: string
  details: string
  user: string
  unit: string
  notes?: string
}

export interface IWallet {
  id: string
  totalRecieved: number
  recievedOffline: number
  recievedOnline: number
  totalPending: number
  details?: string
}
