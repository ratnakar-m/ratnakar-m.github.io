// If you don't want to use TypeScript you can delete this file!
// @ts-ignore
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const SiteInfo: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Site Map" />
    <h1>Site Information</h1>
    <p>This means that you can create and write <em>.ts/.tsx</em> files for your pages, components etc. Please note that the <em>gatsby-*.js</em> files (like gatsby-node.js) currently don't support TypeScript yet.</p>
    <p>For type checking you'll want to install <em>typescript</em> via npm and run <em>tsc --init</em> to create a <em>.tsconfig</em> file.</p>
    <p>You're currently on the site "{path}" which was built on {data.site.buildTime}.</p>
    <p>To learn more, head over to our <a href="https://www.gatsbyjs.com/docs/typescript/">documentation about TypeScript</a>.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SiteInfo

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
