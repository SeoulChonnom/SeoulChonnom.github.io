import { createWebHistory, createRouter } from "vue-router";

import mainPage from "@/views/mainPage.vue";
import tripPage from "@/views/tripPage.vue";

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
]; //라우팅 패스, 컴포넌트 등 정의

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
