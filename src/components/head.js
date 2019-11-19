import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          metatitle
        }
      }
    }
  `)
  
  const title = `${props.title} | ${data.site.siteMetadata.metatitle}`

  return (
    <Helmet title={title}/>
  )
}

export default Head;