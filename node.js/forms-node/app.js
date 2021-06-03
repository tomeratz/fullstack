var express = require('express');
var fs = require('fs')
var { request } = require('http');
var app = express();
var path = require('path');
let usersArr = []

app.use(express.json());
app.post('/theForm', function (req, res)  {

    var sendToJson ={}
    usersArr = [req.body]
    console.log(usersArr);
    // sendToJson =JSON.parse(usersArr)
    // storeData(sendToJson,"users.json")
    
    res.sendFile(path.join(__dirname, './public/login.html'));

})

app.post('/login', (req, res) => {

    loginArr= [req.body]
    console.log(loginArr);
    if (loginArr[0].uName === usersArr[0].uName && loginArr[0].pass === usersArr[0].pass){
        res.send('User Name and Password verified, hello ' + usersArr[0].fName)
    }else{
        res.send('User Name or Password incorrect, Please try again')
    }
    usersArr = [req.body]
    console.log(usersArr);
    res.send('hello ' + usersArr[0].fName)
})

const loadData = (path) => {
    try {
        return fs.readFileSync(path, 'utf8')
    } catch (err) {
        console.error(err)
        return false
    }
}

const storeData = (data, path) => {
    try {
        fs.writeFileSync(path, JSON.stringify(data))
    } catch (err) {
        console.error(err)
    }
}

//let myObj = JSON.parse(loadData('./members-300.json'));
// let myObj = JSON.parse(loadData(pathFile2));
// storeData(myObj, pathFile1);


app.use(express.static('public'));
// =========================
var port = 3002

app.listen(3002, function () {
    console.log(`My app is listening on port ${port}!`);
});