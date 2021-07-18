
// npm i siege
// node my_load_test.js
const siege = require('siege');

siege()
    .on(5757)
    .concurrent(10)
    .get('/api/users')
    .attack();