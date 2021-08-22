const fs = require('fs');

let orders = `https://www.eshbelsaas.com/ui/odata/Priority/tabmob.ini/usdemo/ORDERS`

function btoaEncode(userName, Password) {
    let encoded = 'Basic ' + btoa(`${userName}:${Password}`);
    console.log(encoded);
    return encoded
}

function getData(url, userName, Password) {
    let auth = btoaEncode(userName, Password)
    console.log(url, auth);
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
                'Authorization': auth,
            },
        })
            .then((response) => { return response.data })
            .then((results) => {
                // for (let curr of results) {
                //     OrdNameArr.push(curr.ORDNAME)
                // 
                fs.writeFileSync('./orders.json', JSON.stringify(results))
                console.log(results);
            })
    } catch (err) {
        console.log('the error: ', err);
    }
}

getData(orders, 'apidemo', 123)