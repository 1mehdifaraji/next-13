import Link from "next/link";
import React, { FC } from "react";

const User: FC<{ user: User }> = ({ user }) => {
  return (
    <div className="text-center my-10">
      {user.name}

      <Link href="/users" className="block text-blue-600">
        Back
      </Link>
    </div>
  );
};

export default User;
