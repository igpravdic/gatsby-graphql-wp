import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
  query (
    $slug: String!
  ){
    wordpressPost (slug: { eq: $slug }){
      id
      title
      content
      date(formatString: "MMMM Do, YYYY")
      featured_media {
        link
        source_url
      }
    }
  }
`

const Blog = (props) => {
  let img = ''
  if(props.data.wordpressPost.featured_media){
    img = <img src={props.data.wordpressPost.featured_media.source_url} alt={props.data.wordpressPost.title}/>
  }

  return (
    <Layout title={props.data.wordpressPost.title}>
      <h1>{props.data.wordpressPost.title}</h1>
      {img}
      <p>Published on {props.data.wordpressPost.date}</p>
      <div dangerouslySetInnerHTML={{__html: props.data.wordpressPost.content }}></div>
    </Layout>
  )
}

export default Blog;