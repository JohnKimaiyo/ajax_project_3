const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');

const hostname = '127.0.0.1';
const port = 3001;

// conffigure bodyparseer
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: flase });
app.use(jsonParser);
app.use(urlEncodedParser);

// configure cors
app.use('/api', router);

// get
app.get('/', (request, response) => {
    reposnse.send(`<h2> welcome to express server of employee portal </h2>`);
});

app.listen(port, hostname, () => {
    console.log(`express server is started at http://${hostname} :${port}`)
});
