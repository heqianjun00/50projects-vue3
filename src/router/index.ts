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
      title: "Hidden Search"
    }
  },
  {
    path: "/blurry-loading",
    name: "blurry-loading",
    component: () => import("@/views/05-blurry-loading/Index.vue"),
    meta: {
      title: "Blurry Loading"
    }
  },
  {
    path: "/scroll-animation",
    name: "scroll-animation",
    component: () => import("@/views/06-scroll-animation/Index.vue"),
    meta: {
      title: "Scroll Animation"
    }
  },
  {
    path: "/split-landing-page",
    name: "split-landing-page",
    component: () => import("@/views/07-split-landing-page/Index.vue"),
    meta: {
      title: "Split Landing Page"
    }
  },
  {
    path: "/form-input-wave",
    name: "form-input-wave",
    component: () => import("@/views/08-form-input-wave/Index.vue"),
    meta: {
      title: "Form Input Wave"
    }
  },
  {
    path:"/sound-board",
    name: "sound-board",
    component: () => import("@/views/09-sound-board/Index.vue"),
    meta: {
      title: "Sound Board"
    }
  },
  {
    path:"/dad-jokes",
    name: "dad-jokes",
    component: () => import("@/views/10-dad-jokes/Index.vue"),
    meta: {
      title: "Dad Jokes"
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