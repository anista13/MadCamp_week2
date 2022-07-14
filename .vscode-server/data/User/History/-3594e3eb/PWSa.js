const express = require("express")
const app = express()

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