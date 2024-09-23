import { type SchemaTypeDefinition } from "sanity";
import { category } from "./schemas/category";
import { home } from "./schemas/home";
import { article } from "./schemas/article";
import { author } from "./schemas/author";
import { role } from "./schemas/role";
import { institution } from "./schemas/institution";
import { stats } from "./schemas/stats";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, home, article, author, role, institution, stats],
};
