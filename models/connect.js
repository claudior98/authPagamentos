const mysql = require('mysql')

const conexao = mysql.createConnection({
    type: "mysql",
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'claudinho98',
    database: 'Banco'
})

module.exports = conexao


