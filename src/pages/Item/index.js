
import React, { Component, useRef } from 'react';
//import Item from "/ui/components/workspace/item.jsx";
import ReactGridLayout from 'react-grid-layout';
import FlatList from 'flatlist-react';
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router-dom';

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

import pic1 from '../../stickerpics/pic1_hor.png';
import pic2 from '../../stickerpics/pic2.jpg';
import pic3 from '../../stickerpics/pic3.jpg';
import pic4 from '../../stickerpics/pic4.jpg';
import pic5 from '../../stickerpics/pic5.jpg';
import pic6 from '../../stickerpics/pic6.jpg';

import { withAuthorization } from '../Session';

import { colors } from '@material-ui/core';



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

  let name = ''

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yc7m6qv', 'template_6tbgsl7', form.current, 'user_POWsHAt0Tpqnry0FJkRq0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    history.push('/merch_shop')
    
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Full name</label>
      
      <input type="text" name="name" />
      <br/>
      <label>Your Email</label>
      <input type="email" name="email"/>
      <br/>
      <label>Quantity</label>
      <textarea name="quantity" />
      <br/>
      <input type="submit" value="ORDER" />
    </form>
  );
};


class Item extends Component {
    
    // Add constructor here when necessary
    constructor(props) {
        super(props);
    
        this.state = {
          item: "",
          name: '',
          quantity: '',
          email: '',
        };

        
      }

    componentDidMount() {
        window.scrollTo(0, 0)

    }


    

    render() {
        
        return (
            <div style={{fontFamily: 'Poppins'}}>
                <Navigation transparentNav={false} />

                <div style={{marginTop: '120px', paddingTop: '-10px', display: "flex"}}>
                    <br/><br/><br/><br/>
                    

                    

                    <Carousel
                        data={data}
                        time={2500}
                        width="40vw"
                        height="30vw"
                        
                        captionStyle={captionStyle}
                        radius="0px"
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
                        thumbnailWidth="100px"
                        style={{
                        textAlign: "center",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        marginTop: "20vh",
                        marginLeft: '10vh',
                        time:4000,
                        }}
                    />
                
                    
                    {console.log(window.current_item)}
                    
                    <div style={{display: "block", marginRight: "10%", marginLeft: "10vw", marginTop: "15vh"}}>
                        <h1 className="haccount">
                            SOLES Sticker No. 1
                        </h1>
                        3"x3" laminated SOLES signature sticker. 
                        <br/>
                        $3 | 2 for $5
                        <br/>
                        Order Now.

                        <br/><br/>
                        To order stickers, please fill out your name, quantity, and email below!
                        <br/>
                        <br/>
                        
                        <ContactUs/>

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

