import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Works/hero"
import Works from "../components/Works/works"

const portfolio = () => (
  <Layout>
    <Seo title="Our Works" />
    <Hero />
    <Works />
  </Layout>
)

export default portfolio
