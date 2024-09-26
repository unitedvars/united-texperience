import { type SchemaTypeDefinition } from "sanity";
import { category } from "./schemas/category";
import { home } from "./schemas/home";
import { article } from "./schemas/article";
import { author } from "./schemas/author";
import { role } from "./schemas/role";
import { stats } from "./schemas/stats";
import { editorial } from "./schemas/editorial";
import { events } from "./schemas/events";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, home, article, stats, events, editorial, author, role],
};
