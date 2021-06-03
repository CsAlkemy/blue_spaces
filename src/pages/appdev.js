import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FormSection from "../components/About/formSection"

const AppDev = () => (
  <Layout>
    <Seo title="App Development" />
    <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
      <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
        <div className="bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full top-48 right-5">
          <div className="flex justify-between font-bold text-sm">
            <p></p>
          </div>
          <h2 className="text-3xl font-semibold mt-4 md:mt-10">
            App Development
          </h2>
          <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
            BlueSpaces is the fast-growing Mobile application and Game
            development Company that is guided in delivering the products and
            views into mobile space with prime quality. We assist clients in
            identifying the risks and opportunities that address both short-term
            challenges as well as long-term value creation.We're not your
            generic mobile app developer.Hiring us is like enlisting a top-notch
            development team,a decisive business consultant,a marketing leader
            and a product manager.
          </p>
          <p>Our Key services:</p>
          <ul className="list-disc">
            <li className="ml-4">Android App development</li>
            <li className="ml-4">iPhone App development</li>
            <li className="ml-4">Cross-Platform App development</li>
          </ul>
          <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">
            More Comming..
          </button>
        </div>
      </section>
    </section>
    <FormSection />
  </Layout>
)

export default AppDev
