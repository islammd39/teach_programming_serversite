const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/categories.json')

app.get('/', (req, res) => {
  res.send('Hello in World!')
})
app.get('/programming-languages', (req, res) => {
  res.send(categories) 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


module.exports = app;