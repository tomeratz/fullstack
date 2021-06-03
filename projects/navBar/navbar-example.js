window.addEventListener('scroll',f1)
document.getElementById("navBar").addEventListener("mouseover", f2);

function f1(){
if(scrollY>20){
    document.querySelector('#navBar').style.top="-40px";
}else{
    document.querySelector('#navBar').style.top="0";
}
}
function f2(){
        document.getElementById('navBar').style.top="0";

}