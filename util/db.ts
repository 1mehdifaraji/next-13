import type { NextApiRequest } from "next";

export const getUsers = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  return users;
};

export const getUser = async (userId: string | string[]) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = await data.json();
  return user;
};
