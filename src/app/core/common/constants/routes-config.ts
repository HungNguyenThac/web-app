export const configRoutes = {
  APP_ROUTING: {
    PATH: "",
    AUTH_ROUTING: "auth",
    NOT_FOUND: "**",
    CHILDREN: {
      HOME: "",
      CART: "gio_hang",
      YOUR_ORDER: "don_hang",
      PARAM: ":slug",
    },
  },
  AUTH_ROUTING: {
    PATH: "",
    CHILDREN: {
      LOGIN: "sign-in",
      REGISTER: "register",
    },
  },
} as const;
