import React from "react"
import { Helmet } from "react-helmet"
import SEO from "../components/seo";
import Layout from "../components/layout";
import {Link} from "gatsby"

// import '../css/blog-post.css'; // make it pretty!

export default function Template({
                                     data // this prop will be injected by the GraphQL query we'll write in a bit
                                 }) {
    const { markdownRemark: post } = data // data.markdownRemark holds your post data
    return (
        <Layout>
            <SEO title="Blogs" />
            <Link to="/blogs">Back to blogs</Link>
            <br/>
            <div className="blog-post-container">
                <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
                <div className="blog-post">
                    <h1>{post.frontmatter.title}</h1>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`