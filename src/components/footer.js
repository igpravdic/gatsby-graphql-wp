import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className='footer'>
      <div className="container">
      <p>Created by <a href="https://igorpravdic.com" target="_blank" rel="noopener noreferrer">{ data.site.siteMetadata.author }</a>, © 2019</p>
      </div>
    </footer>
  )
}

export default Footer;