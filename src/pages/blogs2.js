import React from "react"
import { graphql} from "gatsby"
import {Link} from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo";
import Post from "../components/post_item";

export default function Blogs({ data }) {
    return (
        <Layout>
            <SEO title="Blogs" />
            <h1>My Blogs</h1>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {
                data.allMarkdownRemark.edges.map(post => {
                    const {title, author, date, description, path} = post.node.frontmatter;
                    const excerpt = post.node.excerpt;

                    return (
                        <Post
                            title={title}
                            date={date}
                            description={excerpt}
                            key={`${date}__${title}`}
                            path={path}
                        />
                    )
                })
            }
        </Layout>
    );
}
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
          excerpt
        }
      }
    }
  }
`