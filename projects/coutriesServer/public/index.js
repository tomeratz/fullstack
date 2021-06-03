
var resultsArr = [];
// set enter key to start
document.querySelector('#myInput').addEventListener("keypress", f5);

function f5(event) {
    if (event.keyCode === 13) {
        searchCountry();
        console.log('Started with Enter Press');
    }
}

function searchCountry() {
    console.log('Start');
    var url = './countrisSearch';
    var input = document.querySelector('#myInput').value;
    fetch(url)
        .then((response) => { console.log(response.status); return response.json() })
        .then((data) => {
            resultsArr = Array.from(data);

            for (var i = 0; i < resultsArr.length; i++) {
                if (resultsArr[i]["name"].toLowerCase() === input.toLowerCase()) {
                    document.querySelector('#myTag1').innerHTML = 'Country: ' + resultsArr[i]["name"];
                    document.querySelector('#myTag2').innerHTML = 'Capital: ' + resultsArr[i]["capital"];
                    document.querySelector('#myTag3').innerHTML = 'Region: ' + resultsArr[i]["region"];
                    document.querySelector('#myTag4').innerHTML = 'Lat: ' + resultsArr[i]["latlng"][0];
                    document.querySelector('#myTag5').innerHTML = 'Lng: ' + resultsArr[i]["latlng"][1];
                    document.querySelector("#imgs").innerHTML = '<img src=' + resultsArr[i]["flag"] + '>';
                    console.log(resultsArr[i]);
                }
          
            }
        })
}


