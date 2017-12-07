// Include the Axios library for HTTP requests
import Axios from 'axios';
import bcrypt from 'bcryptjs';

var helpers = {

  hashPasswords: function(password){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            if (err) throw new Error('Error', err)
            else{
            console.log(hash);
            
            }
        });
      });
      
  },

  checkPasswords: function(password, password2){
    if(typeof password !== 'string' || typeof password2 !== 'string')return false
    if(password !== password2 ) return false
    else return true
  },

  // This will save new users to our database
  postSaved: function (prefix, firstName, middleInitial, surname, streetAddress, city, state, zipCode, emailAddress, username, password, telephoneNumber, dob) {
    var newUser = { 
      Title: prefix, 
      GivenName: firstName, 
      MiddleInitial: middleInitial, 
      Surname: surname, 
      StreetAddress: streetAddress, 
      City: city, 
      State: state, 
      ZipCode: zipCode,  
      EmailAddress: emailAddress, 
      Username:username, 
      Password:password,
      TelephoneNumber: telephoneNumber,
      Birthday:dob, 
      BrowserUserAgent:null, 
      MothersMaiden: null,
      Color:null, 
      Ocupation:null, 
      Company:null,
      Vehicle:null,
      Domain:null,
      GUID:null, };

    return Axios.post("/api/saved", newUser)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  }


}

// We export the helpers function
export default helpers;