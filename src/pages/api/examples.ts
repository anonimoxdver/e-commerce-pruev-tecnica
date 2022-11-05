import { type NextApiRequest, type NextApiResponse } from "next";
import { InitialData } from '../../../Data/dataProducts';

import { prisma } from "../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  const examples = await prisma.products.findMany();
  res.status(200).json(examples);
};

export default examples;