const { produtoRepositorio } = require('../repositorios/produto')
const repositorio = produtoRepositorio()

const Router = require('express').Router()

Router.get('/produto/:id', (req, res) => {
    const {id} = req.params

    const produto = repositorio.get(id)

    res.send(produto)
})

module.exports = Router