import { Link } from "gatsby"
import React from "react"
import ImageHero from "../../images/svg/website.svg"
function hero() {
  return (
    <>
      <div className="max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto flex flex-col lg:flex-row justify-between items-center mb-10">
        <div className="mt-10 mb-10">
          <h1 className="text-4xl lg:text-7xl lg:text-left text-center font-extrabold tracking-tighter mb-3">
            <span className="text-5xl lg:text-7xl">Mordern</span>
            <br /> Solutions For Your
            <br />
            <span className="text-6xl lg:text-7xl text-indigo-500">
              Business.
            </span>
          </h1>
          <p className="text-xl text-gray-700 md:text-left text-center ">
            Lorem ipsum dolor sit amet, consectetur adipisicing
            <br /> elit. Nihil, neque.Lorem ipsum dolor sit amet
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link
                to="/"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-lg md:px-10"
              >
                Free Consultation
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link
                to="/"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-3 md:text-lg md:px-10"
              >
                Pricing
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 hidden sm:contents">
          <img
            src={ImageHero}
            alt="Hero_right_image"
            className="object-contain lg:object-scale-down "
          />
        </div>
      </div>
    </>
  )
}

export default hero
