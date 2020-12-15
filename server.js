const express = require('express');
const app = express();
app.use(express.static(__dirname));


app.get('/index.html', (req, res) => {
    res.sendFile('index.html');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));