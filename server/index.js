require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const app = express()
app.use(bodyParser.json())
const ctrl = require('./controller')


massive(process.env.CONTROLLER_STRING).then(db => {
    app.set('db', db)
}).catch(err => console.log(err,'error'))


app.post('/api/product', ctrl.create)
app.get('/api/products', ctrl.getAll)
app.get('/api/product/:id', ctrl.getOne)
app.put('/api/product/:id/desc=', ctrl.update)
app.delete('/api/product/:id', ctrl.delete)






const port = process.env.PORT || 3000

app.listen(port, () => console.log(`IM LISTENING ON LOCALHOST: ${port}`))