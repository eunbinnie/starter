let myName = "EUNBIN";
let email = 'dlatldhks8@naver.com';
let hello = `Hello ${myName}?!`;

console.log(myName);
console.log(email);
console.log(hello);

let user = {
  name: 'EUNBIN',
  age: 24
};

console.log(user);
console.log(user.age);    // 24
console.log(user.name);   // EUNBIN

function sum(a, b) {
  return a + b;
}

let a = sum(1, 2);
let b = sum(7, 12);
let c = sum(2, 4);

console.log(a, b, c);

const heropy = {
  name: 'HEROPY',
  age: 85,
  getName: function () {
    return this.name;
  }
};

const hisName = heropy.getName();
console.log(hisName);   //HEROPY
console.log(heropy.getName());  //HEROPY

let isShow = true;
let checked = false;

if (isShow) {
  console.log('Show!');   // 출력
}

if (checked) {
  console.log("Checked!");
}