import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FormSection from "../components/About/formSection"

const seoWork = () => (
  <Layout>
    <Seo title="Search Engine Optimazation" />
    <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
      <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
        <div className="bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full top-48 right-5">
          <div className="flex justify-between font-bold text-sm">
            <p></p>
          </div>
          <h2 className="text-3xl font-semibold mt-4 md:mt-10">
            Search Engine Optimization.
          </h2>
          <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
            BlueSpaces provides full-service SEO packages with specialists and
            customer success representatives dedicated to helping you increase
            your ranking online. From local search optimization to keyword
            research, link-building to content marketing - we have you covered.
            We specialize in helping businesses rank online and get our
            customers to the 1st page of Google within 6 months.
          </p>

          <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">
            More Comming..
          </button>
        </div>
      </section>
    </section>
    <FormSection />
  </Layout>
)

export default seoWork
