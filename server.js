const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')

// config Server
const server = require('http').Server(app)

//settings
app.set('port', process.env.PORT || 8005) // configuramos el puerto donde correrá

//middleware 
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//static files
app.use(express.static(path.join(__dirname, 'dist'))) // carpeta que servirá express

// add listener of server
server.listen(app.get('port'), function(){
  console.log('listening on', app.get('port'));
})