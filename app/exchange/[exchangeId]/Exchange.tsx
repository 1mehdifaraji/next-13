import Link from "next/link";
import React, { FC } from "react";

const Exchange: FC<{ exchange: Exchange }> = ({ exchange: { name, id } }) => {
  return (
    <div>
      <div>{name}</div>
      <Link className="text-blue-500" href="/exchanges">
        Back
      </Link>
    </div>
  );
};

export default Exchange;
