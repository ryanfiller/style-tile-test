import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SiteInfo from "../components/site-info"
import Colors from "../components/colors"

export default ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <React.Fragment>
        <SiteInfo
          title={post.title}
          url={post.url}
          favicon={post.favicon}
        />
        <Colors colors={post.colors} />
      </React.Fragment>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        favicon
        title
        url
        logo
        colors {
          hex_value
          color_name
        }
      }
    }
  }
`    