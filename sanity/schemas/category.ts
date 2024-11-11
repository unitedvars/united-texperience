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
      type: "internationalizedArrayString",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      title: "Hide in Category Bar",
      name: "hide_in_category_bar",
      type: "boolean",
    },
  ],
};
