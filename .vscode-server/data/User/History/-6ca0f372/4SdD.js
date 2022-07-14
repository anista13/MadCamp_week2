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

app.get("/", (req, res) => {
    res.send("여기는 루트입니다.");      
})

app.get("/login", (req, res) => {
    res.send("여기는 로그인 화면입니다.")
})
app.listen(PORT, function (){
    console.log("서버 가동");
});

app.use('/api/movie', require('./routes/router'))