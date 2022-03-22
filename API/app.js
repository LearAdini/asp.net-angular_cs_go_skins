const path = require('path')


app.use(express.static(path.join(__dirname, '../dist/client')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../dist/client/index.html'))
})