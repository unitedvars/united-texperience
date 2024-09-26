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
}

export interface Category {
  hide_in_category_bar: boolean;
  name: string;
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
