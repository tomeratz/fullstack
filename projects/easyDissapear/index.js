var p1 = document.querySelector("#parag1");
var p2 = document.querySelector("#parag2");
var showDisappearDiv = document.querySelector("#showDisappear");
var oldChild = ""
var keeper = ""

function showParInDiv(element){
    console.log(oldChild);
    console.log(showDisappearDiv);
    if(showDisappearDiv.hasChildNodes()===true){
        showDisappearDiv.removeChild(oldChild)
    }
    
    var parId = element.target.id;
    // console.log(parId);
    var clickedPar = document.querySelector(`#${parId}`);
    //שכפול פסקה
    var newPar=clickedPar.cloneNode(true);
    // הכנסה כבן לתוך ה DIV
    showDisappearDiv.appendChild(newPar);
    oldChild=newPar
    console.log(typeof(oldChild));
    }
    
    // closeTheDiv(){
    //     // showDisappearDiv.parentElement(showDisappearDiv)
    // }




// document.addEventListener('DOMContentLoaded');