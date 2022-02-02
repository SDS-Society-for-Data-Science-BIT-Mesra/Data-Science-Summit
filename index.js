var express = require('express');
var app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(__dirname + '/public'));


app.get('/21', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/summit21.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/register.html'));
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
})