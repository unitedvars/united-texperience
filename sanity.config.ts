/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { structureTool } from "sanity/structure";
import { documentInternationalization } from "@sanity/document-internationalization";
import { internationalizedArray } from "sanity-plugin-internationalized-array";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { myStructure } from "./sanity/deskStructure";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  plugins: [
    structureTool({ structure: myStructure }),
    deskTool(),
    visionTool({ defaultApiVersion: apiVersion }),
    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        { id: "es", title: "Spanish" },
        { id: "en", title: "English" },
      ],
      schemaTypes: [
        "article",
        "stats",
        "events",
        "home",
        "copyright",
        "dataProtection",
      ],
    }),
    internationalizedArray({
      languages: [
        { id: "en", title: "English" },
        { id: "es", title: "Spanish" },
      ],
      defaultLanguages: ["en"],
      fieldTypes: ["string"],
    }),
  ],
  schema: {
    types: schema.types,
  },
});
