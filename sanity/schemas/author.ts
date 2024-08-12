import { UserIcon } from "@sanity/icons";

export const author = {
  title: "Author",
  name: "author",
  type: "document",
  icon: UserIcon,
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Role",
      name: "role",
      type: "reference",
      to: [{ type: "role" }],
    },
    {
      title: "Institution",
      name: "institution",
      type: "reference",
      to: [{ type: "institution" }],
    },
  ],
};
