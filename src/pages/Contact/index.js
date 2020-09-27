import React, { Component } from 'react';

import Navigation from '../../components/Navigation';
import PagePhoto from '../../components/PagePhoto';
import coverPhoto from '../../coverImages/contact.JPG';
import emailjs from 'emailjs-com';
import './contact.css';


import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'

function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_d19ecvb', e.target, 'user_2CrH6Hv9biqjQoD3JEFWe')
        .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log("hello");
      console.log(error.text);
    });
    e.target.reset();
}

class Contact extends Component {
    
    // add constructor if necessary
    

    render() {
        return (
            <div>
                <Navigation transparentNav={true} />
                <PagePhoto imageSource={coverPhoto} title={"Contact Us"}></PagePhoto>
                <h1 className = "contactTitle">Have any questions? Send them our way!</h1>


                <div className = "contactForm">
                    <form onSubmit={sendEmail}>
                        <div>
                            <div className = "contactComponenet">
                                <input type= "text" placeholder = "Name" name = "name"/>
                            </div>
                            <div className = "contactComponenet">
                                <input type = "email" placeholder= "Email Address" name = "email"/>
                            </div>
                            <div className = "contactComponenet">
                                <input type = "text" placeholder="Subject" name = 'subject'/>
                            </div>
                            <div className = "contactComponenet">
                                <textarea id="" cols="30" rows="8" placeholder="Your Message" name = "message"></textarea>
                            </div>
                            <div className = "contactComponenet">
                                <input type ="submit" className = "btn btn-info" value = "Send Message"></input>
                            </div>
                        </div>
                    </form>
                </div>







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
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
    

}


export default Contact;