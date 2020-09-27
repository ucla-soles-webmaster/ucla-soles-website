import React, { Component } from 'react';
import './footerStyle.css'
import 'font-awesome/css/font-awesome.min.css';
import {Grid, Cell} from 'react-mdl'



class Footer extends Component {
    
    // Add constructor here when necessary

    render() {
        return (
            <div className="footer">
                <div className = "footerItems">
                    <h1 className = "footerTitle">SOLES | SHPE at UCLA</h1>
                    
                    <div style = {{padding: '1vw', paddingTop: '0vw'}}>
                        <span style={{marginLeft: '5vw', fontSize: '1vw', float:'left', color: 'white'}}>Report website technical issues to:</span>
                        <span style={{fontSize: '1vw', float:'right', color: 'white', paddingRight: '6vw'}}> Contact Us:</span>
                    </div>
                    <br/>
                    <div className = "footerTopInfo">
                        <span stlye= {{marginLeft: '5vw', float: 'left', fontSize: '1vw', marginLeft: '4vw'}}><a style = {{color: 'white', textDecoration: 'none', fontSize: '1vw', marginLeft: '6.2vw'}}href= "mailto:uclasoles.webmaster@gmail.com" >uclasoles.webmaster@gmail.com</a></span>
                        <span style={{float: 'right', fontSize: '1vw'}}><a style = {{color: 'white', textDecoration: 'none', fontSize: '1vw', marginRight: '2.8vw'}}href= "mailto:uclasoles.president@gmail.com" >uclasoles.president@gmail.com</a></span>
                    </div>
                    
                        <div className = "footerSocials">
                            <a style = {{paddingTop: '1vw', float: 'left', height: '2vw', marginLeft: '7vw'}}href="https://docs.google.com/forms/d/e/1FAIpQLSfQEJK9U-EvaBFuDpoJMEGbBifz0oydO-4CAhilCaZvir38Zg/viewform" class="btn btn-primary btn-lg active" rel="noopener noreferrer" target = "_blank">
                                <button style = {{height: '2vw', backgroundColor: 'white', fontSize: '1vw', marginLeft: '.8vw'}} type="button" class="btn btn-secondary btn-sm">Subscribe to Newsletter</button>
                            </a>

                            <a href="https://www.facebook.com/uclasoles/ " rel="noopener noreferrer" target = "_blank" >
                                <i style = {{padding: '1vw',fontSize: '2vw', color: 'white'}} class="fa fa-facebook-square" aria-hidden="true"></i>
                            </a>

                            <a href="https://www.instagram.com/uclasoles/?hl=en" rel="noopener noreferrer" target = "_blank" >
                                <i style = {{padding: '1vw', fontSize: '2vw', color: 'white', marginRight: '5.8vw'}} class="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </div>
                    
                    
                    <div className = "gradient-line-hor"></div>

                    <div style={{color: 'white', textAlign: 'center', padding: '1vw', fontSize: '1vw'}}>
                        <i class="fa fa-copyright"></i> {(new Date().getFullYear())}
                    </div>

                </div>
            </div>

        );
    }

    
}


export default Footer;