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
  id: string
  title: string
  type: string
  status: string
  validity: string
  date: string
  details?: string
}

export interface IInvoice {
  id: string
  title: string
  type: string
  status: string
  date: string
  details?: string
}

export interface IRepairRequest {
  id: string
  title: string
  type: string
  status: string
  date: string
  details?: string
}

export interface IWallet {
  id: string
  totalRecieved: number
  recievedOffline: number
  recievedOnline: number
  totalPending: number
  details?: string
}
