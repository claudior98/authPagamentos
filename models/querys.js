const connect = require("./connect")

connect.query("CREATE DATABASE desafioBack",(err, result) =>{
    if(err){
        throw err
    }
    console.log("Created DataBase")
})