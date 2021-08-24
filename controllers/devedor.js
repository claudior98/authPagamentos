const query = require('../models/query')
const Express = require('express')
class Devedor {
    criarDevedores = async (req, res) => {
        try {
            const values = req.body
            const sql = 'INSERT INTO Devedor SET ?;'
            const sqlDevedor = `SELECT * FROM Devedor WHERE id = "${values.id}"`;
            const verDevedor = await query(sqlDevedor);

            if(verDevedor[0] !== undefined){
                return res.status(401).json({ message: `Devedor ${verDevedor[0].nome} ja existe ${values.status = "negado"}`})
            }

            await query(sql, values);
            return res.json(values)
        }catch(err){
            console.log(err)
            return res.json({message: err})
        }
    }
    listarDevedores = async (req,res) => {
        const sql = 'SELECT * FROM Devedor;'
        return res.send(await query(sql))
    }


}
module.exports = new Devedor()