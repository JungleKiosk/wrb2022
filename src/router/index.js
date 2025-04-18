
import { createRouter, createWebHistory } from "vue-router";

import home from "../views/HomeView.vue";
import tools from "../views/ToolsView.vue";


/* ------------------------------------------------- */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/tools",
      name: "tools",
      component: tools,
    },
  ],
});

export default router;
