import type { NextApiRequest, NextApiResponse } from "next";
import { getExchanges } from "@/util";

const exchanges = async (
  req: NextApiRequest,
  res: NextApiResponse<Exchange[]>
) => {
  const exchanges = await getExchanges();
  res.status(200).json(exchanges);
};

export default exchanges;
