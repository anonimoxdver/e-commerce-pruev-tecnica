import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const carrito = router({
  createCarrito: publicProcedure
    .input(
      z.object({
        carritoDeCompras: z.object({
          nombre: z.string(),
          descripcion: z.string(),
          image: z.string(),
  
          inventario: z.number(),
          
          slug: z.string(),
        }),
        quantity: z.number(),
        id: z.string(),
        precio: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.carrito.createMany({
        data: {
          caritoDeCompras: input.carritoDeCompras,
          quantity: input.quantity,
          id: input.id,
          precio: input.precio 
        },
        skipDuplicates: true,
      });  
  }),
  updateNumberOfQuantityOfProducts: publicProcedure
  .input(
    z.object({
      id: z.string(),
      quantity: z.number(),

    })
  )
  .mutation(async ({ ctx, input }) => {
    await ctx.prisma.carrito.update({
      where: {
        id: input.id,
      },
      data: {

        quantity: input.quantity,

      },

    });  
}),
  getAllCarrito: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.carrito.findMany();
  }),
});
