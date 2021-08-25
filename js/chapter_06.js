// Scope

// Global Scope (전역 범위)

let name = "tom";

function sumPrint() {
  // function Scope (함수 범위)
  let sum = 0;

  for (let i = 0; i < 3; i++) {
    // block scope (블럭 범위)
    let msg = "";
    console.log(name);
    console.log(sum);
    console.log(msg);
  }

  // 함수 범위
  console.log(name);
  console.log(sum);
  // console.log(msg);
}

// 전역 범위
console.log(name);
//console.log(sum);
//console.log(msg);

// var : Global Scope, Function Scope 만 적용 가능

// this
let person = {
  name: "Jack",
  print: function () {
    console.log(this.name);
    console.log(this);
  }
};

person.print();
console.log(person);

console.log(this);

let x = this;
// x.alert("msg");

function type() {
  console.log(this);
}

type();

// alert(msg);
