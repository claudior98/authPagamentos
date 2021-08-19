const mysql = require('mysql')

const connect = mysql.createConnection({
    type: "mysql",
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'desafio'
})

connect.connect((err) => {  
    if(err) 
        throw err
        
    console.log("Connected!");  
  });

module.exports = conexao


