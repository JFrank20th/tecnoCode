import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";
import producto from "./routes/producto.js"; // la ruta despues de crear el role
dotenv.config();

const app = express();

app.use(express.json());
//reglas de coneccion entre front y back
app.use(cors());
app.use("/api/producto", producto); //asi se va a usar despues de crear el role

app.listen(process.env.PORT, () =>
  console.log("Backend server Running on port: " + process.env.PORT)
);

db.dbconnection();
