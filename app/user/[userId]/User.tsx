import Link from "next/link";
import React, { FC } from "react";

const User: FC<{ user: User }> = ({ user: { name } }) => {
  return (
    <div>
      <div>{name}</div>
      <Link className="text-blue-500" href="/users">
        Back
      </Link>
    </div>
  );
};

export default User;
