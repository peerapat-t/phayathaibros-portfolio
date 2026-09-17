import { createElement, type ComponentType } from "react";
import ChickNCowPage from "./ChickNCowPage";
import PlaceholderPage from "./PlaceholderPage";

const placeholder = (slug: string) => () => createElement(PlaceholderPage, { slug });

/** Maps each project slug (see src/data/projects.ts) to its page. Register new project pages here. */
export const projectPages: Record<string, ComponentType> = {
  "chick-n-cow": ChickNCowPage,
  "placeholder-web-app": placeholder("placeholder-web-app"),
  "placeholder-tool": placeholder("placeholder-tool"),
  "placeholder-data-viz": placeholder("placeholder-data-viz"),
};
