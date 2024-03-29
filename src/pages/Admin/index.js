///////////////////////////////////////////////////////////////
/* Component / ReactJS Library Imports */

import Form from 'react-bootstrap/Form'
import FlatList from 'flatlist-react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import { withAuthorization } from '../Session';


///////////////////////////////////////////////////////////////
/* CSS Imports */

import './admin.css';




class AdminPage extends Component {
  
  
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      userList: [],
      userIDList: [],
      mentorshipUserList: [],
      isAdmin: false,
      firestore: this.props.firebase.getFirestore(),
      userEmail: this.props.firebase.auth.currentUser.email,
      Industry: [],
      IndustryID: [],
      user: {},
      gold: '',
      silver: '',
      bronze: '',
      new_code_gold:'',
      new_code_silver:'',
      new_code_bronze:'',
      testsToCheck: [],
      waived_tutoring_students: [],
      merchItems: [],
      newMerchItem_name: '',
      newMerchItem_cost: '',
      newMerchItem_status: 'In Stock.',
      file_data: '',
      url_cur: '',
      currentGMSignInLink: '',
      newGMSignInLink: '',
      gmSlides: [],
      newGMSlidesLink: '',
      newGMSlidesName: '',
      delGMSlidesLink: '',
      delGMSlidesName: ''
    };

  }


  componentDidMount() {

    window.scrollTo(0, 0)

    this.setState({ userList: []});
    this.setState({ mentorshipUserList: []});
    this.setState({ Industry: []});
    this.setState({ IndustryID: []});
    this.setState({ testsToCheck:[]})
    this.setState({ waived_tutoring_students:[]})

    // Used to get a list of all the users
    var that = this;
    that.props.firebase.getFirestore().collection("users")
      .where("email", "==", this.state.userEmail)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          that.setState({ user: doc.data() })
        });   
      });

    // Tests to check in / award star points
    that.props.firebase.getFirestore().collection("testsToCheck")
      .where("checked", "==", false)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          var test_name = doc.id;
          var test_meta_data = doc.data()
          that.setState({ testsToCheck: [...that.state.testsToCheck, [test_meta_data, test_name] ] })
        });   
      });

    // Industry Names/IDs
    that.props.firebase.getFirestore().collection("users")
      .where("career", "==", "industry")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          var userData = doc.data();
          var userID = doc.id;
          that.setState({ Industry: [...that.state.Industry, userData] });
          that.setState({ IndustryID: [...that.state.IndustryID, userID] });
        });
      });

    // Industry Codes
    that.props.firebase.getFirestore().collection("misc").doc("company_code")
      .get()
      .then(function(doc) {
        if (doc.exists) {
          var codes = doc.data();
          that.setState({ gold: codes['gold_code'] })
          that.setState({ silver: codes['silver_code'] })
          that.setState({ bronze: codes['bronze_code'] })
        } 
        else {
          console.log("Can't get company codes!");
        }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });

    // User Lists stuff
    that.props.firebase.getFirestore().collection("users")
      .where("career", "==", 'alumni')
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          var userData = doc.data();
          var userID = doc.id;
          that.setState({ userList: [...that.state.userList, [userData, userID] ] });
        });    
      });

    // MentorSHPE
    that.props.firebase.getFirestore().collection("users")
      .where("join_mentorship", "==", true)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          var userData = doc.data();
          var userID = doc.id;
          that.setState({ mentorshipUserList: [...that.state.mentorshipUserList, [userData, userID]  ] });
        });    
      });

    // Waived tutoring students
    that.props.firebase.getFirestore().collection("tutoring")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          var userData = doc.data();
          var userID = doc.id;
          that.setState({ waived_tutoring_students: [...that.state.waived_tutoring_students, [userData, userID]  ] });
        });    
      });

    // Merch items
    that.props.firebase.getFirestore().collection("merchItems")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          var userData = doc.data();
          that.setState({ merchItems: [...that.state.merchItems, userData] });
        });
      });

    that.props.firebase.getFirestore().collection("gmSlides")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        var userData = doc.data();
        that.setState({ gmSlides: [...that.state.gmSlides, userData] });
      });
    });


    that.props.firebase.getFirestore().collection("misc").doc("gmSignInLink")
      .get()
      .then(function(doc) {
        if (doc.exists) {
          var gm_link_data = doc.data();
          that.setState({ currentGMSignInLink: gm_link_data['link'] });
          } else {
              // doc.data() will be undefined in this case
              console.log("Can't get GM sign in link from firebase inventory!");
          }
      }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }


  componentWillUnmount() {
    this.props.firebase.users().off();
  }


  changeAdmin = (user) => {
    this.props.firebase.getFirestore().collection("users")
      .doc(user[1])  // can have multiple .where calls
      .update({
        admin: !user[0]["admin"]
      })

    this.componentDidMount()
  }



  /*
    ****
      Page Access Restriction
    ****
  */
  HasAccess = (idx, user) => {
    var that = this;  // must have this for the setState inside lamda
    this.props.firebase.getFirestore().collection("users")
      .doc(that.state.IndustryID[0])  // can have multiple .where calls
      .update({
        has_access: !user["has_access"]
      })
      this.componentDidMount()
  }


  submitTest = (idx, user) => {
    var that = this;  // must have this for the setState inside lamda

    // Give starpoints to mentorship team
    if(user[0]["has_familia"] === true && user[0]["familia"] !== undefined) {
      var mentorTeamName = user[0]["familia"]
      var dbReference = that.props.firebase.getFirestore().collection('teams').doc(mentorTeamName);
          console.log(that.state.updatePoints);
          var points = that.props.firebase.getFirestore().collection('teams').doc(mentorTeamName);
          points.get().then(function(doc){
            var currPoints = doc.data();
            var add = parseInt(currPoints["starpoints"]) + parseInt('7');
            dbReference.update({starpoints: add});
            alert('Successfully added ' + parseInt('7') + ' points to ' + mentorTeamName +  '!')
          });
    }

    this.props.firebase.getFirestore().collection("testsToCheck")
      .doc(user[1])  // can have multiple .where calls
      .update({
        checked: !user[0]["checked"]
      })
      this.componentDidMount()
    
  }



  /*
    ****
      Rendering Users for FlatLists
    ****
  */

  renderUser = (user, idx) => {

    return (
      <div>

        {/* User name */}
        <div class="adminUserName">
          { user[0]["first_name"] } { user[0]["last_name"] } {user[0]["email"]}
        </div>
      </div>
    );
  }


  renderIndustry = (user, idx) => {

    var access = user["has_access"] === true ? 'Yes' : 'No'
    console.log(user["has_access"])
    
    return (
      <div class="adminUserCell">

        {/* User name */}
        <div class="adminUserName">
          { user["first_name"] } { user["last_name"] }
        </div>    

        Sponsor Level:&nbsp;<b>{user["sponsor_level"]}</b> &nbsp;
        <button onClick={() => this.HasAccess(idx, user)} type="button" >Has Access: {access} - CLICK TO CHANGE</button>

        &nbsp;&nbsp;&nbsp;Company:&nbsp;<b>{user["employer"]}</b>
        
      </div>

    );
  }


  renderWaivedStudent = (user, idx) => {
    return (
      <div class="adminUserCell">

        {/* User name */}
        <div class="adminUserName">
          <b>Student: </b> &nbsp;
          { user[0]["student_name"] }
        </div>    

        &nbsp;&nbsp;

        <b>Guardian: </b> &nbsp; {user[0]["guardian_name"]}

      </div>
    )
  }


  renderMentorUser = (user, idx) => {
    var familia = user[0]["mentorTeam"] === '' ? 'ASSIGN' : user[0]["mentorTeam"];
    var role = user[0]['mentee'] === true ? 'mentee' : 'mentor';

    return (
      <div class="adminUserCell">

        {/* User name */}
        <div class="adminUserName">
          { user[0]["first_name"] } { user[0]["last_name"] }
        </div>    

        Famila:&nbsp;<b>{familia}</b> &nbsp;

        <input type = "number" placeholder="add points" id="points" onChange={e=> this.updatePoints(e.target.value)}/>
        <input disabled={familia==='ASSIGN'}type ="submit" className = "btn btn-info" value = "Add Points" onClick={()=>this.changePoints(user[1], user[0]["mentorTeam"])}></input>

        <input type = "text" placeholder="change team" id="mentorTeamName" onChange={e=> this.updateTeam(e.target.value)}/>
        <input type ="submit" className = "btn btn-info" value = "Change Team" onClick={()=>this.changeTeam(user[0]["first_name"], user[0]["last_name"],user[1])}></input>
        
        <b style={role === 'mentor'? {color: 'green'} : {color: 'black'}}>&nbsp;{role}</b> &nbsp; 
        
        &nbsp;&nbsp;{user[0]["major"]}&nbsp;&nbsp;

        <b>{user[0]["email"]}</b>

        &nbsp;&nbsp;

        <b>{user[0]["bio"]}</b>

      </div>
    );
  }


  renderCheckInTests = (test, idx) => {

    var cen_work = test[0]['censor_WORK'] === true ? 'Yes' : 'No';
    var cen_name = test[0]['censor_NAME'] === true ? 'Yes' : 'No';

    return (
      <div class="adminUserCell">
        {/* TestName */}
        <div class="adminUserName">
          { test[1] }
        </div>  

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        By: {test[0]['submitter']} &nbsp;
        Censor Name: <b>{cen_name}</b> &nbsp;
        Censor Work: <b>{cen_work}</b> &nbsp;

        <button onClick={() => this.submitTest(idx, test)} type="button" >VERIFY</button>

      </div>
    )

  }



  /*
    ****
      Change industry codes
    ****
  */

  changeCodeGold(new_code) {
    this.props.firebase.getFirestore().collection("misc")
    .doc('company_code')  // can have multiple .where calls
    .update({
      gold_code: new_code
    })
    this.componentDidMount()
  }

  changeCodeSilver(new_code) {
    this.props.firebase.getFirestore().collection("misc")
    .doc('company_code')  // can have multiple .where calls
    .update({
      silver_code: new_code
    })
    this.componentDidMount()
  }

  changeCodeBronze(new_code) {
    this.props.firebase.getFirestore().collection("misc")
    .doc('company_code')  // can have multiple .where calls
    .update({
      bronze_code: new_code
    })
    this.componentDidMount()
  }



