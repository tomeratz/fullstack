const express = require('express');
var btoa = require('btoa');
const app = express();
const axios = require('axios');
const qs = require('qs');
const fs = require('fs');
const { response } = require('express');
const { fstat } = require('fs');
const jsonToTable = require('json-to-table');




const { insertData, json2sql } = require('./sqlRpositort')

const sqlMiddleware = require('./sqlMiddleware')

let curlOrder = `curl -H "Authorization: Basic YXBpZGVtbzoxMjM=" https://www.eshbelsaas.com/ui/odata/Priority/tabmob.ini/usdemo/ORDERS('SO17000001')`
let curlOrders = `curl -H "Authorization: Basic YXBpZGVtbzoxMjM=" https://www.eshbelsaas.com/ui/odata/Priority/tabmob.ini/usdemo/ORDERS`
let order = `https://www.eshbelsaas.com/ui/odata/Priority/tabmob.ini/usdemo/ORDERS('SO17000001')`
let orders = `https://www.eshbelsaas.com/ui/odata/Priority/tabmob.ini/usdemo/ORDERS?$select=ORDNAME`
let orderItems = 'https://www.eshbelsaas.com/ui/odata/Priority/tabmob.ini/usdemo/ORDERS?$select=CUSTNAME,CDES,ORDNAME,&$expand=ORDERITEMS_SUBFORM($select=PARTNAME,PDES,TQUANT,TUNITNAME,PRICE,VPRICE,PURCHASEPRICE,ICODE,CLOSEDBOOL,DUEDATE,ORDISTATUSDES)&$top=3'//&$since=2021-06-01T01:15+02:00'

function btoaEncode(userName, Password) {
    let encoded = 'Basic ' + btoa(`${userName}:${Password}`);
    // console.log(encoded);
    return encoded
}
// btoaEncode('apidemo', 123)

var obj;

function getData(url, userName, Password) {
    console.log(url);
    const basicAuth = btoaEncode(userName, Password)
    console.log(basicAuth);
    try {
        let OrdNameArr = []
        let response = axios({
            method: 'GET',
            url: url,
            headers: {
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Content-type': 'application/json',
                'Connection': 'keep-alive',
                'Authorization': `${basicAuth}`,
            },
        })
            .then((response) => { return response.data })
            .then((results) => {
                fs.writeFileSync('./orders.json', JSON.stringify(results.value))
                obj = results.value
                // jsonTosql(obj)
            })
    }
    catch (err) {
        console.log('the error: ', err);
    }
}

function jsonTosql(theJson) {
    console.log(theJson);
    const tabled = jsonToTable(theJson);
    console.log('tabled', tabled);
    let sqlTitlesStr = tabled[0]
    let sqlTitles = []

    for (let i = 0; i < sqlTitlesStr.length; i++) {
        var sqlTitleStr = sqlTitlesStr[i];
        var checkIfExist = ''
        var g = '.'
        var matches = sqlTitleStr.split(g);
        var arrLength = matches.length - 1
        var last = matches[arrLength]

        checkIfExist = sqlTitles.indexOf(last)
        // console.log('sqlTitles', sqlTitles);
        console.log('checkIfExist', last, checkIfExist);

        if (checkIfExist === -1) {
            sqlTitles.push(last);
            console.log('last', last);
            console.log(tabled[0][i]);
            tabled[0][i] = last
            console.log(tabled[0][i]);
        }
    }
    fs.writeFileSync('./sql.json', JSON.stringify(tabled))

    // insertData(tabled)

}



getData(orderItems, 'apidemo', '123')
// console.log('get data')

app.use('/sql', sqlMiddleware)
app.use(express.static('public'));
//=========================
const port = process.env.PORT || 4001;

app.listen(port, function () {
    console.log(`My app is listening on port ${port}!`);
});

