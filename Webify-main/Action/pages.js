const rest=document.getElementById("rest");
const wind=document.getElementById("window");
const button1=document.getElementById("button");
button1.onclick=function() {open()};
const button2=document.getElementById("close");
button2.onclick=function() {close()};

function close(){
    rest.style.display="block";
    wind.style.display="none";
}

function open(){
    rest.style.display="none";
    wind.style.display="block";
}