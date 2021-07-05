var express = require('express');
var app = express();




app.use(express.static('../frontEnd/dist/src'));
// =========================
const port = process.env.PORT || 3005
app.listen(port, function () {
    console.log(`My app is listening on port ${port}!`);
});
