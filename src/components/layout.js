import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/index.scss'
import Head from '../components/head'

class Layout extends Component{

  state = { 
    mobileNavState: false
  };

  constructor(props) {
    super(props);
    this.handleMobileNavClick = this.handleMobileNavClick.bind(this);
  }

  handleMobileNavClick = () => {
    this.setState(
      {
        mobileNavState: !this.state.mobileNavState
      }
    )
  }

  render(){
    return (
      <div className={`wrapper${this.state.mobileNavState ? ' nav-open' : ''}`}>
        <div className="content">
          <Head title={ this.title }/>
          <Header handleMobileNavClick={ this.handleMobileNavClick } mobileNavState={this.state.mobileNavState}/>
          <div className="container content-container">
            { this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout;