var resultsArr = [];

function printNames() {
    console.log('hi');
    var url = './hello4';
    fetch(url)
        .then((response) => { console.log(response.status); return response.json() })
        .then((data) => {
            resultsArr = Array.from(data.membersArr);
            console.log(resultsArr);

            for (i = 0; i < resultsArr.length; i++) {
                var firstName = (resultsArr[i].name.first)
                console.log('first: ' + firstName);
                document.querySelector('#containerAroundAll').innerHTML += `<h6>${firstName}</h6>`
                console.log('first2: ' + firstName);
            }
            // resultsArr.forEach((current,i) =>
            // {
            //     var firstName = JSON.stringify(current.name.first);
            //     console.log('first: ' + firstName);

            //     document.querySelector('#containerAroundAll').innerHTML += `<h6>${firstname}</h6>`
            //     console.log('first: ' + firstName);
            //             });
        })

        // Error response
        // .catch((theResponse) => {
        //     alert("HTTP-Error: " + theResponse.status);
        // });
}

window.addEventListener('load', printNames)