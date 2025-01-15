module.exports = (connection, DataTypes) => {
    const Product = connection.define(
      "Product",
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        imageUrl: {
          type: DataTypes.STRING,
         
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      }
    );
    return Product;
  };
  