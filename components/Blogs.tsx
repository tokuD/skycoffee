import React from "react";
import Blog from "./Blog";
import { FaArrowRight } from "react-icons/fa";
type Props = {};

const Blogs = (props: Props) => {
  return (
    <div className="mt-6 px-6 text-center">
      <h3 className="text-4xl text-sky-500">blog</h3>
      <p className="mb-6">ブログ</p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mb-6">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
      <div className="w-full md:w-1/4 mx-auto mb-6 group">
        <button className="border w-full border-sky-400 duration-300 group-hover:border-sky-200 rounded text-sky-500 font-bold px-2 py-3 flex items-center">
          <span className="flex-1 duration-300 group-hover:text-sky-300">
            ブログ一覧
          </span>
          <FaArrowRight
            size={10}
            className="group-hover:text-sky-300 duration-300"
          />
        </button>
      </div>
    </div>
  );
};

export default Blogs;
