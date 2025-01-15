module.exports = (connection, DataTypes) => {
    const User = connection.define(
      "User",
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        
      }
    );
    return User;
  }