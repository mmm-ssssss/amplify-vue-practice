import TodoView from "../components/Todos.vue";

export const useRoutes = () => {
  const routes = [
    {
      path: "/",
      name: "home",
      component: TodoView,
    },
  ];

  return { routes };
};
