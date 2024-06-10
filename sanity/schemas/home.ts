import { HomeIcon } from "@sanity/icons";
import { Rule } from "sanity";

export const home = {
  name: "home",
  type: "document",
  title: "Home",
  icon: HomeIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Home",
      disabled: true,
    },
    {
      name: "featuredArticle",
      title: "Featured Article",
      type: "reference",
      to: [{ type: "article" }],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
