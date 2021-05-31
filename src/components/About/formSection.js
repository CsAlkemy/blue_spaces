import { MailIcon, PhoneIcon } from "@heroicons/react/outline"
import React from "react"
import { FaTwitter, FaFacebookF } from "react-icons/fa"
import { SiUpwork } from "react-icons/si"
const formSection = () => {
  return (
    <div className=" py-20">
      <div className="max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-7xl text-gray-700 font-light pb-10">
              Get In Touch
            </h1>
            <p className="text-left text-base font-medium text-gray-500">
              Don't Want to fillup forms ? <br /> Just ping us on message or
              give us a call. We will handle the rest.
            </p>
            <div className="flex flex-row mt-10">
              <PhoneIcon className="h-5" />
              <a className="ml-3  text-xl" href="tel:01886007480">
                +8801886007480
              </a>
            </div>
            <div className="flex flex-row">
              <MailIcon className="h-5" />
              <a
                className="ml-3  mb-5 text-xl"
                href="mailto:info@bluespaces.xyz"
              >
                info@bluespaces.xyz
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/bluespaces.xyz"
                rel="noreferrer"
                target="_blank"
              >
                <FaFacebookF className="h-9 w-9 text-blue-500" />
              </a>
              <SiUpwork className="h-10 w-10 text-green-500" />
              <FaTwitter className="h-10 w-10 text-blue-400" />
            </div>
          </div>
          <div className=" shadow-xl p-4 bg-gray-800 text-white rounded-md">
            <form action="" className="p-5">
              <div className="my-2">
                <label htmlFor="name" className="mb-1">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  aria-label="name"
                  placeholder="Name"
                />
              </div>
              <div className="my-2">
                <label htmlFor="name" className="mb-1">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  aria-label="email"
                  placeholder="Email"
                />
              </div>
              <div className="my-2">
                <label htmlFor="name" className="mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  aria-label="phone"
                  placeholder="Phone"
                />
              </div>
              <div className="my-2">
                <label htmlFor="name" className="mb-1">
                  Type of Service you looking
                </label>
                <select
                  type="text"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  aria-label="ServiceType"
                >
                  <option value="Web Development">Web Development</option>
                  <option value="App Development">App Development</option>
                  <option value="SEO">Search Engine Optimization</option>
                  <option value="Digital marketing">Digital Marketing</option>
                  <option value="Data Analysis">Data Analysis</option>
                  <option value="Ohters">Others</option>
                </select>
              </div>
              <div className="my-2">
                <label htmlFor="name" className="mb-1">
                  Message
                </label>
                <textarea
                  type="text"
                  className="bg-gray-200 resize appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  aria-label="Message"
                  placeholder="Message"
                />
              </div>
              <button
                type="submit"
                className=" w-full py-2 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default formSection
