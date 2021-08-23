const Router = require('express').Router
const Credor = require('./controllers/credor')
const Devedor = require('./controllers/devedor')
const Pagamento = require('./controllers/pagamento')


const routes = Router()

//routes.post("/criarPagamento", Pagamentos.cadastrarPag)

routes.post("/criarCredor", Credor.criarCredor)
routes.get("/listarCredor", Credor.listarCredores)

routes.post("/criarDevedor", Devedor.criarDevedores)
routes.get("/listarDevedor", Devedor.listarDevedores)

routes.post("/criarPagamento", Pagamento.criarPagamento)
routes.get("/listarPagamento", Pagamento.listarPagamento)

module.exports = routes
