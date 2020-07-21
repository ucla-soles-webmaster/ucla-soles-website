import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../../eBoard.css';
import Andy from '../../boardImages/andy.jpg'
import Trevor from '../../boardImages/trevor.jpg'
import Jasmine from '../../boardImages/dragonfruit.jpg'

import Mayra from '../../boardImages/apple.jpg'
import Robert from '../../boardImages/lemon.jpg'
import Michael from '../../boardImages/orange.jpg'

import Aidan from '../../boardImages/aiden.jpg'
import Mat from '../../boardImages/avocado.jpg'
import Eric from '../../boardImages/pear.jpg'

import Fabrezio from '../../boardImages/pomegranate.jpg'
import Josh from '../../boardImages/strawberry.jpg'
import Kelly from '../../boardImages/tomato.jpg'

import Navigation from '../../components/Navigation';
import PagePhoto from '../../components/PagePhoto';
import coverPhoto from '../../coverImages/huddle.jpg';


class EBoard extends Component {

    // Add constructor here when necessary

    
      

    render() {
        return (
            <div>
                <Navigation transparentNav={true} />
                <PagePhoto imageSource={coverPhoto} title={"Executive Board"}></PagePhoto>
            <body1 className = "eBoardPage">    
            
                <a className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Andy} alt="Andy Muraltalla"></img>
                        <div className = "setFontSizeName">Andy Muraltalla</div>
                        <div className = "setFontSizePosition">President</div>
                    </figure>
                </a>

                <a className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Trevor} alt="Trevor Gomez"></img>
                        <div className = "setFontSizeName">Trevor Gomez</div>
                        <div className = "setFontSizePosition">External Vice President</div>
                    </figure>
                </a>

                <a className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Jasmine} alt="Jasmine Raya"></img>
                        <div className = "setFontSizeName">Jasmine Raya</div>
                        <div className = "setFontSizePosition">Internal Vice President</div>
                    </figure>
                </a>

                <a className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Michael} alt="Michael Munguia"></img>
                        <div className = "setFontSizeName">Michael Munguia</div>
                        <div className = "setFontSizePosition">Transfer Representative</div>
                    </figure>
                </a>

                <a className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Mayra} alt="Mayra Lara"></img>
                        <div className = "setFontSizeName">Mayra Lara</div>
                        <div className = "setFontSizePosition">Treasurer</div>
                    </figure>
                </a>

                <a className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Robert} alt="Robert Valencia"></img>
                        <div className = "setFontSizeName">Robert Valencia</div>
                        <div className = "setFontSizePosition">Secretary</div>
                    </figure>
                </a>

                <a className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Aidan} alt="Aidan Hasegawa"></img>
                        <div className = "setFontSizeName">Aidan Hasegawa</div>
                        <div className = "setFontSizePosition">Tutoring Director</div>
                    </figure>
                </a>

                <a className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Mat} alt="Matthew Ruiz"></img>
                        <div className = "setFontSizeName">Matthew Ruiz</div>
                        <div className = "setFontSizePosition">Academic Chair</div>
                    </figure>
                </a>

                <a className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Eric} alt="Eric Saavedra Garcia"></img>
                        <div className = "setFontSizeName">Eric Saavedra Garcia</div>
                        <div className = "setFontSizePosition">Activities Director</div>
                    </figure>
                </a>

                <a className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Fabrezio} alt="Fabrezio Castaneda"></img>
                        <div className = "setFontSizeName">Fabrezio Castaneda</div>
                        <div className = "setFontSizePosition">Ciencias Director</div>
                    </figure>
                </a>

                <a className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Josh} alt="Joshua Diaz"></img>
                        <div className = "setFontSizeName">Joshua Diaz</div>
                        <div className = "setFontSizePosition">Technical Chair</div>
                    </figure>
                </a>

                <a className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Kelly} alt="Kelly Espino"></img>
                        <div className = "setFontSizeName">Kelly Espino</div>
                        <div className = "setFontSizePosition">LeaderSHPE Jr. Director</div>
                    </figure>
                </a>

            
            </body1>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>
            
        );
        
    }

}



export default EBoard;