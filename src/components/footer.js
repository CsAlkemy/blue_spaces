import { Link } from "gatsby"
import * as React from "react"

const footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto">
        <div className="text-3xl md:ml-0 ml-5">
          {" "}
          BlueSpace<span className="my-5 text-7xl text-green-400 ">.</span>
          <span className="text-gray-400 text-3xl">xyz</span>
        </div>
        <div className="flex flex-col md:flex-row my-5 bg-gray-800 text-white">
          <div className="mr-auto md:ml-0 ml-5">
            <h1 className="text-base font-medium md:mt-0 mt-3">Sitemap.</h1>
            <ul className="font-light text-sm">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/webdev">Services</Link>
              </li>
              <li>
                <Link to="/portfolio">Our Works</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="mr-auto md:ml-0 ml-5">
            <h3 className="text-base font-medium md:mt-0 mt-3">Services.</h3>
            <ul className="font-light text-sm">
              <li>Web Development</li>
              <li>App Development</li>
              <li>SEO</li>
              <li>Data Analysis</li>
              <li>Domain Hosting</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
          <div className="mr-auto md:ml-0 ml-5">
            <h1 className="text-base font-medium md:mt-0 mt-3">Address.</h1>
            <div className="flex flex-row flex-nowrap font-light text-sm">
              <div className="mr-3 ">
                <h3 className="font-medium underline">Headquater</h3>
                <p>k9/13, Joydebpur</p>
                <p>Gazipur-1700</p>
                <p>Dhaka- Bangladesh</p>
              </div>
              <div className="mr-3">
                <h3 className="font-medium underline">Branch One</h3>
                <p>12/15 Housing, Darussalam</p>
                <p>Mirpur- 1, Dhaka-1216</p>
                <p>Bangladesh</p>
              </div>
              <div className="mr-3">
                <h3 className="font-medium underline">Branch Two</h3>
                <p>Khayerbaria</p>
                <p>Santhia-6667, Pabna</p>
                <p>Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center text-xs pb-10">
          Made With{" "}
          <span role="img" aria-label="lovemealkemy">
            ❤️
          </span>{" "}
          By BlueSpace.xyz
        </div>
      </div>
    </div>
  )
}

export default footer
