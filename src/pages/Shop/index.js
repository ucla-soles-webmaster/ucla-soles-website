///////////////////////////////////////////////////////////////
/* Component / ReactJS Library Imports */

import React, { Component } from 'react';
import { Carousel } from 'react-carousel-minimal';
import FlatList from 'flatlist-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { withAuthorization } from '../Session';
import * as ROUTES from '../../constants/routes'



///////////////////////////////////////////////////////////////
/* CSS Imports */

import 'react-vertical-timeline-component/style.min.css';
import './index.css'



///////////////////////////////////////////////////////////////
/* Accent Photo Imports */

import sun from '../../Photos/Icons/sunblue.png';



// Carosel Data Initializations
// NOTE: for Carousel, images can only be links (not saved on disk) to images, thats why we upload to our Firebase or another website
    const data = [
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/soles-website-dev.appspot.com/o/resumes%2Ffalldrop2022.png?alt=media&token=eb85fa16-89de-42a7-93d6-a425e03aeb5e'
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/soles-website-dev.appspot.com/o/resumes%2FSpring-Drop-Banner.png?alt=media&token=85a6d215-5141-4587-a09a-3fb7f0fa9ca2'
        }
    ];
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    };
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    };






class Shop extends Component {
    
    // Add constructor here when necessary
    
    constructor(props) {
        super(props);
    
        this.state = {
          merchItems: [],
          merchItemsImageURLS: [],
          window_width: 0,
          window_height: 0,
        };

        var that = this;

        // Loop through list of images in storage
        this.props.firebase.storage.ref("resumes/").listAll().then(function(result) {
            result.items.forEach(function(imageRef) {
              // And finally display them
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
        this.props.firebase.getFirestore().collection("merchItems").orderBy('order')
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                var itemData = doc.data();
                var itemName = doc.id;
                that.setState({ merchItems: [...that.state.merchItems, [itemName, itemData]  ] })

            });    
        });


    }

    updateWindowDimensions = () => {
        this.setState({ window_width: window.innerWidth });
        this.setState({ window_height: window.innerHeight });
    }

    componentWillUnmount() {
        // Remember state for the next mount
        localStorage.setItem('appState', JSON.stringify(this.state2));
        window.removeEventListener('resize', this.updateWindowDimensions);
    }


    // render item in merch list
    renderMerchItemShop = (item, idx) => {

        var s = item[1]["stock_status"]
        var status_color = s === "In Stock." ? "green" : (s === "Out of Stock." ? "red" : "#fcba03")

        // Determine link/route per item SUPER SCUFFED PLEASE CHANGE SOON
        var link_item = ''
        switch(idx) {
            case 0:
                link_item = ROUTES.MEMBERSHIP_SHIRT
                break;
            case 1:
                link_item = ROUTES.BUCKET_HAT
                break;
            case 2:
                link_item = ROUTES.SWOLES
                break;
            case 3:
                link_item = ROUTES.STICKER2
                break;
            case 4: // Beanie
                link_item = ROUTES.BEANIE
                break;
            case 5: // Logo shirt
                link_item = ROUTES.LOGO_SHIRT
                break;
            case 6: // ToteBag
                link_item = ROUTES.TOTEBAG
                break;
            case 7: // Shirt
                link_item = ROUTES.SHIRT
                break;
            case 8: // Sticker
                link_item = ROUTES.STICKER
                break;
            default:
                break
        }
        
        return (
            <Link to={link_item} style={{textDecoration: "none", color: 'black'}} onClick={(e) => {
                window.current_item = item;
                window.current_item_URL = item[1]['image_URL']
            }}> 
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
            </Link>
        )
      }

    

    render() {

    
        
        return (
            <div style={{fontFamily: 'Poppins'}}>
                <Navigation transparentNav={false} />

                <br/><br/>

                <div style={this.state.window_width < 600 ? {marginTop: '12vh', paddingTop: '-10px'} : {marginTop: '30px', paddingTop: '-40px'}}>
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

                <Footer/>
            </div>
        );
    }

    
}

const condition = authUser => true;

export default withAuthorization(condition)(Shop);