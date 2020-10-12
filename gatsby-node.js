/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    console.log(`Node created of type "${node.internal.type}`)
    if (node.internal.type === `MarkdownRemark`) {
        console.log("**************"+node.parent.fileName+"***************")
        const slug = createSlug(createFilePath({ node, getNode, basePath: `docs` }))

        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

