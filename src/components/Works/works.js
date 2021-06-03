import { Link } from "gatsby"
import React from "react"
import ProjectOne from "../../images/projectOne.jpg"
import ProjectTwo from "../../images/projectTwo.jpg"
import ProjectThree from "../../images/projectThree.jpg"
import ProjectFour from "../../images/projectFour.jpg"

const works = () => {
  return (
    <div className="max-h-full pb-20 md:max-w-4/5 mx-5 md:mx-auto text-black">
      <div className="container mx-auto mt-5 p-2 md:p-20 grid md:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-10 transform duration-500">
        <Link
          to="/"
          className="mx-auto pb-3 shadow-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none rounded-lg text-gray-800 w-full h-full"
        >
          <img
            src={ProjectOne}
            className="w-full max-h-52 object-cover mb-5 rounded-t-lg"
            alt="Project One Static"
          />
          <div className="p-3 lg:p-6">
            <h3 className="text-2xl  font-normal py-1">7House Website </h3>
            <p className="text-sm font-light  text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              cum?
            </p>
          </div>
        </Link>
        <Link
          to="/"
          className="mx-auto pb-3 shadow-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none rounded-lg text-gray-800 w-full h-full"
        >
          <img
            src={ProjectTwo}
            className="w-full max-h-52 object-cover mb-5 rounded-t-lg"
            alt="Project One Static"
          />
          <div className="p-3 lg:p-6">
            <h3 className="text-2xl  font-normal py-1">Project Demo </h3>
            <p className="text-sm font-light  text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              cum?
            </p>
          </div>
        </Link>
        <Link
          to="/"
          className="mx-auto pb-3 shadow-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none rounded-lg text-gray-800 w-full h-full"
        >
          <img
            src={ProjectThree}
            className="w-full max-h-52 object-cover mb-5 rounded-t-lg"
            alt="Project One Static"
          />
          <div className="p-3 lg:p-6">
            <h3 className="text-2xl  font-normal py-1">Vavo JS Support </h3>
            <p className="text-sm font-light  text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              cum?
            </p>
          </div>
        </Link>
        <Link
          to="/"
          className="mx-auto pb-3 shadow-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none rounded-lg text-gray-800 w-full h-full"
        >
          <img
            src={ProjectFour}
            className="w-full max-h-52 object-cover mb-5 rounded-t-lg"
            alt="Project One Static"
          />
          <div className="p-3 lg:p-6">
            <h3 className="text-2xl  font-normal py-1">Trpsy SEO Boost </h3>
            <p className="text-sm font-light  text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              cum?
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default works
