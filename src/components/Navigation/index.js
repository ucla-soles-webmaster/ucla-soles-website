import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../../pages/SignOut';
import * as ROUTES from '../../constants/routes'

import { AuthUserContext } from '../../pages/Session';

import './navStyle.css';
import SOLESLogo from './logo.svg'
import SOLESLogoColor from './logoColored.svg';


// Choose Navigation type depending on if user is signed in or not
const Navigation = (props) => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => authUser 
        ? <NavigationAuth noTopNav={props.transparentNav}/> 
        : <NavigationNonAuth noTopNav={props.transparentNav} />
      }
    </AuthUserContext.Consumer>
  </div>
);

// When user Signed In
class NavigationAuth extends Component {

  constructor(props) {
    super();
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
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

    render() {
      return (
        <nav className={ (this.state.scrolled) || ( (this.state.scrolled || !this.props.noTopNav) && (this.props.noTopNav ? false : true) ) ? "navElse" : "navTop"}>

          {/* Stuff for mobile devices */}
          <script src="https://kit.fontawesome.com/a076d05399.js"></script>
          <input type="checkbox" id="check" />
          <label for="check" class="checkbtn">
            <i> = </i>
          </label>

          {/* Logo */}
          <div className="logo">
            <Link to={ROUTES.LANDING} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >
              <img src={this.state.scrolled ? SOLESLogoColor : SOLESLogo} alt="SOLES Logo" />
            </Link>
          </div>

          {/* Rest of Navbar */}
          <ul>
            <li>
              <Link to={ROUTES.LANDING} style={linkStyle} >Home</Link>
            </li>
            <li>
              <Link to={ROUTES.ABOUT} style={linkStyle} >About</Link>
            </li>
            <li>
              <Link to={ROUTES.INITIATIVES} style={linkStyle} >Our Initiatives</Link>
            </li>
            <li>
              <Link to={ROUTES.EBOARD} style={linkStyle} >Board</Link>
            </li>
            <li>
              <Link to={ROUTES.SPONSORS} style={linkStyle} >Sponsers</Link>
            </li>
            <li>
              <Link to={ROUTES.CONTACT} style={linkStyle} >Contacts</Link>
            </li>
            <li>
              <Link to={ROUTES.ACCOUNT} style={linkStyle} >Account</Link>
            </li>

            <li className="signin">
              <SignOutButton />
            </li>
          </ul>
        </nav>
      );
    }  

}

// When user not Signed In
class NavigationNonAuth extends Component {
    constructor(props) {
      super();
      this.state = {
        scrolled: false,
      };
    }

    componentDidMount() {
      window.addEventListener('scroll', () => {
        const isTop = window.scrollY < 100;
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
        <nav className={ (this.state.scrolled) || ( (this.state.scrolled || !this.props.noTopNav) && (this.props.noTopNav ? false : true) ) ? "navElse" : "navTop"}>

          {/* Stuff for mobile devices */}
          <script src="https://kit.fontawesome.com/a076d05399.js"></script>
          <input type="checkbox" id="check" />
          <label for="check" class="checkbtn">
            <i> = </i>
          </label>

          {/* Logo */}
          <div className="logo">
            <Link to={ROUTES.LANDING} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >
              <img src={this.state.scrolled ? SOLESLogoColor : SOLESLogo} alt="SOLES Logo" />
            </Link>
          </div>

          {/* Rest of Navbar */}
          <ul>
              <li>
                <Link to={ROUTES.LANDING} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >Home</Link>
              </li>
              <li>
                <Link to={ROUTES.ABOUT} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >About</Link>
              </li>
              <li>
                <Link to={ROUTES.INITIATIVES} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >Our Initiatives</Link>
              </li>
              <li>
                <Link to={ROUTES.EBOARD} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >Board</Link>
              </li>
              <li>
                <Link to={ROUTES.SPONSORS} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >Sponsers</Link>
              </li>
              <li>
                <Link to={ROUTES.CONTACT} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >Contacts</Link>
              </li>             
              <li className="signin">
                <Link to={ROUTES.SIGN_IN} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >Sign In</Link>
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