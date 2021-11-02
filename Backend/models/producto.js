import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
  name: String,
  precio: Number,
  registerDate: Date,
  stock: Number,
});

const producto = mongoose.model("productos", productoSchema);

export default producto;
