import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFound = () => {
  return (
    <Layout title="Page not found" customClass="four-o-four-page">
      <div>
        <h1>Sorry, this page doesn't exist.</h1>
        <Link to="/">Back to Homepage</Link>
      </div>
    </Layout>
  )
}

export default NotFound;