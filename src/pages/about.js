//import React, { lazy, Suspense } from "react"
import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Image from "../images/aboutleft.jpg"
import Rocket from "../images/svg/launching.svg"

//const FormPage = lazy(() => import("../components/About/formSection"))

const About = () => (
  <Layout>
    <Seo title="About" />
    {/* <Suspense fallback={<div>Loading...</div>}> */}
    <section className="md:max-w-3/4 xl:max-w-3/5 mx-auto">
      <div className="flex flex-col md:flex-row my-20  gap-y-5">
        <div className="max-w-4/5 md:w-7/12 mx-auto  ">
          <h2 className="text-3xl font-semibold mt-4 md:mt-10">About Us</h2>
          <p className="text-lg text-gray-800 text-justify">
            We are a group of web designers, developers, internet marketers and
            digital marketing experts. <br /> We bridge the gap between the
            needs you have today and the results you want tomorrow by aligning
            insightful planning and efficient execution. You benefit from the
            certified skills of our project managers and system developers who
            enable you to achieve your digital ambitions.
          </p>
        </div>
        <div className=" mx-auto md:px-0 px-2 ">
          <img src={Image} alt="about side" className="h-72 w-96  rounded-lg" />
        </div>
      </div>
    </section>
    <div className="bg-gray-50 text-black py-20">
      <div className="md:max-w-3/4 xl:max-w-3/5 mx-auto">
        <div className="flex flex-col md:flex-row my-10 mb:my-20 ">
          <div className=" mx-auto ">
            <img
              src={Rocket}
              alt="Rocket"
              className="h-72 w-96 rounded-lg transform duration-500 cursor-pointer hover:-translate-y-32  "
            />
          </div>
          <div className="max-w-4/5 md:w-7/12 mx-auto  ">
            <h2 className="text-3xl font-semibold mt-4 md:mt-10">Mission</h2>
            <p className="text-lg text-gray-800 text-justify">
              Ever since our inception, our mission has been to help as many
              companies as we can to grow their business in today’s
              hyper-competitive digital world in the simplest, most
              cost-effective way possible. So, we amazonized the digital
              marketing, branding and website design industries by bringing them
              under one roof.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* </Suspense> */}
  </Layout>
)

export default About
