const mysql = require('../connect')

mysql.connect = (err) => {
    if(err){
        throw err
    }
    console.log("Connected")

    const sql = 'CREATE TABLE IF NOT EXISTS Devedor(id NOT NULL AUTO_INCREMENT PRIMARY KEY ,nomeDevedor varchar(200), cnpjDevedor varchar(20))'
    
    mysql.query(sql, function (err, result) {
        if(err){
            throw err
        }else{
            console.log("Tabela Credor Criada")
        }

    })  
}
module.exports = mysql