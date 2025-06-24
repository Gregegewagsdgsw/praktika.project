
let arrowStates = [0,0,0]
let arrows = document.querySelectorAll(".span");
for(let i = 0; i < arrows.length; i++){
    arrows[i].addEventListener("click", function(){
        if(arrowStates[i] == 0){
            arrows[i].style.transform = "rotate(180deg) translate(0,-35px)";
            arrowStates[i] = 1;
        }
        else{
            arrows[i].style.transform = "rotate(0deg) translate(0,-35px)";
            arrowStates[i] = 0;
        }
    })
}