import { DocumentTextIcon } from "@sanity/icons";

export const events = {
  title: "Events",
  name: "events",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    },
    {
      title: "MainImage",
      name: "mainImage",
      type: "image",
    },
    {
      title: "Url",
      name: "url",
      type: "string",
    },
    {
      title: "Event Date",
      name: "eventDate",
      type: "date",
    },
    {
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    },
  ],
};
