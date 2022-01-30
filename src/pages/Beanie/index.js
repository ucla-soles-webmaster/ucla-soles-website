
import React, { Component, useRef } from 'react';
import { GoogleSpreadsheet } from "google-spreadsheet";
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router-dom';

import { Carousel } from 'react-carousel-minimal';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import 'react-vertical-timeline-component/style.min.css';

import pic1 from '../../photos/MerchShop/Beanie/graphic.png';

import { withAuthorization } from '../Session';




// Carosel Data Initializations
const data = [
    {
        image: pic1
    },
];
const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
};
const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
};


export const ContactUs = () => {
    const form = useRef();
    const history = useHistory();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_b1xhzqm', 'template_6tbgsl7', form.current, 'user_POWsHAt0Tpqnry0FJkRq0')
        .then((result) => {
            console.log(result.text);
            

            //history.push('/merch_shop')
        }, (error) => {
            console.log(error.text);
        });

        emailjs.sendForm('service_b1xhzqm', 'template_5zjjunq', form.current, 'user_POWsHAt0Tpqnry0FJkRq0')
        .then((result) => {
            console.log(result.text);
        
        }, (error) => {
            console.log(error.text);
        });
        
        var delayInMilliseconds = 2000; // 2 second
        setTimeout(function() {    

            history.push('/merch_shop')    

        }, delayInMilliseconds);
        

        
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="itemOrderForm">
            <div class="orderFormTitle">
                <b>Order Form</b>
            </div>
            <div className="itemOrderFormRow">
                <input
                    name="name"
                    className="itemOrderFormRowInput"
                    type="text"
                    placeholder="Full name"
                    
                />
            </div>
            <div className="itemOrderFormRow">
                <input
                    name="email"
                    className="itemOrderFormRowInput"
                    type="email"
                    placeholder="Email"
                />
            </div>
            <div className="itemOrderFormRow">
                <label>&nbsp;Quantity:</label> &nbsp;&nbsp;&nbsp;
                <input type="number" class="itemOrderFormNumber" id="quantity" defaultValue="1" name="quantity" min="1" max="5" />
            </div>

            
            <br/>
            <div style={{textAlign: "center", fontSize: "0.85em", width: "85%", marginLeft: "auto", marginRight: "auto"}}>
                You will receive an email confirmation and be routed to the Merch Shop upon successful order. <br/> DM Mat Ruiz on GroupMe if any errors occur.
            </div>
            <br/>
            <input type="submit" value="ORDER" class="itemOrderSubmitButton"/>
            <br/>
            <input style={{fontSize: "0%", border: "none"}} name="item" value="Beanie"/>
            <input style={{fontSize: "0%", border: "none"}} name="size" value='Standard'/>
        </form>
  );
};


class Beanie extends Component {
    
    // Add constructor here when necessary
    constructor(props) {
        super(props);
    
        this.state = {
          item: "",
          name: '',
          quantity: '',
          email: '',
          window_height: 0,
          window_width: 0
        };

        
      }

      updateWindowDimensions = () => {
        this.setState({ window_width: window.innerWidth });
        this.setState({ window_height: window.innerHeight });
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }


    

    render() {
        
        return (
            <div style={{fontFamily: 'Poppins'}}>
                <Navigation transparentNav={false} />

                <div class="itemPageOutmostDiv" style={{marginTop: "3vw"}}>
                    
                    
                    <div class="itemPageFlex1" >
                        <Carousel
                            data={data}
                            time={2500}
                            width="76vw"
                            height={this.state.window_width < 600 ? "100vw" : "38vw"}
                            
                            captionStyle={captionStyle}
                            
                            slideNumber={false}
                            slideNumberStyle={slideNumberStyle}
                            captionPosition="bottom"
                            automatic={true}
                            dots={true}
                            pauseIconColor="white"
                            pauseIconSize="40px"
                            slideBackgroundColor="darkgrey"
                            slideImageFit="cover"
                            thumbnails={false}
                            thumbnailWidth="80vw"
                            style={ this.state.window_width < 600 ? 
                                {
                                    time:4000,
                                    marginTop:"20vh",
                                    marginLeft:"9vw"
                                }
                                    :
                                {
                                    textAlign: "center",
                                    maxWidth: "100%",
                                    marginTop: "20vh",
                                    time:4000,
                                }
                            }

                            
                        />
                    </div>
                
                    
                    
                    
                    <div class="itemPageFlex2" style={{marginRight: "0%", marginLeft: "5vw"}}>
                        <div className="haccountMerchItem">
                            <b>SOLES Beanie</b>
                        </div>
                        <div style={{fontSize: "1.55em"}}>
                            $???
                        </div>
                        <div style={{fontSize: "1.3em", color: "#fcba03", marginTop: "0.5vh", marginBottom: "-1.5vh"}}>
                            Coming Soon.
                        </div>
                        
                        <br/>
                        <ul style={{color: "#6f7571"}}>
                            <li style={{fontSize: "1.05em"}}>[ADD DETAILS HERE]</li>
                        </ul>
                        
                        <br/>
                        
                        <ContactUs />

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

export default withAuthorization(condition)(Beanie);



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
    <div>
      <label htmlFor={id}>
        {label}
      </label>
      &nbsp;
      <input
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

