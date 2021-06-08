let f1 = function () {

    let myThenVersionOfFetch = () => {
        return new Promise((resolve, reject) => {
            let url = 'https://dog.ceo/api/breeds/image/random';
            // let url = 'https://dog.ceo/api/breeds/imndom'; // using wrong url to see reject's work

            var m = "hi";
            fetch(url)
                .then((response) => {
                    if (!(response.status >= 200 && response.status < 300)) {
                        reject("some status code error")
                    }
                    return response.json()
                })
                .then((data) => {
                    console.log("data arrived " + data.message + " " + Date.now());
                    m = JSON.stringify(data.message);
                    resolve(m);
                })
                .catch((theResponse) => {
                    alert("HTTP-Error: " + theResponse);
                    reject("some network error");
                })
        })
    }


    let y;


    navigator.geolocation.getCurrentPosition((position) => {
        // Get the positioning coordinates.
        y = position;
        console.log("were here inside geolocation callback " + y.coords.longitude + " " + Date.now())
        checkUserInIsrael(y.coords.latitude, y.coords.longitude)
            .then((info) => {
                return myThenVersionOfFetch();
            })
            .then((txt) => { console.log(txt + " " + Date.now()) }) // console log 
            .catch((theErrrrr) => { console.log("oh no " + theErrrrr); })
    });

    //--------------------------------------------------

    function checkUserInIsrael(postn1, postn2) {
        console.log("checkUserInIsrael postn=" + postn1 + " " + postn2 + " " + Date.now())
        //---------------------------
        return new Promise((resolve, reject) => {
            // 32, 34
            //getUserLatLon();
            let loc = { lat: postn1, lon: postn2 };
            if (loc.lat === Math.floor(32) && loc.lon === Math.floor(34)) {
                resolve("inside onload user is in Israel")
                //resolve(true)
            }
            reject("inside onload user outside of Israel");
        });
        //---------------------------
    }

    //----------------------------------------------------

};