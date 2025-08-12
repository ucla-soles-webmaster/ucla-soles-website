
import React, { Component } from 'react';

import Navigation from '../../components/Navigation';
import 'react-vertical-timeline-component/style.min.css';



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
                    <a href="/merch_shop" rel="noopener noreferrer">
                        <button type="submit" className="itemOrderSubmitButtonRe">
                            Back to Merch Shop
                        </button>
                    </a>
                </div>
                        
            </div>
        );
    }

    
}


export default Thank_You;