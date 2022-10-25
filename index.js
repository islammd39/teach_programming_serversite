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
app.get('/programming-languages/:id', (req, res) => {
  const id = req.params.id;
  const tutorialCategory = categories.find(c => c.id == id)
  res.send(tutorialCategory)
  // console.log(req.params);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


module.exports = app;