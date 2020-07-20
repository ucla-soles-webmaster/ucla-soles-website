import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../../eBoard.css';
import Andy from '../../boardImages/apple.jpg'
import Trevor from '../../boardImages/banana.jpg'
import Jasmine from '../../boardImages/dragonfruit.jpg'

import Mayra from '../../boardImages/kiwi.jpg'
import Robert from '../../boardImages/lemon.jpg'
import Michael from '../../boardImages/orange.jpg'

import Aidan from '../../boardImages/peach.jpg'
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
            <body1>    
            
                <a className = "ad">
                    <figure className = "fig">
                    <img className = "image" src={Andy} alt="Andy Muraltalla"></img>
                        <div className = "h1">Andy Muraltalla</div>
                        <div className = "setFontSizePosition">President</div>
                    </figure>
                </a>

                <a className = "ad">
                    <figure className = "fig">
                    <img className = "image" src={Trevor} alt="Trevor Gomez"></img>
                        <div className = "h1">Trevor Gomez</div>
                        <div className = "setFontSizePosition">External Vice President</div>
                    </figure>
                </a>

                <a className = "ad">
                    <figure className = "fig">
                    <img className = "image" src={Jasmine} alt="Jasmine Raya"></img>
                        <div className = "h1">Jasmine Raya</div>
                        <div className = "setFontSizePosition">Internal Vice President</div>
                    </figure>
                </a>

                <a className = "ad">
                    <figure className = "fig">
                    <img className = "image" src={Michael} alt="Michael Munguia"></img>
                        <div className = "h1">Michael Munguia</div>
                        <div className = "setFontSizePosition">Transfer Representative</div>
                    </figure>
                </a>

                <a className = "ad">
                    <figure className = "fig">
                    <img className = "image" src={Mayra} alt="Mayra Lara"></img>
                        <div className = "h1">Mayra Lara</div>
                        <div className = "setFontSizePosition">Treasurer</div>
                    </figure>
                </a>

                <a className = "ad">
                    <figure className = "fig">
                    <img className = "image" src={Robert} alt="Robert Valencia"></img>
                        <div className = "h1">Robert Valencia</div>
                        <div className = "setFontSizePosition">Secretary</div>
                    </figure>
                </a>

                <a className = "ad">
                    <figure className = "fig">
                    <img className = "image" src={Aidan} alt="Aidan Hasegawa"></img>
                        <div className = "h1">Aidan Hasegawa</div>
                        <div className = "setFontSizePosition">Tutoring Director</div>
                    </figure>
                </a>

                <a className = "ad">
                    <figure className = "fig">
                    <img className = "image" src={Mat} alt="Matthew Ruiz"></img>
                        <div className = "h1">Matthew Ruiz</div>
                        <div className = "setFontSizePosition">Academic Chair</div>
                    </figure>
                </a>

                <a className = "ad">
                    <figure className = "fig">
                    <img className = "image" src={Eric} alt="Eric Saavedra Garcia"></img>
                        <div className = "h1">Eric Saavedra Garcia</div>
                        <div className = "setFontSizePosition">Activities Director</div>
                    </figure>
                </a>

                <a className = "ad">
                    <figure className = "fig">
                    <img className = "image" src={Fabrezio} alt="Fabrezio Castaneda"></img>
                        <div className = "h1">Fabrezio Castaneda</div>
                        <div className = "setFontSizePosition">Ciencias Director</div>
                    </figure>
                </a>

                <a className = "ad">
                    <figure className = "fig">
                    <img className = "image" src={Josh} alt="Joshua Diaz"></img>
                        <div className = "h1">Joshua Diaz</div>
                        <div className = "setFontSizePosition">Technical Chair</div>
                    </figure>
                </a>

                <a className = "ad">
                    <figure className = "fig">
                    <img className = "image" src={Kelly} alt="Kelly Espino"></img>
                        <div className = "h1">Kelly Espino</div>
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