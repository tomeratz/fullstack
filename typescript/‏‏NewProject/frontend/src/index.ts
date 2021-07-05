type User = {
    fName: string;
    birth: number
}

type UserLast = {
    lName: string;
}

const validate = (u: User) => {
    return typeof u;
}

function printName(u: User) {
    const u1: User = u
    console.log(u1);
    console.log(typeof u1);

    const isValid = validate(u)

    console.log(isValid);
}

printName({ fName: "fdfdf", birth: 55 });
