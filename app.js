const express = require('express')
const app = express()
const path = require('path')


app.listen(3000 , () =>{
    console.log('Servidor funciona')
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"));
  });