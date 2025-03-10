import { DocumentTextIcon } from "@sanity/icons";

export const article = {
  title: "Article",
  name: "article",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    },
    {
      title: 'Release date',
      name: 'releaseDate',
      type: 'date'
    },
    {
      title: "MainImage",
      name: "mainImage",
      type: "image",
    },
    {
      title: "Author",
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
    },
    {
      title: "Editorial",
      name: "editorial",
      type: "reference",
      to: [{ type: "editorial" }],
    },
    {
      title: "Category",
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                name: "externalLink",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "url",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
        { type: "slug", title: "YouTube Embed" },
        { type: "quote", title: "Blockquote" },
        {
          type: "image",
        },
      ],
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    },
  ],
  orderings: [
    {
      title: "Published Date, Latest",
      name: "publishDateLatest",
      by: [{ field: "releaseDate", direction: "desc" }],
    },
    {
      title: "Published Date, Oldest",
      name: "publishDateOldest",
      by: [{ field: "releaseDate", direction: "asc" }],
    },
  ],
};
