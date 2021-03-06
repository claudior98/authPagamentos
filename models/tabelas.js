class tableCredor {
    init(connect) {
        this.connect = connect

        this.createDevedor()
        this.createCredor()
        this.createPagamento()
    }
    createCredor() {
        try {
            const sql = 'CREATE TABLE IF NOT EXISTS Credor(id varchar(200) NOT NULL, nome varchar(200), cpf varchar(20), status varchar(20) , PRIMARY KEY(id));'
            this.connect.query(sql, function (err) {
                if (err) {
                    throw err
                } else {
                    console.log("Tabela Credor Criada")
                }
            })
        } catch (err) {
            return console.log(err)
        }
    }
    createDevedor() {
        try {
            const sql = 'CREATE TABLE IF NOT EXISTS Devedor(id varchar(200) NOT NULL, nome varchar(200), cnpj varchar(20), PRIMARY KEY(id));'

            this.connect.query(sql, function (err) {
                if (err) {
                    throw err
                } else {
                    console.log("Tabela Devedor Criada")
                }
            })
        } catch (err) {
            console.log(err)
        }
    }
    createPagamento() {
        try {
            const sql = 'CREATE TABLE IF NOT EXISTS Pagamento(id varchar(200) NOT NULL, Idcredor varchar(200), Iddevedor varchar(200) NOT NULL, valorinicial int, valorfinal int, data TIMESTAMP DEFAULT CURRENT_TIMESTAMP, status varchar(200), motivo varchar(200), PRIMARY KEY(id), CONSTRAINT FK_Credor FOREIGN KEY (Idcredor) REFERENCES Credor(id),CONSTRAINT FK_Devedor FOREIGN KEY (Iddevedor) REFERENCES Devedor(id));'
            this.connect.query(sql, function (err) {
                if (err) {
                    throw err
                } else {
                    console.log("Tabela Pagamentos Criada")
                }
            })
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = new tableCredor()
