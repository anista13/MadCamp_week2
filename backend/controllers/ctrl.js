const connection = require('../dbConfig')

const ctrl = {
    getMovies : async (req, res) => {
        connection.query('SELECT * FROM user', (error,rows) => {
            if(error) throw error;
            console.log(rows);
            console.log("!!!");
            res.send(rows);
        })
    },
    getTables : async (req, res) => {
        console.log('SELECT * from timetable WHERE grade = \"'+req.body.grade+'\"');
        if(req.body.class=="전체" && req.body.type=="전체") connection.query('SELECT * from timetable WHERE grade = \"'+req.body.grade+'\"', (error,rows) => {
            if(error) throw error;
            console.log(req.body);
            res.send(rows);
        })
        else if(req.body.class=="전체" && req.body.grade=="전체") connection.query('SELECT * from timetable WHERE type = \"'+req.body.type+'\"', (error,rows) => {
            if(error) throw error;
            console.log(req.body);
            res.send(rows);
        })
        else if(req.body.type=="전체" && req.body.grade=="전체") connection.query('SELECT * from timetable WHERE class = \"'+req.body.class+'\"', (error,rows) => {
            if(error) throw error;
            console.log(req.body);
            res.send(rows);
        })
        else if(req.body.class=="전체") connection.query('SELECT * from timetable WHERE type = \"'+req.body.type+'\" and grade = \"'+req.body.grade+'\"', (error,rows) => {
                                            if(error) throw error;
                                            console.log(req.body);
                                            res.send(rows);
                                        })
        else if(req.body.type=="전체") connection.query('SELECT * from timetable WHERE class= \"'+req.body.class+ '\" and grade = \"'+req.body.grade+'\"', (error,rows) => {
                                            if(error) throw error;
                                            console.log(req.body);
                                            res.send(rows);
                                        })
        else if(req.body.grade=="전체") connection.query('SELECT * from timetable WHERE class= \"'+req.body.class+ '\" and type = \"'+req.body.type+'\"', (error,rows) => {
                                            if(error) throw error;
                                            console.log(req.body);
                                            res.send(rows);
                                        })
        else connection.query('SELECT * from timetable WHERE class= \"'+req.body.class+ '\" and type = \"'+req.body.type+'\" and grade = \"'+req.body.grade+'\"', (error,rows) => {
            if(error) throw error;
            console.log(req.body);
            res.send(rows);
        })
    },
    getPost : async (req, res) => {//name, price, originalPrice, condition, place
        connection.query('insert into goods(book, price, originalPrice, cond, place, date, seller) values(\"'+req.body.name+'\", '+req.body.price+', '+req.body.originalPrice+', \"'+req.body.condition+'\", \"'+req.body.place+'\", \"'+req.body.date+'\", \"'+req.body.seller+'\")', (error,rows) => {
            if(error) throw error;
            console.log(req.body);
            res.send(rows);
        })
    },
    getShop : async (req, res) => {//name, price, originalPrice, condition, place
        connection.query('SELECT * from goods', (error,rows) => {
            if(error) throw error;
            console.log(req.body);
            res.send(rows);
        })
    }
}

module.exports = ctrl