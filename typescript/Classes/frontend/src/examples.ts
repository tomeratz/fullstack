class User1 {
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _imageUrl: string;

    constructor(fName: string, lName: string, email: string, imageUrl: string) {
        this._firstName = fName;
        this._lastName = lName;
        this._email = email;
        this._imageUrl = imageUrl;
    }
    //------------ Getters Setters -----------
    get firstName(): string {
        return this._firstName;
    }
    set firstName(value: string) {
        this._firstName = value;
    }
    get lastName(): string {
        return this._lastName;
    }
    set lastName(value: string) {
        this._lastName = value;
    }
    get email(): string {
        return this._email;
    }
    set email(value: string) {
        this._email = value;
    }
    get imageUrl(): string {
        return this._imageUrl;
    }
    set imageUrl(value: string) {
        this._imageUrl = value;
    }
    //---------------------------------------
}

let u1 = new User1("john", "doe", "jj@gmail.com", "https://www.images.com/34");
let u2 = new User1("Merry", "doe", "merry@gmail.com", "https://www.images.com/36");
let u3 = new User1("Kelly", "johnson", "k@gmail.com", "https://www.images.com/100");

//console.log(u1.firstName);
//u1.firstName = "Merry"
//console.log(u1.firstName);


// abstract class Component1 {
//     htmlTemplateStr: string;
//     whereToAddElem: string;

//     constructor(htmlTmpltStr: string, whereToAddElm: string) {
//         this.htmlTemplateStr = htmlTmpltStr;
//         this.whereToAddElem = whereToAddElm;
//     }

//     // inheriting classes should return an HTML string
//     //    which builds the component
//     abstract render(): string;
// }

let ourUsersArr = [u1, u2, u3];
class MyCard {
    htmlTemplateStr: string;

    constructor(usr: User1) {
        this.htmlTemplateStr = `<div class="myCard"><H2> ${usr.firstName} ${usr.lastName}</H2> <ul> <li>${usr.email}</li> <li><a href="${usr.imageUrl}"> picture </a></li> </ul></div>`
    }

    render(): string {
        return this.htmlTemplateStr;
    }
}

function drawOurScereen() {
    let myHtmlStr = ""
    let mc: MyCard;
    for (let curr of ourUsersArr) {
        mc = new MyCard(curr);
        myHtmlStr += mc.render();
    }

    let m = document.querySelector("#mainContent");
    if (m) {
        m.innerHTML = myHtmlStr;
    }
    else {
        console.error("unexpected missing #mainContent");

        let myNewElement = document.createElement('div');
        myNewElement.setAttribute('id', 'mainContent8');
        myNewElement.innerHTML = myHtmlStr;
        //document.body.appendChild(myNewElement);
        //document.body.insertAdjacentHTML('afterbegin', '<div id="two">two</div>');
        //document.body.insertBefore(myNewElement, document.body.children[0]);
        document.body.prepend(myNewElement);

    }


    // ((document.querySelector("#mainContent")) as HTMLElement).innerHTML = myHtmlStr;

}

window.addEventListener('load', drawOurScereen);