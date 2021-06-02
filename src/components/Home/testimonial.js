import React from "react"
import User from "../../images/svg/user.svg"

function testimonial() {
  return (
    <div className="max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto my-5">
      <h1 className="text-center text-4xl md:text-5xl pt-10 mt-10 font-semibold">
        Testimonials
      </h1>
      <p className="text-xl text-gray-600 font-medium mb-16 mt-5 text-center">
        That's What our Valuable Customer told about us.
      </p>
      <div className="p-5 md:p-0 grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-7 ">
        <div className="bg-gray-900 text-white  shadow-lg  transform duration-500 hover:-translate-y-2">
          <p className="text-7xl text-center mt-5">&#8221;</p>
          <p className="px-6 pb-3 text-center">
            "I am glad that I found BlueSpace and I recommend that you consider
            them for your SEO website services."
          </p>
          <div className=" xl:absolute static inset-x-0 bottom-0  ">
            <img
              src={User}
              className=" rounded-full h-10 mx-auto my-auto mb-5 "
              alt="customers"
            />
            <p className="  text-center mb-10 text-white text-xl  font-medium">
              Edward Brake
            </p>
          </div>
        </div>
        <div className="bg-gray-900 text-white shadow-lg transform duration-500 hover:-translate-y-2 ">
          <p className="text-7xl text-center mt-5">&#8221;</p>
          <p className="px-6 pb-3 text-center">
            "I give them the highest marks for the work they’ve done because
            it’s been excellent."
          </p>
          <div className=" xl:absolute static  inset-x-0 bottom-0  ">
            <img
              src={User}
              className="rounded-full h-10 my-auto mx-auto mb-5"
              alt="customers"
            />
            <p className="text-center mb-10 text-white text-xl font-medium">
              Mike John
            </p>
          </div>
        </div>
        <div className="bg-gray-900 text-white  shadow-lg  transform duration-500 hover:-translate-y-2">
          <p className="text-7xl text-center mt-5">&#8221;</p>
          <p className="px-6 pb-3 text-center">
            Thanks to BlueSpace, the website is now up and running and it is
            super fast.
          </p>
          <div className=" mt-0 lg:mt-16 static inset-0 bottom-0   ">
            <img
              src={User}
              className="rounded-full h-10 my-auto mx-auto mb-5"
              alt="customers"
            />
            <p className="text-center mb-10 text-white text-xl font-medium">
              7House CA
            </p>
          </div>
        </div>
        <div className="bg-gray-900 text-white  shadow-lg transform duration-500 hover:-translate-y-2 ">
          <p className="text-7xl text-center mt-5">&#8221;</p>
          <p className="px-6 pb-3 text-center">
            BlueSpaces Digital Marketing team provides excellent service. They
            keep their partners in the loop by providing regular reports.
          </p>
          <div className="  static inset-x-0 bottom-0 mt-5  ">
            <img
              src={User}
              className="rounded-full h-10 my-auto mx-auto mb-5"
              alt="customers"
            />
            <p className="text-center mb-10 text-white text-xl font-medium">
              rozalthiric
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default testimonial
