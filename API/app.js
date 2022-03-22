const path = require('path')


app.use(express.static(path.join(__dirname, '../client')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../client/index.html'))
})