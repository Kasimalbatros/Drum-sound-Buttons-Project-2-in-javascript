var numberofdrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberofdrums;i++){
    document.querySelectorAll("button")[i].addEventListener("click",a);
function a(){
    alert("I got Clicked!");
}
}