import type { ComponentType } from "react";
import BaanFinderPage from "./BaanFinderPage";
import DotsyncPage from "./DotsyncPage";
import FarmSensePage from "./FarmSensePage";
import FintrackDesignSystemPage from "./FintrackDesignSystemPage";
import KinkaoDeliveryPage from "./KinkaoDeliveryPage";
import PayGatewayPage from "./PayGatewayPage";
import QueueQPage from "./QueueQPage";
import SarabanAiPage from "./SarabanAiPage";
import ThaiSlugifyPage from "./ThaiSlugifyPage";
import WatGuidePage from "./WatGuidePage";

/** Maps each project slug (see src/data/projects.ts) to its page. Register new project pages here. */
export const projectPages: Record<string, ComponentType> = {
  "kinkao-delivery": KinkaoDeliveryPage,
  "saraban-ai": SarabanAiPage,
  "baan-finder": BaanFinderPage,
  "thai-slugify": ThaiSlugifyPage,
  "pay-gateway": PayGatewayPage,
  "wat-guide": WatGuidePage,
  "fintrack-design-system": FintrackDesignSystemPage,
  "farm-sense": FarmSensePage,
  "queue-q": QueueQPage,
  "dotfiles-cli": DotsyncPage,
};
