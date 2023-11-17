import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import AppDashboard from "../pages/AppDashboard.vue";
import AppDashboardRestaurants from "../pages/AppDashboardRestaurants.vue";
import AppDashboardRestaurantDetail from "../pages/AppDashboardRestaurantDetail.vue";
import AppDashboardRestaurantPlateDetail from "../pages/AppDashboardRestaurantPlateDetail.vue";
import AppDashboardProfile from "../pages/AppDashboardProfile.vue";
import AppDashboardOrders from "../pages/AppDashboardOrders.vue";
import AppDashboardCart from "../pages/AppDashboardCart.vue";

function requireAuth(to, from, next) {
  if (!localStorage.getItem("accessToken")) {
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
}

function requireAnonymous(to, from, next) {
  if (localStorage.getItem("accessToken")) {
    next({
      path: "/",
    });
  } else {
    next();
  }
}

const routes = [
  {
    path: "/:pathMatch(.*)*",
    redirect: "/dashboard",
  },
  { path: "/login", component: Login, beforeEnter: requireAnonymous },
  { path: "/register", component: Register, beforeEnter: requireAnonymous },
  {
    path: "/dashboard",
    component: AppDashboard,
    beforeEnter: requireAuth,
    redirect: "/dashboard/restaurants",
    children: [
      { path: "cart", component: AppDashboardCart },
      { path: "restaurants", component: AppDashboardRestaurants },
      { path: "profile", component: AppDashboardProfile },
      { path: "orders", component: AppDashboardOrders },
      {
        path: "restaurants/:restaurant_id",
        component: AppDashboardRestaurantDetail,
      },
      {
        path: "restaurants/:restaurant_id/plates/:plate_id",
        component: AppDashboardRestaurantPlateDetail,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
