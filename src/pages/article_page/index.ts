import type { ComponentType } from "react";
import BuildingChickNCowPage from "./BuildingChickNCowPage";
import DataPersonLearnsFrontendPage from "./DataPersonLearnsFrontendPage";
import ExplainableModelsPage from "./ExplainableModelsPage";

/** Maps each article slug (see src/data/articles.ts) to its page. Register new article pages here. */
export const articlePages: Record<string, ComponentType> = {
  "building-chick-n-cow": BuildingChickNCowPage,
  "explainable-models": ExplainableModelsPage,
  "data-person-learns-frontend": DataPersonLearnsFrontendPage,
};
