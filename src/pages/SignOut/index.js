import React from 'react';
 
import { withFirebase } from '../Firebase';
 
const SignOutButton = ({ firebase }) => (
  <div style={{cursor: "pointer"}} onClick={firebase.doSignOut}>
    Sign Out
  </div>
);
 
export default withFirebase(SignOutButton);