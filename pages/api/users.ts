import type { NextApiRequest, NextApiResponse } from "next";
import { getUsers } from "@/util";

const users = async (req: NextApiRequest, res: NextApiResponse<User[]>) => {
  const users = await getUsers();
  res.status(200).json(users);
};

export default users;
