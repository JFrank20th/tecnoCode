import express from "express";
import producto from "../controllers/producto.js";

const router = express.Router();
//post registrar
//http://localhost:3001/api/producto/registerProducto
//role.registerRole es lo que se exporto del controlador
router.post("/registerProducto", producto.registerProducto);

export default router;
