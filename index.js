const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 8080)

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', routes)

const server = app.listen(app.get('port'), ()=>{
    console.log('servidor corriendo')
});

