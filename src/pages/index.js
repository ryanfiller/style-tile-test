import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

export default class Index extends React.Component {

  render() {
    
    const data = this.props.data.allMarkdownRemark.edges

    return (
      <Layout>
        {data.map((data, index) => {

          const page = data.node
          const frontmatter = data.node.frontmatter

          return(
            <Link to={page.fields.slug} key={index} >
              {frontmatter.title}
            </Link>
          )
        })}
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
