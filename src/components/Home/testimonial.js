import React from "react"
import User from "../../images/userOne.jpg"

function testimonial() {
  return (
    <div className="max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto my-5">
      <h1 className="text-center text-4xl md:text-5xl py-10 font-semibold">
        Testimonials
      </h1>
      <p className="text-xl text-gray-600 font-medium text-center">
        That's What our Valuable Customer told about us.
      </p>
      <div className="p-5 md:p-0 grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 ">
        <div className="bg-gray-900 text-white  shadow-lg  transform duration-500 hover:-translate-y-2">
          <p className="text-7xl text-center mt-5">&#8221;</p>
          <p className="px-6 pb-3 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            neque.
          </p>
          <div className="divide-solid"></div>
          <img
            src={User}
            className="rounded-full h-10 mx-auto mb-5"
            alt="customers"
          />
          <p className="text-center mb-10 text-white text-xl font-medium">
            Mike John
          </p>
        </div>
        <div className="bg-gray-900 text-white shadow-lg transform duration-500 hover:-translate-y-2 ">
          <p className="text-7xl text-center mt-5">&#8221;</p>
          <p className="px-6 pb-3 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            neque.
          </p>
          <div className="divide-solid"></div>
          <img
            src={User}
            className="rounded-full h-10 mx-auto mb-5"
            alt="customers"
          />
          <p className="text-center mb-10 text-white text-xl font-medium">
            Mike John
          </p>
        </div>
        <div className="bg-gray-900 text-white  shadow-lg  transform duration-500 hover:-translate-y-2">
          <p className="text-7xl text-center mt-5">&#8221;</p>
          <p className="px-6 pb-3 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            neque.
          </p>
          <div className="divide-solid"></div>
          <img
            src={User}
            className="rounded-full h-10 mx-auto mb-5"
            alt="customers"
          />
          <p className="text-center mb-10 text-white text-xl font-medium">
            Mike John
          </p>
        </div>
        <div className="bg-gray-900 text-white  shadow-lg transform duration-500 hover:-translate-y-2 ">
          <p className="text-7xl text-center mt-5">&#8221;</p>
          <p className="px-6 pb-3 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            neque.
          </p>
          <div className="divide-solid"></div>
          <img
            src={User}
            className="rounded-full h-10 mx-auto mb-5"
            alt="customers"
          />
          <p className="text-center mb-10 text-white text-xl font-medium">
            Mike John
          </p>
        </div>
      </div>
    </div>
  )
}

export default testimonial
