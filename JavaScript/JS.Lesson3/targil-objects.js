function function1() {
    var car = {
        "manufacturer": "Subaru",
        model: "Forester",
        year: 2014,
        plate: "12-55-30",
    };

    console.log(Object.keys(car));
    console.log(Object.values(car));

    car.manufacturer = "Mitsubishi"
    car.model = "Pajero"
    console.log(Object.values(car));


}
//---------------------

function function2() {
    var car = {
        Manufacturer: "Subaru",
        Model: "Forester",
        Year: 2014,
        Plate: "12-55-30",
    };

    var carDetails = "<ul>"
    for (let currKey of Object.keys(car)) {
        carDetails += "<li>" + currKey + " - " + car[currKey] + "</li>"
    }
    carDetails = carDetails + "</ul>";
    console.log(carDetails);

    document.querySelector('#carDetails').innerHTML = carDetails;
}

//---------------------

function function3(importObject) {
    for (let [objKey, objVal] of Object.entries(importObject)) {
        console.log(objKey + ": " + objVal)

    };
    console.log("--------")
    console.log("\n")

}

function function3b() {
    var car1 = {
        "manufacturer": "Ford",
        "model": "Focus",
        "year": 2020,
        "plate": "aaagb5"
    };

    var student1 = {
        "firstName": "John",
        "lastName": "Doe",
        "city": "New York",
        "AverageGrade": 85.72,
        "email": "john123@gmail.com"
    };

    var user1 = {
        "firstName": "John",
        "lastName": "Doe",
        "city": "New York",
        "email": "john123@gmail.com",
        "phone": "054-1234567",
        "year": 2018
    };

    function3(car1);
    function3(student1);
    function3(user1);
}

//---------------------

function function4() {
    var cars = [
        {
            "manufacturer": "Mazda",
            "model": "6",
            "year": 2020,
            "plate": "abc123"
        },
        {
            "manufacturer": "Ford",
            "model": "Focus",
            "year": 2020,
            "plate": "aaagb5"
        },
        {
            "manufacturer": "Toyota",
            "model": "Rav4",
            "year": 2014,
            "plate": "ghk111"
        },
        {
            "manufacturer": "Mazda",
            "model": "3",
            "year": 2020,
            "plate": "hse73j"
        },
        {
            "manufacturer": "Subaru",
            "model": "Outback",
            "year": 2018,
            "plate": "kdyb72"
        },
        {
            "manufacturer": "Toyota",
            "model": "Rav4",
            "year": 2016,
            "plate": "dzdi64"
        },
        {
            "manufacturer": "Ford",
            "model": "Focus",
            "year": 2020,
            "plate": "atg5aa"
        },
        {
            "manufacturer": "Subaru",
            "model": "Outback",
            "year": 2019,
            "plate": "oxt63c"
        },
        {
            "manufacturer": "Toyota",
            "model": "Rav4",
            "year": 2014,
            "plate": "eswi77"
        },
        {
            "manufacturer": "Ford",
            "model": "Focus",
            "year": 2020,
            "plate": "osr3h6"
        },
        {
            "manufacturer": "Mazda",
            "model": "3",
            "year": 2020,
            "plate": "wwjyx4"
        },
        {
            "manufacturer": "Toyota",
            "model": "Rav4",
            "year": 2018,
            "plate": "22i64d"
        },
        {
            "manufacturer": "Mazda",
            "model": "6",
            "year": 2020,
            "plate": "abc123"
        },
        {
            "manufacturer": "Ford",
            "model": "Focus",
            "year": 2020,
            "plate": "aaagb5"
        },
        {
            "manufacturer": "Toyota",
            "model": "Rav4",
            "year": 2014,
            "plate": "ghk111"
        },
        {
            "manufacturer": "Mazda",
            "model": "3",
            "year": 2020,
            "plate": "hse73j"
        },
        {
            "manufacturer": "Subaru",
            "model": "Outback",
            "year": 2018,
            "plate": "kdyb72"
        },
        {
            "manufacturer": "Toyota",
            "model": "Rav4",
            "year": 2016,
            "plate": "dzdi64"
        },
        {
            "manufacturer": "Ford",
            "model": "Focus",
            "year": 2020,
            "plate": "atg5aa"
        },
        {
            "manufacturer": "Subaru",
            "model": "Outback",
            "year": 2019,
            "plate": "oxt63c"
        },
        {
            "manufacturer": "Toyota",
            "model": "Rav4",
            "year": 2014,
            "plate": "eswi77"
        },
        {
            "manufacturer": "Ford",
            "model": "Focus",
            "year": 2020,
            "plate": "osr3h6"
        },
        {
            "manufacturer": "Mazda",
            "model": "3",
            "year": 2020,
            "plate": "wwjyx4"
        },
        {
            "manufacturer": "Toyota",
            "model": "Rav4",
            "year": 2018,
            "plate": "22i64d"
        }
    ]


    var str = " "
    for (var i = 0; i < cars.length; i++) {
        str = str + "<ul>";
        for (let [k, v] of Object.entries(cars[i])) {
            str += "<li>" + k + ": " + v + "</li>"
            // console.log(str + "--")
        };
        str += "</ul>";
    };
    str += "</ul>";
    // console.log(str)
    document.querySelector('#targil4').innerHTML = str;
}

