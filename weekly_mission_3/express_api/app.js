const express = require("express")
const app = express()
app.use(express.json()) //Indicamos que utilizaremos JSON
const port = 3000

//HTTP Methods
//GET Crea un endpoint que regrese un lista de explorers
app.get('/v1/explorers', (req, res) =>{
    console.log(`Api Explorers GET All request ${new Date()}`)
    const explorer1 = {id:1, name: "Poncho1"}
    const explorer2 = {id:2, name: "Poncho2"}
    const explorer3 = {id:3, name: "Poncho3"}
    const explorer4 = {id:4, name: "Poncho4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

//GET Crea un endpoint que regrese un explorer madiant un ID
app.get('/v1/explorers/:id', (req,res) =>{
    console.log(`Api Explorer GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id:1, name: "Poncho"}
    res.status(200).json(explorer)
})

//POST Crea un endpoint que se encargue de crear un explorer
app.post('/v1/explorers', (req, res)=>{
    console.log(`API Explorers POST request ${new Date()}`)
    const requestBody = req.body //Parametro de un cliente
    res.status(201).json({message: "Created"})
})
//PUT Crea un endpoint que se encargue de actualizar un explorer
app.put('/v1/explorers/:id', (req,res) =>{
    console.log(`API Explorers PUT request ${new Date()}`)
    console.log(`Update explorers with id ${req.params.id}`)
    const requestBody = req.body
    res.status(200).json({message: "Updated!"})
})
//DELETE Crea un endpoint para eliminar un explorer
app.delete('/v1/explorers/:id', (req,res) =>{
    console.log(`API explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body
    res.status(200).json({message: "Deleted"})
})


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})