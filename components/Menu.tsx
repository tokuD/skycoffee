import Link from "next/link";
import React from "react";

type Props = {};

const Menu = (props: Props) => {
  return (
    <div className=" py-6 m-0">
      <ul className="flex justify-center gap-10">
        <li className="text-2xl font-light">
          <Link href="#">menu</Link>
        </li>
        <li className="text-2xl font-light">
          <Link href="#">blog</Link>
        </li>
        <li className="text-2xl font-light">
          <Link href="#">access</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
