import { getUser } from "@/util";
import type { NextApiRequest, NextApiResponse } from "next";

interface Error {
  error: string;
}

const user = async (
  req: NextApiRequest,
  res: NextApiResponse<User | Error>
) => {
  if (req.query && req.query?.userId) {
    const { userId } = req.query;
    const userData = await getUser(userId);
    res.status(200).json({ ...userData });
  } else {
    res.status(400).json({ error: "no id provided" });
  }
};

export default user;
