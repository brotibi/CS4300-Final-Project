const express = require('express');
const app = express();
app.use(express.static(__dirname));


app.get('/index.html', (req, res) => {
    res.sendFile('index.html');
});


app.listen(80, '127.0.0.1');