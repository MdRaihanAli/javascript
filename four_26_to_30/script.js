// // Create a arry
// let names = ["raihan", "mohammod","roni","shadhin","esha","akash"];
// let name1 = ["rohim","korim","majed"]
// let raju = "raihan";
// console.log(names);
// console.log(name1[1]);
// console.log(name1.length);

// names.push("raju");
// console.log(names);

// names.pop();
// console.log(names);

// names.shift()
// console.log(names);

// names.unshift("raju","manik")
// console.log(names);

// names.splice(1,2,"okey");
// console.log(names);

// let name = names.slice(1,3);
// console.log(name);

// let nam = names.sort();
// nam.reverse()
// console.log(nam);


// // Arry with loop
// for(let i =0; i<name1.length; i++){
//     names.push(name1[i]) 
// };

// for(let i =0; i<names.length; i++){
//     let sName = names[i];
//     console.log(sName);
// }


// // task 8
// let number = [10,65,92,35,64,45,12,32,25,42,]
// function highestScore(e) {
//     let max = 0;
//     for(let i=0; i<e.length; i++ ){
//         if(max<e[i]){
//             max = e[i]
//         }
//     }
//     console.log(max);
// }
// highestScore(number);


// Object
// let friend1 = {
//     name : "manik",
//     age : 25,
//     phone : 0172,
// }

// console.log(friend1);
// console.log(friend1.phone);

// function Friend(name,age,phone){
//     this.name = name;
//     this.age = age;
//     this.phone = phone;

//     this.Display = function(e){
//         console.log(name);
//         console.log(phone);
//     }
// }
// let manik = new Friend("manki",25,017674);
// let saju = new Friend("saju",20,017674);
// manik.Display();
// saju.Display();


// 2D Array
let plears = [ 
    ["sakib", 17],
    ["masrafi", 70],
    ["tamim", 30],
    ["momin", 40],
]
let maxer = plears[0][1];
let count = []
for(let i = 0; i<plears.length; i++){
    if(maxer<plears[i][1]){
        maxer = plears[i][0];  
    }
    
}
console.log(maxer);
