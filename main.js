
let   titel=$('.header ')
let trun="X";
let box=[]



function scor(N1 ,N2,N3){
    titel.innerHTML=`${box[N1]} winner`;
    document.getElementById('item'+ N1).style.background= '#000';
    document.getElementById('item'+ N2).style.background= '#000';
    document.getElementById('item'+ N3).style.background= '#000';
    setInterval(function(){ titel.innerHTML +='.'} ,1000);
    setTimeout(function(){ location.reload()},4000);

}








function winner(){
for(let i=1  ; i<10 ; i++){
    box[i] = document.getElementById('item' +i).innerHTML;
if(box[1] == box[2]  && box[2] == box[3] && box[1]!= "")
    {
    scor(1 ,2,3)
}
else if (box[4] == box[5]  && box[5] == box[6] && box[5]!= "")
    {
    scor(4 ,5,6)

}
else if (box[7] == box[8]  && box[8] == box[9] && box[9]!= "")
    {
    scor(7 ,8,9)

}
else if (box[1] == box[4]  && box[4] == box[7] && box[7]!= "")
    {
    scor(1 ,4,7)


}
else if (box[2] == box[5]  && box[5] == box[8] && box[8]!= "")
    {
    scor(2 ,5,8)

}
else if (box[3] == box[6]  && box[6] == box[9] && box[6]!= "")
    {
    scor(3 ,6,9)

}
else if (box[1] == box[5]  && box[5] == box[9] && box[9]!= "")
    {
    scor(1 ,5,9)

}
else if (box[3] == box[5]  && box[5] == box[7] && box[5]!= "")
    {
    scor(3 ,5,7)

}
}
}







function game(id){
 const element=document.getElementById(id)
if (trun === "X" && element.innerHTML ==""){
element.innerHTML ="X";
trun='O';
titel.html("O")
}   
else if( trun === "O" && element.innerHTML =="" ){
    element.innerHTML ="O";
    trun='X';
    titel.html("X")
 }
 winner()
}
