const express = require('express')
const app = express()

app.use(express.static('./dist'));

/* final catch-all route to index.html */
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.listen(process.env.PORT || 5000, function () {
});
