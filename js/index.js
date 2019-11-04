// Your code goes here

// 1.Adding image transition effect on the bus image Using mouseover

const BusImage =document.getElementById('bus');
BusImage.addEventListener("mouseenter", ()=>{
    BusImage.style.transform="scale(1.2)";
    BusImage.style.transition= "all 0.3s";
})

//2 .Remvoing the effect when the mouse hovers over the image

BusImage.addEventListener("mouseleave", ()=> {
    BusImage.style.transfrom="scale(1)";
    BusImage.style.transition="all 0.3s";

})

// 3.Adding color effects to the buttons 

const buttonColor = document.getElementsByClassName("btn");
buttonColor[0].addEventListener("mouseenter", e => {
  e.target.style.color = "yellow";
  e.target.style.backgroundColor = "purple";
});

buttonColor[1].addEventListener("mouseenter", e => {
  e.target.style.color = "red";
  e.target.style.backgroundColor = "black";
});

buttonColor[2].addEventListener("mouseenter", e => {
  e.target.style.color = "black";
  e.target.style.backgroundColor = "white";
});

// 4. Adding font styles to the buttons with mouseleave

buttonColor[0].addEventListener("mouseleave",e=>{
    e.target.style.fontFamily="Comic Sans Ms";
});
buttonColor[1].addEventListener("mouseleave",e=>{
    e.target.style.fontFamily="Comic Sans Ms";
});
buttonColor[2].addEventListener("mouseleave",e=>{
    e.target.style.fontFamily="Comic Sans Ms";
});


 5.// Changing the color of the body background on double click

 const bodyOfPage = document.querySelector('body');
 bodyOfPage.addEventListener("dblclick", e=>{
    e.target.style.backgroundColor="teal";
 });

 





