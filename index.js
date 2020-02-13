const express = require('express');
const expressWs = require('express-ws');
const fs = require('fs');

const port = 8765;
const app = express();
expressWs(app);

const filename = './hello.html'


app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  const content = fs.readFileSync(filename);

  res.send(content + `<script>
    var socket = new WebSocket('ws://localhost:${port}');
    socket.onmessage = m => document.body.innerHTML = m.data;
  </script>`);
})

app.ws('/', async (ws, req) => {
  fs.watch(filename, () => {
    const content = fs.readFileSync(filename);
    ws.send(content.toString())
  })
})

app.listen(port, () => console.log(`Listening on port ${port}.`));
