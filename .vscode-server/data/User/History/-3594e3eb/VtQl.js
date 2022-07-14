const http = require("http");
const app = http.createServer();

app.listen(443, ()=>
    console.log("http로 가동된 서버입니다.")
)


// const express = require("express")
// const app = express()

// app.get("/", (req, res) => {
//     res.send("여기는 루트입니다.");      
// })

// app.get("/login", (req, res) => {
//     res.send("여기는 로그인 화면입니다.")
// })
// app.listen(443, function (){
//     console.log("서버 가동");
// });