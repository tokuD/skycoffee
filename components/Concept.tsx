import Image from "next/image";
import React from "react";
import coffee from "../public/coffe2.jpg";

type Props = {};

const Concept = (props: Props) => {
  return (
    <div className=" m-3 flex flex-wrap">
      <div className="w-full sm:basis-1/2">
        <Image src={coffee} alt="/" height="2500px" objectFit="cover" />
      </div>
      <div className="w-full sm:basis-1/2 flex items-center">
        <div className="px-12 py-4 flex flex-col gap-5">
          <h3>Concept</h3>
          <h2 className="text-4xl font-bold text-sky-500">心静かにコーヒーを</h2>
          <p className="leading-8">
            立ち止まって、
            <br />
            空の青さを眺めて、
            <br />
            一息つきましょう。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Concept;
