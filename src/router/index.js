import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import i18n from "../i18n";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`,
  },
  {
    path: "/:lang",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "rick-and-morty/characters",
        name: "rick-and-morty-characters",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "rick-and-morty-characters" */ "../views/rick-and-morty/characters/index.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
