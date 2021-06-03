import { MailIcon, PhoneIcon } from "@heroicons/react/outline"
import { Link } from "gatsby"
import * as React from "react"
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai"

const footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto">
        <div className="text-3xl md:ml-0 ml-5">
          {" "}
          BlueSpaceCa<span className="my-5 text-7xl text-green-400 ">.</span>
          <span className="text-gray-400 text-3xl">com</span>
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
              <li>
                <Link to="/webdev">Web Development</Link>{" "}
              </li>
              <Link to="/appdev">
                <li>App Development</li>
              </Link>
              <Link to="/seoWork">
                <li>SEO</li>
              </Link>
              <Link to="/dataAnalysis">
                <li>Data Analysis</li>
              </Link>
              <Link to="/digital_m">
                <li>Digital Marketing</li>
              </Link>
            </ul>
          </div>
          <div className="mr-auto md:ml-0 ml-5">
            <h1 className="text-base font-medium md:mt-0 mt-3">Address.</h1>
            <div className="grid grid-cols-3 font-light text-sm">
              <div className="mr-3">
                <h3 className="font-medium underline">Headquater</h3>
                <p>Merkley square,</p>
                <p>Scarborough, ontario,</p>
                <p>Canada</p>
              </div>
              <div className="mr-3 ">
                <h3 className="font-medium underline">Branch One</h3>
                <p>k9/13, Joydebpur</p>
                <p>Gazipur-1700</p>
                <p>Dhaka- Bangladesh</p>
              </div>
              <div className="mr-3">
                <h3 className="font-medium underline">Branch Two</h3>
                <p>H-468, KhayerBaria</p>
                <p>Santhia-6667, Pabna</p>
                <p>Bangladesh</p>
              </div>
            </div>
          </div>
          <div className="mr-auto md:ml-0 ml-5">
            <h3 className="text-base font-medium md:mt-0 mt-3">
              Get In Touch.
            </h3>
            <div className="flex flex-row mt-2">
              <PhoneIcon className="h-5" />
              <a className="ml-3  text-md" href="tel:01886007480">
                +8801886007480
              </a>
            </div>
            <div className="flex flex-row">
              <MailIcon className="h-5" />
              <a
                className="ml-3 mb-3 text-md "
                href="mailto:info@bluespaces.xyz"
              >
                info@bluespaceca.com
              </a>
            </div>
            <div className="flex gap-1">
              <a href="/">
                <AiFillFacebook className="h-7 w-7" />
              </a>
              <a href="/">
                <AiFillLinkedin className="h-7 w-7" />
              </a>
              <a href="/">
                <AiFillTwitterSquare className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center text-xs pb-10">
          Made With{" "}
          <span role="img" aria-label="lovemealkemy">
            ❤️
          </span>{" "}
          By BlueSpace
        </div>
      </div>
    </div>
  )
}

export default footer
