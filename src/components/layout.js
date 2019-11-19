import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/index.scss'
import Head from '../components/head'

const Layout = ( props ) => {
  return (
    <div className="wrapper">
      <div className="content">
        <Head title={ props.title }/>
        <Header />
        <div className="container">
          { props.children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout;