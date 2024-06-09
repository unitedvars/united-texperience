// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const CATEGORIES_QUERY = groq`*[_type == "category"]`;

export const HOME_QUERY = groq`*[_type == "home"][0] {
  featuredArticle->{
    title,
    subtitle,
    author->{
      name
    },
    category->{
      name
    }
  }
}`;
