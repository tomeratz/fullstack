function f1()
{
    console.log("\n\n function1() ----------------------");
    function1();

}
//============================================
function function1()
{
 var johnsCar = {
        manufacturer: "Mazda",
        model: "3",
        year : 2019, 
        plate: 'abc1234ds'
    };

    console.log(johnsCar);
    console.log(johnsCar.manufacturer);
    console.log(johnsCar.model);
}

//============================================
// Object.keys(obj)   --> array of keys.
// Object.values(obj) --> array of values.
// Object.entries(obj) --> array of [key, value] pairs
function function2()
{
 var johnsCar = {
        manufacturer: "Mazda",
        model: "3",
        year : 2019, 
    };

    console.log(Object.keys(johnsCar));
 // ["manufacturer", "model", "year"]
    console.log("---");

    console.log(Object.values(johnsCar));
 // ["Mazda", "3", 2019]
    console.log("---");

    console.log(Object.entries(johnsCar));
 // [["manufacturer","Mazda"], ["model","3"], ["year",2019]
    console.log("---");

 // "Special for" named "for-of"
 //   lets us iterate over all values or all keys
 for (let value of Object.values(johnsCar)) {
        console.log(value); 
    }
    console.log("---");

 for (let key of Object.keys(johnsCar)) {
        console.log(key); 
    }
    console.log("---");

 for (let [key,val] of Object.entries(johnsCar)) {
        console.log(key + "," + val); 
    }
    console.log("---");

 // print all values (by key name)
 for (let key of Object.keys(johnsCar)) {
        console.log(key + "," + johnsCar[key]); 
    }

    console.log("---");
 // how many fields the object has in total 
    console.log("total fields = " + Object.keys(johnsCar).length); 
}
//============================================
function function3()
{
 var x = "manufacturer";
 var y = "model";
 var z = "year";

 var johnsCar = {
        [x]: "Mazda",
        [y + 'Name']: "3"
    };
    johnsCar[z] = 2019;
    johnsCar.plate = 'abc1234ds';
    console.log(johnsCar);    
}
//============================================
function function4()
{
 var users = [
        {
        name: "John",
        birthYear: 1997, 
        driverLicense: true,  
        plate: 'abc1234ds'
      },
      {
        name: "Marry",
        birthYear: 2001, 
        driverLicense: true,  
        plate: 'ufdjky8re'
      },
      {
        name: "Jack",
        birthYear: 1995, 
        driverLicense: true,  
        plate: '442hlv4sg'
      }
    ];
    console.log(users);
}
//============================================
// multiword property must have quotes
//   and we cant access the value with "dot" 
//      user."Birth Year" <--   wont work!
//      user["Birth Year"]   <-- use this insted
function function5()
{
 var user = {
        fname: "John",
        lname: "Doe",
 "Birth Year": 1997, // <-- multiword property
 "Has Driver License": true,  // <-- multiword property
        plate: 'abc1234ds'
      };
    console.log(user.fname);
    console.log(user.lname);
 // because its a multiword property can't use "dot"
    console.log(user["Birth Year"]); 
    console.log(user["Has Driver License"]); 
    console.log(user.plate);
    console.log("---");
    console.log(user["fname"]); // same as user.fname
    console.log(user["lname"]); // same as user.lname
    console.log("---");
    console.log("Changing name and Birth Year");
    user.fname = "Merry";
    user["Birth Year"] = 2002;
    console.log(user);
    console.log("---");
}
//============================================
function function6()
{
 var johnsCar = {
        manufacturer: "Mazda",
        model: "3",
        year : 2019, 
        plate: 'abc1234ds'
    };

 var str  = JSON.stringify(johnsCar);
 var objFromStr = JSON.parse(str);

 var mayasCar = objFromStr;
    console.log("Mayas Car");    
    console.log(mayasCar);    
}
//============================================
function function7()
{
 // The key will always be converted to a string
 var ourSales = {
 2019: "5 units",
 2020: "20 units"
    };

 // Same as:
 //  (it is converted automatically "behind the scenes")
 var ourSales2 = {
 "2019": "5 units",
 "2020": "20 units"
    };
 //-----------------------------
 var myObj = {
 1: 'hello',
 2: 10,
 3: false,
 4: "world",
        one: 205,
        two: 600,
        a: 700,
 "b": 15,
        c: true
      };
      console.log(Object.keys(myObj));
 // expected output: 
 //  ["1", "2", "3", "4", "one", "two", "a", "b", "c"]

}
//============================================