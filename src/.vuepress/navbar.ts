import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/portfolio",
  {
    text: "Topics",
    icon: "book-open",
    link: "/guide/",
  },
]);
