const fs = require('fs');
const clients = require('./clients');
const clientArr = Array.from(clients);

// function used to remove sensitive && redundant information from DB 
const updateKeys = (clientArr) => {
  let newClients = [];
  let key = "NameSet";
  let key1 = "CCNumber";
  let key2 = "CCType";
  let key3 = "CVV2";
  let key4 = "CCExpires";
  let key5 = "NationalID";
  let key6 = "UPS";
  let key7 = "WesternUnionMTCN";
  let key8 = "MoneyGramMTCN";
  let key9 = "Latitude";
  let key10 = "Longitude";
  let key11 = "TelephoneCountryCode";
  let key12 = "Age";
  let key13 = "StateFull";
  let key14 = "CountryFull";
  let key15 = "Gender";
  // Loop over array using helper function &&
  // if a sensitive key is in item obj, delete 
  // the appropriate keys 
  clientArr.filter((client) => {
    let count = 0;
    if (client.NameSet) {
      delete client[key]
    }
    if (client.CCNumber) {
      delete client[key1]
    }
    if (client.CCType) {
      delete client[key2]
    }
    if (client.CVV2) {
      delete client[key3]
    }
    if (client.CCExpires) {
      delete client[key4]
    }
    if (client.NationalID) {
      delete client[key5]
    }
    if (client.UPS) {
      delete client[key6]
    }
    if (client.WesternUnionMTCN) {
      delete client[key7]
    }
    if (client.MoneyGramMTCN) {
      delete client[key8]
    }
    if (client.Latitude) {
      delete client[key9]
    }
    if (client.Longitude) {
      delete client[key10]
    }
    if (client.TelephoneCountryCode) {
      delete client[key11];
    }
    if (client.Age) {
      delete client[key12];
    }
    if (client.StateFull) {
      delete client[key13];
    }
    if (client.CountryFull) {
      delete client[key14];
    }
    if (client.Gender) {
      delete client[key15];
    }
    
    newClients.push(client);
    //  stringify the updated array
    let newClients2 = JSON.stringify(newClients)

    // console.log(newClients)
    fs.writeFileSync("client.txt", newClients2, function (err) {
      // If the code experiences any errors it will log the error to the console.
      if (err) {
        return console.log(err);
      }

      // Otherwise, it will print: "clients.txt was updated!"
      console.log("clients.txt was updated!");

    });

  })
}



updateKeys(clients);