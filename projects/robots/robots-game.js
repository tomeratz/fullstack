// how to disable enable imeg click
// how to cover imeg with imege
// setAttribute('src','cardback.gif')

console.log('======New Game======');
var roboAmount = 0;
var imgRequest = 0;
var amountLeft = 0;
var gameOverImgNode = ""
var gameOverDiv = document.querySelector(`#gameOver`)

// set enter key to start
document.querySelector('#amount').addEventListener("keypress", f5);
function f5(event) {
    if (event.keyCode === 13) {
        showRobots();
        console.log('Started with Enter Press');
    }
}

function showRobots() {
    
    console.log(gameOverImgNode);
    if (gameOverDiv.hasChildNodes() === true) {
        console.log(gameOverDiv);
        console.log(typeof(gameOverImgNode));
        gameOverDiv.removeChild(gameOverImgNode)
    }

    imgRequest = document.querySelector("#imgRequest").value;
    roboAmount = document.querySelector("#amount").value;

    if (roboAmount === 0 || roboAmount === "") {
        roboAmount = 6;
    }

    amountLeft = roboAmount;
    console.log("roboamount=" + roboAmount);
    var allRobot = "";
    var roboArr = [];
    for (i = 0; i < roboAmount; i++) {
        var str = "robo" + i;
        roboArr.push(`<img id="${str}a" class="${str}" src="./imges/trans.png" onclick="roboCheck(event)">`);
        roboArr.push(`<img id="${str}b" class="${str}" src="./imges/trans.png" onclick="roboCheck(event)">`);

    }
    shuffle(roboArr)
    for (i = 0; i < roboArr.length; i++) {
        allRobot += roboArr[i];
    }

    document.querySelector("#robotImg").innerHTML = allRobot;

}

var idArr = [];
var classArr = [];
function roboCheck(event) {

    var roboId = event.target.getAttribute('id');
    var roboClass = event.target.getAttribute('class');
    event.target.setAttribute('src', "https://robohash.org/" + roboClass + imgRequest);

    console.log('\n' + "log ID: " + roboId);
    console.log("log Class: " + roboClass);

    if (idArr.length === 2) {

        // Enable click all imges

        idArr = [];
        classArr = [];
        pushArr(roboId, roboClass);

    } else if (idArr.length === 0) {
        pushArr(roboId, roboClass);

        // Disable another click selected imeg
        document.getElementById(roboId).removeAttribute('onclick');

    } else if (idArr.length === 1) {
        pushArr(roboId, roboClass);
        // Disable another click selected imeg
        document.getElementById(roboId).removeAttribute('onclick');
        roboCompare();
        var compare = roboCompare();
        console.log(compare + '\n\n');

        if (compare) {
            roboNull();
            idArr = [];
            classArr = [];
            amountLeft--;
            console.log("left: " + amountLeft);

        } else {
            var theCurrentClickedRobotID = idArr[1];
            var thePreviousClickedRobotID = idArr[0];

            function temp() {
                document.getElementById(`${theCurrentClickedRobotID}`).setAttribute('src', './imges/trans.png');
                console.log("arrId[1]: Was cleard");
                document.getElementById(`${thePreviousClickedRobotID}`).setAttribute('src', './imges/trans.png');
                console.log("arrId[0]: Was cleard");

            }

            setTimeout(temp, 750)

            document.getElementById(idArr[0]).setAttribute('onclick', "roboCheck(event)");
            document.getElementById(idArr[1]).setAttribute('onclick', "roboCheck(event)");

            idArr = []
            classArr = []
        }

        if (amountLeft === 0) {
            gameOver();
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
    console.log("classArr: " + classArr);
    return classArr[0] === classArr[1];
}

function roboNull() {
    function hideRobot() {
        document.getElementsByClassName(classArr[0])[0].style.visibility = "hidden";
        document.getElementsByClassName(classArr[0])[1].style.visibility = "hidden";
    }
    setTimeout(hideRobot(), 750)
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
    var gameOverImgId = '#gameover'
    gameOverImg = `<img id="gameOverImg" src='./imges/GameOver.gif'>`;
    console.log(gameOverImg);
    console.log('======Game Over======');
    document.querySelector("#gameOver").innerHTML = gameOverImg

    gameOverImgNode = document.querySelector(`#gameOverImg`); 
    console.log(typeof(gameOverImgNode));
    // gameOverImgId.remove();
    // document.getElementById('robots'.style.backgroundImage="https://pub-static.haozhaopian.net/assets/stickers/jieba05/3165d8a6-e750-4459-bd51-2bd786a6517f_medium_thumb.jpg")
}

function hints() {
    for (i = 0; i < roboAmount; i++) {
        console.log("hint" + i);
        document.getElementById(`robo${i}a`).setAttribute('src', "https://robohash.org/robo" + i + imgRequest);
        document.getElementById(`robo${i}b`).setAttribute('src', "https://robohash.org/robo" + i + imgRequest);
    }

    function temp2() {
        for (i = 0; i <= roboAmount; i++) {
            document.getElementById(`robo${i}a`).setAttribute('src', './imges/trans.png');
            document.getElementById(`robo${i}b`).setAttribute('src', './imges/trans.png');
        }
    }
    setTimeout(temp2, 1200)
}



