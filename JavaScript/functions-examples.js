// var x = 10;
// console.log("hello " + x);


// example1("John");
// example1("Marry");

// function example1(y) {
//     console.log("hello " + y);
// }


// example2(150, 170);
// example2(10, 80);
// example2(5, 19);

function example2(rangeStart, rangeEnd) {
    var x = Math.floor(Math.random() * (rangeEnd - rangeStart)) + rangeStart;
    console.log("x=" + x);
    return x;
}
//----------------------------------------
function hwQuestion3() {
    var a = example2(50, 70);
    console.log("a=" + a);
    var b = example2(50, 70);
    console.log("b=" + b);
    var c = example2(20, 80);
    console.log("c=" + c);

    if (a === undefined || b === undefined || c === undefined) {
        console.log("we got some undefined")
    }
    else {
        if (a + b + c < 150) {
            console.log("less than 150");
        }
        else {
            console.log("NOT less than 150")
        }
    }
}
//----------------------------------------
function example4() {
    var a1 = document.querySelector("#myInput1").value;
    var a2 = document.querySelector("#myInput2").value;
    var a3 = document.querySelector("#myInput3").value;

    console.log("you typed: " + a1 + " " + a2 + " " + a3);
}


