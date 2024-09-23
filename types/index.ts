export interface Article {
  _id: string;
  _createdAt: string;
  mainImage: string;
  title: string;
  subtitle: string;
  slug: Slug;
  author: Author;
  category: Category;
}

export interface Stats {
  _id: string;
  mainImage: string;
  stat: string;
  description: string;
}

export interface Category {
  hide_in_category_bar: boolean;
  name: string;
  slug: Slug;
}

export interface Author {
  name: string;
  institution: Institution;
  role: Role;
}

export interface Slug {
  current: string;
}

export interface Institution {
  name: string;
}

export interface Role {
  name: string;
}
