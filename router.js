const express = require("express")
const { Router } = require('express')
const Pagamentos = require('./controllers/pagamento')

const routes = Router()

routes.post("/cadastrar",Pagamentos.cadastrarPag)

module.exports = Router
