import { LockIcon } from "@sanity/icons";

export const copyright = {
  name: "copyright",
  type: "document",
  title: "Copyright",
  icon: LockIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Copyright",
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
