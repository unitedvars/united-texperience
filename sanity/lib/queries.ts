// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const CATEGORIES_QUERY = groq`*[_type == "category"]`;

export const HOME_QUERY = groq`*[_type == "home"][0] {
  featuredArticle->{
    _createdAt,
    title,
    subtitle,
    author->{
      role->,
      institution->,
      name
    },
    category->,
    "mainImage": mainImage.asset->url,
    slug,
  }
}`;

export const ARTICLES = groq`*[_type == "article"] {
  _createdAt,
  _id,
  title,
  subtitle,
  author->{
    role->,
    institution->,
    name
  },
  category->,
  "mainImage": mainImage.asset->url,
  slug
}`;

export const ARTICLE = groq`*[_type == "article" && slug.current == $slug][0] {
  _createdAt,
  _id,
  title,
  subtitle,
  author->{
    role->,
    institution->,
    name
  },
  category->,
  "mainImage": mainImage.asset->url,
  slug,
  content
}`;

export const ARTICLES_BY_CATEGORY = groq`*[_type == "article" && category->slug.current == $category] {
  _createdAt,
  _id,
  title,
  subtitle,
  author->{
    role->,
    institution->,
    name
  },
  category->,
  "mainImage": mainImage.asset->url,
  slug,
  content
}`;
