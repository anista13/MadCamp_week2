const connection = require('../dbConfig')

const ctrl = {
    getMovies : async (req, res) => {
        connection.query('SELECT * FROM movie', (error,rows) => {
            if(error) throw error;
            console.log(rows)
            res.send(rows);
        })
    }
}

module.exports = ctrl