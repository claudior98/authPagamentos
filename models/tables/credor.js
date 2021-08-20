const mysql = require('../connect')

mysql.connect = (err) => {
    if(err){
        throw err
    }
    console.log("Connected")

    const sql = 'CREATE TABLE IF NOT EXISTS Credor(id NOT NULL AUTO_INCREMENT PRIMARY KEY, nomeCredor varchar(200), cpfCredor varchar(20), statusCadastro varchar(20))'
    
    mysql.query(sql, function (err) {
        if(err){
            throw err
        }else{
            console.log("Tabela Credor Criada")
        }

    })  
}
module.exports = mysql