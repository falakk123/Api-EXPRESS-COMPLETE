const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const port = process.env.SERVER_PORT
const cors = require('cors')
const path = require('path')

const frontpath = path.join(__dirname,'./Frontend/dist')
app.use('/',express.static(frontpath))

app.use(express.json())
app.use(cors())
app.use('/api', require('./api/products/Router'))
app.use('/api', require('./api/category/router'))
app.use('/api',require('./api/brands/router'))
app.use('/api',require('./api/user/Router'))

app.get('*' ,(req,res) =>{
  res.sendFile(path.join(__dirname,'./Frontend/dist/index.html'))
})

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Connected DaTa Base"))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
