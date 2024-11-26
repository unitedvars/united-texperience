import { LockIcon } from "@sanity/icons";

export const dataProtection = {
  name: "dataProtection",
  type: "document",
  title: "Data Protection",
  icon: LockIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Data Protection",
      disabled: true,
    },
    {
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
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
  ],
};
