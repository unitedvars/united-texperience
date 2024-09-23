import { DocumentTextIcon } from "@sanity/icons";

export const stats = {
  title: "Stats",
  name: "stats",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    {
      title: "Stat",
      name: "stat",
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
