
import React, { Component, useRef } from 'react';
import { GoogleSpreadsheet } from "google-spreadsheet";
//import Item from "/ui/components/workspace/item.jsx";
import ReactGridLayout from 'react-grid-layout';
import FlatList from 'flatlist-react';
import emailjs from 'emailjs-com';
import { useHistory, Redirect } from 'react-router-dom';

import { Carousel } from 'react-carousel-minimal';

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


class Thank_You extends Component {
    
    // Add constructor here when necessary
    constructor(props) {
        super(props);
    
        this.state = {
          
        };

        
      }
    
    

    componentDidMount() {
        window.scrollTo(0, 0)

    }

   

   
    

    render() {
        



        return (
            <div style={{fontFamily: 'Poppins'}}>
                <Navigation transparentNav={false} />

                <div style={{marginTop: '27vh', paddingTop: '-10px'}}>
                    
                </div>

                <br/><br/>

                
                        
                <h1 className="haccount">
                    Thanks for your order!
                </h1>
                
                <p style={{textAlign: 'center', paddingLeft: '5%', paddingRight: '5%', fontSize: '1.1em'}}>
                    Order Confirmation email will be sent within 5 minutes containing pick up info. <br/> Pick ups will be done on Finals week Monday 2pm-7pm at CEED Center. Email uclasoles@gmail.com if you can't make this time. <br/>DM Mat Ruiz on GroupMe if no confirmation email is sent or for any technical errors.
                </p>
                <div className="haccountRe">
                    <a href="/merch_shop">
                        <button type="submit" className="itemOrderSubmitButtonRe">
                            Back to Merch Shop
                        </button>
                    </a>
                </div>
                        
            </div>
        );
    }

    
}

const condition = authUser => true;

export default Thank_You;


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

