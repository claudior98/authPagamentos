const Express = require("express")
const bodyParser = require("body-parser")
const Routers = require("./router")

const app = Express()
const port = 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(Routers)

app.listen(port, () => {
    console.log(`rodando na porta ${port}`)
})