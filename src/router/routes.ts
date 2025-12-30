import Home from "@/pages/home/Home.vue";

export const useRoutes = () => {
  const routes = [
    {
      path: "/",
      name: "home",
      component: Home,
    },
  ];

  return { routes };
};
