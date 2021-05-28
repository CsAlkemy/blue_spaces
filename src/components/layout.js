import * as React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import Menu from "./navMenu"
import { Helmet } from "react-helmet"
const Layout = ({ children }) => {
  return (
    <>
      <Helmet />
      <Menu />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
