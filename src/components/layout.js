/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Helmet from "react-helmet"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          portfolio_name
        }
      }
    }
  `)

  return (
    <>
        <Helmet>
            <title>My Awesome Website</title>
            {/*<meta name="theme-color" content="#db5945"></meta> #484617*/}
            <meta name="theme-color" content="rgb(72, 70, 23)"></meta>
            <meta name="theme-color" content="#484617"></meta>
        </Helmet>

        {/*<Header siteTitle={data.site.siteMetadata?.portfolio_name || `Title`} />*/}
        <Header siteTitle={``} />
      <div
        style={{
          margin: `0 0`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`
        }}
      >
        <main>{children}</main>
        <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
