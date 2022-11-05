import { router } from "../trpc";
import { carrito } from "./carrito";
import {  getProducts } from "./getProducts";
import { productRouter } from "./product";

export const appRouter = router({
  getingProducts: getProducts,
  product: productRouter,
  carrito: carrito
});

// export type definition of API
export type AppRouter = typeof appRouter;
