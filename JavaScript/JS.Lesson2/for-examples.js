function f1() {

    function17();
    console.log("\n");
    console.log("_______________");
}

//============================================
function function1() {
    var str = '';
    for (var i = 1; i <= 3; i++) {
        str += " hello world!" + i
    }
    console.log(str);
}
//============================================
function function2() {
    for (var i = 1; i <= 9; i++) {
        // print the result of 2^i (two to the power i)
        console.log(Math.pow(2, i));
    }
}
//============================================
function function3() {
    for (var x = 1; x <= 3; x++) {
        console.log("Hello World!");
    }
}
//============================================
function function4() {
    for (var i = 1; i <= 10; i++) {
        console.log(i % 2);
    }
}
//============================================
function function5() {
    for (var x = 1; x <= 10; x++) {
        // print the reminder of the division of x by 3           
        console.log(x % 3);
    }

}
//============================================
function function6() {
    var str = '';
    for (var x = 1; x <= 7; x++) {
        str = '';
        for (var y = 1; y <= x; y++) {
            str += '*';
        }

        console.log(str);
    }

}
//============================================

function function7() {

    for (var x = 1; x <= 5; x++) {
        console.log(x)
    }
}
//============================================
function function8() {
    y = '';
    for (var x = 2; x <= 20; x++) {
        y += x + ', ';
        x++
    }
    console.log(y);
}
//============================================
function function9() {
    str = '';
    for (var x = 7; x >= 1; x--) {
        str = '';
        for (var y = 1; y <= x; y++) {
            str += '*';
        }
        console.log(str);
    }
}
//============================================
function function10() {
    str = '';
    for (var x = 1; x <= 5; x++) {
        str = '';
        for (var y = 1; y <= x; y++) {
            str += y;
        }
        console.log(str);
    }
}
//============================================
function function11() {
    str = '';
    for (var x = 5; x >= 1; x--) {
        str = '';
        for (var y = 1; y <= x; y++) {
            str += y;
        }
        console.log(str);
    }
}
//============================================
function function12() {
    for (var x = 1; x <= 5; x++) {
        console.log('hello' + x);
    }
}
//============================================
function function13() {
    for (var x = 1; x <= 5; x++) {
        var y = Math.floor(Math.random() * 21)
        console.log(y)
    }
}
//============================================
function function14() {
    for (var x = 7; x <= 50; x = x + 7) {
        console.log(x)
    }
}
//כתבו תכנית ש 10 פעמים תגריל מספר בתחום (0,100]
// ובכל פעם תבדוק אם מה שהוגרל גדול מ 50,
// ורק אם כן, אז תדפיס אותו.
function function15() {
    for (var x = 1; x <= 10; x++) {
        var y = Math.floor(Math.random() * 101)
        if (y > 50) {
            console.log(y)
        } else {
            console.log('y is less then 50=' + y)
        }
    }
}
// 5)כתבו תכנית שתגריל מספרים בתחום (0,20] עד שיוגרל 10.
// (הדפיסו את מה שהוגרל כל פעם).

function function16() {
    for (var x = 1; x !== 10;) {
        var x = Math.floor(Math.random() * 21);
        console.log(x);
    }
}
// 6)כתבו תכנית שתגריל מספרים בתחום (0,100] עד שיוגרל מספר גדול מ 80.
// (הדפיסו את מה שהוגרל כל פעם).

function function17() {
    for (var x = 1; x > 80;) {
        var x = Math.floor(Math.random() * 101);
        console.log(x);
    }
}