const express = require('express');
const convertToCsv=require('./convertToCsv')
const app = express();
app.use(express.text())
const port = 3000;


app.get('/', (req, res) => {
    res.send("Hello!");
});

app.post('/', (req, res) => {
    console.log("Data received!");
    res.status(200).send("Data received");

    convertToCsv(req.body);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
