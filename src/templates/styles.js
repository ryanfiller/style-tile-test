import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Colors from "../components/colors"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <React.Fragment>
        {/* <h1>{post.frontmatter.title}</h1> */}
        {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
        <Colors colors={post.frontmatter.colors} />
      </React.Fragment>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        colors {
          hex_value
          color_name
        }
      }
    }
  }
`    