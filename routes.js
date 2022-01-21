const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>
res.json({
     status: 'ok',
     code: 200,
     message: "bienvenido"
    })
)

const postreControlador = require('./controllers/postreController')

routes.route('/postres/')
    .get(postreControlador.findAll)
    .post(postreControlador.create)

routes.route('/postre/:id')
    .get(postreControlador.findById)
    .put(postreControlador.update)
    .delete(postreControlador.delete)

module.exports = routes