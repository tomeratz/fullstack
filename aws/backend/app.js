var express = require('express');
var app = express();

app.use('hellow world')

app.use(express.static('public'));
//=========================
const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`My app is listening on port ${port}!`);
});
