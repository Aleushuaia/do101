const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/marte', (req, res) => {
    res.send('Hello Marte!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})