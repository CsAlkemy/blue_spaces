import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="About" />
    <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
      <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
        <div className="bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full top-48 right-5">
          <div className="flex justify-between font-bold text-sm">
            <p></p>
          </div>
          <h2 className="text-3xl font-semibold mt-4 md:mt-10">About Us</h2>
          <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            rem fugiat quaerat nemo explicabo esse, cupiditate blanditiis.
            Voluptatem repudiandae ullam in itaque ipsum inventore dolorum,
            minima doloribus recusandae maiores id voluptate ea iure sequi ad
            ipsa accusantium, alias modi debitis, aliquid sit voluptates
            adipisci! Totam, quam officia. Tempora, eligendi asperiores?
          </p>
        </div>
      </section>
    </section>
  </Layout>
)

export default About
