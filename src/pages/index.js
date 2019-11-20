import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
  query {
    wordpressPage(wordpress_id: { eq: 5 }) {
      title
      content
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`

const IndexPage = (props) => {
  return (
    <Layout title="Welcome">
      <div dangerouslySetInnerHTML={{__html: props.data.wordpressPage.content }}></div>
    </Layout>
  )
}

export default IndexPage;