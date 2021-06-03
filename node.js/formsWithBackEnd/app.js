const { json } = require('express');
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'pug')

function generateWelcomePageHTML(uname) {
    fs.appendFileSync('./public/loginScreen.html', `<div id="${uname}"><div>`);
}

function loadData(path) {
    try {
        return fs.readFileSync(path, 'utf8')
    } catch (err) {
        console.error(err)
        return false
    }
}

function storeData(data, path) {
    try {
        fs.writeFileSync(path, JSON.stringify(data))
    } catch (err) {
        console.error(err)
    }
}
app.post('/theregister', function (req, res) {
    //print all params
    console.log(`all params:  ${req.body.register}`);
    //print the value of a param 'firstname'
    console.log(req.body.fname);
    var myjson = {};
    myjson.firstname = `${req.body.fname}`
    myjson.lastname = `${req.body.lname}`
    myjson.userID = `${req.body.user}`
    myjson.userPassword = `${req.body.pass}`
    myjson.userImage = `"https://robohash.org/${req.body.user}"`
    let myTempJsonStr = JSON.stringify({});
    // allUsers.info.push(myjson)
    let myBool = false;
    try {
        myBool = fs.existsSync("RegisteredUsers.json")
        if (myBool === true) {
            myTempJsonStr = loadData("RegisteredUsers.json")
            let myJsonObject = JSON.parse(myTempJsonStr)
            myJsonObject.info.push(myjson)
            console.log("hi");
            storeData(myJsonObject, "RegisteredUsers.json")
        }
    }
    catch (errr) {
        console.log("json data file error " + errr.message)
    }

    if (myBool === false) {
        //TODO: handle all kinds of file errors

        // assuming the file just didnt exist yet
        let myJsonObject = JSON.parse(myTempJsonStr)
        myJsonObject.info = [myjson]

        storeData(myJsonObject, "RegisteredUsers.json")
    }

    // res.send(generateWelcomePageHTML(req.body.fname, req.body.lname, req.body.user));
    generateWelcomePageHTML(req.body.user)
    res.sendFile(path.join(__dirname, './public/loginScreen.html'));
});

app.post('/thelogin', function (req, res) {
    let myTempJsonStr = loadData("RegisteredUsers.json")
    let myJsonObject = JSON.parse(myTempJsonStr)
    myJsonObject.info.forEach(curr => {
        if (curr["userID"] === req.body.user && curr["userPassword"] === req.body.pass) {
            res.send(`<h2> welcome back : ${curr.firstname} ${curr.lastname} </h2>  <img src="https://robohash.org/${curr.userID}"> `)
        }


    });
    res.send(`<h2> user not found or wrong details sent </h2>`)
})

app.get('/tringPug', function (req, res) {
    res.render('myfile', { title: 'Hey', message: 'hey Tomer!' ,message2: 'message 2 text',par: 'this is paragraph'})
  })

app.use(express.static('public'));
//=========================
app.listen(4050, function () {
    console.log('My app is listening on port 4050!');
});


