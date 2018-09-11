require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const app = express()
app.use(bodyParser.json())











const port = process.env.PORT || 3000

app.listen(port, () => console.log(`IM LISTENING TO YOU ON${port}`))