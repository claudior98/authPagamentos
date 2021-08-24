const query = require('../models/query')
const con = require("../models/connect")
const Express = require('express')
class Pagamento {
    criarPagamento = async (req, res) => {
        try {
            const values = req.body
            const queryStatus = `SELECT * FROM Credor WHERE id = "${values.Idcredor}"`;
            const sqlDevExiste = `SELECT * FROM Devedor WHERE id = "${values.Iddevedor}"`;
            const sqlPagExiste = `SELECT * FROM Pagamento WHERE id = "${values.id}"`;
            const verIdPag = await query(sqlPagExiste); 
            const status = await query(queryStatus);
            const devedorExiste = await query(sqlDevExiste);
            values.status = "pendente"

            if(devedorExiste[0] === undefined){
                return res.status(401).json({ message: `Devedor nao existe ou invalido, Pagamento ${values.status = "negado"}`})
            } 
            if(status[0] === undefined){
                return res.status(401).json({ message: `Credor nao existe ou invalido, Status ${values.status = "negado"}`})
            }else if(status[0].status !== "aprovado"){
                return res.status(400).json({ message: `Pagamento recusado usuario nao aprovado, Status ${values.status = "negado"}`})
            }
            if (await values.valorinicial < values.valorfinal) {
                return res.status(400).json({ message: `Valor final do pagamento maior que o inicial, Status ${values.status = "negado"}` })
            }
            if (await values.valorinicial <= 0 | values.valorfinal <= 0) {
                return res.status(400).json({ message: `Valores a pagar menores do que 0, Status ${values.status = "negado"}` })
            }
            if(verIdPag[0] !== undefined){
                return res.status(401).json({message: `${verIdPag[0].id} - Pagamento ja esta cadastrado}`})
            }
            values.status = "aprovado"
            const sql = 'INSERT INTO Pagamento SET ?'
            await query(sql, values)
            return res.status(201).json({message: `Pagamento ${values.status}`})
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: err})
        }
    }
    listarPagamento = async (req, res) => {
        const sql = 'SELECT * FROM Pagamento;'
        const result = await query(sql)
        return res.json({ result })
    }
}
module.exports = new Pagamento()