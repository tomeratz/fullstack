// abstract class SecretCode {
//     protected encodedString: string = '';
//     protected decodedString: string = '';

//     abstract encode(str: string): void;
//     abstract decode(str: string): void;

//     get getEncodedString(): string {
//         return this.encodedString
//     }
//     get getDecodedString(): string {
//         return this.decodedString
//     }
// }

// class MorseCode extends SecretCode {
//     static toMors: { [key: string]: string } = {
//         "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", "G": "--.", "H": "....",
//         "I": "..", "J": ".---", "K": "-.-", "L": ".-..",
//         "M": "--", "N": "-.", "O": "---", "P": ".--.",
//         "Q": "--.-", "R": ".-.", "S": "...", "T": "-",
//         "U": "..-", "V": "...-", "W": ".--", "X": "-..-", "Y": "-.--", "Z": "--..", " ": "  "
//     };

//     static fromMors: { [key: string]: string } = {
//         ".-": "A", "-...": "B", "-.-.": "C", "-..": "D",
//         ".": "E", "..-.": "F", "--.": "G", "....": "H",
//         "..": "I", ".---": "J", "-.-": "K", ".-..": "L",
//         "--": "M", "-.": "N", "---": "O", ".--.": "P",
//         "--.-": "Q", ".-.": "R", "...": "S", "-": "T",
//         "..-": "U", "...-": "V", ".--": "W", "-..-": "X", "-.--": "Y", "--..": "Z", " ": "", "": " "
//     };

//     encode(s: string) {
//         let S = s.toUpperCase()
//         let strArr = S.split('')
//         console.log(strArr);

//         let i: number
//         let newStr: string = ''

//         for (i = 0; i < strArr.length; i++) {
//             let abc: string = (strArr[i]);
//             let morsLetter = MorseCode.toMors[abc]
//             if (morsLetter === " ") {
//                 morsLetter = ""
//             }

//             newStr = newStr.concat(morsLetter + ' ')
//         }
//         this.encodedString = newStr
//         this.decodedString = s
//     }

//     decode(s: string) {
//         let strArr = s.split(' ')
//         // console.log(strArr);

//         let i: number
//         let newStr: string = ''

//         for (i = 0; i < strArr.length; i++) {
//             let abc: string = strArr[i];
//             let morsLetter = MorseCode.fromMors[abc]
//             if (morsLetter === "  ") {

//                 morsLetter = " "
//             }
//             newStr = newStr.concat(morsLetter)
//         }
//         this.decodedString = newStr
//         this.encodedString = s

//     }
// }

// class ReverseCode extends SecretCode {
//     private endToStart(s: string) {
//         let str: string = s
//         let i: number
//         let newStr: string = ''

//         for (i = str.length; i >= 0; i--) {
//             newStr += str.charAt(i)
//         }
//         return newStr
//     }

//     encode(s: string) {
//         this.encodedString = this.endToStart(s)
//         this.decodedString = s
//     }
//     decode(s: string) {
//         this.decodedString = this.endToStart(s)
//         this.encodedString = s
//     }
// }

// class RotCode extends SecretCode {
//     mapCharToRot13Representation(c: string) {
//         let position;
//         //'a' = 97     'z'=122
//         if ((97 <= c.charCodeAt(0)) && (c.charCodeAt(0) <= 122)) {
//             position = c.charCodeAt(0) - 97;
//             //the mapping is circular over the Alpha-Bet 26 letters
//             position = (position + 13) % 26;
//             c = String.fromCharCode(position + 97);
//         }
//         // 'A' = 65 'Z'=90
//         else if ((65 <= c.charCodeAt(0)) && (c.charCodeAt(0) <= 90)) {
//             position = c.charCodeAt(0) - 65;
//             position = (position + 13) % 26;
//             c = String.fromCharCode(position + 65);
//         }
//         return c;
//     }

//     encode(s: string) {
//         let i;
//         for (i = 0; i < s.length; i++) {
//             this.encodedString = this.encodedString + this.mapCharToRot13Representation(s.charAt(i));
//         }
//         this.decodedString = s;
//     }

//     decode(s: string) {
//         let i;
//         for (i = 0; i < s.length; i++) {
//             this.decodedString = this.decodedString + this.mapCharToRot13Representation(s.charAt(i));
//         }
//         this.encodedString = s;
//     }
// }
// let key: object

// function testSecretCodes() {

//     // creating an array (named "secretCodeArr") of 3 SecretCode objects, 
//     //   and creating 3 objects and inserting them into the array 
//     let secretCodeArr: SecretCode[] = [new MorseCode(), new RotCode(), new ReverseCode()];


//     for (let curr of secretCodeArr) {
//         // calling the method "encode" on the object
//         curr.encode("Hello World");
//     }

//     for (let curr of secretCodeArr) {
//         console.log("encoded " + curr.getEncodedString);
//     }

//     for (let curr of secretCodeArr) {
//         let tempSt = curr.getEncodedString;
//         curr.decode(tempSt);
//         console.log("decoded " + curr.getDecodedString);
//     }

//     for (let curr of secretCodeArr) {
//         let tempSt = curr.getDecodedString;
//         curr.encode(tempSt);
//         console.log("encoded " + curr.getEncodedString);
//     }


//     for (let curr of secretCodeArr) {
//         let tempSt = curr.getEncodedString;
//         curr.decode(tempSt);
//         console.log("decoded " + curr.getDecodedString);
//     }

// }

// testSecretCodes();