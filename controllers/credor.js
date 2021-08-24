const query = require('../models/query')
const Express = require('express')
class Credor {
    criarCredor = async (req, res) => {
        try {
            const values = req.body
            const sqlCredor = `SELECT * FROM Credor WHERE id = "${values.id}"`;
            const verCredor = await query(sqlCredor);

            if(verCredor[0] !== undefined){
                return res.status(401).json({ message: `O Credor ${verCredor[0].nome} ja esta cadastrado `})
            }  
            
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