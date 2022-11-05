import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const getProducts = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.products.findMany();
  }),
});
