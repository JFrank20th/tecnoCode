import producto from "../models/producto.js";

const registerProducto = async (req, res) => {
  if (!req.body.name || !req.body.precio)
    return res.status(400).send("Incomplete data");

  const existingProducto = await producto.findOne({ name: req.body.name });
  if (existingProducto)
    return res.status(400).send("Error: The product already existing");

  const productoSchema = new producto({
    name: req.body.name,
    precio: req.body.precio,
    dbStatuus: true,
  });

  const result = await productoSchema.save();
  if (!result) res.status(400).send("Failed to register role");

  return res.status(200).send({ result });
};

export default { registerProducto };
