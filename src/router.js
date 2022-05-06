import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("/src/components/ToDoList")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("/src/components/ToDoInput")
  },
  {
    path: "/Feed",
    name: "feed",
    component: () => import("/src/views/Feed")
  },
  {
    path: "/home",
    name: "home",
    component: () => import("/src/views/Home")
  },
  {
    path: "/register-user",
    name: "register-user",
    component: () => import("/src/views/RegisterUser")
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("/src/views/SignIn")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;