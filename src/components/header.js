import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from '../styles/header/index.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      wordpressWpApiMenusMenusItems(slug: {eq: "main-menu"}){
        name
        slug
        items{
          title
          object_slug
          
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const classes = `container ${headerStyles.container}`

  return (
    <header className={headerStyles.header}>
      <div className={classes}>
        <span><Link to="/">{data.site.siteMetadata.title}</Link></span>
        <nav>
          <ul>
            {data.wordpressWpApiMenusMenusItems.items.map((edge, index) => {
              let linkto = `/${edge.object_slug}`;

              return (
                <li key={index}><Link to={linkto}>{edge.title}</Link></li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;