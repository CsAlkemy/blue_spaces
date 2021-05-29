import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Home/hero"
import WhyUS from "../components/Home/whyUs"
import Services from "../components/Home/services"

/**
 *
 * To Do
 * @ Review overall spacing.
 */

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="max-h-full md:max-w-4/5 mx-5 md:mx-auto my-10">
      <Hero />
      <WhyUS />
      <Services />
    </div>
  </Layout>
)

export default IndexPage
