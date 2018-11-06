'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router();

app.use(bodyParser.json()) // Todo conteudo sera convertido para Json
app.use(bodyParser.urlencoded({ extended: false})) // Codificar as URL

const route = router.get('/', (req, res,next) => {
    res.status(200).send({
        title: "Node Store API Kryptech",
        version: "0.0.1"
    })
})

const create = router.post('/', (req, res,next) => { //req = requisição, res = resposta
    res.status(201).send(req.body)
})

const put = router.put('/:id', (req, res,next) => {
    const id = req.params.id // Recuperar parametros que virão pela URL
    res.status(200).send({
        id: id,
        item: req.body
    })
})

const del = router.delete('/', (req, res,next) => { //req = requisição, res = resposta
    res.status(200).send(req.body)
})

app.use('/', route)
app.use('/products', create)
app.use('/products', put)

module.exports = app