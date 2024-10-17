import { createWebHistory, createRouter } from "vue-router";

import mainPage from "@/components/mainPage.vue";

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: mainPage,
  },
]; //라우팅 패스, 컴포넌트 등 정의

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
