import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FormSection from "../components/About/formSection"

const digitalMarketing = () => (
  <Layout>
    <Seo title="Digital Marketing" />
    <section className="md:max-w-3/4 xl:max-w-3/5 mx-auto">
      <section className="relative px-5 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
        <div className="bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full top-48 right-5">
          <div className="flex justify-between font-bold text-sm">
            <p></p>
          </div>
          <h2 className="text-3xl font-semibold mt-4 md:mt-10">
            Digital Marketing
          </h2>
          <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
            We offer all types of online marketing services including SEO, SEM,
            SMM, SMO, paid ads, email marketing, SMS marketing and push
            notification services. We are a dedicated team of people who always
            serve the brand supervisor’s clients. BlueSpaces has experience
            working with clients from different countries around the world. Many
            companies have already been able to make a profit for their business
            by our hard work, ideas and operations. We hope we can bring good
            results for you or your organization.
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

export default digitalMarketing
