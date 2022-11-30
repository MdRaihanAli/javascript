// 1. javascript placement
//     a.inline
//     b.internal
//     c.external

// 2.javascript output 3 system
// alert(">Assalamu Alaycum")
document.write("<h1 style='color:red'>My Name Is Md Raihan Ali<h1/>");
console.log("I live In Oman");

// 3. variable
var name = "Raihan"
var number = 79547210;
var vill = "Nawababganj";
var live = "Oman. ";

// 4. concatination
var about = "My name is "+name+ ". I live in "+live;
var about1 = about.concat(number+" my phone number");
document.write(about1)

// Data Type
var nameDataType = typeof(name)
console.log(nameDataType);

var numberDataType = typeof(number)
console.log(numberDataType);

// number to String
var numberDataType = number.toString()
console.log(typeof(numberDataType));










// Tasks 2 
// document.write("<h2> Task 2 </h2>")

// var firstName = prompt(" Enter Your First Name : ");
// var lastName =  prompt(" Enter Your Last Name : ");
// var fullName = firstName +" "+ lastName;

// document.write(`<h4>name is ${fullName}</h4>`)
// document.write(`Full name character length is ${fullName.length}<br>`)
// document.write(`Convert full name uppercase ${fullName.toUpperCase()}<br>`)
// document.write(`2 no value of name ${fullName.slice(1,2)}<br>`)








// Tasks 3 
document.write("<h2> Task 3 </h2>")

var firstNumber = Number(prompt(" Enter Your First Number : "));
var secondNumber = Number(prompt(" Enter Your Second Name : "));

var sum, sub, mul, div, rem;

    sum = firstNumber + secondNumber;
    document.write(`Sum ${firstNumber} + ${secondNumber} = ${sum}<br>`);

    sub = firstNumber - secondNumber;
    document.write(`Sub ${firstNumber} - ${secondNumber} = ${sub}<br>`)

    mul = firstNumber * secondNumber;
    document.write(`Mul ${firstNumber} * ${secondNumber} = ${mul}<br>`)

    div = firstNumber / secondNumber;
    div = div.toFixed(3)
    document.write(`Div ${firstNumber} / ${secondNumber} = ${div }<br>`)

    rem = firstNumber % secondNumber;
    document.write(`rem ${firstNumber} % ${secondNumber} = ${rem}<br>`)