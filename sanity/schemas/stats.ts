import { DocumentTextIcon } from "@sanity/icons";

export const stats = {
  title: "Stats",
  name: "stats",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "MainImage",
      name: "mainImage",
      type: "image",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
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
      by: [{ field: "_createdAt", direction: "desc" }],
    },
    {
      title: "Published Date, Oldest",
      name: "publishDateOldest",
      by: [{ field:"_createdAt", direction: "asc" }],
    },
  ],
};
