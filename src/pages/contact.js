import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const contact = () => (
  <Layout>
    <Seo title="Contact" />
    <div className="max-h-full md:max-w-4/5 mx-5 md:mx-auto my-10 ">
      <h1>Hi from the contact page</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default contact
