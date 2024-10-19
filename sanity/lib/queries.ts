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

export const ARTICLES = groq`*[_type == "article" && (!defined($editorial) || editorial->name == $editorial) && (!defined($author) || author->name == $author) && (!defined($dateFrom) || _createdAt >= $dateFrom) && (!defined($dateTo) || _createdAt <= $dateTo)] | order(_id)[$trim_start...$trim_end] {
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

export const EVENT = groq`*[_type == "events" && slug.current == $slug][0] {
  title,
  subtitle,
  "mainImage": mainImage.asset->url,
  url,
}`;

export const EVENTS = groq`*[_type == "events"] | order(_id)[$trim_start...$trim_end] {
  title,
  subtitle,
  "mainImage": mainImage.asset->url,
  url,
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

export const AUTHORS = groq`*[_type == "author"]`;

export const EDITORIALS = groq`*[_type == "editorial"]`;

export const FILTERED_ARTICLES = groq`*[_type == "article" && category->slug.current == $category && author->name === $author] | order(_id)[$trim_start...$trim_end] {
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
