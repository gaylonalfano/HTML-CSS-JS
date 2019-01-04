// Write our JavaScript in here
// alert("Hello from APP.JS!")
var pics = [
  "imgs/Boys1.jpg",
  "imgs/Boys2.jpg",
  "imgs/Boys3.jpg",
  "imgs/Boys4.jpg",
  "imgs/Boys5.jpg"
]

// Select the first button tag
var btn = document.querySelector("button");
// Select the image tag
var img = document.querySelector("img");
// Counter var to loop through pics array
var counter = 1

// Determine if button is clicked
btn.addEventListener("click", function () {
  // alert(img.src)
  // img.src = "imgs/Boys2.jpg" OR img.src = pics[1] OR img.src = pics[counter]
  if (counter === 5) {
    counter = 0;
  }
  img.src = pics[counter]
  counter = counter + 1;
});