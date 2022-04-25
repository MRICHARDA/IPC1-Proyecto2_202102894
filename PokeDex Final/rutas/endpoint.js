const { Router } = require('express');
const router = Router();

const pokemons = require('./poke.json');
const usuarios = require('./usu.json');

router.get("/todos-pokemon", (req,res) => {
    res.json(pokemons);
});

router.get("/todos-usuarios", (req,res) => {
    res.json(usuarios);
});

router.get("/consePorTipo/:Tipo", (req,res) => {
    res.json(tipo(req.params.Tipo));
});
router.get("/consePorNombre/:Nombre", (req,res) => {
    res.json(nombre(req.params.Nombre));
});
router.get("/consePorId/:id", (req,res) => {
    res.json(id(req.params.id));
});

function tipo(tipo){
    return pokemons.filter(poke => poke.Tipo === tipo);
}
function nombre(nombre){
    return pokemons.filter(poke => poke.Nombre === nombre);
}
function id(id){
    return pokemons.filter(poke => poke.Id === id);
}
module.exports = router;