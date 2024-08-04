// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const CATEGORIES_QUERY = groq`*[_type == "category"]`;

export const HOME_QUERY = groq`*[_type == "home"][0] {
  featuredArticle->{
    title,
    subtitle,
    author->,
    category->,
    "mainImage": mainImage.asset->url
  }
}`;

export const ARTICLES = groq`*[_type == "article"] {
  _id,
  title,
  slug,
  subtitle,
  author->,
  "mainImage": mainImage.asset->url,
  category->{
    name
  }
}`;

export const ARTICLE = groq`*[_type == "article" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  subtitle,
  author->,
  "mainImage": mainImage.asset->url,
  category->{
    name
  }
}`;
