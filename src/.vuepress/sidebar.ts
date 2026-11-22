import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "portfolio",
    {
      text: "学习笔记",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
  ],
});
