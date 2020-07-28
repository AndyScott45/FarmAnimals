const animals=['lion', 'Hyena', 'Elephant', 'Shark', 'Eagle', 'Snake', 'Cat', 'Dog', 'Rabbit', 'Sheep'];// array containing the animal names
const para=document.querySelector('.mango');// targets the p element
const input=document.querySelector('input');//targets the input textfield
const btn=document.querySelector('button');// targets the button


btn.onclick=function(){ // adds an onclick event listener to the btn element
const choice=input.value.toLowerCase(); // stores reference to the input text field in lowercase in a constant called choice

if (choice===animals[0].toLowerCase()){ // adds a conditional to determine if choice is equivalent to first animal name then run the code below
window.open("file:///C:/Users/user/Desktop/Animal%20farm/lions.html", "_blank");
} else if (choice === animals[1].toLowerCase()) { // if choice is equivalent to the second animal name, run the code below
window.open ("http://programminghead.com");
} else{ // if it is not equivalent to any of the above run the code below
// window.open("https://github.com/"); loads new content in the same window
window.location.href="https://github.com/"; // loads new content in a new tab
}
}
