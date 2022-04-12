import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Favourites = db.define(
  "favourites",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey: true
    },
    foodName: {
      type: DataTypes.STRING,
    },
    conName: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: false,
    createdAt: 'ca',
    updatedAt: 'ua'
  }
);

(async () => {
  await db.sync();
})();

export default Favourites;
