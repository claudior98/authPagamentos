const mysql = require('mysql2')
var Tabelas = require('./tabelas')

const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'claudinho98',
    database: 'Banco'
})

con.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log("Connected!")

    con.query("CREATE DATABASE IF NOT EXISTS Banco", function (err, result) {
        if (err) {
            throw err
        }
        console.log("Database created")
    })

    Tabelas.init(con)


})

module.exports = con