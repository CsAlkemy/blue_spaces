import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FormSection from "../components/About/formSection"

const DomainHosting = () => (
  <Layout>
    <Seo title="Domain and Hosting" />
    <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
      <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
        <div className="bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full top-48 right-5">
          <div className="flex justify-between font-bold text-sm">
            <p></p>
          </div>
          <h2 className="text-3xl font-semibold mt-4 md:mt-10">
            Domain And Hosting
          </h2>
          <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            atque maxime totam error eius reiciendis quo quod sequi minus enim
            maiores cupiditate facilis, voluptatum obcaecati tenetur sapiente
            eos quidem libero aliquam fugiat. Voluptates rem provident
            accusantium, harum reprehenderit dignissimos tempora, sit numquam
            neque ut autem doloribus dolore. Placeat, doloremque ea.
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

export default DomainHosting
