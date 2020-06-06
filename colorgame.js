var numsquares=6
var colors=generaterandomcolors(numsquares);
var squares=document.querySelectorAll(".square")
var colordisplay=document.getElementById("colordisplay")
var picked=colors[pickcolor()];
var msg=document.querySelector("#message")
colordisplay.textContent=picked
var h1=document.querySelector("h1")
var resetbutton=document.querySelector("#reset")
var modebuttons=document.querySelectorAll(".mode")

for(var i=0;i<modebuttons.length;i++)
{
    modebuttons[i].addEventListener("click",function(){
    modebuttons[0].classList.remove("selected")
    modebuttons[1].classList.remove("selected")

    this.classList.add("selected")
    if(this.textContent==="easy")
    numsquares=3
    else
    numsquares=6
    reset(); 
    })
}

function reset()
{
    colors=generaterandomcolors(numsquares);
    //change h1
    picked=colors[pickcolor()];
    colordisplay.textContent=picked
    resetbutton.textContent="new colors"
    h1.style.background="steelblue"
    resetbutton.textContent="new colors"
    msg.textContent=""
    //chande colors of sauares
    for(var i=0;i<squares.length;i++)
{
    if(colors[i])
    {
    squares[i].style.display="block"
    squares[i].style.background = colors[i];
    }
    else
    squares[i].style.display="none"


}


}

resetbutton.addEventListener("click",function(){
    reset();

}
)

for(var i=0;i<squares.length;i++)
{
    // adding colors
    squares[i].style.background = colors[i];
    //adding click eventlistner
    squares[i].addEventListener("click", function(){
      var clicked= this.style.background;
      if(clicked===picked)
       {
         msg.textContent="correct!!"
         changecolor(clicked)
         h1.style.background=clicked
         resetbutton.textContent="play again ?"
       }
     else
       {
           this.style.background="black";
           msg.textContent="try again"
       }
    })
}
function changecolor(color){
//loop through all squares
 for(var i=0;i<squares.length;i++)
 {
     squares[i].style.background=color
 }

}

function pickcolor()
{
   return (Math.floor(Math.random()*colors.length));

}
function generaterandomcolors(num)
{
    var arr=[]
    //add random colors to array
    for(var i=0;i<num;i++)
    {
        arr[i]=randomcolor();
    }
    return arr;
}
function randomcolor(){
    //a red from 0-255
    var r=Math.floor(Math.random()*256)
    // a green 
    var g=Math.floor(Math.random()*256)
    //a blue
    var b=Math.floor(Math.random()*256)
    return ("rgb(" + r + ", " + g + ", " + b + ")")  //important

}