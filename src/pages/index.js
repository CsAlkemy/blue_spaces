import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Home/hero"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="max-h-full md:max-w-4/5 mx-5 md:mx-auto my-10">
      <Hero />
    </div>
  </Layout>
)

export default IndexPage
