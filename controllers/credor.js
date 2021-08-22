const query = require('../models/query')
const Express = require('express')
class Credor {
    criarCredor = async (req, res) => {
        /*let id = {id: req.body.idCredor}

        if(id){
            console.log("teste")
        } */
        try {
            const values = req.body
            const sql = 'INSERT INTO Credor SET ?'

            await query(sql, values);
            return res.json(values)
        }catch(err){
            console.log(err)
            return res.json({message: err})
        }
    }
    listarCredores = async (req,res) => {
        const sql = 'SELECT * FROM Credor;'
        return res.send(await query(sql))
    }


}
module.exports = new Credor()