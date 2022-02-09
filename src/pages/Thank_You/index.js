
import React, { Component, useRef } from 'react';
import { GoogleSpreadsheet } from "google-spreadsheet";
//import Item from "/ui/components/workspace/item.jsx";
import ReactGridLayout from 'react-grid-layout';
import FlatList from 'flatlist-react';
import emailjs from 'emailjs-com';
import { useHistory, Redirect } from 'react-router-dom';

import { Carousel } from 'react-carousel-minimal';

import Navigation from '../../components/Navigation';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


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
                    Item Pick-Ups will be done at SOLES General Meetings :) <br/>
                    Order Confirmation email will be sent within 5 minutes containing pick up info. <br/> 
                    DM Mat Ruiz on GroupMe if no confirmation email is sent or for any technical errors.
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

