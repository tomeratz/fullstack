// how to disable enable imeg click
// how to cover imeg with imege
// setAttribute('src','cardback.gif')




console.log('======New Game======');

document.querySelector('#amount').addEventListener("keypress", f5)
function f5(event) {
    console.log('hello')
    if (event.keyCode === 13) {
        showRobots()
        console.log('Started with Enter Press')
    }
}


var amountLeft = 0
function showRobots() {
    

    var imgRequest = document.querySelector("#imgRequest").value;
    var roboAmount = document.querySelector("#amount").value;

    if (roboAmount===0 || roboAmount===""){
        roboAmount=6
    }

    amountLeft = roboAmount
    console.log("roboamount=" + roboAmount);
    var allRobot = "";
    var roboArr = []
    for (i = 0; i < roboAmount; i++) {
        var str = "robo" + i
        roboArr.push(`<img id="${str}a" class="${str}" unsrc="https://robohash.org/${str}${imgRequest}" onclick="roboCheck(event)">`)
        roboArr.push(`<img id="${str}b" class="${str}" unsrc="https://robohash.org/${str}${imgRequest}" onclick="roboCheck(event)">`)

    }
    shuffle(roboArr)
    for (i = 0; i < roboArr.length; i++) {
        allRobot += roboArr[i]
    }

    document.querySelector("#robotImg").innerHTML = allRobot

}

var idArr = []
var classArr = []
function roboCheck(event) {
    event.target.setAttribute('src',event.target.getAttribute('unsrc'))
    
    var roboId = event.target.getAttribute('id');
    var roboClass = event.target.getAttribute('class');
    console.log('\n' + "log ID: " + roboId);
    console.log("log Class: " + roboClass);

    if (idArr.length === 2) {

        // Enable click all imges

        idArr = [];
        classArr = [];
        pushArr(roboId, roboClass)

    } else if (idArr.length === 0) {
        pushArr(roboId, roboClass)

        // Disable another click selected imeg
        document.getElementById(roboId).removeAttribute('onclick')

    } else if (idArr.length === 1) {
        pushArr(roboId, roboClass)

        // Disable another click selected imeg
        document.getElementById(roboId).removeAttribute('onclick')

        roboCompare()
        // console.log(compare)
        var compare = roboCompare()
        console.log(compare + '\n\n');

        if (compare) {
            roboNull()
            idArr = []
            classArr = []
            amountLeft--
            console.log("left: " + amountLeft)
        } else {
            var theCurrentClickedRobotID = idArr[1]
            var thePreviousClickedRobotID = idArr[0]
            
            function temp()
            {
                debugger


                var src = document.querySelector(`#${thePreviousClickedRobotID}`).getAttribute('src');         
                document.querySelector(`#${thePreviousClickedRobotID}`).setAttribute('unsrc', src);
                document.querySelector(`#${thePreviousClickedRobotID}`).removeAttribute('src');  

                src = document.querySelector(`#${theCurrentClickedRobotID}`).getAttribute('src');
                document.querySelector(`#${theCurrentClickedRobotID}`).setAttribute('unsrc', src);
                document.querySelector(`#${theCurrentClickedRobotID}`).removeAttribute('src');
            }

            setTimeout(temp,100)

            // event.target.setAttribute('unsrc',event.document.getAttribute('src'))
            // event.target.removeAttribute('src')

            document.getElementById(idArr[0]).setAttribute('onclick', "roboCheck(event)")
            document.getElementById(idArr[1]).setAttribute('onclick', "roboCheck(event)")

            idArr = []
            classArr = []
        }

        if (amountLeft === 0) {
            gameOver()
        }
    }
}

function pushArr(i, c) {
    console.log("log push id: " + i);
    console.log("log push class: " + c);
    idArr.push(i);
    classArr.push(c);
    console.log("idArr push log:" + idArr);
    console.log("classArr push log:" + idArr);
}


function roboCompare() {
    console.log("classArr: " + classArr)
    return classArr[0] === classArr[1];
}

function roboNull() {
    document.getElementsByClassName(classArr[0])[0].style.visibility = "hidden"
    document.getElementsByClassName(classArr[0])[1].style.visibility = 'hidden';
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
    console.log('======Game Over======');
    document.getElementById('robots').style.backgroundImage = 'false'
}

// document.body.onload = showRobots()
