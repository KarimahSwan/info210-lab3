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
            gamewinner(b);
        }
        else{
            xoro='X';
            b[i].innerHTML = xoro;
            b[i].classList.add("X");
            gamewinner(b);
        }
    });
    }


    function gamewinner(b){
        if(b[0].innerHTML === b[1].innerHTML && b[1].innerHTML ===b[2].innerHTML && b[1].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[0].innerHTML+ " is the winner";
        }else if(b[0].innerHTML === b[3].innerHTML && b[3].innerHTML ===b[6].innerHTML && b[3].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[0].innerHTML+ " is the winner";
        }else if(b[0].innerHTML === b[0].innerHTML && b[0].innerHTML ===b[4].innerHTML && b[8].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[0].innerHTML+ " is the winner";
        }else if(b[2].innerHTML === b[5].innerHTML && b[5].innerHTML ===b[8].innerHTML && b[2].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[2].innerHTML+ " is the winner";
        }else if(b[2].innerHTML === b[4].innerHTML && b[4].innerHTML ===b[6].innerHTML && b[2].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[2].innerHTML+ " is the winner";
        }else if(b[3].innerHTML === b[4].innerHTML && b[4].innerHTML ===b[5].innerHTML && b[3].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[3].innerHTML+ " is the winner";
        }else if(b[6].innerHTML === b[7].innerHTML && b[7].innerHTML ===b[8].innerHTML && b[6].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[6].innerHTML+ " is the winner";
        }else if(b[1].innerHTML === b[4].innerHTML && b[4].innerHTML ===b[7].innerHTML && b[1].innerHTML!==""){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML="Congratulations ! " + b[0].innerHTML+ " is the winner";
        }
    }
}