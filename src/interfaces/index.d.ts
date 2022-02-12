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
