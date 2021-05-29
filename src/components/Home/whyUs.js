import React from "react"

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
              className="mx-auto mb-2"
              src="https://cdn.netlify.com/30d77dccc97fed16929da5291c3c10aa2ead0b36/4fc5c/img/jamstack/faster-websites.svg"
              alt="icon for_fast"
            ></img>
            <h1 className="text-2xl text-center mb-3">Faster Websites</h1>
            <p className="text-center">
              Optimize your site with prerendering and global delivery.
            </p>
          </div>
          <div className="p-5 py-12 text-left transform duration-500 hover:-translate-y-1 hover:shadow hover:bg-white cursor-pointer">
            <img
              className="mx-auto mb-2"
              src="https://cdn.netlify.com/da76d77a0a77402e9aa2c4ed5d3a6ad17c204687/ae48d/img/jamstack/secure-infrastructure.svg"
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
              className="mx-auto mb-2"
              src="https://cdn.netlify.com/8b89302761b545cfa4416a1604333ad739161b47/5a7de/img/jamstack/high-scale.svg"
              alt="icon for_fast"
            ></img>
            <h1 className="text-2xl text-center mb-3">Drive More Sales</h1>
            <p className="text-center">
              Every company we handle we always drive more sales.
            </p>
          </div>
          <div className="p-5 py-12 text-left transform duration-500 hover:-translate-y-1 hover:shadow hover:bg-white cursor-pointer">
            <img
              className="mx-auto mb-2"
              src="https://cdn.netlify.com/b7a7cf17308ef9ff1c27aaec556b00d298114a84/6c834/img/jamstack/improved-developer-experience.svg"
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
