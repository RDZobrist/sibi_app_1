// Include the Axios library for HTTP requests
import Axios from 'axios';


var helpers = {

  // This will save new articles to our database
  postSaved: function (title, givenName, middleInitial, surname, streetAddress, city, state, zipCode, country, emailAddress, username, password, telephoneNumber, mothersMaiden, bday) {
    var newUser = { Title: title, GivenName: givenName, MiddleInitial: middleInitial, Surname: surname, StreetAddress: streetAddress, City: city, State: state, ZipCode: zipCode, Country: country, EmailAddress: emailAddress, Username:username, Password:password, TelephonNumber: telephoneNumber, MothersMaiden: mothersMaiden, Birthday:bday };
    return axios.post("/api/saved", newUser)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  }





}





















// We export the helpers function
export default helpers;