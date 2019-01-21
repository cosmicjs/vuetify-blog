const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./dist'))

/* final catch-all route to index.html */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

const port = process.env.PORT || '5000'
app.set('port', port)

app.listen(process.env.PORT || 5000, function () {})
