require('dotenv').config();
const express = require('express');
var app = express();
require('./src/routes/routes.js')(app);

const server = app.listen(3000, '127.0.0.1', function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})



