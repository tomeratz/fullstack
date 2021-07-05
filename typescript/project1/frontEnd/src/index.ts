// import { stringify } from "querystring";

class Car {
    private howManyDoors: number
    private manufacturer: string
    private modelName: string
    private year: number
    private plate: string;
    private price: number;
    private cType = 'Car';

    constructor(howManyDoors: number, manufacturer: string, modelName: string, year: number, plate: string, price: number, cType?: string) {
        this.howManyDoors = howManyDoors;
        this.manufacturer = manufacturer;
        this.modelName = modelName;
        this.year = year;
        this.plate = plate;
        this.price = price;
        if (cType) {
            if (this.cType !== cType) {
                this.cType = cType;
            }
        }
    }

    printDetails() {
        console.log(
            `vehicle details:
            Type:  ${this.cType}
            Doors amount: ${this.howManyDoors}
            Manufacturer: ${this.manufacturer}
            Model: ${this.modelName}
            Year: ${this.year}
            Plate: ${this.plate}
            Price: ${this.price} ILS`);
    }

    public toString(): string {
        return (
            `vehicle details:
            Type:  ${this.cType}
            Doors amount: ${this.howManyDoors}
            Manufacturer: ${this.manufacturer}
            Model: ${this.modelName}
            Year: ${this.year}
            Plate: ${this.plate}
            Price: ${this.price} ILS`);
    }

}

class Truck extends Car {
    private howManyAxles: number;
    private maxLoadWeight: number;
    private currLoadWeight: number;

    constructor(drs: number, mnf: string, mdl: string, year: number, plt: string, prs: number, howManyAxles: number, maxLoadWeight: number, currLoadWeight: number, cTp: string) {
        super(drs, mnf, mdl, year, plt, prs, cTp);
        this.howManyAxles = howManyAxles
        this.maxLoadWeight = maxLoadWeight

        if (maxLoadWeight - currLoadWeight > 0) {
            this.currLoadWeight = currLoadWeight
        } else {
            throw new Error("Current load weight cnnot be highert then the Max!");
        }
    }

    howMuchCanLoadMore() {
        return this.maxLoadWeight - this.currLoadWeight;
    }

    printDetails() {
        super.printDetails()
        console.log(
            `        
        Auxles: ${this.howManyAxles}
        Max Load Weight: ${this.maxLoadWeight}
        Current Load Weight: ${this.currLoadWeight}
        Weight Remains for loading: ${this.howMuchCanLoadMore()}
        ---------------------------`);

    }

    public toString(): string {
        return (
            `${super.toString()}
            Auxles: ${this.howManyAxles}
            Max Load Weight: ${this.maxLoadWeight}
            Current Load Weight: ${this.currLoadWeight}
            Weight Remains for loading: ${this.howMuchCanLoadMore()}
            --------------------------- `);
    }
}

let c1 = new Car(5, 'Mazda', '5', 2021, '205-30-333', 160000)
// c1.printDetails()
console.log(`${c1}`);


let c2 = new Car(5, 'Subaru', 'Forester', 2014, '25-555-30', 170000)
// c1.printDetails()
console.log(`${c2}`);


let t1 = new Truck(2, 'Volvo', 'r-500', 2021, '205-30-201', 250000, 5, 500, 150, 'Truck')
// t1.printDetails()
console.log(`${t1}`);


let t2 = new Truck(2, 'Volvo', 'r-500', 2021, '205-30-201', 250000, 5, 500, 400, 'Truck')
// t1.printDetails()
console.log(`${t2}`);

