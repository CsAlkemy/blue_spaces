import { Link } from "gatsby"
import React from "react"

const hero = () => {
  return (
    <div className="bg-gray-800">
      <div className="max-h-full py-20 md:max-w-4/5 mx-5 md:mx-auto text-white ">
        <h1 className="text-center text-5xl md:text-7xl font-semibold mt-10 md:mt-32 ">
          Building Digital <br /> Products, Brands, and <br /> Experiences.
        </h1>
        <p className="text-center text-xl text-gray-50 mt-5  ">
          BlueSpace love to help company with cutting edge technology
        </p>
        <div className="mt-5 sm:mt-8 flex justify-center ">
          <div className="rounded-md shadow">
            <Link
              to="/contact"
              className="rounded-full w-full flex items-center justify-center px-8 py-3  text-base font-medium text-gray-800 bg-white hover:bg-blue-600 hover:text-white md:py-3 md:text-lg md:px-10"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default hero
