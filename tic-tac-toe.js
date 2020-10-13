var starter=function(){
    let board=document.getElementById("board").children;
    console.log(board);
    this.boxes(board);
}
window.onload=starter;
function boxes(b){
    for (let i=0; i< b.length; i++){
        b[i].classList.add('square');
    }
}