import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

import "vue-router";
declare module "vue-router" {
  interface RouteMeta {}
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "home",
      path: "/",
      component: Home.vue,
    },
    {
      name: "layout",
      path: "/layout",
      component: () => import("../views/Layout.vue"),
      children: [
        {
          name: "configuration",
          path: "",
          component: () => import("../views/GameConfiguration.vue"),
        }
      ]
    },
  ],
});

export default router;
