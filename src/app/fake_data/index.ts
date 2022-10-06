import { drink_list } from "@app/fake_data/drink_list";
import { fruit_list } from "@app/fake_data/fruit_list";
import { food_list } from "@app/fake_data/food-list";

export * from "./category";
export * from "./drink_list";
export * from "./fruit_list";
export * from "./food-list";
export * from "./user.data";
export const data = [...drink_list, ...fruit_list, ...food_list];
