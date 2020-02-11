require('./config/config')

const express = require('express')
const app = express()
const path = require('path');
var bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.get('/', function (req, res) {
    res.json('get')
})


app.post('/', function (req, res) {
    let body = req.body
    res.json({
        persona: body
    })
})

app.delete('/', function (req, res) {
    res.json('delete')
})

app.put('/', function (req, res) {
    res.json('put')
})




app.listen(process.env.PORT,()=>{
    console.info(`Escuchando el puerto ${ process.env.PORT  }`)
} )
