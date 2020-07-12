import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../../pages/SignOut';
import * as ROUTES from '../../constants/routes'

import { AuthUserContext } from '../../pages/Session';

import './navStyle.css';
import SOLESLogo from './logo.svg'
import SOLESLogoColor from './logoColored.svg';


// Choose Navigation type depending on if user is signed in or not
const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => authUser 
        ? <NavigationAuth /> 
        : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

// When user Signed In
class NavigationAuth extends Component {

    render() {
      return (
        <nav>
          <div className="logo">
            <img src={SOLESLogo} alt="SOLES Logo" fill="#EE1919" />
          </div>
          <ul>
            <li>
              <Link to={ROUTES.LANDING} style={linkStyle} >LANDING</Link>
            </li>
            <li>
              <Link to={ROUTES.ABOUT} style={linkStyle} >ABOUT</Link>
            </li>
            <li>
              <Link to={ROUTES.INITIATIVES} style={linkStyle} >OUR INITIATIVES</Link>
            </li>
            <li>
              <Link to={ROUTES.EBOARD} style={linkStyle} >EBOARD</Link>
            </li>
            <li>
              <Link to={ROUTES.SPONSORS} style={linkStyle} >SPONSORS</Link>
            </li>
            <li>
              <Link to={ROUTES.CONTACT} style={linkStyle} >CONTACT</Link>
            </li>
            <li>
              <Link to={ROUTES.ACCOUNT} style={linkStyle} >Account</Link>
            </li>
            <li>
              <Link to={ROUTES.ADMIN} style={linkStyle} >Admin</Link>
            </li>
            <li>
              <SignOutButton />
            </li>
          </ul>
        </nav>
      );
    }  

}

// When user not Signed In
class NavigationNonAuth extends Component {
    constructor() {
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

    componentWillUnmount() {
      window.removeEventListener('scroll');
    }

    render () {
      return (
        <nav className={this.state.scrolled ? "navElse" : "navTop"}>

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
                <Link to={ROUTES.LANDING} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >LANDING</Link>
              </li>
              <li>
                <Link to={ROUTES.ABOUT} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >ABOUT</Link>
              </li>
              <li>
                <Link to={ROUTES.INITIATIVES} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >OUR INITIATIVES</Link>
              </li>
              <li>
                <Link to={ROUTES.EBOARD} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >EBOARD</Link>
              </li>
              <li>
                <Link to={ROUTES.SPONSORS} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >SPONSORS</Link>
              </li>
              <li>
                <Link to={ROUTES.CONTACT} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >CONTACT</Link>
              </li>
              <li className="signin">
                <Link to={ROUTES.SIGN_IN} style={this.state.scrolled ? linkStyleScrolled : linkStyle} >SIGN IN</Link>
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