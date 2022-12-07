let img = document.getElementById("img");

function pic1(){
    img.src = "img/pic1.jpg"
}
function pic2(){
    img.src = "img/pic2.jpg"
}

// addEventListener
let btnThree = document.getElementById("pic3");
btnThree.addEventListener("click", pic3)
let btnFour = document.getElementById("pic4");
btnFour.addEventListener("click", pic4)



function pic3(){
    img.src = "img/pic3.jpg"
}
function pic4(){
    img.src = "img/pic4.jpg"
}


// createElement

let main = document.getElementById("main");
function newElement(){
    let newElement = document.createElement("h1");
    let newText = document.createTextNode(prompt("Enter Your Name : "));
    newElement.appendChild(newText);
    main.appendChild(newElement)
}


// slider
let imgs = ["img/pic1.jpg","img/pic2.jpg","img/pic3.jpg","img/pic4.jpg"]
let img1 = document.getElementById("img1");
let count =0;

function next(){
    count++;
    if(count>=imgs.length){
        count=0;
        img1.src = imgs[count];
    }else{
        img1.src = imgs[count];
    }
}

function prev(){
    count--;
    if(count<0){
        count=imgs.length-1;
        img1.src = imgs[count];
    }else{
        img1.src = imgs[count];
    }

}

function okey(){
    let okey = document.getElementById("okey");
    okey.classList.toggle("ok");
}