/*
  ****
    MentorSHPE functions
  ****
*/

  updateTeam (name) {
    if (name != null)
      this.setState({mentorTeam: name});
  }


  changeTeam = (fName, lName, index) => {
    if (index == null)
      return;
    var document = index;
    var dbReference = this.props.firebase.getFirestore().collection('users').doc(document);
    dbReference.update({mentorTeam: this.state.mentorTeam})

    var name = fName+ " " + lName;
    dbReference = this.props.firebase.getFirestore().collection('teams').doc(this.state.mentorTeam).collection('teamMembers').doc(name).set({});
    this.componentDidMount()
  }


  updatePoints(points) {
    if (points!== 0)
      this.setState({updatePoints: points})
  }


  changePoints(index, mentorTeamName) {
    var that = this;
    
      if (mentorTeamName !== null) {
        var dbReference = that.props.firebase.getFirestore().collection('teams').doc(mentorTeamName);
        var points = that.props.firebase.getFirestore().collection('teams').doc(mentorTeamName);
        points.get().then(function(doc){
          var currPoints = doc.data();
          var add = parseInt(currPoints["starpoints"]) + parseInt(that.state.updatePoints);
          dbReference.update({starpoints: add});
          alert('Successfully added ' + parseInt(that.state.updatePoints) + ' points to ' + mentorTeamName +  '!')
        });
        
      }
  }



  /*
    ****
      Merch Shop functions
    ****
  */
  renderGMSlides = (item, idx) => {
      return(
      <div class="adminUserCell">
        <div class="adminUserName">
          <b>Name: </b> &nbsp;
          { item["name"] } &nbsp;&nbsp;&nbsp; <b>Link: </b>{item["link"]} &nbsp;&nbsp;&nbsp;
        </div>
        
        &nbsp;&nbsp;
      </div>

    )
  }

  // render item in merch list
  renderMerchItem = (item, idx) => {
    return (
      <div class="adminUserCell">

        {/* User name */}
        <div class="adminUserName">
          <b>Item: </b> &nbsp;
          { item["itemName"] } &nbsp;&nbsp;&nbsp; Cost: ${item["cost"]} &nbsp;&nbsp;&nbsp; Stock status: {item["stock_status"]}
        </div>

        &nbsp;&nbsp;

      </div>
    )
  }


  // Initial selection of stock status of item
  selectStockStatus(event) {
    this.setState({ newMerchItem_status: event.target.value })
  }


  // Upload image of item
    uploadImage(e) {
    var that = this;
    var file = e.target.files;
    var reader = new FileReader();

    try {
        reader.readAsDataURL(file[0]);
        reader.onload=(e)=>{
            that.setState({file_data:e.target.result});
        }
    }
    catch(error) {
        that.setState({ file_data: "" });
    }
  }

  //Update GM Sign In Link (firestore/firebase-storage)
  updateSignInLink(new_link) {
    this.props.firebase.getFirestore().collection("misc").doc("gmSignInLink").update({
      link: new_link
    })
    .then(function() {
      console.log("GM Sign In Link successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document for GM Sign In Link: ", error);
    });
  }

  addSlidesLink(new_link){
    this.props.firebase.getFirestore().collection("gmSlides").doc(new_link[0]).set({
      name: new_link[0],
      link: new_link[1]
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }

  deleteGMSlide(del_link){
    this.props.firebase.getFirestore().collection("gmSlides").doc(del_link).delete()
    .then(function() {
      console.log("Document successfully deleted!");
    })
    .catch(function(error) {
      console.error("Error deleting document: ", error);
    });
  }

  // Add item to shop (firestore/firebase-storage)
  addItem(new_item) {

    var that = this;

    var d = new Date();
    var item_image_name = "item" + d.getMonth() + d.getDate() + d.getFullYear() + d.getHours() + d.getMinutes() + d.getSeconds() + ".jpg"
    if (new_item[4] === "One Size" || new_item[4] == null)
    {
      if (new_item[4] === null) new_item[4] = "One Size";
      if (new_item[5] === null) new_item[5] = 0;
      // Add to firestore database
      this.props.firebase.getFirestore().collection("merchItems").doc(new_item[0]).set({
        itemName: new_item[0],
        cost: new_item[1],
        stock_status: new_item[3],
        // storage_image_name: 'resumes/' + item_image_name,
        storage_image_name: 'resumes/' + new_item[0],
        image_URL: '',
        url_ext: '/item?item={' + new_item[2] + '}',
        oneSize: true,
        count: new_item[5]
        })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
    }
    else
    {
      if (new_item[6] == null) new_item[6] = 0;
      if (new_item[7] == null) new_item[7] = 0;
      if (new_item[8] == null) new_item[8] = 0;
      if (new_item[9] == null) new_item[9] = 0;
      if (new_item[10] == null) new_item[10] = 0;
      
      // Add to firestore database
      this.props.firebase.getFirestore().collection("merchItems").doc(new_item[0]).set({
        itemName: new_item[0],
        cost: new_item[1],
        stock_status: new_item[3],
        storage_image_name: 'resumes/' + item_image_name,
        image_URL: '',
        url_ext: '/item?item={' + new_item[2] + '}',
        oneSize: false,
        count_S: new_item[6],
        count_M: new_item[7],
        count_L: new_item[8],
        count_XL: new_item[9],
        count_XXL: new_item[10]
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
    }

    // Upload item image to firebase storage
    var storageRef = this.props.firebase.storage.ref();
    var mountainImagesRef = storageRef.child('resumes/' + item_image_name);
    var message = this.state.file_data;
    var uploadTask = mountainImagesRef.putString(message, 'data_url');
    uploadTask.on('state_changed',
    function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        that.setState({ uploadProgress: progress });
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
        case 'paused': 
            console.log('Upload is paused');
            break;
        case 'running': 
            console.log('Upload is running');
            break;
        default:
            break;
        }
    }, function(error) {
    
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
        case 'storage/unauthorized':
        // User doesn't have permission to access the object
            break;
        case 'storage/canceled':
        // User canceled the upload
            break;
        case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
            break;
        default:
            // Idk if this should even happen
            break;
    }
    }, function() {
    // Upload completed successfully, now we can get the download URL
    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);
        that.props.firebase.getFirestore().collection("merchItems").doc(new_item[0]).update({
          image_URL: downloadURL
        })
        .then(function() {
          console.log("URL Document successfully written!");
        })
        .catch(function(error) {
            console.error("URL Error writing document: ", error);
        });
      });
    });

    this.setState({merchItems: [] })
    this.setState({gmSlides: [] })
    this.componentDidMount()
  }



  ////////////////////////
  /*
      RENDERING
  */

  render() {
    const loading = this.state.loading;
    this.state.userList.sort(sortNames);
    this.state.mentorshipUserList.sort(sortNamesMentorSHPE);
    this.state.waived_tutoring_students.sort(sortWaived);

    return (
      <div>
        <h1>Admin</h1>

        {/* Ignore for now */}
        {loading && <div>Loading ...</div>}
        <Link to={ROUTES.ACCOUNT}>
            back to Account page
        </Link>
      
        <div class="adminUsersList">


        {/*MAIN PAGE: WHAT ADMINS WILL SEE*/}
        { this.state.user["admin"] === true 
          ?
            <div>
              <p>
                Functionality will be added on a continous basis. Contact Mat Ruiz (949)547-0987
                for immediate support or issues.
                <br/><br/>
                This page is only viewable to admins (EBoard and Web Team).
              </p>
              <br/>

              <h1>GM Sign In Link</h1>
              <p><i>Refresh page to view updated link</i></p>
              <input 
                type = "text"
                placeholder="Sign In Form Link"
                id="mentorTeamName"
                onChange={ e => this.setState({newGMSignInLink: e.target.value}) }
              />
              &nbsp;&nbsp;&nbsp;

              <input
                type= "submit" 
                value="Update Link"
                disabled = {this.state.newGMSignInLink === ''}
                className="btn btn-info" 
                onClick={()=>this.updateSignInLink(this.state.newGMSignInLink)}
              />

              <h2><b>Current Link: </b>{this.state.currentGMSignInLink}</h2>

              <br/><br/>

              <h1>GM Slides</h1>
              <p><i>Refresh page to view added/deleted slides. <br></br>Note: No forward slashes in Slide Name are allowed</i></p>
              <p><b>Add a new slide</b></p>
              <input type="text" placeholder="Slide Name" id="mentorTeamName" onChange={ e => this.setState({newGMSlidesName: e.target.value})} />
              &nbsp;&nbsp;&nbsp;
              <input type= "text" placeholder="Slide Link" id="mentorTeamName" onChange={ e => this.setState({newGMSlidesLink: e.target.value})} />
              &nbsp;&nbsp;&nbsp;

              <input 
                type="submit"
                disabled={(this.state.newGMSlidesLink === '' || this.state.newGMSlidesName === '')}
                className="btn btn-info" 
                value="Add Slide" 
                onClick={()=>this.addSlidesLink([this.state.newGMSlidesName, this.state.newGMSlidesLink])}
              >
              </input>


              <p><b>Delete a slide</b></p>
              <input type="text" placeholder="Slide Name" id="mentorTeamName" onChange={ e => this.setState({delGMSlidesName: e.target.value})} />
              &nbsp;&nbsp;&nbsp;

              <input 
                type="submit"
                disabled={(this.state.delGMSlidesName === '')}
                className="btn btn-info" 
                value="Delete Slide" 
                onClick={()=>this.deleteGMSlide(this.state.delGMSlidesName)}
              >
              </input>
              

              <br/><br/><br/>
              
              <FlatList
                list={this.state.gmSlides}
                renderItem={this.renderGMSlides}
              />


              <h1>Shop Items</h1>
              {/* Adding new item to shop */}

              <p><b>Add a new item: </b><i>(note on image: get highest resolution, transparent or white background only, 1:1 photo ratio only - add white square background for this if needed)</i></p>
              <input type = "text" placeholder="Item name (no slashes)" id="mentorTeamName" onChange={ e => this.setState({newMerchItem_name: e.target.value}) }/>
              &nbsp;&nbsp;&nbsp;
              $<input type = "number" min = "1" placeholder="Cost" id="mentorTeamName" onChange={ e => this.setState({newMerchItem_cost: e.target.value}) }/>
              &nbsp;&nbsp;&nbsp;
              <input type = "text" placeholder="URL extension" id="mentorTeamName" onChange={ e => this.setState({newMerchItem_url_ext: e.target.value}) }/>
              &nbsp;&nbsp;&nbsp;
              <label>Upload image of item:</label><input type="file" onChange={(e)=>this.uploadImage(e)} /> 
              <Form.Control as="select" onChange={this.selectStockStatus.bind(this)}>
                  <option value="In Stock.">In Stock.</option>
                  <option value="Out of Stock.">Out of Stock.</option>
                  <option value="Coming Soon.">Coming Soon.</option>                             
              </Form.Control>
              &nbsp;&nbsp;&nbsp;
              <Form.Control as="select" onChange={e => this.setState({newMerchItem_sizetype: e.target.value})}>
                  <option value="One Size">One Size</option>
                  <option value="Multiple Sizes">Multiple Sizes</option>                          
              </Form.Control>
              
              <br/><br/>
              <p><b> Add size counts:</b> <i>Leave blank to initialize as 0</i></p>

              <input disabled={(this.state.newMerchItem_sizetype === "Multiple Sizes")} 
                type = "number" min = "0"
                placeholder="Count" 
                id="mentorTeamName" 
                onChange={ e => this.setState({newMerchItem_count: e.target.value}) }/>
              
              <input disabled={(this.state.newMerchItem_sizetype === "One Size" || this.state.newMerchItem_sizetype === null)} 
                type = "number" min = "0" placeholder="Small count" id="mentorTeamName" onChange={ e => this.setState({newMerchItem_count_S: e.target.value}) }/>
              <input disabled={(this.state.newMerchItem_sizetype === "One Size" || this.state.newMerchItem_sizetype === null)}
                type = "number" min = "0" placeholder="Medium count" id="mentorTeamName" onChange={ e => this.setState({newMerchItem_count_M: e.target.value}) }/>
              <input disabled={(this.state.newMerchItem_sizetype === "One Size" || this.state.newMerchItem_sizetype === null)}
                type = "number" min = "0" placeholder="Large count" id="mentorTeamName" onChange={ e => this.setState({newMerchItem_count_L: e.target.value}) }/>
              <input disabled={(this.state.newMerchItem_sizetype === "One Size" || this.state.newMerchItem_sizetype === null)}
                type = "number" min = "0" placeholder="XL count" id="mentorTeamName" onChange={ e => this.setState({newMerchItem_count_XL: e.target.value}) }/>
              <input disabled={(this.state.newMerchItem_sizetype === "One Size" || this.state.newMerchItem_sizetype === null)}
                type = "number" min = "0" placeholder="XXL count" id="mentorTeamName" onChange={ e => this.setState({newMerchItem_name_XXL: e.target.value}) }/>
              &nbsp;&nbsp;&nbsp;
              <input 
                type ="submit" 
                disabled={(this.state.newMerchItem_cost === '' || this.state.newMerchItem_name === '' || this.state.file_data === '')} 
                className="btn btn-info" 
                value="ADD MERCH ITEM" 
                onClick={()=>this.addItem( [this.state.newMerchItem_name, this.state.newMerchItem_cost, this.state.newMerchItem_url_ext, this.state.newMerchItem_status, 
                  this.state.newMerchItem_sizetype, this.state.newMerchItem_count, this.state.newMerchItem_count_S, this.state.newMerchItem_count_M, this.state.newMerchItem_count_L, 
                  this.state.newMerchItem_count_XL, this.state.newMerchItem_count_XXL] )}>
              </input>
              
              <br/><br/><br/>
              
              <FlatList
                list={this.state.merchItems}
                renderItem={this.renderMerchItem}
              />

              {/*
              <h1>Waived Tutoring Students</h1>
                <p>
                  Sorted by first name name.
                </p>
                <FlatList
                  list={this.state.waived_tutoring_students}
                  renderItem={this.renderWaivedStudent}
                />
              <br/>
              */}

              {/*
              <h1>MentorSHPE (add points here)</h1>
                <p>
                  These are only users enrolled with MentorSHPE for 2020-2021. Sorted by familia name.
                </p>
                <FlatList
                  list={this.state.mentorshipUserList}
                  renderItem={this.renderMentorUser}
                />
                <br/>

              <h1>All Users</h1>
                <p>
                  Alphabetically sorted.
                </p>
                <FlatList
                  list={userList}
                  renderItem={this.renderUser}
                />
                <br/>

              <h1>Industry Reps</h1>
                <p>
                  All industry reps that have made an account in the past{'->'}current.
                </p>
                <FlatList
                  list={Industry}
                  renderItem={this.renderIndustry}
                /> 
                {//Company codes}
                <h3>Company Sign Up Codes</h3>
                Gold Code: &nbsp;<b>{this.state.gold}</b>&nbsp;&nbsp;
                <input type = "text" placeholder="new gold code" id="mentorTeamName" onChange={ e=> this.setState({new_code_gold: e.target.value}) }/>
                <input type ="submit" className = "btn btn-info" value = "CHANGE" onClick={()=>this.changeCodeGold(this.state.new_code_gold)}></input>
                <br/>

                Silver Code:     <b>{this.state.silver}</b>&nbsp;&nbsp;
                <input type = "text" placeholder="new silver code" id="mentorTeamName" onChange={ e=> this.setState({new_code_silver: e.target.value}) }/>
                <input type ="submit" className = "btn btn-info" value = "CHANGE" onClick={()=>this.changeCodeSilver(this.state.new_code_silver)}></input>
                <br/>

                Bronze Code:     <b>{this.state.bronze}</b>&nbsp;&nbsp;
                <input type = "text" placeholder="new bronze code" id="mentorTeamName" onChange={ e=> this.setState({new_code_bronze: e.target.value}) }/>
                <input type ="submit" className = "btn btn-info" value = "CHANGE" onClick={()=>this.changeCodeBronze(this.state.new_code_bronze)}></input>
                <br/>
                <br/>
                <br/>

                <h1>Tests to check in</h1>
                  <FlatList
                    list={this.state.testsToCheck}
                    renderItem={this.renderCheckInTests}
                  /> 
                <br/>
                <br/>
                <br/>

                <h1>Functionality to come</h1>
                  <ul>
                    <li>
                      Option to create mentorship familia from here
                    </li>
                    <li>
                      View a list of members from each mentorship familia
                    </li>
                  </ul>
              
                <br/>
                <br/>
                */}

            </div> 
          :
            <div>
              <p>No Access</p>
            </div>
          }
        </div>
      </div>
    );
  }
}

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AdminPage);



///////////////////////////////////////////////////////////////
/* Helper Functions */

function sortNames(a, b) {
  if (a[0]["first_name"] === undefined) { return }
  if (a[0]["first_name"].localeCompare(b[0]["first_name"]) === -1) {
    return -1;
  }
  if (a[0]["first_name"].localeCompare(b[0]["first_name"]) === 1) {
    return 1;
  }
  // a must be equal to b
  return 0;
}


function sortNamesMentorSHPE(a, b) {
  if (a[0]["mentorTeam"] === undefined) { return }
  if (a[0]["mentorTeam"].localeCompare(b[0]["mentorTeam"]) === -1) {
    return -1;
  }
  if (a[0]["mentorTeam"].localeCompare(b[0]["mentorTeam"]) === 1) {
    return 1;
  }
  // a must be equal to b
  return 0;
}


function sortWaived(a, b) {
  if (a[0]["student_name"] === undefined) { return }
  if (a[0]["student_name"].localeCompare(b[0]["student_name"]) === -1) {
    return -1;
  }
  if (a[0]["student_name"].localeCompare(b[0]["student_name"]) === 1) {
    return 1;
  }
  // a must be equal to b
  return 0;
}