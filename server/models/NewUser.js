module.exports = function(sequelize, DataTypes) {
    var NewUser = sequelize.define("NewUser", {
      title: DataTypes.STRING,
    });
    return NewUser;
  };
  