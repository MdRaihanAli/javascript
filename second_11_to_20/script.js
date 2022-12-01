// let number = Number(prompt("Enter a number 0 to 100 : "));

// if (number<0 || number >100) {
//     console.log("Enter valid number");
    
// }
// else if (number>=80 && number <=100 ) {
//     console.log("A+");
// } 
// else if (number>=70 && number <=79 ) {
//     console.log("A");
// } 
// else if (number>=60 && number <=69 ) {
//     console.log("A-");
// } 
// else if (number>=50 && number <=59 ) {
//     console.log("B");
// } 
// else if (number>=40 && number <=49 ) {
//     console.log("C");
// } 
// else if (number>=33 && number <=39 ) {
//     console.log("D");
// } 
// else {
//     console.log("F");
// }


// find maximum

// let num1 = Number(prompt("enter number"));
// let num2 = Number(prompt("enter number"));
// let num3 = Number(prompt("enter number"));
// let max;
// if(num1>num2 && num1>num3){
//      max = num1;
// }
// else if (num2>num1 && num2>num3 ){
//     max = num2
// }else{
//     max = num3;
// }
// console.log("max is : " + max);


// task 5
// let later = prompt("Enter a later").toLowerCase("A")
// switch(later){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("Vowel");
//         break;
//     default:
//         console.log("Consonent");
// }


// For  loop
// for(let i = 0; i<10; i++){
//     console.log(i);
// }


// for (let i = 0; i <= 10; i++) {
//      console.log("2" +"*"+ i + "="+ i*2 );
// }


// while loop
// let i = 0;
// let sum = 0;
// while (i<=10) {
//      sum = sum+i;
//      i++
// }
// console.log(sum);



// task
// get a phone number defined which operator number is wrong or right
let num = prompt("ente 11 desit number : ")
let numLength = num.length;
let opFi = num.slice(0,3)
console.log(opFi);


if(numLength==11 ){
     if(opFi=="019"){
          console.log("banglalink");
     }
     else if(opFi=="018"){
          console.log("robi");
     }
     else if(opFi=="017"){
          console.log("grammen");
     }
     else{
          console.log("not operator");
     }
}else{
     console.log(" valid number");
}