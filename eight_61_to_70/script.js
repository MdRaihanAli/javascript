// try catch
// alert('one')
// console.log(e);
// alert('two');

// try {
//     alert('one')
//     alert(err)
//     alert('two err')
// } catch (error) {
//     console.log(error);
// }finally{
//     console.log('Md Raihan Ali');
// }

// let name = prompt('Enter your name')
// try{
//     if(name== null || name == ''){
//         throw "no name found"
//     }else{
//         throw 'wellcome'
//     }
// }catch(error){
//     console.log(error)
// }finally{
//     console.log(name);
// }


// Es_6 function
// let nameRaju = ()=>{
//  console.log('Md Raju Ahmed');
// }

// nameRaju();

// Default and rest pramiter;
// let addition = (x=2,y=2)=>{
//     let sum = x+y;
//     console.log(sum);
// }
// addition()

// let num = [10,20]

// let addition = (x,y,...z)=>{
//     // let sum = x+y;
//     console.log(`${x} ${y} z= ${z}`);
//     console.log(x+y+z);
// }
// addition(10,20,30)

// let number = [10,20,30]

// let sum = (x,y,z)=>{
//     console.log(x+y+z);
// }
// sum(...number)


// let num1 = [10,20,30];
// let num2 = [40,50,60];

// // let num = num1.concat(num2);
// let num = [...num1,...num2]
// console.log(num);


// let student4= {
//     name : "Raihan",
//     roll:25,
// }
// let student2 = {
//     name : "Esha",
//     roll:10,
// }
// let student = {...student4,...student2}

// console.log(student);



// let name = ['raju','manik','esha'];
// for (const nam of name) {
//     console.log(nam);
// }

// let numbers = [10,20,3,5];
// let sqr=[];

// for(number of numbers){
//     sqr.push(number*number);
// }

// console.log(sqr);

// let raju = {
//     vill : " Nawabganj",
//     div:" Rajshahi"
// }

// for(let raj in raju){
//     console.log(raj +raju[raj]);
// }


// let p = document.querySelectorAll('p');
// // console.log(p);
// for(let x of p){
//     console.log(x);
// }


// foreach
// numbers.forEach((z)=> sqr.push(z*z))
// console.log(sqr);

// let raju = (z)=>{
//     sqr.push(z*z)
// }
// numbers.forEach(raju);
// console.log(sqr);