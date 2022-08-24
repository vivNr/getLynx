const { PRODUCT_MODEL_NAME } = require("../../constant/dbModelName");
module.exports = (sequelize, DataTypes) => {
  const schema = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    productViewed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deletedDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  };
   return sequelize.define(
    PRODUCT_MODEL_NAME,
    schema,
  );
};
