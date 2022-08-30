import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Details from "../views/Details";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },  {
    path: "/posts/:id",
    name: "details",
    component: Details,
    props:true //for accessing route parameter as props
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
