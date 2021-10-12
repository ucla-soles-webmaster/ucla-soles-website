
import React, { Component } from 'react';
//import Item from "/ui/components/workspace/item.jsx";
import ReactGridLayout from 'react-grid-layout';
import FlatList from 'flatlist-react';
import emailjs from 'emailjs-com';



import Navigation from '../../components/Navigation';
import PagePhoto from '../../components/PagePhoto';
import coverPhoto from '../../coverImages/abt2.jpg';
import rightsun from '../../coverImages/rightsun.png'
import leftsun from '../../coverImages/leftsun.png';
import shirt1 from '../../photos/shirt1t.png'
import shirt2 from '../../photos/shirt2.png'
import sticker1 from '../../photos/sticker1.png'
import penny from '../../photos/pennyt.png'
import cart from '../../coverImages/cart1.png';
import Footer from '../../components/Footer';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import sun from '../../coverImages/sunblue.png';

import { withAuthorization } from '../Session';

import { colors } from '@material-ui/core';




class Item extends Component {
    
    // Add constructor here when necessary
    constructor(props) {
        super(props);
    
        this.state = {
          item: "",
          name: '',
          email: '',
        };

        
      }

    componentDidMount() {
        window.scrollTo(0, 0)

    }

    emailOrder = (e) => {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
        var that = this;
        emailjs.sendForm('service_ckn3v16', 'service_ckn3v16', [that.state.name, that.state.email], 'user_POWsHAt0Tpqnry0FJkRq0')
        .then((result) => {
            window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        });
    }
    

    render() {
        
        return (
            <div style={{fontFamily: 'Poppins'}}>
                <Navigation transparentNav={false} />

                <div style={{marginTop: '120px', paddingTop: '-10px', display: "flex"}}>
                    <br/><br/><br/><br/>
                    
                    <img
                        src={"https://firebasestorage.googleapis.com/v0/b/soles-website-dev.appspot.com/o/resumes%2Fitem8282021212745.jpg?alt=media&token=822c5c8a-8a32-41e8-a4ec-3f4af0ba8f8e"}
                        alt="Uploaded Images"
                        height="350vw"
                        width="350vw"
                        style={{display: "block", marginLeft: "10%", marginTop: "5vh"}}
                    />
                    
                    
                    <div style={{display: "block", marginRight: "10%", marginLeft: "10vw", marginTop: "15vh"}}>
                        <h1 className="haccount">
                            SOLES Sticker No. 1
                        </h1>
                        3"x3" laminated SOLES signature sticker. <br/>
                        $3<br/>
                        Order Now.

                        <br/><br/><br/>
                        <fieldset className="FormGroup">
                            <Field 
                                label="Name"
                                id="text"
                                type="text"
                                style={{paddingRight: '30px'}}
                                placeholder="Rick"
                                required
                                value={this.state.name}
                                formrowclass=""
                                onChange={(e) => {
                                    this.setState({ name: e.target.value });  
                                }}
                            />
                            <br/>
                            <Field 
                                label="Email"
                                id="text"
                                type="text"
                                style={{paddingRight: '30px'}}
                                placeholder="student@ucla.edu"
                                required
                                value={this.state.email}
                                formrowclass=""
                                onChange={(e) => {
                                    this.setState({ email: e.target.value });  
                                }}
                            />
                            <br/>
                        </fieldset>
                        <br/><br/><br/><br/>
                        <button style={{marginLeft: "6.5vw"}} disabled={this.state.name == '' && this.state.email == ''} type="submit" className="buttonsu" onClick={this.emailOrder}>
                                ORDER
                        </button>

                    </div>

                    
                

                
                    
                
                </div>
                <br/><br/><br/>
                <br/>
                <Footer/>
            </div>
        );
    }

    
}

const condition = authUser => true;

export default withAuthorization(condition)(Item);



const Field = ({
    label,
    id,
    type,
    placeholder,
    required,
    autoComplete,
    value,
    onChange,
    formrowclass
  }) => (
    <div className="FormRow">
      <label htmlFor={id} className={formrowclass === "" ? "FormRowLabel" : formrowclass}>
        {label}
      </label>
      <input
        className="FormRowInput2"
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
    </div>
  );

