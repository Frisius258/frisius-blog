import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/frisius-blog/",

  lang: "zh-CN",
  title: "Frisius's Personal Website",
  description: "Frisius's personal space for learning and creating",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
