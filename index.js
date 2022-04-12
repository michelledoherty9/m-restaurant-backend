import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routers/index.js";
import axios from 'axios'

dotenv.config();
const app = express();


app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);


// const options = {
//   method: 'POST',
//   url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/classify',
//   params: {locale: 'en_us'},
//   headers: {
//     'content-type': 'application/json',
//     'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
//     'X-RapidAPI-Key': '0ccee59304msh93fb0c814c9f6bep159584jsn11020bfdf796'
//   },
//   data: '{"plu_code":"","title":"Kroger Vitamin A & D Reduced Fat 2% Milk","upc":""}'
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


app.listen(5000, () => console.log("Server running at port 5000"));
