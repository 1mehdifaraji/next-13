import Link from "next/link";
import { getUsers } from "@/util";
import axios from "axios";

const getUsersData = async (): Promise<User[]> => {
  // Server Side Rendering
  // {cache   : "no-cache"}
  // Static Site Generation
  // {cache   : "force-cache"}
  // ISR Incremental Static Regeneration
  // {next  : { revalidate : 1 }}
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-cache",
  });
  const users = await res.json();
  return users;
};

const UsersPage = async () => {
  // Calling directly the database function because we can in server components
  // const data = await getUsers();
  // Or calling our own created api with axios
  // const { data } = await axios.get("http://localhost:3000/api/users");
  // Or calling our own created api with fetch
  const users = await getUsersData();

  return (
    <div className="flex flex-col items-center space-y-5 my-5">
      {users &&
        users?.map((user: User) => {
          return (
            <Link className="block" href={`/user/${user.id}`} key={user.id}>
              {user.name}
            </Link>
          );
        })}
    </div>
  );
};

export default UsersPage;
