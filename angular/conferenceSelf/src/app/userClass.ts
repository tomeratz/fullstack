// creating new class for the all User objects will hace the same fileds

export class User {
    firstN: string
    lastN: string
    userImg: string
    email: string

    constructor(firstN: string, lastN: string, userImg: string, email: string) {
        this.firstN = firstN
        this.lastN = lastN
        this.userImg = userImg
        this.email = email
    }
}