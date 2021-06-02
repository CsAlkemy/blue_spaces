import { Link } from "gatsby"
import React from "react"
import Image from "../../images/office.jpg"
const Blogs = [
  {
    title: "What is JAMSTACK and why JAMSTACK",
    subTitle: "JamStack is the new standard architecture for the web.",
    href: "https://jamstack.org/why-jamstack/",
  },
  {
    title: "How we help 7House Build Fast Website.",
    subTitle: "total customer interaction of 7House is incresed.",
    href: "/",
  },
  {
    title: "Why SEO is important",
    subTitle: "Why SEO is important in this era for your business.",
    href:
      "https://digitalmarketinginstitute.com/blog/what-is-seo-and-why-is-it-important",
  },
  {
    title: "How PowerBI help take smarter decision",
    subTitle:
      "How Power BI can help you utilize your content and help take smarter decisions",
    href:
      "https://powerbi.microsoft.com/fr-fr/blog/five-key-trends-in-business-intelligence/",
  },
]

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
            <div className="text-left mb-12 px-4 text-sm text-gray-500 font-light">
              {blog.subTitle}
            </div>
            <div className="absolute bottom-0 inset-x-0">
              <Link
                target="_blank"
                to={blog.href}
                className=" block items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Read Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default blogs
