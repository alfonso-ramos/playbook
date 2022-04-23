//usando el objeto express
const express = require("express")
//app de express
const app = express()
//puesto en el que vamos a ver nuestra app: localhost:3000
const port = 3000
//path inicial, respondera al localhost:3000
app.get("/", (req,res)=>{
    res.send("hello world")
})
//Agregamdo nueva ruta y que responda con un texto
app.get("/launchx", (req,res)=>{
    res.send("Bienvenidos a Launchx")
})

//regresando un objeto
//localhost:3000/explorerInNode
app.get("/explorerInNode", (req,res)=>{
    const explorer = {name:"Explorer", msg:"Hello"}
    res.send(explorer)
})

//Query params: Recibir parametros por la URL
//localhost:3000/explorers/poncho
//req.params = {"explorerName": "poncho"}
app.get("/explorers/:explorersName", (req,res) =>{
    res.send(req.params)
})
//con esto inicializamos la app y nos manda un mensaje de que en que puerto esta corriendo
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})