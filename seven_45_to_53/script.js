// // Dom
// let input1 = document.getElementById("input1");
// input1.addEventListener("change",function(e){
//     console.log(e.target.value);
// })

// let form = document.querySelector("form");
// let name = form.querySelector('#name')
// let email = form.querySelector('#email')
// let pass = form.querySelector('#pass');
// let submit = form.querySelector('#submit');

// form.addEventListener('submit',function(e){
//     e.preventDefault()
//     let information = {
//         name: name.value,
//         email: email.value,
//         pass: pass.value,
//     }
//     console.log(information);
// })


// let buttons = document.querySelectorAll("button");
// Array.from(buttons).map((button)=>{
//     button.addEventListener('click',function(e){
//         let text = this.innerHTML;
//         console.log(text);
//     })
// })

// document.addEventListener('mousedown',function(e){
//     console.log("mouseDown");
// })


let main = document.getElementById('main');
let p = document.getElementById('p');

p.addEventListener('dragstart',function(e){
    e.dataTransfer.setData('name',e.target.id);
})
main.addEventListener('dragover',function(e){
    e.preventDefault();
});
main.addEventListener('drop',function(e){
    let id = e.dataTransfer.getData('name');
    console.log(id);
    main.appendChild(document.getElementById(id));
    
})

// console.log(namee);











