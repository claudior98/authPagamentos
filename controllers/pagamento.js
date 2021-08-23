const query = require('../models/query')
const con = require("../models/connect")
const Express = require('express')
class Pagamento {
    verificarStatus = async (id) => {
        const sql = `SELECT status FROM Credor WHERE id = "${id}"`;
        con.query(sql, (err, fields) => {
            if (err) {
                throw err
            } else {
                if (fields[0].status  !== 'aprovado') {
                    console.log("Pagamento recusado usuario nao aprovado")
                    return false
                }
                return true
            }
        })
    }
    criarPagamento = async (req, res) => {
        try {
            const values = req.body

            if (await values.valorinicial < values.valorfinal) {
                return res.status(400).json({ message: "Valor final do pagamento maior que o inicial" })
            }

            if (await values.valorinicial <= 0 | values.valorfinal <= 0) {
                return res.status(400).json({ message: "Valores a pagar menores do que 0" })
            }

            const aprovado = this.verificarStatus(values.Idcredor)
            if (await !aprovado) {
                return res.status(400).json({ message: "Pagamento recusado usuario nao aprovado"})
            }

            const sql = 'INSERT INTO Pagamento SET ?'
            await query(sql, values);
            return res.status(201).json(values)
        } catch (err) {
            return res.status(500).json(err)
        }
    }
    listarPagamento = async (res) => {
        const sql = 'SELECT * FROM Pagamento;'
        return res.send(await query(sql))
    }
}
module.exports = new Pagamento()