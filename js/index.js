// Your code goes here
const logo = document.querySelector(".logo-heading");

logo.addEventListener("mouseover", function(event) {
  event.target.style.color = "#A00123";
});
logo.addEventListener("mouseout", function(event) {
  event.target.style.color = "#000000";
});

const bodySelector = document.querySelector("body");

const homeBtn = document.querySelector(".nav-link");

homeBtn.addEventListener("click", function() {
  const imageSource =
    "http://tracieberrymcghee.com/wp-content/uploads/2016/07/no.jpg";
  bodySelector.style.background = `url(${imageSource})`;
});

homeBtn.addEventListener("dblclick", function() {
  bodySelector.style.background = "none";
});

const subHeader = document.querySelector(".sub-header");

const p = document.createElement("p");
subHeader.prepend(p);
const p2 = document.createElement("p");
subHeader.appendChild(p2);
const p3 = document.createElement("p");
subHeader.appendChild(p3);
p3.textContent = "Mouse Position:";
const p4 = document.createElement("p");
subHeader.appendChild(p4);

bodySelector.addEventListener("keydown", function(event) {
  p.textContent = `The last key you pressed was the ${event.key} key.`;
});

const buttons = document.querySelectorAll(".btn");

buttons.forEach(element => {
  element.addEventListener("mousedown", function(event) {
    event.target.classList.add("big-btn");
  });
});

buttons.forEach(element => {
  element.addEventListener("mouseup", function(event) {
    event.target.classList.remove("big-btn");
  });
});

const funTitle = document.querySelector(".destination h4");

const funBlurb = document.querySelector(".destination p");

funTitle.addEventListener("mouseenter", function(e) {
  e.target.style.display = "none";
});

funBlurb.addEventListener("contextmenu", function() {
  funTitle.style.display = "";
});

const section = document.querySelector(".content-pick");
console.log(section);

section.addEventListener("click", function(e) {
  e.stopPropagation();
  p2.textContent = `You clicked in the content section!`;
});

bodySelector.addEventListener("click", function() {
  p2.textContent = "You didn't click in the content section!";
});

bodySelector.addEventListener("mousemove", function(e) {
  p4.textContent = `X: ${e.pageX} Y: ${e.pageY}`;
});
