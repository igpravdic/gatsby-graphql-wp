const path = require ('path');

module.exports.onCreateNode = ({ node, actions }) => {
  //const { createNodeField } = actions

  //console.log(JSON.stringify(node, undefined, 4))
  // if(node.internal.type === "MarkdownRemark"){
  //   const slug = path.basename(node.fileAbsolutePath, '.md');
    
  //   createNodeField({
  //     node, 
  //     name: 'slug',
  //     value: slug
  //   })
  // }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const pageTemplate = path.resolve('./src/templates/page.js')
  const categoryTemplate = path.resolve('./src/templates/category-list.js')

  const res = await graphql(`
    query {
      allWordpressPage{
        edges{
          node{
            slug
            wordpress_id
          }
        }
      }
      allWordpressPost{
        edges{
          node{
            slug
          }
        }
      }
      allWordpressCategory(
        filter: {
          count: {ne: 0}
        }
      ){
        edges{
          node{
            name
            slug
          }
        }
      }
    }
  `)

  res.data.allWordpressPage.edges.forEach((edge) => {
    createPage({
      component: pageTemplate,
      path: `/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        id: edge.node.wordpress_id
      }
    })
  })

  res.data.allWordpressPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })

  res.data.allWordpressCategory.edges.forEach((edge) => {
    createPage({
      component: categoryTemplate,
      path: `/category/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        categoryName: edge.node.name
      }
    })
  })
}