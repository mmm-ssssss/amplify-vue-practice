import Home from "@/pages/home/Home.vue";
import List from "@/pages/dogs/List.vue";
import Detail from "@/pages/dogs/Detail.vue";
import Register from "@/pages/dogs/Register.vue";

export const useRoutes = () => {
  const routes = [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/dogs/list",
      name: "list",
      component: List,
    },
    {
      path: "/dogs/detail/:dogId",
      name: "detail",
      props: true,
      component: Detail,
    },
    {
      path: "/dogs/register",
      name: "register",
      component: Register,
    },
  ];

  return { routes };
};
