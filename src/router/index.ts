import { createRouter, createWebHistory, Router } from "vue-router";

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/Index.vue"),
  },
  {
    path: "/expanding-cards",
    name: "expanding-cards",
    component: () => import("@/views/01-expanding-cards/Index.vue"),
    meta: {
      title: "Expanding Cards"
    }
  },
  {
    path: "/progress-steps",
    name: "progress-steps",
    component: () => import("@/views/02-progress-steps/Index.vue"),
    meta: {
      title: "Progress Steps"
    }
  },
  {
    path: "/rotating-nav-animation",
    name: "rotating-nav-animation",
    component: () => import("@/views/03-rotating-nav-animation/Index.vue"),
    meta: {
      title: "Rotating Nav"
    }
  },
  {
    path: "/hidden-search",
    name: "hidden-search",
    component: () => import("@/views/04-hidden-search/Index.vue"),
    meta: {
      id: 0,
      title: "Hidden Search"
    }
  },
  {
    path: "/blurry-loading",
    name: "blurry-loading",
    component: () => import("@/views/05-blurry-loading/Index.vue"),
    meta: {
      id: 0,
      title: "Blurry Loading"
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: () => import("@/views/error/Index.vue")
  }
]

const router: Router= createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router;