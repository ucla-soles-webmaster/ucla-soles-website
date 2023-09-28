import React, { Component } from 'react';
import './footerStyle.css'
import 'font-awesome/css/font-awesome.min.css';

class Footer extends Component {
    
    // Add constructor here when necessary

    render() {
        return (
            <div className="footer">
                <div className = "footerItems">
                    <h1 className = "footerTitle">SOLES | SHPE at UCLA</h1>
                    
                    <div className="footerColumns">
                        <div className="footerColumn" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>  
                            <p style={{fontSize: '1vw', color: 'white'}}>Report website technical issues to:</p>
                            <p stlye= {{fontSize: '1vw'}}><a style = {{color: 'white', textDecoration: 'none', fontSize: '1vw'}}href= "mailto:uclasoles.webmaster@gmail.com" >uclasoles.webmaster@gmail.com</a></p>
                        </div>
                        <div className="footerColumn" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <a href="https://docs.google.com/forms/e/1FAIpQLSfQEJK9U-EvaBFuDpoJMEGbBifz0oydO-4CAhilCaZvir38Zg/viewform" className="btn btn-primary btn-lg active" style={{textDecoration: 'none', padding: '8px', marginTop: '15px', borderRadius: '8px', backgroundColor: '#717171', color: 'white', fontFamily: 'Poppins', fontSize: '1vw', border: '0px', cursor: 'pointer', display: 'inline-block'}} rel="noopener noreferrer" target="_blank">
                                 Join our Slack
                            </a>
                            <div style={{textAlign: 'center', marginTop: '15px'}}>   
                                <a href="https://www.facebook.com/uclasoles/ " rel="noopener noreferrer" target = "_blank" >
                                    <i style = {{padding: '1vw', paddingTop: '0vw', fontSize: '2vw', color: 'white'}} class="fa fa-facebook-square" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.instagram.com/uclasoles/?hl=en" rel="noopener noreferrer" target = "_blank" >
                                    <i style = {{padding: '1vw', paddingTop: '0vw', fontSize: '2vw', color: 'white'}} class="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>

                        <div className="footerColumn" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <p style={{fontSize: '1vw', color: 'white', textAlign: 'center'}}> Contact Us:</p>
                            <p style={{fontSize: '1vw', color: 'white', textAlign: 'center'}}>
                                <a style={{color: 'white', textDecoration: 'none', fontSize: '1vw'}} href="mailto:uclasoles.president@gmail.com">uclasoles.president@gmail.com</a>
                            </p>
                        </div>
                    </div>
                    {/*
                    <div style = {{padding: '1vw', paddingTop: '0vw'}}>
                        <span style={{marginLeft: '5vw', fontSize: '1vw', float:'left', color: 'white'}}>Report website technical issues to:</span>
                        <span style={{fontSize: '1vw', float:'right', color: 'white', paddingRight: '6vw'}}> Contact Us:</span>
                    </div>
                    <br/>
                    <div className = "footerTopInfo">
                        <span stlye= {{marginLeft: '5vw', float: 'left', fontSize: '1vw'}}><a style = {{color: 'white', textDecoration: 'none', fontSize: '1vw', marginLeft: '6.2vw'}}href= "mailto:uclasoles.webmaster@gmail.com" >uclasoles.webmaster@gmail.com</a></span>
                        <span style={{float: 'right', fontSize: '1vw', marginRight: '-1%'}}><a style = {{color: 'white', textDecoration: 'none', fontSize: '1vw', marginRight: '2.8vw'}}href= "mailto:uclasoles.president@gmail.com" >uclasoles.president@gmail.com</a></span>
                    </div>
                    
                        <div className = "footerSocials">
                            <a style = {{paddingTop: '1vw', paddingBottom: '1vw', float: 'left', height: '2vw', marginLeft: '7vw', borderRadius: '8px'}}href="https://docs.google.com/forms/d/e/1FAIpQLSfQEJK9U-EvaBFuDpoJMEGbBifz0oydO-4CAhilCaZvir38Zg/viewform" class="btn btn-primary btn-lg active" rel="noopener noreferrer" target = "_blank">
                                <button style = {{height: '2vw', backgroundColor: '#717171', color: 'white', fontFamily: 'Poppins', fontSize: '1vw', border: '0px', cursor: 'pointer'}} type="button" class="btn btn-secondary btn-sm">Join our Slack</button>
                            </a>

                            <a href="https://www.facebook.com/uclasoles/ " rel="noopener noreferrer" target = "_blank" >
                                <i style = {{padding: '1vw',fontSize: '2vw', color: 'white'}} class="fa fa-facebook-square" aria-hidden="true"></i>
                            </a>

                            <a href="https://www.instagram.com/uclasoles/?hl=en" rel="noopener noreferrer" target = "_blank" >
                                <i style = {{padding: '1vw', fontSize: '2vw', color: 'white', marginRight: '5.8vw'}} class="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </div>
                    



                    */}
                    <div className = "gradient-line-hor"></div>

                    <div style={{color: 'white', textAlign: 'center', padding: '1vw', fontSize: '0.85vw'}}>
                        Society of Latino Engineers and Scientists <i class="fa fa-copyright"></i> {(new Date().getFullYear())}
                    </div>

                </div>
            </div>

        );
    }

    
}


export default Footer;