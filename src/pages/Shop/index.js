import React, { Component } from 'react';
import { Carousel } from 'react-carousel-minimal';
//import Item from "/ui/components/workspace/item.jsx";
import ReactGridLayout from 'react-grid-layout';
import FlatList from 'flatlist-react';
import { Link } from 'react-router-dom';

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
import * as ROUTES from '../../constants/routes'

import './index.css'
import { colors } from '@material-ui/core';

window.current_item = null
window.current_item_URL = ''

const data = [
        {
        image: "https://www.linkpicture.com/q/sticker_slide.png"
        },
        {
        image: "https://www.linkpicture.com/q/merch4.jpeg",
        },
        /*
        {
        image: "https://www.linkpicture.com/q/merch3.jpeg"
        }
        */
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
        }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
        }







class Shop extends Component {
    
    // Add constructor here when necessary
    constructor(props) {
        super(props);
    
        this.state = {
          merchItems: [],
          merchItemsImageURLS: [],
          testCollection: [1,2,3,4,5,6,7,8,9,10]
        };

        var that = this;

        // Loop through list of images in storage
        this.props.firebase.storage.ref("resumes/").listAll().then(function(result) {
            result.items.forEach(function(imageRef) {
              // And finally display them
              //that.setState({ merchItemsImageURLS: [...that.state.merchItemsImageURLS, imageRef.location.path_] });
              console.log(imageRef.location.path_)
              
              that.props.firebase.storage
                .ref("resumes")
                .child(imageRef.location.path_.split('/')[1])
                .getDownloadURL()
                .then(url => {
                    that.setState({ merchItemsImageURLS: [...that.state.merchItemsImageURLS, [imageRef.location.path_, url] ]});
                });

            });
          }).catch(function(error) {
            // Handle any errors
          });
    
      }



    async componentDidMount() {
        window.scrollTo(0, 0)

        var that = this;

        

        
        // Get list of items in merch shop via firestore
        this.props.firebase.getFirestore().collection("merchItems")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                var itemData = doc.data();
                var itemName = doc.id;
                that.setState({ merchItems: [...that.state.merchItems, [itemName, itemData]  ] });
            });    
        });
        

    }



    // render item in merch list
    renderMerchItemShop = (item, idx) => {

       

        var that = this;
        var merchImageIndex = 0;

        var image_url = '';

        
        console.log(item)

        var s = item[1]["stock_status"]
        var status_color = s == "In Stock." ? "green" : (s == "Out of Stock." ? "red" : "#fcba03")

        /*
        <Link to={ROUTES.ITEM_PAGE} style={{textDecoration: "none", color: 'black'}} onClick={(e) => {
            window.current_item = item;
            window.current_item_URL = item[1]['image_URL']
        }}>

        </Link>
        */
        
        return (
          
        
        
          <div style={{marginBottom: "10vh"}}>
            <img
                src={item[1]["image_URL"]}
                alt="Uploaded Images"
                height="410vw"
                width="410vw"
                style={{display: "block", marginLeft: "auto", marginRight: "auto"}}
            />
            <div style={{textAlign: "center", fontSize: "1.3em", marginTop: "1vw"}}>
                {item[1]["itemName"]}
            </div>
            <div style={{textAlign: "center", fontSize: "1.3em", marginTop: "0vw"}}>
                ${item[1]["cost"]}
            </div>
            <div style={{textAlign: "center", fontSize: "1.3em", marginTop: "0vw", color: status_color}}>
                {item[1]["stock_status"]}
            </div>
            
          </div>
        
        
        
        )
      }

    

    render() {
        
        return (
            <div style={{fontFamily: 'Poppins'}}>
                <Navigation transparentNav={false} />

                
                <div style={{marginTop: '30px', paddingTop: '-10px'}}>
                    <Carousel
                        data={data}
                        time={3100}
                        width="100%"
                        height="100vh"
                        
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
                        marginTop: "-30px",
                        time:4000,
                        }}
                    />
                </div>

                

                <br/><br/>
 

                

                <div className="hubbox">
                        <img src={sun} id="leftsunM" alt="Left SOLES Sun" />
                        <h1 className="haccount">
                            SOLES Merch Collection
                        </h1>
                        <img src={sun} id="rightsunM" alt="Right SOLES Sun" />
                </div>

                <br/><br/>

                

                <div style={{alignSelf: 'center'}}> 
                    <FlatList
                        list={this.state.merchItems}
                        renderItem={this.renderMerchItemShop}
                    />
                </div>
            







                <br/>
                {/*  window.current_item == null ? <br/> : window.current_item[0]  */}
                
                <Footer/>
            </div>
        );
    }

    
}

const condition = authUser => true;

export default withAuthorization(condition)(Shop);

