
class User {
    private _firstName: string;
    private _lastName: string;
    private _UserEmail: string
    private _imageUrl: string;

    constructor(firstName: string, lastName: string, UserEmail: string, imageUrl: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._UserEmail = UserEmail;
        this._imageUrl = imageUrl;
    }

    get firstName(): string {
        return this._firstName;
    }
    set firstName(value: string) {
        this._firstName = value;
    }
    get lastName(): string {
        return this._lastName;
    }
    set laslastNamet(value: string) {
        this._lastName = value;
    }
    get UserEmail(): string {
        return this._UserEmail;
    }
    set UserEmail(value: string) {
        this._UserEmail = value;
    }
    get imageUrl(): string {
        return this._imageUrl;
    }
    set imageUrl(value: string) {
        this._imageUrl = value;
    }
}

let usr1 = new User("john", "doe", "jj@gmail.com", "https://source.unsplash.com/user/erondu/200x200");
let usr2 = new User("Merry", "doe", "merry@gmail.com", "https://source.unsplash.com/user/erondu/200x200");
let usr3 = new User("Kelly", "johnson", "k@gmail.com", "https://source.unsplash.com/user/erondu/200x200");
let usersArr = [usr1, usr2, usr3]


abstract class Component {
    htmlTemplateStr: string;
    whereToAddElem: string;

    constructor(htmlTemplateStr: string, whereToAddElem: string) {
        this.htmlTemplateStr = htmlTemplateStr;
        this.whereToAddElem = whereToAddElem;
    }
    abstract render(): string;
}

// למה לא עושים extend Component

class Card {
    htmlStrTemplate: string
    constructor(usr: User) {
        this.htmlStrTemplate =
            `<div class="gallery">
        <div>
        <img src="${usr.imageUrl}"></img>
        </div>
        <div>
        <p>Name: ${usr.firstName} ${usr.lastName} \n Email: ${usr.UserEmail}</p>
        </div>
        </div>`;
    }


    render(): string {
        return this.htmlStrTemplate;
    }
}


function drawOnScreen() {
    let htmlStr = '';
    let currCard: Card;
    let i: number
    for (let curr of usersArr) {
        currCard = new Card(curr);
        // console.log(currCard);
        htmlStr += currCard.render();

    }

    let m = document.querySelector("#main");
    if (m) {
        m.innerHTML = htmlStr;
    } else {
        console.error('ID #main not found');

    }

    // return htmlStr

}


//         const url = 'https://randomuser.me/api/?results=50';




window.addEventListener('load', drawOnScreen);

