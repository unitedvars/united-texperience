import { UserIcon } from "@sanity/icons";

export const role = {
  title: "Role",
  name: "role",
  type: "document",
  icon: UserIcon,
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
  ],
};
