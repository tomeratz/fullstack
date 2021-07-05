
// class point {
//     x: number;
//     y: number;

//     constructor() {
//         this.x = 0;
//         this.y = 0;
//     }
// }

// const pt = new point();
// pt.x = 3;
// pt.y = 4;


// function f1() {
//     console.log(pt);
//     console.log(`${pt.x}, ${pt.y}` + " " + pt.x + " " + pt.y)
// }

// class Person {
//     private fname: string;
//     private lname: string;

//     constructor(fname: string, lname: string) {
//         this.fname = fname;
//         if (lname) {
//             this.lname = lname;
//         }
//         else {
//             this.lname = "Not Sent";
//         }
//     }
//     printFullName() {
//         console.log(this.fname + " " + this.lname);
//     }
// }

// class Employee extends Person {
//     private role: string;
//     private empNo: string;

//     constructor(fname: string, lname: string, role: string, empNo?: string) {
//         super(fname, lname);
//         this.role = role;
//         if (empNo) {
//             if (this.isOKEmpNum(empNo)) {
//                 this.empNo = empNo
//             }
//             else {
//                 throw new Error("Employee number must start with two Capital letters and have length of 5 characters");
//             }
//         }
//         else {
//             this.empNo = "Not Sent"
//         }

//     }
//     isOKEmpNum(s: string): boolean {
//         let firstCharAscii = s.charCodeAt(0);
//         let secondCharAscii = s.charCodeAt(1);
//         let b = (firstCharAscii >= 65 &&
//             firstCharAscii <= 90 &&
//             secondCharAscii >= 65 &&
//             secondCharAscii <= 90);
//         return (s.length === 5 && b)
//     }
//     set empNun(en: string) {
//         if (this.isOKEmpNum(en)) {
//             this.empNo = en;
//         }
//         else {
//             throw new Error("Employee number must start with two Capital letters and have length of 5 characters");
//         }
//     }

//     get empNun() {
//         return this.empNo;
//     }

//     printFullName() {
//         super.printFullName();
//         console.log(" Is our " + this.role + " With the employee number of: " + this.empNo);

//     }

// }



// let e1: Employee;
// e1 = new Employee("Debra", "Dobra", "Queen", "AC123");
// let e2 = new Employee("Jhon", "Jon", "King");
// e1.empNun = "6576456";
// console.log(e1.empNun);
// e1.printFullName();
// e2.printFullName();

class Car {
    private howManyDoors: number;
    private manufacturer: string;
    private modelName: string;
    private year: number;
    private plate: string;
    private price: number;

    constructor(dnumb: number, cmanu: string, carmod: string, caryear: number, plateid: string, costs: number) {
        this.howManyDoors = dnumb;
        this.manufacturer = cmanu;
        this.modelName = carmod;
        this.year = caryear;
        this.plate = plateid;
        this.price = costs;
    }
    // printDetails(){console.log(`Car Details: howManyDoors = ${this.howManyDoors}, Manufacturer = ${this.manufacturer}, Model = ${this.modelName}, year = ${this.year}, plate = ${this.plate} , price = ${this.price}.`)}

    public toString(): string {
        return (`howManyDoors = ${this.howManyDoors}
        Manufacturer = ${this.manufacturer}
         Model = ${this.modelName}
         year = ${this.year}
         plate = ${this.plate}  
         price = ${this.price}`)

    }




}
let c1 = new Car(4, "Hyundai", "i10", 2021, "asdasd123", 20000);
//c1.printDetails();
let c2 = new Car(4, "Mazda", "2", 2021, "bababdbd1313", 25000);
// c2.printDetails();
console.log(`------ ${c2}`);

//=======================================================================
class Truck extends Car {
    private howManyAxles: number;
    private maxLoadWeight: number;
    private currLoadWeight: number;
    constructor(dnumb: number, cmanu: string, carmod: string, caryear: number, plateid: string, costs: number, axelNum: number, maxLoad: number, currLoad: number) {
        super(dnumb, cmanu, carmod, caryear, plateid, costs);
        this.howManyAxles = axelNum
        this.maxLoadWeight = maxLoad
        this.currLoadWeight = currLoad
    }

    // howMuchCanLoadMore()
    // {
    //     let result = this.maxLoadWeight-this.currLoadWeight
    //     return result
    // }

    howMuchCanLoadMore(): number | string {
        let result = this.maxLoadWeight - this.currLoadWeight
        return (result > 0 ? result : ((result === 0) ? " cant load any more weight to truck" : " already over the weight limit"))
    }
    // printDetails(){
    //     super.printDetails()
    //     console.log(`Truck details : how Many Axles = ${this.howManyAxles}, maximum load weight = ${this.maxLoadWeight},current load weight = ${this.currLoadWeight} remaining weight to load: ${this.howMuchCanLoadMore()}`)
    // }

    public toString(): string {
        return (`${super.toString()}  how Many Axles = ${this.howManyAxles}
        maximum load weight = ${this.maxLoadWeight}
        current load weight = ${this.currLoadWeight} remaining weight to load: ${this.howMuchCanLoadMore()}`)
    }


}

let tr1 = new Truck(2, "Dodge", "Ramm", 2008, "faddd313", 100000, 3, 2.5, 1)
tr1.howMuchCanLoadMore();
// tr1.printDetails();
console.log(`++++ ${tr1}`);
let tr2 = new Truck(2, "Dodge", "Ramm", 2012, "faddaw23", 100000, 3, 1.5, 1.5)
// tr2.printDetails()
console.log(`++++ ${tr2}`);
let tr3 = new Truck(2, "Dodge", "Ramm", 2012, "faddaw23", 100000, 3, 1.5, 2)
console.log(`++++ ${tr3}`);



