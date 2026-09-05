import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import './copaNavStyle.css';
import soles1 from '../Navigation/solesshpe.svg';

class CopaNavigation extends Component {
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

    componentWillUnmount() {
        window.removeEventListener('scroll', () => {});
    }

    render() {
        return (
            <nav className={this.state.scrolled ? "copaNavElse" : "copaNavTop"}>
                <script src="https://kit.fontawesome.com/a076d05399.js"></script>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="iEq"> = </i>
                </label>

                <div className="logo">
                    <Link to={ROUTES.COPA_DEL_SOL} style={linkStyleWhite}>
                        <img src={soles1} alt="SOLES Logo" className="soleLog"/>
                    </Link>
                </div>

                {/* <div className="copa-title">
                    <h1 style={{color: 'white', fontSize: 'clamp(18px, 2.5vw, 32px)', fontFamily: 'Poppins, sans-serif', fontWeight: '600', margin: 0}}>Copa del Sol 2026</h1>
                </div> */}

                <ul className="ulNav">
                    <li className="liNav">
                        <Link to={ROUTES.COPA_ABOUT} style={linkStyleWhite}>About</Link>
                    </li>
                    <li className="liNav">
                        <Link to={ROUTES.COPA_TOURNAMENTS} style={linkStyleWhite}>Tournaments</Link>
                    </li>
                    <li className="liNav">
                        <Link to={ROUTES.COPA_GUIDELINES} style={linkStyleWhite}>Guidelines</Link>
                    </li>
                    <li className="liNav">
                        <Link to={ROUTES.COPA_SPONSORS} style={linkStyleWhite}>Sponsors</Link>
                    </li>
                    <li className="liNav">
                        <Link to={ROUTES.COPA_CONTACT} style={linkStyleWhite}>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default CopaNavigation;

const linkStyle = {
    textDecoration: "none",
    color: "black",
};

const linkStyleScrolled = {
    textDecoration: "none",
    color: "#001d3a",
};

const linkStyleWhite = {
    textDecoration: "none",
    color: "white",
};