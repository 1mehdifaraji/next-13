import React, { FC } from "react";
import Link from "next/link";

const Header: FC = (props) => {
  return (
    <ul className="border-b-2 bg-slate-200 py-10 border-black flex justify-center space-x-5 ">
      <li>
        <Link href="/">Homepage</Link>
      </li>
      <li>
        <Link href="/users">Users page</Link>
      </li>
    </ul>
  );
};

export default Header;
