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
  ],
};
