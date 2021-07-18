var express = require('express');
var app = express();

app.get('/hello', (req, res) => {
    res.send('Hello world')

})

app.use(express.static('public'));
//=========================
const port = process.env.PORT || 3005;

app.listen(port, function () {
    console.log(`My app is listening on port ${port}!`);
});
