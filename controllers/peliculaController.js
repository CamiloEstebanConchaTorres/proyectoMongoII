const Pelicula = require ('../models/pelicula');

exports.getAllPeliculas = async (req, res) => {
  let obj = new Pelicula();
  res.status(200).send(await obj.getAllPeliculas());
  obj.destructor()
}

exports.getPeliculaById = async (req, res) => {
  let obj = new Pelicula();
  res.status(200).send(await obj.getPeliculaById(req.params._id));
  obj.destructor()
}