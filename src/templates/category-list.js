import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import postStyles from '../styles/posts.module.scss'

export const data = graphql`
  query(
    $slug: String!
  ){
    allWordpressPost(
      limit: 10,
      filter: {
        categories: {
          elemMatch: {
            slug: {eq: $slug}
          }
        }
      }
    ){
      edges{
        node{
          id
          title
          slug
          date(formatString: "DD.MM.YYYY")
          content
          categories{
            name
            slug
          }
        }
      }
    }
  }
`


const CategoryPage = (props) => {
  let BlogListing = <ol className={postStyles.posts}>
  {props.data.allWordpressPost.edges.map((edge, index) => {
    return (
      <li key={index}>
        <Link to={`/blog/${edge.node.slug}`}><h2>{edge.node.title}</h2></Link>
        <div className={postStyles.postdetails}>
          <span className="data">Created: {edge.node.date}</span>
          <div className={postStyles.categories}>
            <span>Categories:</span>
            {edge.node.categories.map((category, index) => {
              return(
                <Link to={`/category/${category.slug}`}>{category.name}</Link>
              )
            })}
          </div>
        </div>
      </li>
    )
  })}
</ol>

  return (
    <Layout title={props.pageContext.categoryName}>
      <h1>Category: {props.pageContext.categoryName}</h1>

      {BlogListing}
    </Layout>
  )
}

export default CategoryPage;