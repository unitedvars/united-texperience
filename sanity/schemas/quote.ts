export const quote = {
  name: "quote",
  type: "object",
  title: "Blockquote",
  fields: [
    {
      name: "text",
      type: "array",
      title: "Blockquote",
      of: [{ type: "block" }],
    },
  ],
};
