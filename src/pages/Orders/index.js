import FlatList from 'flatlist-react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'

import { withAuthorization } from '../Session';


class Orders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders_list: [],
      shirt_counts: {},
    };

  }

  componentDidMount() {

    window.scrollTo(0, 0)
      
    // Used to get a list of all the users
    var that = this;


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
          Order Date: {order[0]["date"]}
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
        <h1>Merch Orders</h1>

        <FlatList
          list={this.state.orders_list}
          renderItem={this.renderOrder}
        />

        <br/>
        <h1>Membership Shirt Counts by size (according to orders)</h1>
        <ul>
          <li>Small: {this.state.shirt_counts["S"]}</li>
          <li>Medium: {this.state.shirt_counts["M"]}</li>
          <li>Large: {this.state.shirt_counts["L"]}</li>
          <li>XL: {this.state.shirt_counts["XL"]}</li>
          <li>2XL: {this.state.shirt_counts["XL2"]}</li>
        </ul>
        
      </div>
    );
  }
}

const condition = authUser => true;
 
export default withAuthorization(condition)(Orders);



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
    <label >
      {label}
    </label>
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