//initialize express
const express = require('express');

const app = express();

//setup get request
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {  //listen on port 3000
    console.log('listening on port 3000');
});