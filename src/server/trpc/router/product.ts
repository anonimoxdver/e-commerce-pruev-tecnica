import { number, z } from "zod";

import { router, publicProcedure } from "../trpc";

export const productRouter = router({
  createProduct: publicProcedure
    .input(
      z.object({
        nombre: z.string(),
        descripcion: z.string(),
        image: z.string(),

        inventario: z.number(),
        precio: z.number(),
        slug: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.products.create({
        data: {

          descripcion: input.descripcion,
          image: input.image,
          nombre: input.nombre,
          inventario: input.inventario,
          precio: input.precio,
          slug: input.slug

        },
      });
    }),
  updateProduct: publicProcedure
    .input(
      z.object({
        nombre: z.string(),
        id: z.string(),
        descripcion: z.string(),
        image: z.string(),
        inventario: z.number(),
        precio: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const productUpdated = await ctx.prisma.products.update({
        where: {
          id: input.id,
        },
        data: {
          nombre: input.nombre,
          descripcion: input.descripcion,
          image: input.image,
          inventario: input.inventario ,
          precio: input.precio 

        },
      });
      return productUpdated
    }),

  deleteProduct: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.products.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
