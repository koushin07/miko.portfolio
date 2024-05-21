import { createWebHistory, createRouter } from "vue-router";
import About from "../components/vintage/About.vue";
import Experience from "../components/vintage/Experience.vue";
import Projects from "../components/vintage/Projects.vue";

const routes = [
  { path: "/", name: "About", component: About },
  { path: "/experience", name: "Experience", component: Experience },
  {
    path: "/project",
    name: "Project",
    component: Projects,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
