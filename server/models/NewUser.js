module.exports = function (sequelize, DataTypes) {
  var NewUser = sequelize.define("sibi_americans", {
    Number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,

    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 4]
      }
    },
    GivenName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 22]

      }
    },
    MiddleInitial: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 3]
      }
    },
    Surname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 22]
      }
    },
    StreetAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10]
      }
    },
    City: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    State: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 11]
      }
    },
    ZipCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 10]
      }
    },
   
    EmailAddress: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 33]
      }
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
      allowNull: false,
      validate: {
        len: [10, 13]
      }
    },
    MothersMaiden: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Birthday: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 10]
      }
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
    GUID: {
      type: DataTypes.STRING,
      allowNull: true
    },
  });
  return NewUser;
};