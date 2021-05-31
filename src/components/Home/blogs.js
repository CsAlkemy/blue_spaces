import { Link } from "gatsby"
import React from "react"
import Image from "../../images/office.jpg"
const Blogs = [
  {
    title: "Blog One",
    subTitle: "sub one",
  },
  {
    title: "Blog two",
    subTitle: "subtitle two",
  },
  {
    title: "Blog three",
    subTitle: "sub one",
  },
  {
    title: "Blog four",
    subTitle: "subtitle two",
  },
]
console.log(Blogs[0].img)

function blogs() {
  return (
    <div className="max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto my-5">
      <h1 className="text-center text-4xl md:text-5xl py-10 font-semibold">
        Blog Posts
      </h1>
      <p className="text-xl text-gray-600 font-medium text-center">
        How we help business achieve their goal.
      </p>
      <div className="p-5 md:p-0 grid grid-cols-1 mt-10 mb-28 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-16 ">
        {Blogs.map(blog => (
          <div
            key={blog.title}
            className="bg-white shadow-lg  transform duration-500 hover:-translate-y-2"
          >
            <img
              key={blog.title}
              src={Image}
              alt="blogCard"
              className="object-cover   "
            />
            <div className="text-left px-4 my-3 text-xl font-medium text-gray-600">
              {blog.title}
            </div>
            <div className="text-left mb-12 px-4 text-base text-gray-500 font-light">
              {blog.subTitle}
            </div>
            <Link
              to="/"
              className=" block items-center justify-center px-5 py-3 border border-transparent text-base font-medium  text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Read Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default blogs
