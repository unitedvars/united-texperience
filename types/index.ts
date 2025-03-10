export interface Article {
  _id: string;
  _createdAt: string;
  mainImage: string;
  title: string;
  editorial: Editorial;
  subtitle: string;
  slug: Slug;
  author: Author;
  category: Category;
  content: any;
  releaseDate: string;
}

interface CategoryName {
  _key: "en" | "es";
  value: string;
}

export interface Category {
  hide_in_category_bar: boolean;
  name: CategoryName[];
  slug: Slug;
}

export interface Author {
  name: string;
  role: Role;
}

export interface Slug {
  current: string;
}

export interface Role {
  name: string;
}

export interface Editorial {
  name: string;
}

export interface Stats {
  _id: string;
  mainImage: string;
  title: string;
  description: string;
}

export interface Events {
  _id: string;
  mainImage: string;
  title: string;
  subtitle: string;
  url: string;
}

export interface SelectOption {
  label: string;
  value: {
    id: string;
  };
}

export interface Editorial {}

export type Lang = "en" | "es";
