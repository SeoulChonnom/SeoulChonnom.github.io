import { createWebHistory, createRouter } from "vue-router";

import mainPage from "@/views/mainPage.vue";
import tripPage from "@/views/tripPage.vue";
import shoesRecom from "@/views/shoesRecom.vue";

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: mainPage,
  },
  {
    path: "/map/:date",
    name: "tripPage",
    component: tripPage,
  },
  {
    path: "/shoesRecom",
    name: "shoesRecom",
    component: shoesRecom,
  },
]; //라우팅 패스, 컴포넌트 등 정의

export const router = createRouter({
  scrollBehavior() {
    return { top: 0 };
  },
  history: createWebHistory(),
  routes: routes,
});
