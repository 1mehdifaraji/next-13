import React from "react";
import Link from "next/link";
import axios from "axios";
import User from "./User";
import { getUser, getUsers } from "@/util";

export const revalidate: number = 1;

const UserPage = async ({ params: { userId } }: UserPage) => {
  const { data } = await axios.get(`http://localhost:3000/api/user/${userId}`);

  return (
    <div className="text-center my-10">{data && <User user={data} />} </div>
  );
};

export default UserPage;

export const generateStaticParams = async () => {
  const users = await getUsers();

  return users.map((user: User) => ({
    userId: user.id.toString(),
  }));
};
