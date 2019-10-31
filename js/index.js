// Your code goes here
const introBG = document.querySelector(".intro");
introBG.addEventListener("dblclick", () => {
  introBG.style.background = "SteelBlue ";
});

document.querySelectorAll(".content-section").forEach(el => {
  el.addEventListener("mouseover", () => {
    el.style.background = "SteelBlue ";
  });
});

document.querySelectorAll("h2").forEach(el => {
  el.addEventListener("mousemove", () => {
    el.style.color = "Khaki";
    el.style.fontSize = "4.5rem";
  });
});

document.querySelectorAll(".img-content").forEach(el => {
  el.addEventListener("drag", () => {
    el.parentNode.removeChild(el);
  });
});

document.querySelectorAll("p").forEach(el => {
  el.addEventListener("wheel", () => {
    el.style.color = "#39ff14";
  });
});

const el = document.querySelector(".nav");
el.addEventListener("click", event => {
  el.preventDefault();
});

document.querySelector(".nav");
el.addEventListener("mouseenter", () => {
  el.style.transform = "scale(1.4)";
  el.style.transition = "all 0.5s";
});

document.querySelector(".nav");
el.addEventListener("mouseleave", () => {
  el.style.transform = "scale(1)";
  el.style.transition = "all 0.5s";
});

const last = document.querySelector("footer");
last.addEventListener("mousedown", () => {
  last.style.background = "#39ff14";
});
