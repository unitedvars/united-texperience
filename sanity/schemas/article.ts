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
        { type: "block" },
        { type: "slug", title: "Link URL" },
        { type: "quote", title: "Blockquote" },
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
  ],
};
