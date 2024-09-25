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
      name
    },
    category->,
    editorial->,
    "mainImage": mainImage.asset->url,
    slug,
  }
}`;

export const ARTICLES = groq`*[_type == "article"] | order(_id)[$trim_start...$trim_end] {
  _createdAt,
  _id,
  title,
  subtitle,
  author->{
    role->,
    name
  },
  category->,
  editorial->,
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
    name
  },
  category->,
  editorial->,
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
    name
  },
  category->,
  editorial->,
  "mainImage": mainImage.asset->url,
  slug,
  content
}`;

export const STAT = groq`*[_type == "stats" && slug.current == $slug][0] {
  title,
  description,
  "mainImage": mainImage.asset->url
}`;

export const STATS = groq`*[_type == "stats"] | order(_id)[$trim_start...$trim_end] {
  title,
  description,
  "mainImage": mainImage.asset->url,
}`;

export const PAGINATED_ARTICLES_BY_CATEGORY = groq`*[_type == "article" && category->slug.current == $category] | order(_id)[$trim_start...$trim_end] {
  _createdAt,
  _id,
  title,
  subtitle,
  author->{
    role->,
    name
  },
  category->,
  editorial->,
  "mainImage": mainImage.asset->url,
  slug,
  content
}`;

export const CATEGORY_COUNT = groq`count(*[_type == "article" && category->slug.current == $category])`;

export const ALL_COUNT = groq`count(*[_type == "article"])`;