module.exports = function (sequelize, DataTypes) {
    var NewUser = sequelize.define("NewUser", {
          Number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              len: [1, 6001]
            }
          },
          Gender: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 7]
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
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              len: [5, 10]
            }
          },
          Country: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 44]
            }
          },
          EmailAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 33]
            }
          }, 
          Username:{
            type: DataTypes.STRING, 
            allowNull: false,
            validate: {
              len: [1, 33]
            }
          },
          Password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
              len:[6,22]
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
              len:[10,13]
            }
          },
          MothersMaiden: {
            type: DataTypes.STRING,
            allowNull: false
          },
          Birthday: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
              len:[8,10]
            }
            },
            Color: {
              type: DataTypes.STRING,
              defaultValue: "red"

            },
             
          });
          return NewUser;
        };
        
      
