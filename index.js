var N=Math.floor(Math.random()*6)+1;
var randomimage="dice"+ N +".png";
var randomimagesource="images/"+ randomimage;

var M=Math.floor(Math.random()*6)+1;
var randomimage1="dice"+ M +".png";
var randomimagesource1="images/"+ randomimage1;

document.querySelector("img.img1").setAttribute("src",randomimagesource);
document.querySelector("img.img2").setAttribute("src",randomimagesource1);


if(randomimagesource===randomimagesource1){
    document.querySelector("h1").innerHTML="DRAW";
}else if(randomimagesource>randomimagesource1){
    document.querySelector("h1").innerHTML="Player1 wins";
}else{
    document.querySelector("h1").innerHTML="Player2 wins";
}