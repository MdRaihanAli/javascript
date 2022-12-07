
// let buttonL = document.querySelectorAll("button").length;

// for (let i = 0; i < buttonL; i++) {
//     let button = document.querySelectorAll("button")[i];
//     button.addEventListener("click", function (e) {
//         let text = this.innerHTML;
//         console.log(text);
//     })
// }


// Audio play

for (let i = 0; i < 2; i++) {
    let aButoon = document.querySelectorAll("button")[i];
    aButoon.addEventListener("click", function (e) {
        bText = this.innerHTML;
        console.log(bText);
        audioPlay(bText);
        animation(bText);
        keypress()
    });
};
function audioPlay(bText) {
    switch (bText) {
        case "one":
            let audio = new Audio("audio/1.m4a");
            audio.play();
            break;
        case "two":
            let audio2 = new Audio("audio/2.mp3");
            audio2.play();
    }
};

function animation(bText){
    let selecBtn = document.querySelector("."+bText);
    selecBtn.classList.add("anim");

    setTimeout(() => {
        selecBtn.classList.remove("anim");
    }, 2000);
};


document.addEventListener("keypress",function(e){
    let text = e.key;
    if(text == "a"){
        text = "one";
        audioPlay(text);
        animation(text);
    }
    if(text == "b"){
        text = "two";
        audioPlay(text);
        animation(text);
    }
})