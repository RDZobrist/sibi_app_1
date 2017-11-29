module.exports = function(sequelize, DataTypes) {
    var NewUser = sequelize.define("NewUser", {
      Number:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1,6001]
        }      
      }, Gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,7]
        }
      },GivenName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,22]
      
    }
  },
  MiddleInitial: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1,3]
    }
},  Surname: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    len: [1,22]
  }
},  StreetAddress: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    len: [10]
  }
},  City: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    len: [1]
  }
},  State: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    len: [1,11]
  }
},  ZipCode: {
  type: DataTypes.INTEGER,
  allowNull: false,
  validate: {
    len: [5,10]
  }
},  Country: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    len: [1,44]
  }
},  EmailAddress: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    len: [1,33]
  }
},
    return NewUser;
  };
  


  /*{
    "Number": 2996,
    "Gender": "male",
    "Title": "Mr.",
    "GivenName": "William",
    "MiddleInitial": "S",
    "Surname": "Pratt",
    "StreetAddress": "2284 Flynn Street",
    "City": "North Olmsted",
    "State": "OH",
    "ZipCode": 44070,
    "Country": "US",
    "EmailAddress": "WilliamSPratt@jourrapide.com",
    "Username": "Respearme66",
    "Password": "hae5Xei3ph",
    "BrowserUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36",
    "TelephoneNumber": "440-979-7671",
    "MothersMaiden": "McDonald",
    "Birthday": "8/25/1966",
    "Color": "Green",
    "Occupation": "Long-term care facility nurse",
    "Company": "Foot Quarters",
    "Vehicle": "2000 Chrysler Java",
    "Domain": "sarumcleaning.com",
    "GUID": "8ebc11b3-93a8-4168-9d6f-607ee19f2135"
  }/*