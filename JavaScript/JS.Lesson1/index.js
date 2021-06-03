var x=50;

function f1()
{
    console.log("submit f1")
    var x=50;
    console.log(x+30);    
}

function f2()
{
    var x = 104%7

    console.log("104%7=" + x)
}

function f3()
{
    var x=Math.random()
    var y=Math.random()
    var z=Math.random()

    console.log (x + y + z)

}
function f4() {
    var x = Math.floor(Math.random() * 10000);
    console.log(x); // lets assume we got 3562
    // separate units digit
    console.log(x % 10); // 2
    // separate tens digit
    console.log((Math.floor(x / 10)) % 10); // 6
    // separate hundrads digit
    console.log((Math.floor(x / 100)) % 10); // 5

    var mySt = x.toString();
    console.log(mySt.charAt(mySt.length - 2));
    console.log("typeof mySt is: " + typeof (mySt));


    var y = parseInt(mySt);
    console.log(y);

    console.log("typeof y is: " + typeof (y));
}
