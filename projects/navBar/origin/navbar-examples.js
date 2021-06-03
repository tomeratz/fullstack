// When the user scrolls down 20px from the top of the document, slide down the navbar
window.addEventListener('scroll', f1);

function f1() {
    //document.body.scrollTop > 10 ||

    if (window.scrollY > 20) {
        document.querySelector("#navbar").style.top = "0";
    } else {
        document.querySelector("#navbar").style.top = `-50px`;
    }
}