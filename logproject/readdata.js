let obj = require('readline-sync');
let date_ob = new Date();
let fs = require('fs');
let firstname = obj.question("Please enter yur firstname: ");
console.log("Your First Name is: " +firstname);
debugger;
let lastname = obj.question("Please enter yur lastname: ");
console.log("Your Last Name is: " +lastname);
debugger;
let gender = obj.question("Please enter yur gender: ");
console.log("Your Gender is: " +gender);
let email = obj.question("Please enter yur email: ");
console.log("Your Email is: " +email);
let date = date_ob.toISOString().split('T')[0];
let time = date_ob.toLocaleTimeString();
debugger;

let person = {"fname":firstname, "lname":lastname,"gender":gender,"email": email, "date": date, "time":time};


let jsonData = JSON.stringify(person);

fs.appendFile("person.json", jsonData , function (err) {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
 });

// let persons = new Array();

//  fs.readFile('person.json', function (err, data) {
//     persons = JSON.parse(data);
//     console.log("Persons:" , JSON.stringify(persons));
//     persons.push(person);
//     // let personsjson = JSON.stringify(persons); 
//     fs.writeFile("person.json", JSON.stringify(persons));
// })



