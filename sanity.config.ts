/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { structureTool } from "sanity/structure";

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
  ],
  schema: {
    types: schema.types,
  },
});
