import React, { Component } from 'react'

class HambMenu extends Component {
  render(){
    return (
      <div className="hamb-menu" onClick={this.props.handleMobileNavClick}>
        <div className={`btn${this.props.mobileNavState ? ' open' : ''}`}> 
          <span className="wrap">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
    )
  }
}

export default HambMenu;