import React from 'react'
import { Link } from 'gatsby'
import postStyles from '../styles/posts.module.scss'

const BlogPostCategoriesList = (props) => {
  return (
    <div className={postStyles.categories}> 
      <span className={postStyles.label}>Categories:</span>
      {props.categoryObject.map((category, index) => {
        let total = props.categoryObject.length - 1;
        let comma = ''
        if(total !== index){
          comma = <span>,</span>
        }
        
        return(
          <div className={postStyles.categorylistwrapper}>
            <Link to={`/category/${category.slug}`}>{category.name}</Link>
            {comma}
          </div>
        )
      })}
  </div>
  )
}

export default BlogPostCategoriesList;