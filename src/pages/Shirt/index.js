
import React, { Component, useRef } from 'react';
import emailjs from 'emailjs-com';

import { Carousel } from 'react-carousel-minimal';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import 'react-vertical-timeline-component/style.min.css';

import back1 from '../../photos/MerchShop/Shirt21-22/back1.jpg';
import back2 from '../../photos/MerchShop/Shirt21-22/back2.jpg';
import front_dramatic from '../../photos/MerchShop/Shirt21-22/front-dramatic.jpg';
import front from '../../photos/MerchShop/Shirt21-22/front.jpg';
import graphic from '../../photos/MerchShop/Shirt21-22/graphic.png';
import group1 from '../../photos/MerchShop/Shirt21-22/group1-v1.jpg';
import group2 from '../../photos/MerchShop/Shirt21-22/group2.jpg';

import { withAuthorization } from '../Session';


import "./style.css"



// Carosel Data Initializations
const data = [
    {
        image: graphic
    },
    {
        image: group2
    },
    {
        image: group1
    },
    {
        image: front_dramatic
    },
    {
        image: front
    },
    {
        image: back1
    },
    {
        image: back2
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



class Shirt extends Component {
    
    // Add constructor here when necessary
    constructor(props) {
        super(props);
    
        this.state = {
          item: "",
          name: '',
          quantity: '',
          email: '',
          window_width: 0,
          window_height: 0,
          shirt_counts: {"S": 0,
                        "M": 0,
                        "L": 0,
                        "XL": 0,
                        "XL2": 0},
          name_form: '',
          size_form: '-',
          email_form: '',
          quantity_form: 1,
          clicked_order: false,
          form: {},
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
        var that = this;


        // Get shirt count numbers
        this.props.firebase.getFirestore().collection("misc").doc("shirt_counts")
        .get()
        .then(function(doc) {
            if (doc.exists) {
            var shirt_counts_data = doc.data();
            that.setState({ shirt_counts: shirt_counts_data })
            } else {
                // doc.data() will be undefined in this case
                console.log("Can't get shirt size count numbers from firebase inventory!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }



    sendEmail = (e) => {

        e.preventDefault();
        this.setState({ clicked_order: true })
        var that = this;
        var d = new Date();

        var month = d.getMonth()+1

        //Add order to Orders list
        var order_date = "Ordered on - " + "Month: " + month + "   Day: " + d.getDate() + "   Year: " + d.getFullYear()
        var order_doc_name = "order" + d.getMonth()+1 + d.getDate() + d.getFullYear() + d.getHours() + d.getMinutes() + d.getSeconds()
        this.props.firebase.getFirestore().collection("misc").doc("orders").collection("orders").doc(order_doc_name).set({
            name: that.state.name_form,
            email: that.state.email_form,
            quantity: that.state.quantity_form,
            size: that.state.size_form,
            date: order_date,
            item: "Membership Shirt"
          })
            .then(function() {
              console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
            

        //Update shirt size count in backend
        if(this.state.size_form == "S") {
            this.small()
        }
        else if (this.state.size_form == "M") {
            this.medium()
        }
        else if (this.state.size_form == "L") {
            this.large()
        }
        else if (this.state.size_form == "XL") {
            this.xl()
        }
        else if (this.state.size_form == "2XL") {
            this.xl2()
        }

        emailjs.sendForm('service_b1xhzqm', 'template_6tbgsl7', this.state.form.current, 'user_POWsHAt0Tpqnry0FJkRq0')
        .then((result) => {
            console.log(result.text);
            

            //history.push('/merch_shop')
        }, (error) => {
            console.log(error.text);
        });

        emailjs.sendForm('service_b1xhzqm', 'template_5zjjunq', this.state.form.current, 'user_POWsHAt0Tpqnry0FJkRq0')
        .then((result) => {
            console.log(result.text);
        
        }, (error) => {
            console.log(error.text);
        });
        
        var delayInMilliseconds = 3000; // 3 second
        setTimeout(function() {    

            window.location = 'thank_you';  

        }, delayInMilliseconds);
        
    };




    /////////////////////////
    // Update shirt counts
    small(new_code) {
        var that = this;
        this.props.firebase.getFirestore().collection("misc")
        .doc('shirt_counts')  // can have multiple .where calls
        .update({
          S: that.state.shirt_counts["S"] - that.state.quantity_form
        })
    }
    medium(new_code) {
        var that = this;
        this.props.firebase.getFirestore().collection("misc")
        .doc('shirt_counts')  // can have multiple .where calls
        .update({
          M: that.state.shirt_counts["M"] - that.state.quantity_form
        })
    }
    large(new_code) {
        var that = this;
        this.props.firebase.getFirestore().collection("misc")
        .doc('shirt_counts')  // can have multiple .where calls
        .update({
          L: that.state.shirt_counts["L"] - that.state.quantity_form
        })
    }
    xl(new_code) {
        var that = this;
        this.props.firebase.getFirestore().collection("misc")
        .doc('shirt_counts')  // can have multiple .where calls
        .update({
          XL: that.state.shirt_counts["XL"] - that.state.quantity_form
        })
    }
    xl2(new_code) {
        var that = this;
        this.props.firebase.getFirestore().collection("misc")
        .doc('shirt_counts')  // can have multiple .where calls
        .update({
          XL2: that.state.shirt_counts["XL2"] - that.state.quantity_form
        })
    }


    

    render() {
        
        console.log(this.state.size_form)



        return (
            <div style={{fontFamily: 'Poppins'}}>
                <Navigation transparentNav={false} />

                <div class="itemPageOutmostDiv" style={{marginTop: "3vw"}}>
                    
                    
                    <div class="itemPageFlex1" >
                        <Carousel
                            data={data}
                            time={2500}
                            width={"76vw"}
                            height={this.state.window_width < 600 ? "100vw" : "35vw"}
                            
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
                            <b>SOLES Membership Shirt</b>
                        </div>
                        <div style={{fontSize: "1.55em"}}>
                            $20 (BOGO)
                        </div>
                        <div style={{fontSize: "1.2em"}}>
                            Members get first shirt for free!
                        </div>
                        <div style={{fontSize: "1.3em", color: "green", marginTop: "0.7vh", marginBottom: "-1.5vh"}}>
                            In Stock.
                        </div>
                        
                        <br/>
                        <ul style={{color: "#6f7571"}}>
                            <li style={{fontSize: "1.05em"}}>The SOLES membership shirt for the 2021-2022 school year.</li>
                            {/*}
                            <li style={{fontSize: "1.05em"}}>Window width: {this.state.window_width}</li>
                            <li style={{fontSize: "1.05em"}}>Window height: {this.state.window_height}</li>
                            */}
                        </ul>
                        
                        <br/>
                        
                        
                        
                        <form ref={this.state.form} onSubmit={this.sendEmail} className="itemOrderForm">
                            <div class="orderFormTitle">
                                <b>Order Form</b>
                            </div>
                            
                            <div className="itemOrderFormRow">
                                <input
                                    name="name"
                                    className="itemOrderFormRowInput"
                                    type="text"
                                    placeholder="Full name"
                                    onChange={(e) => {
                                        this.setState({ name_form: e.target.value });  
                                    }}
                                />
                            </div>
                            <div className="itemOrderFormRow">
                                <input
                                    name="email"
                                    className="itemOrderFormRowInput"
                                    type="email"
                                    placeholder="Email"
                                    onChange={(e) => {
                                        this.setState({ email_form: e.target.value });  
                                    }}
                                />
                            </div>
                            <div className="itemDropDown">
                                <label>&nbsp;Size:</label> &nbsp;&nbsp;
                                <select name="size" className="itemDropDown" id="dropdown" onChange={(e) => {
                                            this.setState({ size_form: e.target.value });  
                                        }}>
                                    <option value="-"   >-</option>
                                    {/*disabled={this.state.shirt_counts["S"] <= 0 ? true : false}*/}
                                    <option value="S"   disabled={this.state.shirt_counts["S"] <= 0 ? true : false}>S</option>
                                    <option value="M"   disabled={this.state.shirt_counts["M"] <= 0 ? true : false}>M</option>
                                    <option value="L"   disabled={this.state.shirt_counts["L"] <= 0 ? true : false}>L</option>
                                    <option value="XL"  disabled={this.state.shirt_counts["XL"] <= 0 ? true : false}>XL</option>
                                    <option value="2XL" disabled={this.state.shirt_counts["XL2"] <= 0 ? true : false}>2XL</option>
                                </select>
                            </div>
                            <div className="itemOrderFormRow">
                                <label>&nbsp;Quantity:</label> &nbsp;&nbsp;&nbsp;
                                <input type="number" class="itemOrderFormNumber" id="quantity" defaultValue="1" name="quantity" min="1" max="2" onChange={(e) => {
                                        this.setState({ quantity_form: e.target.value });  
                                    }}/>
                            </div>

                     
                            <br/>
                            {
                                this.state.clicked_order == false ? <input type="submit" disabled={this.state.name_form == '' || this.state.size_form == '-' || this.state.email_form == '' || this.state.clicked_order == true} value="ORDER" class="itemOrderSubmitButton"/>
                                    :
                                    <div class="loader"></div>
                            }
                            
                            <br/>
                            <input style={{fontSize: "0%", border: "none"}} name="item" value="SOLES Membership Shirt ($20 for 1, $30 for 2)"/>
                        </form>



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

export default withAuthorization(condition)(Shirt);


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

