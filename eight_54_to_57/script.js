// location
// console.log(location);
// console.log(location.protocol);
// console.log(location.port);
// console.log(location.href);
// console.log(location.hostname);

// let loca = document.getElementById('location');
// loca.children[0].textContent = location.protocol;
// loca.children[1].textContent = location.hostname;
// loca.children[2].textContent = location.pathname;


// alert confirm prompt
// alert('ok')

// let con = confirm('you')

// function checkConfirm(con){
//     if (con) {
//         console.log(con);
//     }else{
//         console.log(con);
//     }
// }
// checkConfirm(con)

// let pom =  prompt('Enter your name: ')
// console.log(pom);
// if( pom=null || pom ==""){
//     console.log('no name');
// }else{
//     console.log('Wellcome ');
// }


// // setTimeout
// function myName(){
//     document.write('<h1>Raihan</h1>')
// }

// // myName()
// setTimeout(myName , 5000);

// // setInterval
// setInterval(myName,1000)

let hoursId = document.getElementById('hour');
let minId = document.getElementById('minutes');
let secondsId = document.getElementById('seconds');
let timeId = document.getElementById('timeAll')



function time() {
    
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(seconds<10){
        seconds = '0'+seconds;
        secondsId.innerHTML = seconds;
    }else{
        secondsId.innerHTML = seconds;
    }
    if(minutes<10){
        minutes = '0'+minutes;
        minId.innerHTML = minutes +':';
    }else{
        minId.innerHTML = minutes+ ':';
    }

    hoursId.innerHTML = hours +':';
    
    let timeAll = hours + ':' + minutes + ':' + seconds;
    timeId.textContent=timeAll;
    
}
setInterval(time, 1000);
