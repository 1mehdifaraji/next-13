import { getExchange } from "@/util";
import type { NextApiRequest, NextApiResponse } from "next";

interface Error {
  error: string;
}

const exchange = async (
  req: NextApiRequest,
  res: NextApiResponse<Exchange | Error>
) => {
  if (req.query && req.query?.exchangeId) {
    const { exchangeId } = req.query;
    const exchangeData = await getExchange(exchangeId);
    res.status(200).json({ ...exchangeData });
  } else {
    res.status(400).json({ error: "no id provided" });
  }
};

export default exchange;
