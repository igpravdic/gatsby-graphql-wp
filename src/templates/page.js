import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import postStyles from '../styles/posts.module.scss'

export const data = graphql`
  query(
    $id: Int
  ){
    allWordpressPost(
      limit: 10
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
    wordpressPage(
      wordpress_id: {eq: $id}
    ){
      title
      slug
      content
    }
  }
`


const Page = (props) => {
  let BlogListing = '';

  if(props.data.wordpressPage.slug === 'blog'){
    BlogListing = <ol className={postStyles.posts}>
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
  }

  return (
    <Layout title={props.data.wordpressPage.title}>
      <h1>{props.data.wordpressPage.title}</h1>
      <div dangerouslySetInnerHTML={{__html: props.data.wordpressPage.content }}></div>

      {BlogListing}
    </Layout>
  )
}

export default Page;