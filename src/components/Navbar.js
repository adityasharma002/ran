import React from 'react'
import PropTypes from 'prop-types'




export default function Navbar(props) {
    return (

      
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/">{props.about}</a>
            </li> */}
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}

          <div className="custom-control custom-switch">
            <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="customSwitch1"/>
              <label className="custom-control-label" htmlFor="customSwitch1">Switch Mode</label>
          </div>  
          
                        
        </div>
      </nav>
    )
}

Navbar.prototype = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navbar.defaultProps ={
    title: "Title will go here",
    about: "About"
}