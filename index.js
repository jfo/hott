const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
})

const port = 8765;
app.listen(port, () => console.log(`Listening on port ${port}.`));
