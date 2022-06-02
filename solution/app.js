// console.log(`*****JS-CC-001 : Reverse Words*****`);

// const person = ["ali", "veli", "deli"];
// console.log(person);
// person[3] = "haydar";
// console.log(person);
// const cars = new Array("ali", "veli", "deli");
// console.log(cars);

// let a = person.join();
// console.log(a);

// let b = person.pop();
// console.log(b);
// console.log(person);

// let c = person.pop();
// console.log(c);
// console.log(person);

// let d = person.toString();
// console.log(d);
// console.log(person);

// console.log(object);

// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text1);
// console.log(text2);

// let text = "merhaba";
// let padded = text.padStart(15, "*");
// console.log(text);
// console.log(padded);

// let s = "Bayram Emre";

// console.log(s[0]);

// console.log(s.charAt(3));

// let text = "Clarusway Front-end development course";

// const myArray = text.split("");
// console.log(myArray);

function wordReverse(word) {
  let name = word.split("");
  let reversed = name.reverse();
  let string = reversed.join("");
  return string;
}

console.log(wordReverse("Clarusway"));

function wordReversee(word) {
  let reversed = word.split("").reverse().join("");
  return reversed;
}

console.log(wordReversee("Full Stack"));
