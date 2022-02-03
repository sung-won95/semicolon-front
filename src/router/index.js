import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login.vue";
import Register from "../views/register.vue";
import MainPage from "@/views/mainpage";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {path: "/", component: Login},
    {path: "/register", component: Register},
    {path: "/MainPage", component: MainPage}
  ]
});

export default router;
