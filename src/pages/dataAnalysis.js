import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const DataAnalysis = () => (
  <Layout>
    <Seo title="Data Analysis" />
    <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
      <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
        <div className="bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full top-48 right-5">
          <div className="flex justify-between font-bold text-sm">
            <p></p>
          </div>
          <h2 className="text-3xl font-semibold mt-4 md:mt-10">
            Data Analysis
          </h2>
          <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illum
            est dolorem sapiente atque repellendus minima eaque eos doloribus
            fuga quaerat tenetur aliquam, minus, possimus perspiciatis? Quia
            aliquid veritatis aperiam pariatur ea possimus sapiente saepe,
            laborum officiis, velit impedit id odit labore voluptatum, sed
            provident asperiores? Dolore, doloremque quisquam? Porro!
          </p>
          <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">
            More Comming..
          </button>
        </div>
      </section>
    </section>
  </Layout>
)

export default DataAnalysis
