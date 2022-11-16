import { createWebHistory, createRouter } from "vue-router";
import Home from "./../App.vue";
import About from "./../components/subscribePage.vue";
import Collection from "./../components/photoCollection.vue";
import Product from "./../components/productPage.vue";
import Download from "./../components/downloadPdf.vue";
/* eslint-disable */
const routes = [
  {
    path: '/:lang',
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/collection",
    name: "Collection",
    component: Collection,
  },
  {
    path: "/product",
    name: "Product-Page",
    component: Product,
  },
  {
    path: "/pdf",
    name: "downloadPdf",
    component: Download,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;