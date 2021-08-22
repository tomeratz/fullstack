// async function getjson() {
//     let url = 'https://randomuser.me/api/?results=50';
//     try {
//         let response = await fetch(url);
//         let data = await response.json();

//         let str = ''
//         for (curr of data.results) {
//             str += `<div class="card">
//                 <img src="${curr.picture.large}"></img>
//                 <div>
//                 <p>Name: ${curr.name.first} ${curr.name.last}</p>
//                 <p>${curr.name.email}</p>
//             </div>
//             </div>`
//         }
//         document.getElementById('mydiv').innerHTML = str

//     }
//     catch (err) {
//         console.log('couldent get the users', err);

//     }

// }
// getjson()

// async function getJsonUrel() {
//     console.log('start');
//     const url = 'https://randomuser.me/api/?results=50';
//     try {


//         let response = await fetch(url);
//         let data = await response.json();


//         let str = ''
//         for (curr of data.results) {
//             str +=
//                 ` <div class="card">
//             <img src="${curr.picture.large}"></img>
//             <div>
//                 <p>Name: ${curr.name.first} ${curr.name.last} </p>
//                 <p>${curr.email} </p>
//             </div>
//         </div>`
//         }
//         document.getElementById('mydiv').innerHTML = str;
//     }
//     catch (err) {
//         console.log('there was an error', err);
//     }
// }

// getJsonUrel()

// async function getUsersData() {
//     const url = 'https://randomuser.me/api/?results=50'
//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//         let str = '';

//         for (curr of data.results) {
//             str +=
//                 `<div class="card">
//             <img src="${curr.picture.large}"></img>
//             <div>
//                 <p>${curr.name.first}</p>
//                 <p>${curr.email}</p>
//             </div>
//         </div>`
//         }
//         document.querySelector('#mydiv').innerHTML = str

//     }
//     catch (err) {
//         console.log(err);

//     }

// }
// getUsersData()

// function getUserDataThen() {
//     const url = 'https://randomuser.me/api/?results=50'
//     try {
//         fetch(url)
//             .then((response) => { return response.json() })
//             .then((data) => {
//                 let str = ''
//                 for (curr of data.results) {
//                     str +=
//                         `<div class="card">
//                             <img src="${curr.picture.large}"></img>
//                             <div>
//                                 <p>${curr.name.first}</p>
//                                 <p>${curr.email}</p>
//                             </div>
//                         </div>`
//                 }
//                 document.querySelector('#mydiv').innerHTML = str
//             })
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// getUserDataThen()

function getUsersJsonThen() {
    const url = 'https://randomuser.me/api/?results=50'
    try {
        fetch(url)
            .then((response) => { return response.json() })
            .then((data) => {
                let str = '';
                for (curr of data.results) {
                    str +=
                        `<div class="card">
                            <img src="${curr.picture.large}"></img>
                            <div>
                                <p>${curr.name.first}</p>
                                <p>${curr.email}</p>
                            </div>
                        </div>`

                }
                document.getElementById('mydiv').innerHTML = str
            })
    }
    catch {
        console.log(err);
    }
}

// getUsersJsonThen()




function getPriorityData(url, userName, Password) {

    console.log(url);
    let h = new Headers();
    let encoded = window.btoa(`${userName}:${Password}`);
    let auth = 'Basic ' + encoded;

    h.append('Accept', '*/*');
    h.append("Authorization", auth);

    console.log(auth);

    let req = new Request(url, {
        method: 'GET',
        headers: h,
        mode: 'no-cors',
        credentials: 'include'
    });

    try {
        fetch(req)
            .then((response) => { return response.json() })
            .then((data) => {
                console.log(data);
                // document.getElementById('gallery').innerHTML = data
            })
    }
    catch (err) {
        console.log(err);
    }
}


function getData(url, userName, Password) {

    console.log(url);
    // let h = new Headers();
    // let encoded = window.btoa(`${userName}:${Password}`);
    // let auth = 'Basic ' + encoded;

    try {
        fetch(url, {
            method: 'GET',
            headers: {
                'Host': 'www.eshbelsaas.com',
                'Connection': 'keep-alive',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache',
                'Authorization': 'Basic YXBpZGVtbzoxMjM=',
                'Upgrade-Insecure-Requests': '1',
                'Sec-Fetch-Site': 'none',
                'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-User': '? 1',
                'Sec-Fetch-Dest': 'document',
                'sec-ch-ua-mobile': '?0',
            },
            mode: 'no-cors',
            credentials: 'include'
        })
            .then((response) => { return response.json() })
            .then((data) => {
                console.log(data);
                // document.getElementById('gallery').innerHTML = data
            })
    }
    catch (err) {
        console.log(err);
    }
}



getData('https://www.eshbelsaas.com/ui/odata/Priority/tabmob.ini/usdemo/ORDERS', 'apidemo', '123')