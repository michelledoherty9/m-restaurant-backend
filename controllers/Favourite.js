import Favourites from "../models/Favourite.js";

export const getFavourites = async (req, res) => {
    try {
      const favourites = await Favourites.findAll({
        attributes: ["id", "foodName", "conName","price", "ca", "ua"],
      });
      console.log(favourites);
      res.json(favourites);
    } catch (error) {
      console.log(error);
    }
  };

  export const Add = async (req, res) => {
    const { foodName, conName, price, ...other } = req.body;
    console.log(foodName);
    try {
      await Favourites.create({
        foodName: foodName,
        conName: conName,
        price: price 
      });
      res.json({ msg: "Add Successful" });
    } catch (error) {
      console.log(error);
    }
  };

  
export const Deletes = async (req, res) => {
  console.log("----------", req.body.foodname);
  await Favourites.destroy({
    where: {
      foodName: req.body.foodname,
    },
  });
  res.json({ msg: req.body.foodname + "----- successfully deleted" });
};