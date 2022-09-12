import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Let , Var scope</h1>
<div>
 
</div>
`;

/*
 let :- let having an "block{},function scope"  that why inside function 
         if declare same variable so its not override value 
 
         let variable, it will have it's OWN scope (OWN Memory location). IT will NOT update the parent variable. Because let and cost are block scoped.

 var :- Var having "global function scope "  that means if its declare
         inside function this not accessible outside that function 
        
         but inside same function if we call same var so then this
         override value because its not having Block scope 

 this :- This will refer to global scope (window).so it takes only for var because it having global scope 
          let,const don't have global scope so it taken as undefined
          Ex :-  let  a = undefined, var b = 50       

         */

let a = 10;
var b = 50;
console.log(a, b); //10 50

function fn() {
  //function

  //console.log(this.a, this.b); //This will refer to global scope (window). a = undefined, b = 2
  //console.log(this);
  console.log(window.a, window.b); //undefined undefinedd
  let a = 15;
  var b = 10;

  {
    //block scope
    let a = 25;
    var b = 20;

    console.log(a, b); //25 20
  }
  console.log(a, b); //15 20
}
fn();
document.getElementById(
  "p"
).innerHTML = `<h1>Implicit /Explicit </h1 <h4>Implicit :- Automatically change data type just like in concat when we use (- / *) on number and String 
</br></br> Ex:- a=10  b="5" 
</br> a-b  </br> : so here b value as a String but string doesn't support - / * so its automatically try to convert into number </h4>

<h4>Explicit :- so in this we manually change data type 
</br></br>
Ex:- const a="1234" </br>
a=number(a) //This will convert to a Number </br> :So in this we take a as string but we manually convert its data type as number by assign number(variable name) </h4>
`;

let s = "1234";
console.log(s); //1234
console.log(typeof s); //String

s = Number(s); //This will convert to a Number
console.log(typeof s, s); //This HAS to be number

//convert string datatype into number so,its Number data type but not contain valid value so its shown NaN
let s1 = "abcdfgrhtyuu";
s1 = Number(s1);
console.log(typeof s1, s1); //number NaN

//Why no concatenation -> undefined has a lower priority than Number datatype. It will convert to Number, but since it cannot be, it will be NaN
let u = undefined + 1;
console.log(u); //NaN

//Concatenation because conacat take string,number so string present concat it
let u1 = undefined + "1";
console.log(u1); //undefined1

console.log(undefined + undefined); //NaN

let abc = NaN;
console.log(abc == NaN); //False
console.log(NaN == NaN); //False
console.log(isNaN(abc)); //True

let v1 = "abc"; //When converted into number, this will give NaN
let v2 = "xyz"; //When converted into number, this will give NaN
console.log(v1 == v2); //false
console.log(Number(v1) == Number(v2)); //false

let x = "12345abcde";
let y = "abcd12345";
let z = "123abcd456";
console.log(x); //12345abcde
console.log(Number(x)); //NaN
console.log(parseInt(x)); //12345
console.log(parseInt(y)); //NaN
console.log(parseInt(z)); //123


//Program :- To get repeat value only once from array

const arr = [25, 26, 26, 26, 27, 27, 27, 28, 29, 29, 30, 30, 31, 32, 33, 33];

//1) Using filter
const unique_arr = arr.filter((e, i, origional_arr) => {
  if (origional_arr.lastIndexOf(e) !== i) return false;
  else return true;
});
console.log(unique_arr);


//2) Using Map
const unique_arr1 = arr.map((e, i, origional_arr) => {
  if (origional_arr.lastIndexOf(e) !== i) {
    return undefined;
  } else {
    return e;
  }
});
console.log(unique_arr1);
