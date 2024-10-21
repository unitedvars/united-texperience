// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

const articleParams = `(!defined($editorial) || editorial->name == $editorial) && (!defined($author) || author->name == $author) &&
 (!defined($dateFrom) || _createdAt >= $dateFrom) &&
 (!defined($dateTo) || _createdAt <= $dateTo)`;

const articlesQuery = `{
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

const eventParams = `{
  title,
  subtitle,
  "mainImage": mainImage.asset->url,
  url,
}`;

const statParams = `{
  title,
  description,
  "mainImage": mainImage.asset->url
}`;

export const CATEGORIES_QUERY = groq`*[_type == "category"]`;

export const HOME_QUERY = groq`*[_type == "home" && featuredArticle->language == $language][0] {
  featuredArticle->${articlesQuery}
}`;

export const ARTICLES = groq`*[_type == "article" && ${articleParams} && language == $language] | order(_id)[$trim_start...$trim_end] ${articlesQuery}`;

export const ARTICLE = groq`*[_type == "article" && slug.current == $slug][0] ${articlesQuery}`;

export const ARTICLES_BY_CATEGORY = groq`*[_type == "article" && category->slug.current == $category] ${articlesQuery}`;

export const STAT = groq`*[_type == "stats" && slug.current == $slug][0] ${statParams}`;

export const STATS = groq`*[_type == "stats"] | order(_id)[$trim_start...$trim_end] ${statParams}`;

export const EVENT = groq`*[_type == "events" && slug.current == $slug][0] ${eventParams}`;

export const EVENTS = groq`*[_type == "events"] | order(_id)[$trim_start...$trim_end] ${eventParams}`;

export const PAGINATED_ARTICLES_BY_CATEGORY = groq`*[_type == "article" && ${articleParams}] | order(_id)[$trim_start...$trim_end] ${articlesQuery}`;

export const CATEGORY_COUNT = groq`count(*[_type == "article" && category->slug.current == $category])`;

export const ALL_COUNT = groq`count(*[_type == "article" && ${articleParams} ])`;

export const AUTHORS = groq`*[_type == "author"]`;

export const EDITORIALS = groq`*[_type == "editorial"]`;
