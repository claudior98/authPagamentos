const mysql = require('../connect')

mysql.connect = (err) => {
    if(err){
        throw err
    }
    console.log("Connected")

    const sql = 'CREATE TABLE IF NOT EXISTS Pagamento(id NOT NULL AUTO_INCREMENT PRIMARY KEY, IdCredor varchar(200), IdDevedor NOT NULL varchar(200), valorInicial float, valorFinal float, data datetime, statusRemessa varchar(200), motivo text)'
    
    mysql.query(sql, function (err, result) {
        if(err){
            throw err
        }else{
            console.log("Tabela Pagamentos Criada")
        }

    })  
}
module.exports = mysql