import React, { Component } from 'react';

import Navigation from '../../components/Navigation';
import PagePhoto from '../../components/PagePhoto';
import coverPhoto from '../../coverImages/contact.JPG';
import Footer from '../../components/Footer';
import emailjs from 'emailjs-com';
import './contact.css';


function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_i8maefd', e.target, 'user_4rQekKQSITRKt69qEZzgq')
        .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
}

class Contact extends Component {
    
    // add constructor if necessary
    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <div className="addPoppins">
                <Navigation transparentNav={true} />
                <PagePhoto imageSource={coverPhoto} title={"Contact Us"}></PagePhoto>
                <br/>
                <h1 className = "contactTitle">Have any questions? Send them our way!</h1>
                <br/>

                <div className = "contactForm" style={{fontFamily: 'Poppins'}}>
                    <form onSubmit={sendEmail}>
                        <div>
                            <div className = "contactComponenet">
                                <input className = "contactInfo" type= "text" placeholder = "Name" name = "name" required/>
                            </div>
                            <div className = "contactComponenet">
                                <input className = "contactInfo" type = "email" placeholder= "Email Address" name = "email" required/>
                            </div>
                            <div className = "contactComponenet">
                                <input className = "contactInfo" type = "text" placeholder="Subject" name = 'subject'/>
                            </div>
                            <div className = "contactComponenet">
                                <textarea className = "contactInfo" style = {{height: '10vw'}} id="" cols="30" rows="8" placeholder="Your Message" name = "message" required></textarea>
                            </div>
                            
                            <div className = "contactComponenet">
                                <input type ="submit" className = "buttoncontact" value = "Send Message"></input>
                                <br/>
                            </div>
                        </div>
                    </form>
                </div>






                <br/>
                <div style = {{textAlign: 'center'}}>
                    <h1 className = "contactTitle">Follow us on social media!</h1>
                    <a  href="https://www.facebook.com/uclasoles/ " rel="noopener noreferrer" target = "_blank" >
                        <i style = {{padding: '1vw',fontSize: '3vw', color: 'black'}} class="fa fa-facebook-square" aria-hidden="true"></i>
                    </a>

                    <a href="https://www.instagram.com/uclasoles/?hl=en" rel="noopener noreferrer" target = "_blank" >
                        <i style = {{padding: '1vw', fontSize: '3vw', color: 'black'}} class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Footer/>
            </div>
        );
    }
    

}


export default Contact;