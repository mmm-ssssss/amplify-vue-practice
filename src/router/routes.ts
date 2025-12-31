import Home from "@/pages/home/Home.vue";
import Register from "@/pages/dogs/Register.vue";

export const useRoutes = () => {
  const routes = [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/dogs/register",
      name: "register",
      component: Register,
    },
  ];

  return { routes };
};
