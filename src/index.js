import HomePage from "./pages/HomePage";

import HomePageContainer from "./components/HomePageContainer";

const DEFAULT_CONFIG = {
  "core.Router": [{ path: "home", component: HomePage }],
  "home.HomePage.Container": HomePageContainer,
  "home.HomePage.Blocks": [],
};

export const HomeModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...((cfg && cfg["fe-home"]) || {}) };
};
