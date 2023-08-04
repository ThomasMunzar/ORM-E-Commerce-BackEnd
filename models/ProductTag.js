const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Tag = require('./Tag');
const Product = require('./Product');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      references: {model: Product, key:"id"},
    },
    tag_id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      references: {model: Tag, key:"id"},
    }
    // define columns
// * `ProductTag`
// * `id`
//   * Integer.
//   * Doesn't allow null values.
//   * Set as primary key.
//   * Uses auto increment.
// * `product_id`
//   * Integer.
//   * References the `Product` model's `id`.
// * `tag_id`
//   * Integer.
//   * References the `Tag` model's `id`.
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;

//this is the junction table. connect one tag to one product