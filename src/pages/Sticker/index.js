
import React, { Component, useRef } from 'react';
import { GoogleSpreadsheet } from "google-spreadsheet";
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router-dom';

import { Carousel } from 'react-carousel-minimal';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import 'react-vertical-timeline-component/style.min.css';

import pic1 from '../../Photos/MerchShop/Sticker/pic1_hor.png';
import pic2 from '../../Photos/MerchShop/Sticker/pic2.jpg';
import pic3 from '../../Photos/MerchShop/Sticker/pic3.jpg';
import pic4 from '../../Photos/MerchShop/Sticker/pic4.jpg';
import pic5 from '../../Photos/MerchShop/Sticker/pic5.jpg';
import pic6 from '../../Photos/MerchShop/Sticker/pic6.jpg';

import { withAuthorization } from '../Session';

import "./style.css"



// Carosel Data Initializations
const data = [
    {
        image: pic1
    },
    {
        image: pic3
    },
    {
        image: pic5
    },
    {
        image: pic6
    },
    {
        image: pic4
    },
    {
        image: pic2
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


    const SPREADSHEET_ID = "MerchShopOrders";
    const SHEET_ID = "0";
    const CLIENT_EMAIL = "merchorders@sanguine-theory-290703.iam.gserviceaccount.com";
    const PRIVATE_KEY = "MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCRT1XdgQMEyuQm\n55oOz7mG0OBfqtmr2/3tnZ6w0WZ/5LxIVmD+GCh7gMKC7BW14bDWB2FXrqfi7fHO\n/qWuSXMHz1/y8qOLLtOLV+Ov8CF+DkvOR62vs8jemcsN3V2VwY9IDObs/6kaEiwF\n/Cd+yBE41UvXkBqy6eScUWdsEJr2TNn3Gp2QEhNImqkmH9GwDvNn2gTtQkjRRYL/\nmVucM3N5cApnDCVGF9i3Q+aS9lQaL1CrEbSp9VYTnTTFcDrFiAJjLoXDv57USvzC\nIU8xC0UInkLs+Kt3DMhcjgHwTuB4xmd66WZB69gP45YPmTEi02wPzMmN9SGyzqYc\nyj+SpzGHAgMBAAECggEAMwU7LeoViEJA95QMWLUA/GAs2ApiIWC9+QeF56mupqtG\nnNOPfMg4tpyQL237dYBIGe4/dI0Dr79CTx7ER7zMYeqjUud1GvKXHm7+qBDVgbA9\nV7F9P5sNpXM0g6q9KE7tIyw8jOx7kIbe5D8UEwTmXyEtXwPfDADp3yUJ/jyaXG46\nBnJOn3lb+h41JA/K76i6ACrUkSa1t5VMezPjC4rhDvfVL3512h83M/GABExRdpG2\ndYKHACP9BQeRJgCgk2kfYuM3EgF8b3PPD5uWdI0HEtk5xaxkM01LNd3SwN9nRfZu\n7sOhhBPu31ngba04J8o31zrprhVHn2hAkengy/i/wQKBgQDEmtEf1ZegaI09sQJS\nXUi7kNOfEkQHmDutT9/6+NrY3HD9/QUkFFREwDeg8sIGsWyi1VYI+ET2sWVaeD0v\nfgzPQn8PxFZO0fDatSO4F8vFSL2Rsi70ScpdOAzXL9X4Hc5JN+TN9ordGOgRjDF6\nU+2g6TWeIXuUys3dyipxYhTVZwKBgQC9NW86C7EczlbU3WzO7fwIuexvT97cdZp1\n4eqjAXcllwMeWvfIGt4kIjSfio0VXLXDMVCvl3HnPky+ZLhqp4cYP9FhwjeRNtOX\nXx6+C820VAQyXv+VsZCfVCcuIEqJWpr4Au5XcDKtm9N7FYxtyGhUIRjx8LgwJgbm\nzcCEOHQO4QKBgHCwPEV+69Xpl2tQ1f/XsCSyMlnu4kdoHmyMZ9k2YloCoFE0gYnY\njSSK+FesTUIA2D/M/+9MPlsX+vwMByX9neH+P04OP1oWQ3NYeAzAtu9xbhbghsFG\nulMMGXAN3xrEGsUk4GSdd6Ka8Al+za1MBdxBT5Y/otH6HF2PzxwGF+LpAoGABGKr\nrE2/EiraKl7jebxcXhtpFn9ka/mx1c+hr5uGFnH0mYyEN7gfs/iy/Yupj3gxok+P\nTjKVakWwY61T9OzjHbXE9Z4ZyZzatKR4wvDlGKvl2QEIrYCLGJZLvi7za1GVS/BN\nc+te0VVORokOUzEU8fY+bMUmj78h49GbB7WDQyECgYAXL3iMppFyblHKiYm+h8Mt\nsae5ah+vbbJ96UiVz0L4G5jUhuZG8+xDxpK2WSVXgPDhBVMQJ2tsdRqOLcH1nrsH\nglwdcl+ULkimjXYtHe7+xk3F2AkkwgHKocuyypKCq+y1ZcOTTR4gNsc4LZSTn6el\n4W9rU4zn0V1ty/V8bCMrhQ==\n";

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

    const appendSpreadsheet = async (row) => {
        try {
          await doc.useServiceAccountAuth({
            client_email: CLIENT_EMAIL,
            private_key: PRIVATE_KEY,
          });
          // loads document properties and worksheets
          await doc.loadInfo();
      
          const sheet = doc.sheetsById[SHEET_ID];
          const result = await sheet.addRow(row);
        } catch (e) {
          console.error('Error: ', e);
        }
      };

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
                <input type="number" class="itemOrderFormNumber" id="quantity" defaultValue="1" name="quantity" min="1" max="2" />
            </div>

            
            <br/>
            <div style={{textAlign: "center", fontSize: "0.85em", width: "85%", marginLeft: "auto", marginRight: "auto"}}>
                Order confirmation email will be sent minutes upon order.
            </div>
            <br/>
            <input type="submit" value="ORDER" class="itemOrderSubmitButton"/>
            <br/>
            <input style={{fontSize: "0%", border: "none"}} name="item" value="SOLES Sticker No. 1 ($3 for 1, $5 for 2)"/>
            <input style={{fontSize: "0%", border: "none"}} name="size" value='3"x3" Sticker'/>
        </form>
  );
};


class Sticker extends Component {
    
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
                            <b>SOLES Sticker No. 1</b>
                        </div>
                        <div style={{fontSize: "1.55em"}}>
                            $3 (Members $2)
                        </div>
                        <div style={{fontSize: "1.3em", color: "green", marginTop: "0.5vh", marginBottom: "-1.5vh"}}>
                            In Stock.
                        </div>
                        
                        <br/>
                        <ul style={{color: "#6f7571"}}>
                            <li style={{fontSize: "1.05em"}}>3"x3" laminated SOLES signature sticker. </li>
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

export default withAuthorization(condition)(Sticker);



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

