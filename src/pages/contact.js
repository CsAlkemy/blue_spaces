import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Loc from "../components/About/officeCard"
import FormSection from "../components/About/formSection"
const contact = () => (
  <Layout>
    <Seo title="Contact" />
    <div className="mx-5 md:mx-auto mt-10">
      <Loc />
      <FormSection />
    </div>
  </Layout>
)

export default contact
