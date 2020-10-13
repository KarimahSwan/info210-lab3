var starter=function(){
    let board=document.getElementById("board").children;
    console.log(board);
    this.boxes(board);
}
window.onload=starter;
function boxes(b){
    var xoro ="O";
    for (let i=0; i< b.length; i++){
        b[i].classList.add('square');
        b[i].onmouseover = function(){
            b[i].classList.toggle("hover", true);
        }   
        b[i].onmouseout = function(){
            b[i].classList.toggle("hover", false);
        }
    b[i].addEventListener("click",function(){
        if(xoro === 'X'){
            xoro='O';
            b[i].innerHTML = xoro;
            b[i].classList.add("O");
        }
        else{
            xoro='X';
            b[i].innerHTML = xoro;
            b[i].classList.add("X");
        }
    });
    }
}