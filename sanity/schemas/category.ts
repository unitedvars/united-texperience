import { HashIcon } from "@sanity/icons";

export const category = {
  title: "Category",
  name: "category",
  type: "document",
  icon: HashIcon,
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
  ],
};
