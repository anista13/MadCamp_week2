const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const express = require('express');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())

const PORT = 443;

app.get(":443/welcome/:name", function(req, res){
    const name = req.params.name;
    print(name)
    res.send("Welcome to my web server " + name);
});

app.post(":443/welcome:", function(req, res) {
    const name = req.body.name;
    res.send("Welcome " + name);
})

app.listen(PORT, function() {
    console.log("server is ready at " + PORT);
});

app.use('/api/movie', require('./routes/router'))