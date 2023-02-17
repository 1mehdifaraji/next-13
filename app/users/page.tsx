import { API_URL } from "@/util";
import Link from "next/link";

const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`${API_URL}/users`);
  const users = await res.json();
  return users;
};

const UsersPage = async () => {
  const users = await getUsers();

  return (
    <div className="text-center my-20">
      {users &&
        users?.map((user) => {
          return (
            <div className="my-10">
              <Link href={`/user/${user.id}`}>{user.name}</Link>
            </div>
          );
        })}
    </div>
  );
};

export default UsersPage;
