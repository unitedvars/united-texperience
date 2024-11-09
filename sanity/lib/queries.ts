// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

const articleParams = `
  (!defined($editorial)      || editorial->name == $editorial) 
  && (!defined($author)      || author->name == $author) 
  && (!defined($dateFrom)    || _createdAt >= $dateFrom)
  && (!defined($dateTo)      || _createdAt <= $dateTo) 
  && (!defined($searchParam) || 
    (title match $searchParam) ||
    (content[].children[].text match $searchParam) ||
    (author->name match $searchParam) ||
    (category->name match $searchParam) ||
    (subtitle match $searchParam)
  )
  && language == $language
`;

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
  content[]{
    ...,
    _type == "image" => {
      asset->
    },
    markDefs[]{
      ...,
      _type == "externalLink" => {
        "slug": @.reference->slug
      }
    }
  },
}`;

const eventsQuery = `{
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
  eventDate,
  content[]{
    ...,
    _type == "image" => {
      asset->
    },
    markDefs[]{
      ...,
      _type == "externalLink" => {
        "slug": @.reference->slug
      }
    }
  },
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

export const ARTICLES = groq`*[_type == "article" && ${articleParams}] | order(_id) [$trim_start...$trim_end] ${articlesQuery}`;

export const ARTICLES_ASC = groq`*[_type == "article" && ${articleParams}] | order(_createdAt asc) [$trim_start...$trim_end] ${articlesQuery}`;

export const ARTICLES_DESC = groq`*[_type == "article" && ${articleParams}] | order(_createdAt desc) [$trim_start...$trim_end] ${articlesQuery}`;

export const ARTICLE = groq`*[_type == "article" && slug.current == $slug][0] ${articlesQuery}`;

export const ARTICLES_BY_CATEGORY = groq`*[_type == "article" && category->slug.current == $category && language == $language] ${articlesQuery}`;

export const STAT = groq`*[_type == "stats" && slug.current == $slug][0] ${statParams}`;

export const STATS = groq`*[_type == "stats" && language == $language] | order(_id) [$trim_start...$trim_end] ${statParams}`;

export const EVENT = groq`*[_type == "events" && slug.current == $slug][0] ${eventParams}`;

export const EVENTS = groq`*[_type == "events" && language == $language] | order(_id) [$trim_start...$trim_end] ${eventParams}`;

export const EVENTS_ASC = groq`*[_type == "article" && ${eventParams}] | order(_createdAt asc) [$trim_start...$trim_end] ${eventsQuery}`;

export const EVENTS_DESC = groq`*[_type == "article" && ${eventParams}] | order(_createdAt desc) [$trim_start...$trim_end] ${eventsQuery}`;

export const PAGINATED_ARTICLES_BY_CATEGORY = groq`*[_type == "article" && category->slug.current == $category && language == $language && ${articleParams}] | order(_id) [$trim_start...$trim_end] ${articlesQuery}`;

export const CATEGORY_COUNT = groq`count(*[_type == "article" && category->slug.current == $category && ${articleParams}])`;

export const ALL_COUNT = groq`count(*[_type == "article" && ${articleParams} ])`;

export const EVENTS_COUNT = groq`count(*[_type == "event" && ${eventParams} ])`;

export const AUTHORS = groq`*[_type == "author"]`;

export const EDITORIALS = groq`*[_type == "editorial"]`;
