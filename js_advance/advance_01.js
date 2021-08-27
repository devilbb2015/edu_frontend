// HTML4 api
console.log(document.getElementById("text1"));
console.log(document.getElementsByClassName("text2"));
console.log(document.getElementsByTagName("div"));

// HTML5 api
console.log(document.querySelector("#text1"));
console.log(document.querySelector(".text2"));
console.log(document.querySelector("div"));

console.log(document.querySelectorAll(".text2"));
console.log(document.querySelectorAll("div"));

document.getElementById("text1").innerHTML = "Hello World";

const para = document.createElement("p");
const node = document.createTextNode("Hello HTML5");
para.appendChild(node);
document.querySelectorAll(".text2")[0].appendChild(para);

const para1 = document.createElement("p");
const node1 = document.createTextNode("Hello HTML5");
para1.appendChild(node1);
document.querySelectorAll(".text2")[0].appendChild(para1);

let text2Element = document.querySelectorAll(".text2");
for (let i = 0; i < text2Element.length; i++) {
  const p = document.createElement("p");
  const n = document.createTextNode("Hello HTML5");
  p.appendChild(n);
  text2Element[i].appendChild(p);
}

// document.querySelector(".text2").appendChild("<p>Append Node..</p>");

$(function () {
  $(".text2").eq(3).append("<span>Append Jquery Node.</span>");
});
