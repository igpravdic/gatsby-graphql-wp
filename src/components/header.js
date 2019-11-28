import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import logo from "../../static/logo.jpg"
import logo2x from "../../static/logo2x.jpg"
import HambMenu from '../components/hamb-menu'

const Header = (props) => {
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

  const classes = `container`

  return (
    <header className="header">
      <div className={classes}>
        <div className="logo">
          <Link to="/">
            <img src={logo} srcSet={logo2x} alt={data.site.siteMetadata.title}/>
          </Link>
        </div>
        <HambMenu handleMobileNavClick={props.handleMobileNavClick} mobileNavState={props.mobileNavState}/>
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