//---------------------

function function5() {

    var cars = [
        {
            "manufacturer": "Mazda",
            "model": "6",
            "year": 2020,
            "plate": "abc123"
        },
        {
            "manufacturer": "Ford",
            "model": "Focus",
            "year": 2020,
            "plate": "aaagb5"
        },
        {
            "manufacturer": "Toyota",
            "model": "Rav4",
            "year": 2014,
            "plate": "ghk111"
        },
        {
            "manufacturer": "Mazda",
            "model": "3",
            "year": 2020,
            "plate": "hse73j"
        },
        {
            "manufacturer": "Subaru",
            "model": "Outback",
            "year": 2018,
            "plate": "kdyb72"
        },
        {
            "manufacturer": "Toyota",
            "model": "Rav4",
            "year": 2016,
            "plate": "dzdi64"
        },
        {
            "manufacturer": "Ford",
            "model": "Focus",
            "year": 2020,
            "plate": "atg5aa"
        },
        {
            "manufacturer": "Subaru",
            "model": "Outback",
            "year": 2019,
            "plate": "oxt63c"
        },
        {
            "manufacturer": "Toyota",
            "model": "Rav4",
            "year": 2014,
            "plate": "eswi77"
        },
        {
            "manufacturer": "Ford",
            "model": "Focus",
            "year": 2020,
            "plate": "osr3h6"
        },
        {
            "manufacturer": "Mazda",
            "model": "3",
            "year": 2020,
            "plate": "wwjyx4"
        },
        {
            "manufacturer": "Toyota",
            "model": "Rav4",
            "year": 2018,
            "plate": "22i64d"
        },
        {
            "manufacturer": "Mazda",
            "model": "6",
            "year": 2020,
            "plate": "abc123"
        },
        {
            "manufacturer": "Ford",
            "model": "Focus",
            "year": 2020,
            "plate": "aaagb5"
        },
        {
            "manufacturer": "Toyota",
            "model": "Rav4",
            "year": 2014,
            "plate": "ghk111"
        },
        {
            "manufacturer": "Mazda",
            "model": "3",
            "year": 2020,
            "plate": "hse73j"
        },
        {
            "manufacturer": "Subaru",
            "model": "Outback",
            "year": 2018,
            "plate": "kdyb72"
        },
        {
            "manufacturer": "Toyota",
            "model": "Rav4",
            "year": 2016,
            "plate": "dzdi64"
        },
        {
            "manufacturer": "Ford",
            "model": "Focus",
            "year": 2020,
            "plate": "atg5aa"
        },
        {
            "manufacturer": "Subaru",
            "model": "Outback",
            "year": 2019,
            "plate": "oxt63c"
        },
        {
            "manufacturer": "Toyota",
            "model": "Rav4",
            "year": 2014,
            "plate": "eswi77"
        },
        {
            "manufacturer": "Ford",
            "model": "Focus",
            "year": 2020,
            "plate": "osr3h6"
        },
        {
            "manufacturer": "Mazda",
            "model": "3",
            "year": 2020,
            "plate": "wwjyx4"
        },
        {
            "manufacturer": "Toyota",
            "model": "Rav4",
            "year": 2018,
            "plate": "22i64d"
        }
    ]
    var input = document.querySelector('#targil5input').value;

    var searchArr = input + "<br>"
    for (i = 0; i < cars.length; i++) {
        if (cars[i]["manufacturer"].toLowerCase() === input.toLowerCase()) {
            for (let [k, v] of Object.entries(cars[i])) {
                searchArr += k + ": " + v + ", "
            };
            searchArr += "<br>"
        };
        document.querySelector('#ex5details').innerHTML = searchArr;
    }
}
