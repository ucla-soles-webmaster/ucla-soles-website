import FlatList from 'flatlist-react';
import React, { Component } from 'react';

import { withAuthorization } from '../Session';


class Orders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders_list: [], //shirts
      orders_beanies: [],
      orders_totes: [],
      orders_logo_comp: [],

      shirt_counts: {},
      beanie_counts: {},
      tote_counts: {},
      logo_comp_counts: {},
    };

  }

  componentDidMount() {

    window.scrollTo(0, 0)
      
    // Used to get a list of all the users
    var that = this;


    // ORDERS LISTS
    //

    // Get list of shirt orders
    this.props.firebase.getFirestore().collection("misc").doc("orders").collection("orders")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            var userData = doc.data();
            var userID = doc.id;
            that.setState({ orders_list: [...that.state.orders_list, [userData, userID]  ] });
        });    
    });

    // Get list of beanie orders
    this.props.firebase.getFirestore().collection("misc").doc("orders").collection("orders_beanies")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            var userData = doc.data();
            var userID = doc.id;
            that.setState({ orders_beanies: [...that.state.orders_beanies, [userData, userID]  ] });
        });    
    });

    // Get list of logo shirt orders
    this.props.firebase.getFirestore().collection("misc").doc("orders").collection("orders_logos_comp")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            var userData = doc.data();
            var userID = doc.id;
            that.setState({ orders_logo_comp: [...that.state.orders_logo_comp, [userData, userID]  ] });
        });    
    });

    // Get list of tote orders
    this.props.firebase.getFirestore().collection("misc").doc("orders").collection("orders_totes")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            var userData = doc.data();
            var userID = doc.id;
            that.setState({ orders_totes: [...that.state.orders_totes, [userData, userID]  ] });
        });    
    });
    


    // ITEM COUNTS
    //

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

    // Get beanie count numbers
    this.props.firebase.getFirestore().collection("misc").doc("beanie_count")
    .get()
    .then(function(doc) {
        if (doc.exists) {
        var shirt_counts_data = doc.data();
        that.setState({ beanie_counts: shirt_counts_data })
        } else {
            // doc.data() will be undefined in this case
            console.log("Can't get shirt size count numbers from firebase inventory!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    // Get beanie count numbers
    this.props.firebase.getFirestore().collection("misc").doc("logo_shirt_counts")
    .get()
    .then(function(doc) {
        if (doc.exists) {
        var shirt_counts_data = doc.data();
        that.setState({ logo_comp_counts: shirt_counts_data })
        } else {
            // doc.data() will be undefined in this case
            console.log("Can't get shirt size count numbers from firebase inventory!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    // Get tote count numbers
    this.props.firebase.getFirestore().collection("misc").doc("tote_count")
    .get()
    .then(function(doc) {
        if (doc.exists) {
        var shirt_counts_data = doc.data();
        that.setState({ tote_counts: shirt_counts_data })
        } else {
            // doc.data() will be undefined in this case
            console.log("Can't get shirt size count numbers from firebase inventory!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
      

      
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }



  renderOrder = (order, idx) => {

    return (
      <div class="adminUserCell">

        {/* User name */}
        <div class="orderPageItem">
          Item: <b>{order[0]["item"]}</b>
        </div>  

        &nbsp;&nbsp;&nbsp;&nbsp;

        <div class="orderPageItem">
          Recipient: {order[0]["name"]}
        </div>  

        &nbsp;&nbsp;&nbsp;&nbsp;

        <div class="orderPageItem">
          Email: {order[0]["email"]}
        </div> 

        &nbsp;&nbsp;&nbsp;&nbsp;

        <div class="orderPageItem">
          Quantity: {order[0]["quantity"]}
        </div> 

        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="orderPageItem">
          Size: {order[0]["size"]}
        </div> 

        &nbsp;&nbsp;&nbsp;&nbsp;

        <div class="orderPageItem">
          {order[0]["date"]}
        </div> 


      </div>
    );
    }


  





////////////////////////
/*
    RENDERING
*/

  render() {
    

    return (
      <div>
        <h1 style={{fontSize: "2.75em"}}>Merch Orders</h1>

        {/*
            BEANIES
        */}
        <h3 style={{fontSize: "1.75em"}}>Beanie Orders</h3>
          <p>Beanie counts (according to orders)</p>
          <ul>
            <li>Standard: {this.state.beanie_counts["standard"]}</li>
          </ul>
        <FlatList
          list={this.state.orders_beanies}
          renderItem={this.renderOrder}
        />

        <br/><br/>

        {/*
            Logo Comp Shirts
        */}
        <h3 style={{fontSize: "1.75em"}}>Logo Comp Shirts</h3>
          <p>Logo Comp Shirt counts (according to orders)</p>
          <ul>
            <li>Small: {this.state.logo_comp_counts["S"]}</li>
            <li>Medium: {this.state.logo_comp_counts["M"]}</li>
            <li>Large: {this.state.logo_comp_counts["L"]}</li>
            <li>XL: {this.state.logo_comp_counts["XL"]}</li>
            <li>2XL: {this.state.logo_comp_counts["XL2"]}</li>
          </ul>
        <FlatList
          list={this.state.orders_logo_comp}
          renderItem={this.renderOrder}
        />


        <br/><br/>

        {/*
            Tote bags
        */}
        <h3 style={{fontSize: "1.75em"}}>Tote Bag Orders</h3>
          <p>Tote Bag counts (according to orders)</p>
          <ul>
            <li>Standard: {this.state.tote_counts["standard"]}</li>
          </ul>
        <FlatList
          list={this.state.orders_totes}
          renderItem={this.renderOrder}
        />


        <br/><br/>


        {/*
            SHIRTS
        */}
        <h3 style={{fontSize: "1.75em"}}>Shirt Orders</h3>
          <p>Membership Shirt Counts by size (according to orders)</p>
          <ul>
            <li>Small: {this.state.shirt_counts["S"]}</li>
            <li>Medium: {this.state.shirt_counts["M"]}</li>
            <li>Large: {this.state.shirt_counts["L"]}</li>
            <li>XL: {this.state.shirt_counts["XL"]}</li>
            <li>2XL: {this.state.shirt_counts["XL2"]}</li>
          </ul>
        <FlatList
          list={this.state.orders_list}
          renderItem={this.renderOrder}
        />

        <br/>
        
        
      </div>
    );
  }
}

const condition = authUser => true;
 
export default withAuthorization(condition)(Orders);