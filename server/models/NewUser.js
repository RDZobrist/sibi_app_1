
const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
  let newUser = sequelize.define("sibi_americans", {
    GUID: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      primaryKey: true
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    GivenName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: {
          args: [0, 50],
          msg: 'The  first name has too many characters'
        }
      }

    },
    MiddleInitial: {
      type: DataTypes.STRING(3),
      allowNull: false,

    },
    Surname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: {
          args: [0, 100],
          msg: 'This surname has too many characters'
        }
      }
    },
    StreetAddress: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    City: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    State: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    ZipCode: {
      type: DataTypes.STRING(5),
      allowNull: false,
      validate: {
        len: {
          args: [0, 5],
          msg: 'Please only enter first 5 digits of Postal code'
        }
      }

    },

    EmailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'This is not an email address'
        }
      }

    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 22]
      }
    },
    BrowserUserAgent: {
      type: DataTypes.STRING,
      allowNull: true

    },
    TelephoneNumber: {
      type: DataTypes.STRING,

    },
    Birthday: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    MothersMaiden: {
      type: DataTypes.STRING,
      allowNull: true
    },

    Color: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Occupation: {
      type: DataTypes.STRING,
      allowNull: true

    },
    Company: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    Vehicle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Domain: {
      type: DataTypes.STRING,
      allowNull: true
    },

    createdAt: {
      type: DataTypes.DATE,
      default: Date.now()
    },

    updatedAt: {
      type: DataTypes.DATE,
      default: Date.now()
    }
    
  },
  
);
  return newUser;
};


// CREATE TABLE sibi_americans (
//   ID SERIAL PRIMARY KEY,
//   Title VARCHAR,
//   GivenName VARCHAR,
//   MiddleInitial VARCHAR,
//   Surname VARCHAR,
//   StreetAddress VARCHAR,
//   City VARCHAR,
//   State VARCHAR,
//   ZipCode VARCHAR,
//   EmailAddress VARCHAR,
//   Username VARCHAR,
//   Password VARCHAR,
//   BrowserUserAgent VARCHAR,
//   TelephoneNumber VARCHAR,
//   Birthday VARCHAR,
//   MothersMaiden VARCHAR,
//   Color VARCHAR,
//   Occupation VARCHAR,
//   Company VARCHAR,
//   Vehicle VARCHAR,
//   Domain VARCHAR,
//   GUID VARCHAR,
//   createdAt DATE,
//   updatedAt DATE
  
 
// );