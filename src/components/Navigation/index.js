///////////////////////////////////////////////////////////////
/* Component / ReactJS Library Imports */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'



///////////////////////////////////////////////////////////////
/* CSS Imports */

import './navStyle.css';



///////////////////////////////////////////////////////////////
/* Accent Photo Imports */

import soles1 from './solesshpe.svg';




// Simplified Navigation component
class Navigation extends Component {
    constructor(props) {
      super();
      this.state = {
        scrolled: false,
      };
    }

    componentDidMount() {
      window.addEventListener('scroll', () => {
        const isTop = window.scrollY < 75;
        if (isTop !== true) {
          this.setState({ scrolled: true });
        } else {
          this.setState({ scrolled: false });
        }
      });
    }

    handler = function() {
      /* Dummy function so that removeEventListener has something to
        pass into */
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handler);
    }

    render () {
      return (
        <nav className={ (this.state.scrolled) || ( (this.state.scrolled || !this.props.transparentNav) && (this.props.transparentNav ? false : true) ) ? "navElse" : "navTop"}>

          {/* Stuff for mobile devices */}
          <script src="https://kit.fontawesome.com/a076d05399.js"></script>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="iEq"> = </i>
          </label>

          {/* Logo */}
          <div className="logo">
            <Link to={ROUTES.LANDING} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >
              <img src={soles1} alt="SOLES Logo" className="soleLog"/>
            </Link>
          </div>

          {/* Rest of Navbar */}
          <ul className="ulNav">
              <li className="liNav">
                <Link to={ROUTES.LANDING} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >Home</Link>
              </li>
              <li className="liNav">
                <Link to={ROUTES.ABOUT} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >About</Link>
              </li>
              <li className="liNav">
                <Link to={ROUTES.INITIATIVES} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >Initiatives</Link>
              </li>
              {/* <li className="liNav">
                <Link to={ROUTES.PROJECTS} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >Projects</Link>
              </li> */}
              {/* <li className="liNav">
                <Link to={ROUTES.COPA_DEL_SOL} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >Copa del Sol</Link>
              </li> */}   

              <li className="liNav">
                <Link to={ROUTES.EBOARD} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >Board</Link>
              </li>
              <li className="liNav">
                <Link to={ROUTES.SPONSORS} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >Sponsors</Link>
              </li>
              <li className="liNav">
                <Link to={ROUTES.CONTACT} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >Contacts</Link>
              </li>      
              <li className='liNav'>
                <Link to={ROUTES.GENERAL_MEETINGS} style={linkStyle} >GMs</Link>
              </li>     
          </ul>
        </nav>
      );
  }

}

// Return (to App)
export default Navigation;




// Component Styling
const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const linkStyleScrolled = {
  textDecoration: "none",
  color: "#001d3a",
};