const romantic_comedy=document.getElementById("romantic_comedy");
const thrilling=document.getElementById("thrilling");
const animation=document.getElementById("animation");
const action=document.getElementById("action");

const horror=document.getElementById("horror");
const ids=[horror,romantic_comedy,thrilling,animation,action];

function margining(position){
    let width=innerWidth*0.08;
    for(let i=0;i<position;i++)
       {
        width +=(ids[i].offsetWidth)+(innerWidth *0.04);
        console.log(ids[i].offsetWidth+" "+i);
      }
    const element=(ids[position]);
      element.style.marginLeft=width+"px";
      element.style.marginTop="-"+(ids[position-1].offsetHeight)+"px";
}
margining(ids.indexOf(romantic_comedy));
margining(ids.indexOf(thrilling));
margining(ids.indexOf(animation));

for(let i=0;i<5;i++){
  ids[i].onclick=function() {clicked(i)};
}
  window.onresize=function() {refresh(0)};
function resize(){
  location.reload();
}

function clicked(position){
  const aa=ids[position].children[0];
  window.open(aa.href,"_self");
}
