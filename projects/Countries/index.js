function f1() {
    var input = document.querySelector('#myInput').value;
    console.log('you typed: ' + input)
    // input=capitalizeFirstLetter(input) //case sensitiv cancle function
    // document.querySelector('#myTag1').innerHTML=input;

    for (var i = 0; i < myObj.length; i++) {
        if (myObj[i]["name"].toLowerCase() === input.toLowerCase()) {
            document.querySelector('#myTag1').innerHTML = 'Country: ' + myObj[i]["name"];
            document.querySelector('#myTag2').innerHTML = 'Capital: ' + myObj[i]["capital"];
            document.querySelector('#myTag3').innerHTML = 'Region: ' + myObj[i]["region"];
            document.querySelector('#myTag4').innerHTML = 'Lat: ' + myObj[i]["latlng"][0];
            document.querySelector('#myTag5').innerHTML = 'Lng: ' + myObj[i]["latlng"][1];
            document.querySelector("#imgs").innerHTML = '<img src=' + myObj[i]["flag"] + '>';
            console.log(myObj[i]);
        }
    }
}
// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }