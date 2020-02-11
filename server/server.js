require('./config/config')

const express = require('express')
const app = express()
const hbs = require('hbs')
const path = require('path');
var bodyParser = require('body-parser')

const rootPath = path.parse(__dirname).dir
const partialsPath = path.join( rootPath , "/views/partials")
const publicPath = path.join(rootPath , '/public')


hbs.registerPartials(partialsPath)


app.use(express.static(publicPath))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.set('view engine','hbs')

app.get('/', (req, res)=> {
   res.render('home',{
    nombre:'Diego Rozo',
    CardTitle:'Web server'
   })
})

app.get('/home', (req, res)=> {
    res.render('home',{
     nombre:'Diego Rozo',
     CardTitle:'Web server'
    })
 })
 

app.get('/about', (req, res)=> {
    res.render('about',{
     nombre:'Diego Rozo',
     CardTitle:'Web server'
    })
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
    console.info(`Escuchando el puerto ${ process.env.PORT  } en ${__dirname} partials path= ${partialsPath} public path = ${publicPath}`)
} )
