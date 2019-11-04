// Your code goes here

// 1.Adding transition effect on the bus image Using mouseover

const BusImage =document.querySelector('#img1');
BusImage.addEventListener("mouseover", ()=>{
    BusImage.style.transform="scale(1.2)";
    BusImage.style.transition= "all 0.3s";
})

//2 .Remvoing the effect using mouseleave

BusImage.addEventListener("mouseleave", ()=> {
    BusImage.style.transform="scale(1)";
    BusImage.style.transition="all 0.3s";

})

// 3.Adding color effects to the buttons using mouseenter

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


 //  5.Changing the color of the body using wheel event

 const bodyOfPage = document.querySelector('body');
 bodyOfPage.addEventListener("wheel", e=>{
    e.target.style.backgroundColor="teal";
 });

 //6.Changing the header of the content section using mousemove

 const textHeaders= document.querySelectorAll ('.text-content h2');
 textHeaders.forEach(e => {
  e.addEventListener('mousemove', () => {
   e.style.color = 'white';
  });
});

//7. Adding a alert box using a load event 

window.addEventListener('load', () => {
  alert('Get 10% off on your first trip and another 10% on you first referral');
});

// 8 . Adding an alert box using a click event 

const alertButton = document.querySelectorAll ('.btn')
alertButton.forEach(button=>{
  button.addEventListener("click", ()=> {
  alert ("great Choice");
});
});


// 9. Adding a resize event
window.addEventListener('resize', () => {
    alert('you have resized the window');
});


//10. copy event 
const copyText = document.querySelectorAll("p");
copyText.forEach(para => {
  para.addEventListener("copy", () => {
    alert(`Please don't copy the content here!`);
  });
});


const navElements = document.querySelectorAll(".nav-link");

navElements.forEach(e => {
  e.addEventListener("click", e => {
    e.preventDefault();
  });
});









