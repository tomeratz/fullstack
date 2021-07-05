// let st: string = "hello";


// let f = (a: number, b: number) => {
//     return a + b
// }

// console.log(f(9, 9));

// let x = 7;
// console.log(x);



// //===============================
// class Point {
//     x: number;
//     y: number;

//     constructor() {
//         this.x = 0;
//         this.y = 0;
//     }
// }

// const pt1 = new Point();
// pt1.x = -2;

// const pt2 = new Point();

// const pt3 = new Point();
// pt2.x = 10;
// pt2.y = 17;

// let pt4;


class Point1 {
    x = 10;
    y = 10;

    constructor() { }

    scale(n: number) {
        if (n > 0) {
            this.x *= n;
            this.y *= n;
        }
        else {
            throw new Error("oh no");
        }
        return 2 * n;
    }
}

let p = new Point1()
p.x = 70;
try {
    p.scale(3);
}
catch {
    console.log("oops I did something wrong");
}

console.log("-----" + p.x + " " + p.y);


//============================================================

class Person {
    private fname: string;
    private lname: string;

    constructor(fn: string, ln?: string) {
        this.fname = fn;
        if (ln) {
            this.lname = ln;
        }
        else {
            this.lname = "UNKNOWN";
        }

    }
    printFullName() {
        console.log(this.fname + " " + this.lname);
    }
}

class Employee extends Person {
    private role: string;
    private _empNo: string;

    constructor(fnm: string, lnmmmm: string, rl: string, empNo?: string) {
        super(fnm);
        this.role = rl;
        if (empNo) {
            if (this.isOKEmpNum(empNo)) {
                this._empNo = empNo;
            }
            else {
                throw new Error("Employee number must start with two Capital letters and have length of 5 characters");
            }
        }
        else {
            this._empNo = "NA";
        }
    }

    isOKEmpNum(s: string): boolean {
        let firstCharAscii = s.charCodeAt(0);
        let secondCharAscii = s.charCodeAt(1);
        let b = (firstCharAscii >= 65 &&
            firstCharAscii <= 90 &&
            secondCharAscii >= 65 &&
            secondCharAscii <= 90);
        return (s.length === 5 && b)
    }

    set empNun(en: string) {
        if (this.isOKEmpNum(en)) {
            this._empNo = en;
        }
        else {
            throw new Error("Employee number must start with two Capital letters and have length of 5 characters");
        }
    }

    get empNun() {
        return this._empNo;
    }
}

let e1: Employee;
e1 = new Employee("john", "doe", "manager", "SA622");
let e2 = new Employee("shira", "kaplan", "sales director");
/////e1.empNo = "778893";
console.log(e1.empNun);
e1.empNun = "AC596";
console.log(e1.empNun);
e1.printFullName();
e2.printFullName();
//============================================================


class Furniture {
    price: number;
    size: { w: number, h: number, l: number }

    constructor() {
        this.price = 0;
        this.size = { w: 0, h: 0, l: 0 };
    }

    printTheDetails() {
        console.log(`the furniture details: price=${this.price}, length=${this.size.l}
        ,width=${this.size.w}, height=${this.size.h}`);
    }

}

class Closet extends Furniture {
    numOfDoors: number;

    constructor() {
        super();
        this.numOfDoors = 0;
    }

    printTheDetails() {
        super.printTheDetails();
        console.log(`Number of doors: ${this.numOfDoors}`);
    }


}

class Table extends Furniture {
    shape: string;

    constructor() {
        super();
        this.shape = "square";
    }
}


let clst1 = new Closet();
clst1.printTheDetails();


//=========================================
// 1) Create class named Car
// 2) add the following properties to the class:
//    howManyDoors (its a number)
//    manufacturer (its a string)
//    modelName (its a string)
//    year (its a number)
//    plate (its a string)
//    price (its a number)
// 3) add a constructor to the class,
//     which accepts values for all of its properties 
// 4) add method name "printDetails"
//      the code in the method should print all the 
//       values of all the properties in one line
//         separated by ,
// 5) create 2 objects of type Car,
//      name them c1 , c2
// 6) call the printDetails method on c1, and c2

// 1) Create class named Truck (inherits Car)
// 2) add properties:
//       howManyAxles (its a number)
//       maxLoadWeight (its a number)
//       currLoadWeight (its a number)
// 3) add constructor to the class,
//      which accepts values for all properties
//       (those that were inherited from Car and also the new ones)
// 4) add method named howMuchCanLoadMore
//      which returns how much more can be loaded on the truck
// 5) create 2 objects of type Truck,
//      name them tr1 , tr2
// 6) call the printDetails method on tr1, and tr2
// 7) call the howMuchCanLoadMore method on tr1, and tr2
// 8) create a BETTER printDetails in class Truck
//      (which also prints the new properties)
// 9) call the printDetails method on tr1, and tr2

//=======================================