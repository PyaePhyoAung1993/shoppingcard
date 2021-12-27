import Vue from "vue";
import VueRouter from "vue-router";
import AboutVue from "./views/About.vue";
import HomeVue from "./views/Home.vue";
import loginVue from "./views/Login.vue";
import ProductVue from "./views/Product.vue";
import ProductDetailVue from "./views/ProductDetail.vue";
import ProfileVue from "./views/Profile.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomeVue },
  { path: "/About", component: AboutVue },
  { path: "/Product", component: ProductVue },
  { path: "/Product/:id", component: ProductDetailVue },
  { path: "/Login", component: loginVue },
  {
    path: "/Profile",
    component: ProfileVue,
    // beforeEnter: (to, from, next) => {
    //   let auth = localStorage.getItem("auth");
    //   if (auth) {
    //     next();
    //   } else {
    //     next("/Login");
    //   }
    // },
  },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

// router.beforeEach((to, from, next) => {
//   console.log("Middleware is working");
//   next();
// });
//Global Route
router.beforeEach((to, from, next) => {
  if (
    to.path === "/Profile" ||
    to.path === "/Product" ||
    to.path === "/About" ||
    to.path === "/"
  ) {
    let auth = localStorage.getItem("auth");
    if (auth) {
      next();
    } else {
      next("/Login");
    }
  } else {
    next();
  }
});

export default router;
