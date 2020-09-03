const express = require('express');
const routes = express.Router();
const controller = require('./controllers/produtos_controllers');

routes.post('/produtos/criar', (req, res) => {
    controller.criarProduto(req.body)
    .then(result => res.send(result))
    .catch(err => console.error(err))
})

routes.get('/produtos', (req, res) => {
    controller.readProduto()
    .then(result => res.send(result))
    .catch(err => console.error(err))
})

routes.put('produtos/update/:id', (req, res) => {
    controller.updateProduto(req.params, req.body)
    .then(result => res.send(result))
    .catch(err => console.error(err))
})

routes.delete('produtos/delete:id', (req, res) => {
    controller.deleteProduto(req.params)
    .then(result => res.send(result))
    .catch(err => console.error(err))
})

module.exports = routes
