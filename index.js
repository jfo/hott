const express = require('express');
const fs = require('fs');

const app = express();

const content = fs.readFileSync('./hello.html');

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(content);
})

const port = 8765;
app.listen(port, () => console.log(`Listening on port ${port}.`));
