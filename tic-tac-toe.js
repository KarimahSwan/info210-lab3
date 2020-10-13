var initmsg = ("Move your mouse over a square and click to play and X or an O.");
var starter=function(){
    let board=document.getElementById("board").children;
    console.log(board);
    this.boxes(board);
    document.getElementsByClassName("btn")[0].onclick=function(){
        for(let i=0; i<board.length; i++){
            board[i].innerHTML="";
        }
    }
}

window.onload=starter;
function boxes(b){
    document.getElementsByClassName("btn")[0].addEventListener("click",function(){
        for (let i=0; i<b.length; i++){
            [i].innerHTML="";
            let init=document.getElementById("status");
            init.innerHTML=initmsg;
        }
    });

    var xoro = true;
    for (let i=0; i< b.length; i++){
        b[i].classList.add('square');
        b[i].onmouseover = function(){
            b[i].classList.toggle("hover", true);
        }  
        b[i].onmouseout = function(){
            b[i].classList.toggle("hover", false);
        }
        b[i].addEventListener("click",function(){
            if(b[i].innerHTML===""){
                if (xoro === true){
                    b[i].innerHTML = "X";
                    b[i].classList.add("O");
                    xoro=false;
                    gamewinner(b);
                }
                else{
                    b[i].innerHTML = "O";
                    b[i].classList.add("X");
                    xoro=true;
                    gamewinner(b);
                }    
            }
        });
    }
}

function gamewinner(b){
    if(b[0].innerHTML === b[1].innerHTML && b[1].innerHTML ===b[2].innerHTML && b[1].innerHTML!==""){
        document.getElementById("status").className="you-won";
        document.getElementById("status").innerHTML="Congratulations ! " + b[0].innerHTML+ " is the winner";
    }else if(b[0].innerHTML === b[3].innerHTML && b[3].innerHTML ===b[6].innerHTML && b[3].innerHTML!==""){
        document.getElementById("status").className="you-won";
        document.getElementById("status").innerHTML="Congratulations ! " + b[0].innerHTML+ " is the winner";
    }else if(b[0].innerHTML === b[4].innerHTML && b[4].innerHTML ===b[8].innerHTML && b[0].innerHTML!==""){
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
        document.getElementById("status").innerHTML="Congratulations ! " + b[1].innerHTML+ " is the winner";
    }else{
        status.innerHTML = ""
    }
}
