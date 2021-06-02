import React from "react"
import WebsiteImage from "../../images/svg/faster-websites.svg"
import SecureImage from "../../images/svg/secure-infrastructure.svg"
import UpImage from "../../images/svg/high-scale.svg"
import DevImage from "../../images/svg/improved-developer-experience.svg"

/**
 * To Do in this components..
 * @ Fix Spacing problem
 * @ Download Svg and change color.
 */

function whyUs() {
  return (
    <div className="container my-16 max-h-full md:max-w-3/4 xl:max-w-3/5 mx-auto ">
      <h1 className="text-center text-4xl md:text-5xl mt-10 font-semibold">
        Why Us?
      </h1>
      <div className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
        <div className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-7 items-start ">
          <div className="p-5 py-12 text-left transform duration-500 hover:-translate-y-1 hover:shadow hover:bg-white cursor-pointer">
            <img
              className="mx-auto mb-2 h-28"
              src={WebsiteImage}
              alt="icon for_fast"
            ></img>
            <h1 className="text-2xl text-center mb-3">Faster Websites</h1>
            <p className="text-center">
              Optimize your site with prerendering and global delivery.
            </p>
          </div>
          <div className="p-5 py-12 text-left transform duration-500 hover:-translate-y-1 hover:shadow hover:bg-white cursor-pointer">
            <img
              className="mx-auto mb-2 h-28"
              src={SecureImage}
              alt="icon for_fast"
            ></img>
            <h1 className="text-2xl text-center mb-3">
              More secure infrastructure
            </h1>
            <p className="text-center">
              We Provide, Jamstack architectures that offers fewer points to
              attack.
            </p>
          </div>
          <div className="p-5 py-12 text-left transform duration-500 hover:-translate-y-1 hover:shadow hover:bg-white cursor-pointer">
            <img
              className="mx-auto mb-2 h-28"
              src={UpImage}
              alt="icon for_fast"
            ></img>
            <h1 className="text-2xl text-center mb-3">Drive More Sales</h1>
            <p className="text-center">
              Every company we handle we always drive more sales.
            </p>
          </div>
          <div className="p-5 py-12 text-left transform duration-500 hover:-translate-y-1 hover:shadow hover:bg-white cursor-pointer">
            <img
              className="mx-auto mb-2 h-28"
              src={DevImage}
              alt="icon for_fast"
            ></img>
            <h1 className="text-2xl text-center mb-3">Expert Developers</h1>
            <p className="text-center">
              We have professional developer's to help you automate your
              business.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default whyUs
