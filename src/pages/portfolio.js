import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Image from "../images/gatsby-icon.png"

const portfolio = () => (
  <Layout>
    <Seo title="Our Works" />
    <div className="max-h-full md:max-w-4/5 mx-5 md:mx-auto my-10">
      <h1>Hi from the portfolio page</h1>
      <img src={Image} alt="aa" />
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default portfolio
