// do while loop
// let i = 0;
// let sum = 0;
// do{
//     sum = sum + i;
//     console.log(sum);
//      i++;
// }while(i<=10)


// ternary oparator
// let num = 0;
// let result = num == 0 ? "Zero" : "not Zero"
// console.log(result);

// let latar = prompt("Enter a later : ").toLocaleLowerCase();
// let result = latar=="a" ? "Vowel":latar=="e" ? "Vowel":latar=="i" ? "Vowel":latar=="o" ? "Vowel":latar=="u" ? "Vowel": "Consonant";
// console.log(result);


// Break and continue use
// let sum =0;
// for (let i = 0; i <=10 ; i++) {
//     if (i%2 !=0) {
//         continue;
//     }
//     console.log(i);
// }


// function use
// function name(){
//     console.log("Md Raihan Ali");
// }
// name();


// let fNum = Number(prompt("First Number : "))
// let sNum = Number(prompt("Second Number : "))
// function sum(num1,num2){
//     let result = num1+num2;
//     console.log(result);
// }
// sum(fNum,sNum);


// if make a house 5000 bricks required for  one room on first floors/ secon floor 3500
let fRoom = Number(prompt("First floor room number : "));
let sRoom = Number(prompt("Second floor room number : "));

function bricksCal(x,y){
    if(x<y){
        return ("Not possible");
    }else{
      let fReq = x*5000;
      let sReq = y*3500;
      let total = fReq+sReq;
      return total;
    }
}
let totalBrick = bricksCal(fRoom,sRoom)
console.log(totalBrick);