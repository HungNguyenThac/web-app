export const configRoutes: any = {
  APP_ROUTING: {
    PATH: "",
    AUTH_ROUTING: "auth",
  },
  AUTH_ROUTING: {
    PATH: "",
    CHILDREN: {
      LOGIN: "sign-in",
    },
  },
};
