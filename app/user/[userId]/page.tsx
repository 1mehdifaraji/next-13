import { API_URL, getUsers } from "@/util";
import Link from "next/link";
import { notFound } from "next/navigation";
import User from "./User";

const getUser = async (userId: string): Promise<User> => {
  const res = await fetch(`${API_URL}/user/${userId}`, {
    next: { revalidate: 120 },
  });
  const user = await res.json();
  return user;
};

const UserPage = async ({ params: { userId } }: UserPage) => {
  const user = await getUser(userId);

  if (!user?.id) return notFound();

  return (
    <div className="text-center my-10">{user && <User user={user} />}</div>
  );
};

export default UserPage;

export const generateStaticParams = async () => {
  const users = await getUsers();

  return users.map((user) => ({
    userId: user.id.toString(),
  }));
};
