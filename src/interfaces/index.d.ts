export interface ICategory {
  id: string;
  title: string;
}
export interface IPost {
  id: string;
  title: string;
  content: string;
  status: "published" | "draft" | "rejected";
  createdAt: string;
  category: ICategory;
}

export interface IRenter {
  id: string;
  name: string;
  phone: string;
  status: string;
  email?: string;
  details?: string;
  createdAt: string;
}

export interface IEstate {
  id: string;
  name: string;
  type: string;
  status: string;
  floorsNum: number;
  unitsPerFloor: number;
  details?: string;
  createdAt: string;
}

export interface IUnit {
  id: string;
  code: string;
  type: string;
  status: string;
  details?: string;
}

export interface IWallet {
  id: string;
  totalRecieved: number;
  recievedOffline: number;
  recievedOnline: number;
  totalPending: number;
  details?: string;
}
