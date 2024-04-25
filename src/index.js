import HomePage from "./pages/HomePage";
import HomePageContainer from "./components/HomePageContainer";
import messages_en from "./translations/en.json";
import reducer from "../reducer"

const DEFAULT_CONFIG = {
  "translations": [{ key: "en", messages: messages_en }],
  "reducers": [{ key: "home", reducer }],
  "core.Router": [{ path: "home", component: HomePage }],
  "home.HomePage.Container": HomePageContainer,
  "home.HomePage.Blocks": [],
};

export const HomeModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...((cfg && cfg["fe-home"]) || {}) };
};
