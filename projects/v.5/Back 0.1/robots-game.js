function showRobots() {
    var roboAmount = document.querySelector("#amount").value;
    console.log("roboamount="+roboAmount);
    var allRobot = "";
    var roboArr = []
    for (i = 0; i < roboAmount; i++) {
        var str = "robo" + i
        roboArr.push(`<img width="200" height="300" id="${str}"  class="${str}" src="https://robohash.org/${str}" onclick="roboCeck('${str}')">`)
        roboArr.push(`<img width="200" height="300" id="${str}a"  class="${str}" src="https://robohash.org/${str}" onclick="roboCeck('${str}')">`)
    }
    shuffle(roboArr)
    for (i = 0; i < roboArr.length; i++) {
        allRobot += roboArr[i]
    }
    document.querySelector("#robotImg").innerHTML = allRobot 
}

var picArr = []
function roboCeck(robimg) {
    if (picArr.length === 2) {
        
        // Enable click all imges
        document.getElementById(robimg).onclick=`"roboCeck('${picArr[0]}')";`
        document.getElementById(robimg).onclick=`"roboCeck('${picArr[1]}')";`
        
        picArr = []
        picArr.push(robimg);
        console.log(picArr)
    } else if (picArr.length === 0) {
        picArr.push(robimg);
        
        // Disable another click selected imeg
        document.getElementById(picArr[0]).onclick=null;

        console.log(picArr[0])
    } else if (picArr.length === 1) {
        picArr.push(robimg);
        
        // Disable another click selected imeg
        document.getElementById(picArr[1]).onclick=null;

        console.log(picArr[1]);

        roboCompare()
        console.log(roboCompare())
        console.log(compare)
        var compare = roboCompare()
        if (compare) {
            console.log(compare)
            roboNull(picArr[0])
            // roboLeft--
            // console.log("left: " + roboLeft)
            // if (roboLeft === 0) {
            // }else{
            //     picArr = []
            //     document.getElementById(robimg).onclick=`"roboCeck('${picArr[0]}')";`
            //     document.getElementById(robimg).onclick=`"roboCeck('${picarr[1]}')";`
            }
        }
    }


function roboCompare() {
    return picArr[0] === picArr[1];
}

function roboNull(a) {
    console.log(a);
    document.getElementById(a).style.visibility = "hidden";
    document.getElementById(a + "a").style.visibility = "hidden";
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function gameOver() {
    console.log("Game Over")
}

// document.body.onload = showRobots()
