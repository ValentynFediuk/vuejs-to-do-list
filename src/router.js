import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("../../../../Downloads/vue-3-firestore-master/src/components/TutorialsList")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../../../../Downloads/vue-3-firestore-master/src/components/AddTutorial")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;