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

export interface Category {
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
