const mysql = require('./connect')

const executaQuery = (query, parametros = '') => {
    return new Promise((resolve, reject) => {
        mysql.query(query, parametros, (erros, resultados) => {
            if (erros) {
                reject(erros)
            } else {
                resolve(resultados)
            }
        })
    })
}

module.exports = executaQuery


